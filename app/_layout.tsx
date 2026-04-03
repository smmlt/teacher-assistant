import {Stack, useRouter, Slot, useSegments} from "expo-router";
import {AuthProvider, useAuth} from '@/src/contexts/AuthContext'
import {useEffect} from "react";
import {ActivityIndicator, View} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import "@/global.css"
export function RootLayoutNav() {
    const {user, loading} = useAuth()
    const router = useRouter()
    const segments = useSegments()

    useEffect(() => {
        if (!loading)
        {
            const inAuthGroup = segments[0] === '(auth)'

            if (!user && !inAuthGroup) router.replace('/(auth)/login')
            else if (user && inAuthGroup) router.replace('/(tabs)')
        }
    }, [user, loading, segments]);

    if (loading)
    {
        return <View style={{flex: 1}}>
            <ActivityIndicator/>
        </View>
    }

    return <Slot/>;
}

export default function RootLayout()
{
    return (
        <SafeAreaProvider>
            <AuthProvider>
                <RootLayoutNav/>
            </AuthProvider>
        </SafeAreaProvider>
    )
}