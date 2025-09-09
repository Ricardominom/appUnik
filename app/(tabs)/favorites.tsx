import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import AnimatedScreen from '@/components/AnimatedScreen';

export default function FavoritesScreen() {
    const [favorites, setFavorites] = useState([
        { id: 1, title: 'Seguro de Auto', category: 'Seguros', icon: 'car-outline', color: colors.accent[500] },
        { id: 2, title: 'Gimnasios', category: 'Estilo de vida', icon: 'fitness-outline', color: colors.secondary[500] },
        { id: 3, title: 'Préstamos', category: 'Finanzas', icon: 'cash-outline', color: colors.warning },
        { id: 4, title: 'Vale Gasolina', category: 'Mis vales', icon: 'car-sport-outline', color: colors.error },
    ]);

    const removeFavorite = (id: number) => {
        setFavorites(favorites.filter(item => item.id !== id));
    };

    return (
        <AnimatedScreen>
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.greeting}>Favoritos</Text>
                    <Text style={styles.subtitle}>Tus servicios preferidos</Text>
                </View>

                {favorites.length > 0 ? (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Guardados ({favorites.length})</Text>
                        
                        {favorites.map((item) => (
                            <View key={item.id} style={styles.favoriteCard}>
                                <View style={[styles.favoriteIcon, { backgroundColor: `${item.color}15` }]}>
                                    <Ionicons name={item.icon as any} size={24} color={item.color} />
                                </View>
                                <View style={styles.favoriteContent}>
                                    <Text style={styles.favoriteTitle}>{item.title}</Text>
                                    <Text style={styles.favoriteCategory}>{item.category}</Text>
                                </View>
                                <TouchableOpacity 
                                    style={styles.favoriteAction}
                                    onPress={() => removeFavorite(item.id)}
                                >
                                    <Ionicons name="heart" size={22} color={colors.error} />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                ) : (
                    <View style={styles.emptyState}>
                        <View style={styles.emptyIconContainer}>
                            <Ionicons name="heart-outline" size={60} color={colors.neutral[300]} />
                        </View>
                        <Text style={styles.emptyTitle}>No tienes favoritos</Text>
                        <Text style={styles.emptySubtitle}>
                            Agrega servicios a favoritos para acceder rápidamente desde aquí
                        </Text>
                    </View>
                )}

                {/* Quick Access */}
                {favorites.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Acceso Rápido</Text>
                        
                        <View style={styles.quickAccessGrid}>
                            {favorites.slice(0, 4).map((item, index) => (
                                <TouchableOpacity key={index} style={styles.quickAccessCard}>
                                    <View style={[styles.quickAccessIcon, { backgroundColor: `${item.color}15` }]}>
                                        <Ionicons name={item.icon as any} size={20} color={item.color} />
                                    </View>
                                    <Text style={styles.quickAccessTitle}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}

                <View style={styles.bottomSpacing} />
            </ScrollView>
        </SafeAreaView>
        </AnimatedScreen>
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
    favoriteCard: {
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
    favoriteIcon: {
        width: 44,
        height: 44,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    favoriteContent: {
        flex: 1,
    },
    favoriteTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.neutral[900],
        marginBottom: 2,
    },
    favoriteCategory: {
        fontSize: 14,
        color: colors.neutral[400],
        fontWeight: '400',
    },
    favoriteAction: {
        padding: 8,
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    emptyIconContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: colors.neutral[50],
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    emptyTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: colors.neutral[900],
        marginBottom: 8,
        textAlign: 'center',
    },
    emptySubtitle: {
        fontSize: 16,
        color: colors.neutral[400],
        textAlign: 'center',
        lineHeight: 22,
        fontWeight: '400',
    },
    quickAccessGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    quickAccessCard: {
        width: '47%',
        backgroundColor: colors.white,
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 1,
        borderWidth: 0.5,
        borderColor: colors.neutral[200],
    },
    quickAccessIcon: {
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    quickAccessTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.neutral[900],
        textAlign: 'center',
    },
    bottomSpacing: {
        height: 100,
    },
});
