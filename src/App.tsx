import React from 'react';
import {
  StyleSheet, Text,
} from 'react-native';

const App = () => {
  return (
    <Text style={styles.hello}>hello</Text>
  );
};

const styles = StyleSheet.create({
  hello: {
    fontFamily: 'JetBrainsMono-Regular'
  },
});

export default App;
