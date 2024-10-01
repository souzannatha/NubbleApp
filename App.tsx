import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';

import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

import {Button} from './src/components/Button/Button';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>
          <Button mb="s12" title="Primary" />
          <Button mb="s12" preset="outline" title="Outline" />
          <Button mb="s12" disabled preset="primary" title="Outline" />
          <Button title="oi" loading />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
