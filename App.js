import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SisApi from "./api";
import { convertDateAndTime } from './utils';


import Row from "./Row";
import RowHeader from "./RowHeader";
import PageTitle from "./PageTitle";
import Banner from './Banner';

export default function App() {
  const [upcoming, setUpcoming] = useState(null);
  const [cohort, setCohort] = useState(null);

  useEffect(function getUpcomingOnMount() {
    async function getUpcomingUrlsFromApi() {
      try {
        const upcomingResults = await SisApi.getUpcoming();
        setUpcoming(upcomingResults);
      } catch (err) {
        console.log({ err });
      }
    }
    getUpcomingUrlsFromApi();
  }, []);

  useEffect(function getCohortOnChange() {
      if (upcoming) {
        const temp = upcoming[0].cohort
        const tempArray = temp.split('/')
        const neededCohort = tempArray[tempArray.length - 2];
        console.log({neededCohort});
        setCohort(neededCohort);
    }
  }, [upcoming]);


  return (
    <SafeAreaView style={styles.container}>
      {cohort && <Banner cohort={cohort}/>}
      {cohort && <PageTitle cohort={cohort}/>}
      <RowHeader
        title='Title'
        description='Description'
        start_at='Start Time'
      />
      {upcoming && upcoming.map(u =>
        <Row
          title={u.title}
          description={u.description}
          start_at={convertDateAndTime(u.start_at)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

