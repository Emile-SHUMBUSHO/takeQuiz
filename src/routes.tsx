import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Host} from 'react-native-portalize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {apis} from './store/apis';
import {UnknownAction} from '@reduxjs/toolkit';
import {RootState} from './store/types';
import UserProfile from './components/userSettings';
import Login from './screens/login';
import Register from './screens/register';
import MainNav from './mainNav';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Routes(): JSX.Element {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {token, success} = useSelector((state: RootState) => state.login);

  React.useEffect(() => {
    dispatch(apis.authInit() as unknown as UnknownAction);
    dispatch(apis.profile() as unknown as UnknownAction);
  }, [success, dispatch]);

  return (
    <Host>
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          flex: 1,
        }}>
        <NavigationContainer>
          {true ? (
            <Drawer.Navigator
              screenOptions={{
                headerShown: false,
              }}
              drawerContent={props => <UserProfile {...props} />}>
              <Drawer.Screen name="home" component={MainNav} />
            </Drawer.Navigator>
          ) : (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </View>
    </Host>
  );
}

export default Routes;
