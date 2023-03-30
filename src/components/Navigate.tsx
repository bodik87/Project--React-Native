/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CatalogScreen from '../screens/CatalogScreen';
import {networkIcon, homeIcon, catalogIcon} from '../../assets/icons';
import TabIcon from './TabIcon';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/theme';

const Tab = createBottomTabNavigator();

export const Navigate = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: {fontSize: 14},
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.dark,
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Пошук',
            tabBarIcon: ({color}) => (
              <TabIcon icon={homeIcon} color={color} size={32} />
            ),
          }}
        />
        <Tab.Screen
          name="Catalog"
          component={CatalogScreen}
          options={{
            tabBarLabel: 'Каталог',
            tabBarIcon: ({color}) => (
              <TabIcon icon={catalogIcon} color={color} size={32} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Завантаження',
            tabBarIcon: ({color}) => (
              <TabIcon icon={networkIcon} color={color} size={32} />
            ),
            // tabBarBadge: 3,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    // position: 'absolute',
    paddingBottom: 6,
    paddingTop: 6,
    // left: 0,
    // right: 0,
    // bottom: 0,
    height: 70,
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
    backgroundColor: COLORS.white,
    borderTopColor: COLORS.dark,
    //     background: rgba( 255, 255, 255, 0.25 ),
    // boxShadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ),
    // backdrop-filter: blur( 10.5px ),
    // shadowColor: COLORS.dark,
    // shadowOffset: {
    //   height: 6,
    //   width: 0,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
    // elevation: 5,
  },
});
