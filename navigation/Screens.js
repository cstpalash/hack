import React from 'react';
import { Easing, Animated, Platform } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Block, Text, theme } from "galio-framework";

import ComponentsScreen from '../screens/Components';
import HomeScreen from '../screens/Home';
import LeaderBoard from '../screens/LeaderBoard';
import OnboardingScreen from '../screens/Onboarding';
import ProfileScreen from '../screens/Profile';
import ProScreen from '../screens/Pro';
import SettingsScreen from '../screens/Settings';
import GreenMart from '../screens/GreenMart';
import AddChallenge from '../screens/AddChallenge';

import Menu from './Menu';
import Header from '../components/Header';
import { Drawer } from '../components/';
import materialTheme from '../constants/Theme';

import NavigationService from '../services/NavigationService';
import { Ionicons } from '@expo/vector-icons';

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index
    const width = layout.initWidth
    
    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    })
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1],
    })
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0],
    })

    const scaleWithOpacity = { opacity }
    const screenName = "Search"

    if (screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] }
  }
})

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Profile" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Settings" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const ComponentsStack = createStackNavigator({
  Components: {
    screen: ComponentsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Components" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const LeaderBoardStack = createStackNavigator({
  Leaders: {
    screen: LeaderBoard,
    navigationOptions: ({ navigation }) => ({
      header: <Header search title="Leaders" navigation={navigation} />,
    })
  },
  UserProfile: {
    screen: ProfileScreen
  },
},
{
  cardStyle: { 
    backgroundColor: '#EEEEEE', //this is the backgroundColor for the app
  },
  transitionConfig,
});

const HomeStack = createMaterialBottomTabNavigator(
  {
    Feed: { 
      screen: HomeScreen, 
      navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: <Ionicons name="ios-paper" size={24} />,
        gesturesEnabled: false,
      }
    },
    Leaders: { 
      screen: LeaderBoardStack,
      navigationOptions: {
        tabBarLabel: 'Leaders',
        tabBarIcon: <Ionicons name="ios-people" size={24} />,
        gesturesEnabled: false,
      }
    },
    Challenge: { 
      screen: AddChallenge,
      navigationOptions: {
        tabBarLabel: 'Challenge',
        tabBarIcon: <Ionicons name="md-add-circle-outline" size={24} />,
        gesturesEnabled: false,
      }
    },
    Stats: { 
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Stats',
        tabBarIcon: <Ionicons name="md-stats" size={24} />,
        gesturesEnabled: false,
      }
    },
    Market: { 
      screen: GreenMart,
      navigationOptions: {
        tabBarLabel: 'Market',
        tabBarIcon: <Ionicons name="ios-cart" size={24} />,
        gesturesEnabled: false,
      }
    }
  },
  {
    initialRouteName: 'Feed',
    activeColor: materialTheme.COLORS.SUCCESS,
    inactiveColor: materialTheme.COLORS.MUTED,
    barStyle: { backgroundColor: '#EEEEEE' },
  }
);

/*
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header search title="Home" navigation={navigation} />,
    })
  },
  Pro: {
    screen: ProScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header back white transparent title="" navigation={navigation} />,
      headerTransparent: true,
    })
  },
},
{
  cardStyle: { 
    backgroundColor: '#EEEEEE', //this is the backgroundColor for the app
  },
  transitionConfig,
});
*/

const AppStack = createDrawerNavigator(
  {
    Onboarding: {
      screen: OnboardingScreen,
      navigationOptions: {
        drawerLabel: () => {},
      },
    },
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Home" title="Home" />
        )
      }
    },
    
    Profile: {
      screen: ProfileStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Profile" title="Profile" />
        ),
      }),
    },
    Components: {
      screen: ComponentsStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Components" title="Components" />
        ),
      }),
    },

    Settings: {
      screen: SettingsStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Settings" title="Settings" />
        ),
      }),
    },
    /*
    MenuDivider: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: () => <Block style={{marginVertical: 8}}><Text>{` `}</Text></Block>,
      },
    }*/
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);

export default class App extends React.Component {
  // ...

  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}