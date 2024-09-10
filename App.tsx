import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/Text/Text';

export function App() {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" italic>
        Coffsta
      </Text>
    </SafeAreaView>
  );
}

export default App;
