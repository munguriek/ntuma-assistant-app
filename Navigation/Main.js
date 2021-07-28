import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Stacks
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
import UserNavigator from "./UserNavigator";
import AssistantNavigator from "./AssistantNavigator";

import CartIcon from "../Shared/CartIcon";
import AuthGlobal from "../Context/store/AuthGlobal";

const Tab = createBottomTabNavigator();

const Main = () => {

  const context = useContext(AuthGlobal)

  return (
    <Tab.Navigator
      initialRouteName="User"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: "#479030",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" style={{position: "relative"}} color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="shopping-cart" color={color} size={30} />
              <CartIcon />
            </View>
          ),
        }}
      />

      {context.stateUser.user.isAssistant == true ? (
        <Tab.Screen
        name="Assitant"
        component={AssistantNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cog" color={color} size={30} />
          ),
        }}
      />
      ): null }

      <Tab.Screen
        name="User"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" style={{position: "relative"}} color={color} size={30} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default Main;