// app/_layout.tsx

import { Slot, useRouter } from "expo-router";
import { useAuth } from "@/src/contexts/AuthContext";
import { useEffect } from "react";

export default function RootLayout() {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (!loading) {
      if (user) router.replace("/(auth)/login");
      else router.replace("/(tabs)");
    }
  }, [user, loading]);

  return <Slot />;
}
