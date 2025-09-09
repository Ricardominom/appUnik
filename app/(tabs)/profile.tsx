import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

export default function ProfileScreen() {
    const profileStats = [
        { title: 'Pólizas', value: '3', icon: 'shield-outline', color: colors.accent[500] },
        { title: 'Años', value: '2', icon: 'time-outline', color: colors.secondary[500] },
        { title: 'Ahorrado', value: '$2.5K', icon: 'trending-up-outline', color: colors.warning },
    ];

    const menuSections = [
        {
            title: 'Mi cuenta',
            items: [
                { id: 1, title: 'Información Personal', icon: 'person-outline', color: colors.accent[500] },
                { id: 2, title: 'Mis Pólizas', icon: 'document-text-outline', color: colors.secondary[500] },
                { id: 3, title: 'Configuración', icon: 'settings-outline', color: colors.neutral[400] },
            ]
        },
        {
            title: 'Soporte',
            items: [
                { id: 4, title: 'Ayuda y FAQ', icon: 'help-circle-outline', color: colors.warning },
                { id: 5, title: 'Contactar Soporte', icon: 'chatbubble-outline', color: colors.accent[500] },
                { id: 6, title: 'Términos y Condiciones', icon: 'document-outline', color: colors.neutral[400] },
            ]
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.greeting}>Mi Perfil</Text>
                    <Text style={styles.subtitle}>Gestiona tu cuenta</Text>
                </View>

                {/* User Info Section */}
                <View style={styles.userSection}>
                    <View style={styles.avatarContainer}>
                        <Text style={styles.avatarText}>JD</Text>
                    </View>
                    <Text style={styles.userName}>Juan Pérez</Text>
                    <Text style={styles.userEmail}>juan.perez@email.com</Text>
                    
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editButtonText}>Editar perfil</Text>
                    </TouchableOpacity>
                </View>

                {/* Stats */}
                <View style={styles.statsContainer}>
                    {profileStats.map((stat, index) => (
                        <View key={index} style={styles.statCard}>
                            <View style={[styles.statIcon, { backgroundColor: `${stat.color}15` }]}>
                                <Ionicons name={stat.icon as any} size={20} color={stat.color} />
                            </View>
                            <Text style={styles.statValue}>{stat.value}</Text>
                            <Text style={styles.statTitle}>{stat.title}</Text>
                        </View>
                    ))}
                </View>

                {/* Menu Sections */}
                {menuSections.map((section, sectionIndex) => (
                    <View key={sectionIndex} style={styles.section}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                        
                        <View style={styles.menuContainer}>
                            {section.items.map((item, index) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={[
                                        styles.menuItem,
                                        index === section.items.length - 1 && styles.lastMenuItem
                                    ]}
                                >
                                    <View style={styles.menuItemLeft}>
                                        <View style={[styles.iconContainer, { backgroundColor: `${item.color}15` }]}>
                                            <Ionicons
                                                name={item.icon as any}
                                                size={20}
                                                color={item.color}
                                            />
                                        </View>
                                        <Text style={styles.menuItemText}>
                                            {item.title}
                                        </Text>
                                    </View>
                                    <Ionicons name="chevron-forward" size={18} color={colors.neutral[300]} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                ))}

                {/* Logout Button */}
                <View style={styles.section}>
                    <TouchableOpacity style={styles.logoutButton}>
                        <Ionicons name="log-out-outline" size={20} color={colors.error} />
                        <Text style={styles.logoutText}>Cerrar Sesión</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomSpacing} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F7',
    },
    content: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: '#F2F2F7',
    },
    greeting: {
        fontSize: 34,
        fontWeight: '700',
        color: '#000000',
        letterSpacing: -0.5,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 19,
        color: '#8E8E93',
        fontWeight: '400',
    },
    userSection: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingVertical: 32,
        marginHorizontal: 20,
        marginBottom: 24,
        borderRadius: 16,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 8,
        elevation: 1,
        borderWidth: 0.5,
        borderColor: '#E5E5EA',
    },
    avatarContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.accent[500],
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatarText: {
        fontSize: 28,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    userName: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 4,
    },
    userEmail: {
        fontSize: 16,
        color: '#8E8E93',
        marginBottom: 16,
    },
    editButton: {
        backgroundColor: '#F2F2F7',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 20,
    },
    editButtonText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.accent[500],
    },
    statsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        gap: 12,
        marginBottom: 32,
    },
    statCard: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 1,
        borderWidth: 0.5,
        borderColor: '#E5E5EA',
    },
    statIcon: {
        width: 36,
        height: 36,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    statValue: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 2,
    },
    statTitle: {
        fontSize: 12,
        color: '#8E8E93',
        fontWeight: '500',
        textAlign: 'center',
    },
    section: {
        paddingHorizontal: 20,
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 12,
        letterSpacing: -0.2,
    },
    menuContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 1,
        borderWidth: 0.5,
        borderColor: '#E5E5EA',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: '#E5E5EA',
    },
    lastMenuItem: {
        borderBottomWidth: 0,
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 36,
        height: 36,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    menuItemText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingVertical: 16,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 1,
        borderWidth: 0.5,
        borderColor: '#E5E5EA',
    },
    logoutText: {
        fontSize: 16,
        color: colors.error,
        fontWeight: '500',
        marginLeft: 8,
    },
    bottomSpacing: {
        height: 100,
    },
});
