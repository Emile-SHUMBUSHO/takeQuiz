import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/home';
import Notification from './screens/notification';
import Questions from './screens/quiz';
import Result from './screens/result';
import ManageQuiz from './screens/manageQuiz';

const Stack = createNativeStackNavigator();

function MainNav(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Quiz" component={Questions} />
      <Stack.Screen name="Result" component={Result}/>
      <Stack.Screen name="ManageQuiz" component={ManageQuiz}/>
    </Stack.Navigator>
  );
}

export default MainNav;
