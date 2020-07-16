
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  IndexScreen from './src/screens/indexScreen'
import {Provider} from './src/context/useReducerContext'

const navigatior = createStackNavigator({
  Index: IndexScreen,

}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
})


const App =  createAppContainer(navigatior)


export default () => {
  return (
      <Provider>
          <App/>
      </Provider>
  ) 
}