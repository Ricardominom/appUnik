import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
    const [activeCategory, setActiveCategory] = useState(0);
    
    const categories = [
        { id: 0, name: 'Todo', color: '#6C5CE7' },
        { id: 1, name: 'Life Style', color: '#FF6B6B' },
        { id: 2, name: 'Seguros y Asistencias', color: '#4ECDC4' },
        { id: 3, name: 'Finanzas', color: '#45B7D1' },
        { id: 4, name: 'Experiencias', color: '#96CEB4' },
        { id: 5, name: 'Mi RH', color: '#FFB6C1' },
        { id: 6, name: 'Mis vales', color: '#FFDAB9' },
        { id: 7, name: 'Cumplimiento', color: '#ADD8E6' },
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

    // Nuevas secciones de la segunda imagen
    const recursosHumanos = [
        { id: 1, title: 'Mi portal de Recursos Humanos', icon: 'trophy-outline' },
    ];

    const misVales = [
        { id: 1, title: 'Vales de despensa', icon: 'cash-outline' },
        { id: 2, title: 'TAG Gasolina', icon: 'car-outline' },
        { id: 3, title: 'Vale Gasolina', icon: 'car-sport-outline' },
        { id: 4, title: 'Vale Restaurante', icon: 'restaurant-outline' },
        { id: 5, title: 'Ver todos', icon: 'grid-outline' },
    ];

    const cumplimiento = [
        { id: 1, title: 'NOM 035', icon: 'checkmark-circle-outline' },
        { id: 2, title: 'NOM 037', icon: 'shield-checkmark-outline' },
    ];

    const renderCategoryTabs = () => (
        <View style={styles.categoryTabs}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        style={[
                            styles.categoryTab,
                            { backgroundColor: category.color },
                            activeCategory === category.id && styles.activeTab
                        ]}
                        onPress={() => setActiveCategory(category.id)}
                    >
                        <Text style={[
                            styles.categoryText,
                            activeCategory === category.id && styles.activeCategoryText
                        ]}>
                            {category.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );

    const renderServiceGrid = (title: string, services: any[]) => {
        // Colores de fondo muy suaves para las cards como en la imagen
        const cardColors = [
            '#F0F8FF', // Azul muy claro (como Scan)
            '#FAFAFA', // Gris muy claro (como Edit)
            '#F0FFF0', // Verde muy claro (como Convert)
            '#FFFEF0', // Amarillo muy claro (como Ask AI)
            '#F8F8FF', // Lavanda muy claro
            '#FFF8F0', // Crema muy claro
            '#FFF0F5', // Rosa muy claro
            '#F0FFF8', // Menta muy claro
        ];
        
        // Colores de fondo muy suaves para los iconos
        const iconBgColors = [
            '#E8F4FD', // Azul pastel
            '#F5F5F5', // Gris pastel
            '#E8F5E8', // Verde pastel
            '#FFF9E6', // Amarillo pastel
            '#F0F0FF', // Lavanda pastel
            '#FFF5E6', // Crema pastel
            '#FFE4E1', // Rosa pastel
            '#E0FFF0', // Menta pastel
        ];
        
        // Colores muy suaves para los iconos
        const iconColors = [
            '#90A4AE', // Gris azulado suave
            '#9E9E9E', // Gris suave
            '#81C784', // Verde suave
            '#FFB74D', // Naranja suave
            '#B39DDB', // Púrpura suave
            '#FFAB91', // Naranja claro
            '#F48FB1', // Rosa suave
            '#A5D6A7', // Verde claro
        ];

        return (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <View style={styles.serviceGrid}>
                    {services.map((service, index) => (
                        <TouchableOpacity 
                            key={service.id} 
                            style={[
                                styles.serviceCard,
                                { backgroundColor: cardColors[index % cardColors.length] }
                            ]}
                        >
                            <View style={[
                                styles.serviceIconContainer,
                                { backgroundColor: iconBgColors[index % iconBgColors.length] }
                            ]}>
                                <Ionicons 
                                    name={service.icon as any} 
                                    size={24} 
                                    color={iconColors[index % iconColors.length]} 
                                />
                            </View>
                            <Text style={styles.serviceTitle}>{service.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    };

    const renderCategoryContent = () => {
        switch (activeCategory) {
            case 0: // Todo
                return (
                    <>
                        {renderServiceGrid('Estilo de vida', estiloVida)}
                        {renderServiceGrid('Seguros y Vida', segurosVida)}
                        {renderServiceGrid('Mis Finanzas', misFinanzas)}
                        {renderServiceGrid('Experiencias', experiencias)}
                        {renderServiceGrid('Recursos Humanos', recursosHumanos)}
                        {renderServiceGrid('Mis vales', misVales)}
                        {renderServiceGrid('Cumplimiento', cumplimiento)}
                    </>
                );
            case 1: // Life Style
                return (
                    <>
                        {renderServiceGrid('Estilo de vida', estiloVida)}
                    </>
                );
            case 2: // Seguros y Asistencias
                return (
                    <>
                        {renderServiceGrid('Seguros y Vida', segurosVida)}
                    </>
                );
            case 3: // Finanzas
                return (
                    <>
                        {renderServiceGrid('Mis Finanzas', misFinanzas)}
                    </>
                );
            case 4: // Experiencias
                return (
                    <>
                        {renderServiceGrid('Experiencias', experiencias)}
                    </>
                );
            case 5: // Mi RH
                return (
                    <>
                        {renderServiceGrid('Recursos Humanos', recursosHumanos)}
                    </>
                );
            case 6: // Mis vales
                return (
                    <>
                        {renderServiceGrid('Mis vales', misVales)}
                    </>
                );
            case 7: // Cumplimiento
                return (
                    <>
                        {renderServiceGrid('Cumplimiento', cumplimiento)}
                    </>
                );
            default:
                return null;
        }
    };

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

                {/* Dynamic Content based on active category */}
                {renderCategoryContent()}

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
        marginVertical: 20,
        paddingHorizontal: 0,
    },
    categoryTab: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
        minWidth: 120,
        alignItems: 'center',
        marginRight: 2,
        marginLeft: 2,
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
        borderRadius: 20,
        padding: 20,
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 5,
    },
    serviceIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 15,
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
