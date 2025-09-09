import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          // Ocultar la barra de navegación en pantallas de autenticación
          display: ['index', 'email-login', 'landing', 'create-account'].includes(route.name) 
            ? 'none' 
            : 'flex',
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 85,
          paddingBottom: 25,
          paddingTop: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 10,
        },
        tabBarActiveTintColor: '#6366F1',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginTop: 2,
        },
      })}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="email-login"
        options={{
          title: 'Email Login',
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="create-account"
        options={{
          title: 'Create Account',
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="landing"
        options={{
          title: 'Landing',
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Activity',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pulse" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}