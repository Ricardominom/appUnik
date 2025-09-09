import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { 
    SegurosVidaSection, 
    SegurosEmpresaSubcategory, 
    FamiliaresSubcategory, 
    FinanzasSection, 
    EstiloVidaSection,
    ExperienciasSection,
    RecursosHumanosSection,
    MisValesSection,
    CumplimientoSection
} from '@/components/home';

export default function HomeScreen() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
    const [showSubcategories, setShowSubcategories] = useState(false);
    
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

    // Función para manejar click en tarjetas principales
    const handleServiceCardPress = (title: string) => {
        if (title === 'Seguro Empresa') {
            setSelectedSubcategory('Seguros empresa');
            setShowSubcategories(true);
        } else if (title === 'Familiares') {
            setSelectedSubcategory('Seguros familiares');
            setShowSubcategories(true);
        }
    };

    // Función para volver atrás
    const handleBackPress = () => {
        setShowSubcategories(false);
        setSelectedSubcategory(null);
    };

    const renderCategoryTabs = () => {
        if (showSubcategories) {
            // Mostrar pestañas específicas para subcategorías
            const subcategoryTabs = selectedSubcategory === 'Seguros empresa' 
                ? [{ name: 'Seguros y vida' }, { name: 'Seguros empresa' }]
                : [{ name: 'Seguros y vida' }, { name: 'Familiares' }];
            
            return (
                <View style={styles.categoryTabs}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {subcategoryTabs.map((tab, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.categoryTab,
                                    { backgroundColor: '#E8E3FF' },
                                    index === 1 && {
                                        backgroundColor: '#9575CD',
                                    }
                                ]}
                                onPress={() => {
                                    if (index === 0) {
                                        handleBackPress();
                                    }
                                }}
                            >
                                <Text style={[
                                    styles.categoryText,
                                    { color: '#9575CD' },
                                    index === 1 && {
                                        color: '#FFFFFF',
                                        fontWeight: '600',
                                    }
                                ]}>
                                    {tab.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            );
        }
        
        return (
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
    };

    const renderCategoryContent = () => {
        // Si estamos mostrando subcategorías, renderizar el contenido específico
        if (showSubcategories) {
            if (selectedSubcategory === 'Seguros empresa') {
                return (
                    <>
                        <SegurosEmpresaSubcategory onServicePress={handleServiceCardPress} />
                    </>
                );
            } else if (selectedSubcategory === 'Seguros familiares') {
                return (
                    <>
                        <FamiliaresSubcategory onServicePress={handleServiceCardPress} />
                    </>
                );
            }
        }

        // Contenido normal por categorías
        switch (activeCategory) {
            case 0: // Todo
                return (
                    <>
                        <EstiloVidaSection onServicePress={handleServiceCardPress} />
                        <SegurosVidaSection onServicePress={handleServiceCardPress} />
                        <FinanzasSection onServicePress={handleServiceCardPress} />
                        <ExperienciasSection onServicePress={handleServiceCardPress} />
                        <RecursosHumanosSection onServicePress={handleServiceCardPress} />
                        <MisValesSection onServicePress={handleServiceCardPress} />
                        <CumplimientoSection onServicePress={handleServiceCardPress} />
                    </>
                );
            case 1: // Life Style
                return (
                    <>
                        <EstiloVidaSection onServicePress={handleServiceCardPress} />
                    </>
                );
            case 2: // Seguros y Asistencias
                return (
                    <>
                        <SegurosVidaSection onServicePress={handleServiceCardPress} />
                    </>
                );
            case 3: // Finanzas
                return (
                    <>
                        <FinanzasSection onServicePress={handleServiceCardPress} />
                    </>
                );
            case 4: // Experiencias
                return (
                    <>
                        <ExperienciasSection onServicePress={handleServiceCardPress} />
                    </>
                );
            case 5: // Mi RH
                return (
                    <>
                        <RecursosHumanosSection onServicePress={handleServiceCardPress} />
                    </>
                );
            case 6: // Mis vales
                return (
                    <>
                        <MisValesSection onServicePress={handleServiceCardPress} />
                    </>
                );
            case 7: // Cumplimiento
                return (
                    <>
                        <CumplimientoSection onServicePress={handleServiceCardPress} />
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

                    {/* Promotional Card */}
                    <View style={styles.promotionalCard}>
                        <View style={styles.promotionalContent}>
                            <View style={styles.promotionalIconContainer}>
                                <Ionicons name="sparkles" size={24} color="#8B5CF6" />
                            </View>
                            <View style={styles.promotionalTextContainer}>
                                <Text style={styles.promotionalTitle}>Asistenta de seguros</Text>
                                <Text style={styles.promotionalSubtitle}>
                                    Encuentra la mejor opción{'\n'}en segundos
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.promotionalButton}>
                                <Text style={styles.promotionalButtonText}>Empezar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    promotionalCard: {
        backgroundColor: '#F8F7FF',
        borderRadius: 20,
        padding: 20,
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#E8E3FF',
        shadowColor: '#8B5CF6',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 4,
    },
    promotionalContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    promotionalIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: '#EDE7F6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    promotionalTextContainer: {
        flex: 1,
        marginRight: 16,
    },
    promotionalTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#4C1D95',
        marginBottom: 4,
        letterSpacing: -0.2,
    },
    promotionalSubtitle: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
        fontWeight: '400',
    },
    promotionalButton: {
        backgroundColor: '#8B5CF6',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 12,
        shadowColor: '#8B5CF6',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 3,
    },
    promotionalButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
        letterSpacing: -0.1,
    },
    bottomSpacing: {
        height: 100,
    },
});
