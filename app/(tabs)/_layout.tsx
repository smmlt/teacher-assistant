import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { BookOpen, Users, User} from 'lucide-react-native';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Classes',
          tabBarIcon: ({ color }) => <BookOpen color={color} size={24} />
        }}
      />      
    </Tabs>>
  );
}

const styles = StyleSheet.create({});