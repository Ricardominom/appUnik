import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

export default function HomeScreen() {
    const [activeCategory, setActiveCategory] = useState(0);
    
    const categories = [
        { id: 0, name: 'Todo', color: colors.primary[500] },
        { id: 1, name: 'Life Style', color: colors.accent[500] },
        { id: 2, name: 'Seguros y Asistencias', color: colors.secondary[500] },
        { id: 3, name: 'Finanzas', color: colors.primary[600] },
        { id: 4, name: 'Experiencias', color: colors.accent[400] },
        { id: 5, name: 'Mi RH', color: colors.secondary[400] },
        { id: 6, name: 'Mis vales', color: colors.warning },
        { id: 7, name: 'Cumplimiento', color: colors.primary[400] },
    ];

    const segurosVida = [
        { id: 1, title: 'Seguro Empresa', icon: 'business-outline' },
        { id: 2, title: 'Familiares', icon: 'home-outline' },
        { id: 3, title: 'Seguro de Auto', icon: 'car-outline' },
        { id: 4, title: 'Descubre tu Seguro Ideal', icon: 'search-outline' },
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
        // Asignar colores únicos por sección
        const getSectionColors = (sectionTitle: string) => {
            switch (sectionTitle) {
                case 'Estilo de vida':
                    return {
                        cardColor: '#F0F8F0', // Verde muy leve (5% más claro)
                        iconBgColor: '#E8F5E8', // Verde suave
                        iconColor: '#66BB6A', // Verde iOS suave
                    };
                case 'Seguros y Vida':
                    return {
                        cardColor: '#F5F3FF', // Morado muy leve (5% más claro)
                        iconBgColor: '#EDE7F6', // Morado suave
                        iconColor: '#9575CD', // Morado iOS suave
                    };
                case 'Mis Finanzas':
                    return {
                        cardColor: '#FFFAF5', // Naranja muy leve (5% más claro)
                        iconBgColor: '#FFF3E0', // Naranja suave
                        iconColor: '#FFB74D', // Naranja iOS suave
                    };
                case 'Experiencias':
                    return {
                        cardColor: '#F0FDFF', // Cian muy leve (5% más claro)
                        iconBgColor: '#E0F7FA', // Cian suave
                        iconColor: '#4DD0E1', // Cian iOS suave
                    };
                case 'Recursos Humanos':
                    return {
                        cardColor: '#FEF2F5', // Rosa muy leve (5% más claro)
                        iconBgColor: '#FCE4EC', // Rosa suave
                        iconColor: '#F06292', // Rosa iOS suave
                    };
                case 'Mis vales':
                    return {
                        cardColor: '#FFFEF8', // Amarillo muy leve (5% más claro)
                        iconBgColor: '#FFF8E1', // Amarillo suave
                        iconColor: '#FFD54F', // Amarillo iOS suave
                    };
                case 'Cumplimiento':
                    return {
                        cardColor: '#F0FBF8', // Turquesa muy leve (5% más claro)
                        iconBgColor: '#E0F2F1', // Turquesa suave
                        iconColor: '#4DB6AC', // Turquesa iOS suave
                    };
                default:
                    return {
                        cardColor: '#FAF5FF', // Morado muy leve por defecto
                        iconBgColor: '#F3E5F5', // Morado suave
                        iconColor: '#BA68C8', // Morado iOS suave
                    };
            }
        };

        const sectionColors = getSectionColors(title);

        return (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <View style={styles.serviceGrid}>
                    {services.map((service, index) => (
                        <TouchableOpacity 
                            key={service.id} 
                            style={[
                                styles.serviceCard,
                                { backgroundColor: sectionColors.cardColor }
                            ]}
                        >
                            <View style={[
                                styles.serviceIconContainer,
                                { backgroundColor: sectionColors.iconBgColor }
                            ]}>
                                <Ionicons 
                                    name={service.icon as any} 
                                    size={24} 
                                    color={sectionColors.iconColor} 
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
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Buenos días</Text>
                    <Text style={styles.subGreeting}>¿Qué haremos hoy?</Text>
                    
                    {/* Search Bar */}
                    <TouchableOpacity style={styles.searchContainer}>
                        <Ionicons name="search-outline" size={18} color="#8E8E93" style={styles.searchIcon} />
                        <Text style={styles.searchText}>Buscar servicios...</Text>
                    </TouchableOpacity>
                </View>

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
        backgroundColor: colors.neutral[50],
    },
    header: {
        backgroundColor: colors.neutral[50],
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 20,
    },
    headerTitle: {
        color: colors.neutral[900],
        fontSize: 34.3,
        fontWeight: '700',
        textAlign: 'left',
        marginBottom: 5,
        letterSpacing: -0.5,
    },
    subGreeting: {
        fontSize: 19.3,
        color: colors.neutral[400],
        marginTop: 2,
        fontWeight: '400',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginTop: 16,
        borderWidth: 1,
        borderColor: colors.neutral[200],
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 1,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchText: {
        color: colors.neutral[400],
        fontSize: 16,
        fontWeight: '400',
    },
    content: {
        flex: 1,
    },
    categoryTabs: {
        marginVertical: 16,
        paddingHorizontal: 5,
    },
    categoryTab: {
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 20,
        minWidth: 100,
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 5,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.neutral[200],
    },
    activeTab: {
        backgroundColor: colors.primary[500],
        borderColor: colors.primary[500],
        shadowColor: colors.primary[500],
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    categoryText: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.neutral[900],
    },
    activeCategoryText: {
        color: colors.white,
        fontWeight: '600',
    },
    section: {
        marginBottom: 32,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: colors.neutral[900],
        marginBottom: 16,
        letterSpacing: -0.3,
    },
    serviceGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    serviceCard: {
        width: '48%',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        alignItems: 'center',
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.04,
        shadowRadius: 8,
        elevation: 1,
        borderWidth: 0.5,
        borderColor: colors.neutral[200],
    },
    serviceIconContainer: {
        width: 44,
        height: 44,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    serviceTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.neutral[900],
        textAlign: 'center',
        lineHeight: 20,
        letterSpacing: -0.1,
    },
    bottomSpacing: {
        height: 100,
    },
});
