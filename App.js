import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SisApi from "./api";

export default function App() {
  const [upcomingUrls, setUpcomingUrls] = useState([]);
  const [upcomingDetails, setUpcomingDetails] = useState([])

  useEffect(function getUpcomingOnMount() {
    async function getUpcomingUrlsFromApi() {
      try {
        const lecturesessions = await SisApi.getPublishedLecturesUrls();
        const exercises = await SisApi.getPublishedExercisesUrls();
        const events = await SisApi.getPublishedEventsUrls();
        console.log({lecturesessions})
        const lectures = lecturesessions.map(lecturesession => SisApi.retrieveLabSessions(lecturesession))
        console.log({lectures});
        console.log({exercises});
        console.log({events});
        setUpcomingUrls([...lectures, ...exercises, ...events]);
      } catch (err) {
        console.log({err});
      }
    }
    getUpcomingUrlsFromApi();
  }, []);

  useEffect(function getUpcomingDetailsonMount(){
    async function getUpcomingDetails(){
      try {
        const results = await SisApi.getPublishedDetails(upcomingUrls)
        console.log({results})
        setUpcomingDetails(results)
      }catch (err){
        console.log(err)
      }
      
    }
    getUpcomingDetails();
  }, [upcomingUrls])
// create function to check if session is upcoming or past
// filter urls by date and make api call, pass in times to above function
// create main list organized by date, loop through and show info


  return (
    <View style={styles.container}>
      <Text> - Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
