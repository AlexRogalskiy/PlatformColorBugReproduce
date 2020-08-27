/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, PlatformColor} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: PlatformColor('?attr/colorAccent')}}>
        ?attr/colorAccent
      </Text>
      <Text style={{color: PlatformColor('?attr/colorPrimary')}}>
        ?attr/colorPrimary
      </Text>
      {
        <Text style={{color: PlatformColor('?attr/textColorPrimary')}}>
          ?attr/textColorPrimary
        </Text>
      }
    </View>
  );
};

export default App;
