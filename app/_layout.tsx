import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { AuthProvider } from '@/context/AuthContext';
import LoaderScreen from '@/components/LoaderScreen';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  
  useFrameworkReady();

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoaderScreen onAnimationComplete={handleAnimationComplete} />;
  }

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </AuthProvider>
  );
}