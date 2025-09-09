import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAuthContext } from '@/context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

export default function DashboardScreen() {
  const router = useRouter();
  const { user, logout } = useAuthContext();

  const handleLogout = () => {
    logout();
    router.replace('/');
  };

  const menuItems = [
    { icon: 'shield-checkmark-outline', title: 'Mis Pólizas', subtitle: 'Ver y gestionar seguros', color: colors.secondary[500] },
    { icon: 'document-text-outline', title: 'Reclamos', subtitle: 'Historial y nuevos reclamos', color: colors.warning },
    { icon: 'call-outline', title: 'Contacto', subtitle: 'Soporte y asistencia', color: colors.accent[500] },
    { icon: 'settings-outline', title: 'Configuración', subtitle: 'Ajustes de cuenta', color: colors.neutral[400] },
  ];

  const statsData = [
    { title: 'Pólizas Activas', value: '3', icon: 'shield-outline', color: colors.accent[500] },
    { title: 'Reclamos', value: '1', icon: 'document-outline', color: colors.warning },
    { title: 'Ahorros', value: '$2.5K', icon: 'card-outline', color: colors.secondary[500] },
  ];

  return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Buenos días</Text>
          <Text style={styles.subtitle}>Tu actividad de hoy</Text>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          {statsData.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: `${stat.color}15` }]}>
                <Ionicons name={stat.icon as any} size={24} color={stat.color} />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statTitle}>{stat.title}</Text>
            </View>
          ))}
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actividad Reciente</Text>
          
          <View style={styles.activityCard}>
            <View style={styles.activityIcon}>
              <Ionicons name="checkmark-circle" size={20} color={colors.success} />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Pago procesado</Text>
              <Text style={styles.activitySubtitle}>Seguro de auto - $450</Text>
            </View>
            <Text style={styles.activityTime}>Hoy</Text>
          </View>

          <View style={styles.activityCard}>
            <View style={styles.activityIcon}>
              <Ionicons name="document-text" size={20} color={colors.warning} />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Nuevo reclamo</Text>
              <Text style={styles.activitySubtitle}>En proceso de revisión</Text>
            </View>
            <Text style={styles.activityTime}>2d</Text>
          </View>

          <View style={styles.activityCard}>
            <View style={styles.activityIcon}>
              <Ionicons name="shield-checkmark" size={20} color={colors.accent[500]} />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Póliza renovada</Text>
              <Text style={styles.activitySubtitle}>Seguro familiar</Text>
            </View>
            <Text style={styles.activityTime}>1w</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              activeOpacity={0.6}
            >
              <View style={[styles.menuIcon, { backgroundColor: `${item.color}15` }]}>
                <Ionicons name={item.icon as any} size={22} color={item.color} />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.neutral[300]} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  content: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: colors.neutral[50],
  },
  greeting: {
    fontSize: 34,
    fontWeight: '700',
    color: colors.neutral[900],
    letterSpacing: -0.5,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 19,
    color: colors.neutral[400],
    fontWeight: '400',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: colors.neutral[200],
  },
  statIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.neutral[900],
    letterSpacing: -0.3,
  },
  statTitle: {
    fontSize: 13,
    color: colors.neutral[400],
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.neutral[900],
    marginBottom: 16,
    letterSpacing: -0.3,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: colors.neutral[200],
  },
  activityIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: colors.neutral[50],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.neutral[900],
    marginBottom: 2,
  },
  activitySubtitle: {
    fontSize: 14,
    color: colors.neutral[400],
    fontWeight: '400',
  },
  activityTime: {
    fontSize: 14,
    color: colors.neutral[400],
    fontWeight: '500',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: colors.neutral[200],
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.neutral[900],
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 14,
    color: colors.neutral[400],
    fontWeight: '400',
  },
  bottomSpacing: {
    height: 100,
  },
});