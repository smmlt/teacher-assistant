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
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <User color={color} size={24} />
        }}
      />      
    </Tabs>
  );
}
