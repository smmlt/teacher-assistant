// app/(auth)/login.tsx

import {useContext, useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import {useAuth} from "@/src/contexts/AuthContext"
import {Link} from "expo-router";



export default function Login()
{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [executing, setExecuting] = useState(false)
    const {login} = useAuth()

    const handleLogin = async () => {
        if (!email || !password)
        {
            alert('not filled')
            return
        }

        setExecuting(true)
        try {
            await login(email, password)
        }
        catch(e: any)
        {
            alert(`login error: ${e.message}`)
        }
        finally {
            setExecuting(false)
        }
    }



    return (
        <View className='flex-1 justify-center p-6 bg-white'>
            <Text className='text-3x1 font-bold text-center mb-8'>
                Teacher Assistant
            </Text>
            <TextInput className="border border-gray-300 rounded-x1 px-4 mb-6" placeholder='Email' value={email} onChangeText={setEmail} secureTextEntry></TextInput>

            <TextInput className="border border-gray-300 rounded-x1 px-4 bm-6" placeholder='PAssword' value={password} onChangeText={setPassword} secureTextEntry></TextInput>
            <TouchableOpacity
                onPress={handleLogin}
                disabled={executing}
                className='bg-blue-600 py-4 roundex-x1'
            />

            <Link href='/(auth)/register' className='mt-4'>Register</Link>

        </View>
    )
}