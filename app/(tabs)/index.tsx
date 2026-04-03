// app/(tabs)/index.tsx

import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { 
  collection, 
  query, 
  where, 
  onSnapshot, 
  addDoc 
} from 'firebase/firestore';

import { db } from '@/src/lib/firebase';
import { useAuth } from '@/src/contexts/AuthContext';
import { ClassType } from '@/src/lib/types';
import { Link } from 'expo-router';
import { Plus } from 'lucide-react-native';


export default function ClassesScreen() {
  // ->
  const { user } = useAuth();
  const [classes, setClasses] = useState<ClassType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, 'classes'), where('teacherId', '==', user.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      } as ClassType));

      setClasses(data);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching classes: ", error);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <View>
      <Text>Classes</Text>
    </View>
  );
}
