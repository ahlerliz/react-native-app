import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SisApi from "./api";

export default function App() {
  const [cohort, setCohort] = useState(null);

  useEffect(function getCohortOnMount() {
    async function getCohortFromApi() {
      try {
        const cohort = await SisApi.getCohort();
        console.log({cohort});
        setCohort(cohort);
      } catch (err) {
        console.log({err});
      }
    }
    getCohortFromApi();
  }, []);
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
