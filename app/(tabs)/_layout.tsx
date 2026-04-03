import React from "react";
import { Tabs } from "expo-router";
import { BookOpen, Users, User } from "lucide-react-native";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: true }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Класи",
                    tabBarIcon: ({ color }: { color: string }) => (
                        <BookOpen size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Профіль",
                    tabBarIcon: ({ color }: { color: string }) => (
                        <User size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
