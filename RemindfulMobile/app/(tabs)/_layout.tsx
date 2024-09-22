import { Tabs } from "expo-router";
import React from "react";

import { Surface, Icon } from "react-native-paper";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#8F75FF",
        tabBarStyle: { backgroundColor: "#282C35", borderColor: "#282C35" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Alarmas",
          tabBarIcon: ({ color, focused }) => (
            <Icon source="home" size={40} color={color} />
          ),
        }}
       />

      <Tabs.Screen
        name="newAlarm"
        options={{
          title: "Nueva Alarma",
          tabBarIcon: ({ color, focused }) => (
            <Icon source="alarm-plus" size={40} color={color} />
          ),
        }}
       />
    </Tabs>
  );
}
