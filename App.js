import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_500Medium } from '@expo-google-fonts/inter';
import * as SQLite from 'expo-sqlite';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation';
import store from './src/store';

const ConnectLoader = () => {
 return (
 <SafeAreaProvider>
  <View style={styles.container}>
   {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
   <AppNavigator />
   </View>
  </SafeAreaProvider>
 )
}

const AppLoader = ConnectLoader

export default function App(props) {
 let [fontsLoaded] = useFonts({
  Inter_400Regular, Inter_700Bold, Inter_500Medium
 });
 const db = SQLite.openDatabase("picadaydb.db")
 React.useEffect(()=>{
  db.transaction(tx => {
   tx.executeSql(
    'CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, date INTEGER, temperature INT, city TEXT, country TEXT, image TEXT, caption TEXT )'
   )
  })
 },[])
  if (!fontsLoaded) {
   return null;
  } else {
   return (
   <Provider store={store} >
    <AppLoader />
   </Provider>
  );
 }
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  height: Dimensions.get('window').height,
 },
});
