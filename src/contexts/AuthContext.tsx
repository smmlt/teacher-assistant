// src/contexts/AuthContext.tsx

import { createContext, useContext, useEffect, useState } from 'react';
import { 
    User, onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signOut
 } from 'firebase/auth';
import { auth } from '@/src/lib/firebase';

type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}