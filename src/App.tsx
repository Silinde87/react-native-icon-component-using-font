import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import Icon from './components/Icon';
import {IconNames} from './utils/constants/icon.constants';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <Text>This is how Icon Component looks...</Text>
        <Icon name={IconNames.BOOKMARK} color="black" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 40,
    paddingLeft: 16,
  },
});

export default App;
