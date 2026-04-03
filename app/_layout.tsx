// app/_layout.tsx

import "../global.css"
import { Slot, useRouter, useSegments } from 'expo-router';
import { useAuth } from '@/src/contexts/AuthContext';
import { useEffect } from 'react';
import { AuthProvider } from '@/src/contexts/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {ActivityIndicator, View} from "react-native";

function RootLayoutNav() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    const inAuthGroup = segments[0] === '(auth)';

    if (!user && !inAuthGroup) {
      router.replace('/(auth)/login');
    } else if (user && inAuthGroup) {
      router.replace('/(tabs)');
    }
  }, [user, loading, segments]);

  if (loading) { 
    return <View style={{flex: 1}}> 
        <ActivityIndicator/> 
    </View> 
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <RootLayoutNav />
      </AuthProvider>
    </SafeAreaProvider>
  );
}