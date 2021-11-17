import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import SisApi from "./api";
import { getCohort, readableDateAndTime } from './utils';


import Row from "./Row";
import RowHeader from "./RowHeader";
import PageTitle from "./PageTitle";
import Banner from './Banner';

/** Main app that renders Banner, PageTitle, RowHeader and Row
 * Props: none
 * State: upcoming, cohort
 * Events: none
 */
export default function App() {
  const [upcoming, setUpcoming] = useState(null);
  const [cohort, setCohort] = useState(null);

  /** Calls main API function and sets upcoming to the results
   * 
   * Console.logs if error
   */
  useEffect(function getUpcomingOnMount() {
    async function getUpcomingUrlsFromApi() {
      try {
        const upcomingResults = await SisApi.getUpcoming();
        setUpcoming(upcomingResults);
      } catch (err) {
        console.log({ err });
      }
    };
    getUpcomingUrlsFromApi();
  }, []);

  /** Sets cohort from upcoming data
   */
  useEffect(function getCohortOnChange() {
    if (upcoming) {
      const neededCohort = getCohort(upcoming[0].cohort);
      setCohort(neededCohort);
    }
  }, [upcoming]);


  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {cohort && <Banner cohort={cohort} />}
        {cohort && <PageTitle cohort={cohort} />}
        <RowHeader
          title='Title'
          description='Description'
          start_at='Start Time'
        />
        {upcoming && upcoming.map(u =>
          <Row
            title={u.title}
            description={u.description}
            start_at={readableDateAndTime(u.start_at)}
            type={(u.lecture && 'lecture') || (u.exercise && 'exercise') || (u.event && 'event')}
            key={u.title + u.start_at}
          />
        )}
      </SafeAreaView>
    </ScrollView>
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

