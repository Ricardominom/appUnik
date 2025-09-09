import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAuthContext } from '@/context/AuthContext';
import { spacing, touchTargets } from '@/constants/spacing';
import { layout } from '@/constants/layout';
import { colors } from '@/constants/colors';
import { 
  Bell, 
  Settings, 
  CreditCard, 
  FileText, 
  Phone, 
  Shield,
  User,
  LogOut
} from 'lucide-react-native';

export default function DashboardScreen() {
  const router = useRouter();
  const { user, logout } = useAuthContext();

  const handleLogout = () => {
    logout();
    router.replace('/');
  };

  const menuItems = [
    { icon: CreditCard, title: 'Mis Pólizas', subtitle: 'Ver y gestionar seguros' },
    { icon: FileText, title: 'Reclamos', subtitle: 'Historial y nuevos reclamos' },
    { icon: Phone, title: 'Contacto', subtitle: 'Soporte y asistencia' },
    { icon: Settings, title: 'Configuración', subtitle: 'Ajustes de cuenta' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#4A90E2', '#357ABD']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <User size={24} color="white" strokeWidth={2} />
            </View>
            <View style={styles.userDetails}>
              <Text style={styles.greeting}>Hola, {user?.name || 'Usuario'}</Text>
              <Text style={styles.subtitle}>Bienvenido a UNIK</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={24} color="white" strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Shield size={24} color="#4A90E2" strokeWidth={2} />
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Pólizas Activas</Text>
          </View>
          <View style={styles.statCard}>
            <FileText size={24} color="#10B981" strokeWidth={2} />
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Reclamo Pendiente</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          <Text style={styles.sectionTitle}>Servicios</Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              activeOpacity={0.7}
            >
              <View style={styles.menuIcon}>
                <item.icon size={24} color="#4A90E2" strokeWidth={2} />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.7}
        >
          <LogOut size={20} color="#EF4444" strokeWidth={2} />
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  header: {
    paddingHorizontal: layout.horizontalMargin,
    paddingVertical: spacing.lg,
    borderBottomLeftRadius: spacing.lg + spacing.sm,
    borderBottomRightRadius: spacing.lg + spacing.sm,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: touchTargets.comfortable,
    height: touchTargets.comfortable,
    borderRadius: touchTargets.comfortable / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  userDetails: {
    flex: 1,
  },
  greeting: {
    fontSize: layout.isSmallDevice ? 18 : 20,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: layout.isSmallDevice ? 12 : 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  notificationButton: {
    width: touchTargets.minimum,
    height: touchTargets.minimum,
    borderRadius: touchTargets.minimum / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: layout.horizontalMargin,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.lg,
    marginBottom: spacing.xl,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: spacing.md,
    padding: spacing.lg,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    minHeight: layout.isSmallDevice ? 100 : 120,
    justifyContent: 'center',
  },
  statNumber: {
    fontSize: layout.isSmallDevice ? 20 : 24,
    fontWeight: 'bold',
    color: colors.neutral[700],
    marginTop: spacing.sm,
  },
  statLabel: {
    fontSize: layout.isSmallDevice ? 10 : 12,
    color: colors.neutral[500],
    textAlign: 'center',
    marginTop: spacing.xs,
    lineHeight: layout.isSmallDevice ? 14 : 16,
  },
  menuContainer: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: layout.isSmallDevice ? 16 : 18,
    fontWeight: '600',
    color: colors.neutral[700],
    marginBottom: spacing.md,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: spacing.md,
    padding: spacing.lg,
    marginBottom: spacing.sm,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    minHeight: touchTargets.large + spacing.lg,
  },
  menuIcon: {
    width: touchTargets.comfortable,
    height: touchTargets.comfortable,
    borderRadius: touchTargets.comfortable / 2,
    backgroundColor: '#F0F7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: layout.isSmallDevice ? 14 : 16,
    fontWeight: '600',
    color: colors.neutral[700],
    marginBottom: spacing.xs,
  },
  menuSubtitle: {
    fontSize: layout.isSmallDevice ? 12 : 14,
    color: colors.neutral[500],
    lineHeight: layout.isSmallDevice ? 16 : 18,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: spacing.md,
    padding: spacing.md,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: '#FEE2E2',
    minHeight: touchTargets.large,
  },
  logoutText: {
    fontSize: layout.isSmallDevice ? 14 : 16,
    color: colors.error,
    fontWeight: '500',
    marginLeft: spacing.sm,
  },
});