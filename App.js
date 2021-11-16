import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SisApi from "./api";

import Row from "./Row";
import RowHeader from "./RowHeader";

export default function App() {
  const [upcoming, setUpcoming] = useState(null);

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

  return (
    <SafeAreaView style={styles.container}>
      <RowHeader
        title='Title'
        description='Description'
        start_at='Start Time'
      />
      <Text>
      {upcoming && upcoming.map(u =>
        <View key={u.id + u.start_at}>
            <Row
              title={u.title}
              description={u.description}
              start_at={u.start_at}
            />
      </View>)}
      </Text>
      {/* <Text>{upcoming && upcoming.map(u =>
        <View key={u.id + u.start_at}>
          <Row
            title={u.title}
            description={u.description}
            start_at={u.start_at}
          />
          <Text>{u.title}</Text>
          <Text>{u.description}</Text>
          <Text>{u.start_at}</Text>
        </View>
      )}</Text> */}
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <SafeAreaView>
    //     <RowHeader
    //       title='Title'
    //       description='Description'
    //       start_at='Start Time'
    //     />
    //   {upcoming && upcoming.map(u =>
    //     <SafeAreaView key={u.id + u.start_at}>
    //       <Row
    //         title={u.title}
    //         description={u.description}
    //         start_at={u.start_at}
    //       />
    //     </SafeAreaView>
    //   )}
    //   </SafeAreaView>
    //   {/* <StatusBar style="auto" /> */}
    // </SafeAreaView>
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
