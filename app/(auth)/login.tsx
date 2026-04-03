import React, { useState } from 'react';

import { 
    Text, View , TextInput, TouchableOpacity
} from 'react-native';

import { useAuth } from '../../src/contexts/AuthContext';
import { Link, router } from 'expo-router';


export default function Login() {
    // 1
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [executing, setExecuting] = useState<boolean>(false);
    const { login } = useAuth();

    // 2
    const handleLogin = async () => {
        if (!email || !password) {
            alert('Незаповнені поля форми!');
            return;
        }
        setExecuting(true);
        try {
            await login(email, password);
            router.replace('/(tabs)');
        }
        catch (err: any) {
            alert(`Помилка входу: ${err.message}`);
        }
        finally {
            setExecuting(false);
        }
    };

    // 3
    return (
        <View className='flex-1 justify-center p-6 bg-white'>
            <Text className='text-3xl font-bold text-center mb-8 text-purple-700'>
                Teacher Assistant
            </Text>
            <TextInput 
                className='border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base'
                placeholder='Email...'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
            />
            <TextInput
                className='border border-gray-300 rounded-xl px-4 py-3 mb-6 text-base'
                placeholder='Password...'
                value={password}
                onChangeText={setPassword}                
                secureTextEntry
            />
            <TouchableOpacity
                onPress={handleLogin}
                disabled={executing}
                className='bg-blue-600 py-4 rounded-xl'
            >
                <Text className='text-white text-center font-semibold text-lg'>
                    { executing ? 'Вхід...' : 'Увійти' }
                </Text>
            </TouchableOpacity>

            <View className='mt-6 flex-row justify-center'>
                <Text className='text-base'>Немає акунту? </Text>
                <Link href='/(auth)/register' className='text-blue-600 font-semibold text-base'>
                    Зареєструватись
                </Link>
            </View>
        </View>
    );
}
