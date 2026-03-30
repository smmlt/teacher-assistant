// app/_layout.tsx

import { Slot, Redirect } from "expo-router";
import { useAuth } from "@/src/contexts/AuthContext";
import { View, ActivityIndicator } from "react-native";

export default function RootLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (user) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(auth)/login" />;
}


// import { Slot, useRouter } from "expo-router";
// import { useAuth } from "@/src/contexts/AuthContext";
// import { useEffect } from "react";
// import { View, ActivityIndicator } from "react-native";

// export default function RootLayout() {
//   const { user, loading } = useAuth();
//   const router = useRouter();
  
//   useEffect(() => {
//     if (!loading) {
//       if (user) router.replace("/(auth)/login");
//       else router.replace("/(tabs)");
//     }
//   }, [user, loading]);

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator />
//       </View>
//     );
//   }

//   return <Slot />;
// }

