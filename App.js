import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
} from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import IndexScreen from './Src/Screens/IndexScreen';
import {Provider} from './Src/context/BlogContext';
import ShowScreen from './Src/Screens/ShowScreen';
import CreateScreen from './Src/Screens/CreateScreen';
import EditScreen from './Src/Screens/EditScreen';

const Stack = createStackNavigator ();

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={IndexScreen} />
        <Stack.Screen name="ShowScreen" component={ShowScreen} />
        <Stack.Screen name= "CreateScreen" component={CreateScreen}/>
        <Stack.Screen name="EditScreen" component={EditScreen} />



 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <Provider>
     <App/>
   </Provider>
}
