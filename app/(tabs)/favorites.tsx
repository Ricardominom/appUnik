import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FavoritesScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Favoritos</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.emptyState}>
                    <Ionicons name="heart-outline" size={80} color="#E5E7EB" />
                    <Text style={styles.emptyTitle}>No tienes favoritos aún</Text>
                    <Text style={styles.emptySubtitle}>
                        Agrega servicios a tus favoritos para acceder rápidamente
                    </Text>
                </View>
            </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    emptyState: {
        alignItems: 'center',
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#374151',
        marginTop: 20,
        marginBottom: 8,
    },
    emptySubtitle: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
        lineHeight: 24,
    },
});
