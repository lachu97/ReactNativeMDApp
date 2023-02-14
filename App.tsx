/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { ButtonComponent, IconButtonComponent, Customchips, SnackBar } from './AppModules/Views/Home';
import { Divider } from 'react-native-paper'

function App(): JSX.Element {
  return (
<SafeAreaProvider style={{flex:1,height: '100%',width: '100%'}}>
    <View style={styles.container}>
       <Text style={{ color: 'white' }}>Hello </Text>
        <Divider bold={true} horizontalInset={true} />
        <ButtonComponent />
        <Divider />
        <SnackBar />
    </View>
</SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
