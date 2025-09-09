import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
    const categories = [
        { id: 1, name: 'Life Style', color: '#90EE90', active: true },
        { id: 2, name: 'Seguros y Asistencias', color: '#E6E6FA', active: false },
        { id: 3, name: 'Finanzas', color: '#FFE4B5', active: false },
        { id: 4, name: 'Experiencias', color: '#98FB98', active: false },
    ];

    const segurosVida = [
        { id: 1, title: 'Seguro Empresa', icon: 'business-outline' },
        { id: 2, title: 'Familiares', icon: 'home-outline' },
        { id: 3, title: 'Seguro de Auto', icon: 'car-outline' },
        { id: 4, title: 'Descubre tu Seguro Ideal', icon: 'puzzle-outline' },
    ];

    const misFinanzas = [
        { id: 1, title: 'Prestamos', icon: 'cash-outline' },
        { id: 2, title: 'Salario on demand', icon: 'card-outline' },
        { id: 3, title: 'Inversiones', icon: 'trending-up-outline' },
    ];

    const experiencias = [
        { id: 1, title: 'Experiencias y descuentos', icon: 'gift-outline' },
    ];

    const estiloVida = [
        { id: 1, title: 'Gyms y Studios', icon: 'fitness-outline' },
    ];

    const renderCategoryTabs = () => (
        <View style={styles.categoryTabs}>
            {categories.map((category) => (
                <TouchableOpacity
                    key={category.id}
                    style={[
                        styles.categoryTab,
                        { backgroundColor: category.color },
                        category.active && styles.activeTab
                    ]}
                >
                    <Text style={[
                        styles.categoryText,
                        category.active && styles.activeCategoryText
                    ]}>
                        {category.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );

    const renderServiceGrid = (title: string, services: any[]) => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.serviceGrid}>
                {services.map((service) => (
                    <TouchableOpacity key={service.id} style={styles.serviceCard}>
                        <View style={styles.serviceIconContainer}>
                            <Ionicons name={service.icon as any} size={32} color="#6366F1" />
                        </View>
                        <Text style={styles.serviceTitle}>{service.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>inicio</Text>
                <View style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
                    <Text style={styles.searchText}>Search...</Text>
                </View>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Category Tabs */}
                {renderCategoryTabs()}

                {/* Seguros y Vida */}
                {renderServiceGrid('Seguros y Vida', segurosVida)}

                {/* Mis Finanzas */}
                {renderServiceGrid('Mis Finanzas', misFinanzas)}

                {/* Experiencias */}
                {renderServiceGrid('Experiencias', experiencias)}

                {/* Estilo de vida */}
                {renderServiceGrid('Estilo de vida', estiloVida)}

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
        marginBottom: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 12,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchText: {
        color: '#999',
        fontSize: 16,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    categoryTabs: {
        flexDirection: 'row',
        marginVertical: 20,
        gap: 10,
    },
    categoryTab: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        minWidth: 80,
        alignItems: 'center',
    },
    activeTab: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    categoryText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#333',
    },
    activeCategoryText: {
        color: '#333',
        fontWeight: '600',
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 15,
    },
    serviceGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    serviceCard: {
        width: '48%',
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    serviceIconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f0f0ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    serviceTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1a1a1a',
        textAlign: 'center',
        lineHeight: 18,
    },
    bottomSpacing: {
        height: 100,
    },
});
