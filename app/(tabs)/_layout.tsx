import { Tabs } from 'expo-router';
import { StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        animation: 'shift',
        animationDuration: 300,
        animationTypeForReplace: 'push',
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 300,
              easing: 'bezier(0.25, 0.1, 0.25, 1)',
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 250,
              easing: 'bezier(0.25, 0.1, 0.25, 1)',
            },
          },
        },
        cardStyleInterpolator: ({ current, layouts }) => ({
          cardStyle: {
            opacity: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.width * 0.1, 0],
                }),
              },
              {
                scale: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.95, 1],
                }),
              },
            ],
          },
        }),
        tabBarStyle: {
          // Ocultar la barra de navegación en pantallas de autenticación
          display: ['index', 'Auth/email-login', 'LandingPage/landing', 'Auth/create-account'].includes(route.name) 
            ? 'none' 
            : 'flex',
          backgroundColor: 'rgba(248, 249, 250, 0.95)',
          borderTopWidth: 0,
          height: 90,
          paddingBottom: 30,
          paddingTop: 12,
          paddingHorizontal: 0,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: -8,
          },
          shadowOpacity: 0.1,
          shadowRadius: 20,
          elevation: 15,
          borderRadius: 0,
          backdropFilter: 'blur(20px)',
          position: 'absolute',
        },
        tabBarActiveTintColor: colors.primary[500],
        tabBarInactiveTintColor: colors.neutral[400],
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          marginTop: 4,
          letterSpacing: -0.2,
        },
        tabBarIconStyle: {
          marginTop: 2,
        },
        tabBarItemStyle: {
          paddingVertical: 4,
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
        name="Auth/email-login"
        options={{
          title: 'Email Login',
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="Auth/create-account"
        options={{
          title: 'Create Account',
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="LandingPage/landing"
        options={{
          title: 'Landing',
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="Home/home"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? "home" : "home-outline"} 
              size={focused ? 26 : 24} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Activity/activity"
        options={{
          title: 'Actividad',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? "stats-chart" : "stats-chart-outline"} 
              size={focused ? 26 : 24} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites/favorites"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? "heart" : "heart-outline"} 
              size={focused ? 26 : 24} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile/profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? "person-circle" : "person-circle-outline"} 
              size={focused ? 26 : 24} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}