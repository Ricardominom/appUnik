import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
    const menuItems = [
        { id: 1, title: 'Información Personal', icon: 'person-outline', hasArrow: true },
        { id: 2, title: 'Mis Pólizas', icon: 'document-text-outline', hasArrow: true },
        { id: 3, title: 'Configuración', icon: 'settings-outline', hasArrow: true },
        { id: 4, title: 'Ayuda y Soporte', icon: 'help-circle-outline', hasArrow: true },
        { id: 5, title: 'Términos y Condiciones', icon: 'document-outline', hasArrow: true },
        { id: 6, title: 'Cerrar Sesión', icon: 'log-out-outline', hasArrow: false, isLogout: true },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Perfil</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* User Info Section */}
                <View style={styles.userSection}>
                    <View style={styles.avatarContainer}>
                        <Ionicons name="person" size={40} color="#6366F1" />
                    </View>
                    <Text style={styles.userName}>Usuario UNIK</Text>
                    <Text style={styles.userEmail}>usuario@email.com</Text>
                </View>

                {/* Menu Items */}
                <View style={styles.menuContainer}>
                    {menuItems.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[
                                styles.menuItem,
                                item.isLogout && styles.logoutItem
                            ]}
                        >
                            <View style={styles.menuItemLeft}>
                                <View style={[
                                    styles.iconContainer,
                                    item.isLogout && styles.logoutIconContainer
                                ]}>
                                    <Ionicons
                                        name={item.icon as any}
                                        size={22}
                                        color={item.isLogout ? '#EF4444' : '#6366F1'}
                                    />
                                </View>
                                <Text style={[
                                    styles.menuItemText,
                                    item.isLogout && styles.logoutText
                                ]}>
                                    {item.title}
                                </Text>
                            </View>
                            {item.hasArrow && (
                                <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
                            )}
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
        backgroundColor: '#f8f9fa',
    },
    header: {
        backgroundColor: '#6366F1',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    content: {
        flex: 1,
    },
    userSection: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: 30,
        marginBottom: 20,
    },
    avatarContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    userName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 16,
        color: '#6B7280',
    },
    menuContainer: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        borderRadius: 16,
        overflow: 'hidden',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F0F0FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    logoutIconContainer: {
        backgroundColor: '#FEF2F2',
    },
    menuItemText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1F2937',
    },
    logoutItem: {
        borderBottomWidth: 0,
    },
    logoutText: {
        color: '#EF4444',
    },
    bottomSpacing: {
        height: 100,
    },
});
