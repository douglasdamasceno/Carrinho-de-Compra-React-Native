
import * as React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './src/Home'
import Cart from './src/CartScreen'
import CartProvider from './src/context/cart';

import { useCart } from './src/context/cart';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Cart"
            component={Cart}
            options={{
              tabBarIcon:IconWithBadge
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;

function IconWithBadge() {
  const {totalProduto } = useCart()
  
  return (
    <View style={{width:24, height:24,margin:5}}>
      <Text>{totalProduto}</Text>
    </View>
  )
}