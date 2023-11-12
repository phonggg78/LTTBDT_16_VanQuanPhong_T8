import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screen/Login';
import SignInScreen from './Screen/SignIn';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NoteScreen from './Screen/NoteScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="NoteScreen" component={NoteScreen} options={{headerShown:false}}/> 
      <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}


