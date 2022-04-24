import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';

export default function App() {
  const today = new Date();
  console.log(today)
  return (
    <SafeAreaView edge={['bottom']} style={styles.block}>
      <DateHead date={today} />
      <Empty />
      <AddTodo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
