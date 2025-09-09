import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

interface GastosMedicosMenoresProps {
    onBack: () => void;
}

export const GastosMedicosMenores: React.FC<GastosMedicosMenoresProps> = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        { id: 0, name: 'Seguros y Asistencias', key: 'seguros' },
        { id: 1, name: 'Gastos Médicos Menores', key: 'gastos' },
        { id: 2, name: 'Consultas sin costo', key: 'consultas' },
        { id: 3, name: 'Costo preferencial', key: 'costo-preferencial' }
    ];

    // Servicios para la pestaña "Consultas sin costo"
    const consultasSinCostoServices = [
        { 
            icon: <Ionicons name="call-outline" size={24} color={colors.primary[500]} />,
            title: 'Medico por telefono',
            description: 'Consulta médica telefónica'
        },
        { 
            icon: <Ionicons name="videocam-outline" size={24} color={colors.primary[500]} />,
            title: 'videoconsulta',
            description: 'Consulta médica por video'
        },
        { 
            icon: <MaterialIcons name="person-outline" size={24} color={colors.primary[500]} />,
            title: 'Internista presencial',
            description: 'Consulta presencial con internista'
        },
        { 
            icon: <FontAwesome5 name="eye" size={20} color={colors.primary[500]} />,
            title: 'Pediatra presencial',
            description: 'Consulta presencial pediátrica'
        },
        { 
            icon: <MaterialIcons name="psychology" size={24} color={colors.primary[500]} />,
            title: 'Nutriologo Telefonico',
            description: 'Consulta nutricional telefónica'
        },
        { 
            icon: <Ionicons name="medical-outline" size={24} color={colors.primary[500]} />,
            title: 'Psicologo telefonico',
            description: 'Consulta psicológica telefónica'
        },
        { 
            icon: <MaterialIcons name="local-hospital" size={24} color={colors.primary[500]} />,
            title: 'Medico general',
            description: 'Consulta con médico general'
        },
        { 
            icon: <FontAwesome5 name="user-md" size={20} color={colors.primary[500]} />,
            title: 'Ginecologo Presencial',
            description: 'Consulta ginecológica presencial'
        },
        { 
            icon: <MaterialIcons name="medical-services" size={24} color={colors.primary[500]} />,
            title: 'Evaluacion Medica',
            description: 'Evaluación médica completa'
        }
    ];

    // Servicios para la pestaña "Costo preferencial"
    const costoPreferencialServices = [
        { 
            icon: <FontAwesome5 name="user-md" size={20} color={colors.primary[500]} />,
            title: 'Especialista Presencial',
            description: 'Consulta con especialista'
        },
        { 
            icon: <MaterialIcons name="local-shipping" size={24} color={colors.primary[500]} />,
            title: 'funerario',
            description: 'Servicios funerarios'
        },
        { 
            icon: <MaterialIcons name="psychology" size={24} color={colors.primary[500]} />,
            title: 'Psicologo Presencial',
            description: 'Consulta psicológica presencial'
        },
        { 
            icon: <MaterialIcons name="local-shipping" size={24} color={colors.primary[500]} />,
            title: 'Ambulancia',
            description: 'Servicio de ambulancia'
        },
        { 
            icon: <MaterialIcons name="restaurant" size={24} color={colors.primary[500]} />,
            title: 'Nutriologo Presencial',
            description: 'Consulta nutricional presencial'
        },
        { 
            icon: <FontAwesome5 name="eye" size={20} color={colors.primary[500]} />,
            title: 'Atencion Visual',
            description: 'Consulta oftalmológica'
        },
        { 
            icon: <MaterialIcons name="local-hospital" size={24} color={colors.primary[500]} />,
            title: 'Medico en casa',
            description: 'Consulta médica domiciliaria'
        },
        { 
            icon: <FontAwesome5 name="tooth" size={20} color={colors.primary[500]} />,
            title: 'Atencion Dental',
            description: 'Consulta dental'
        },
        { 
            icon: <MaterialIcons name="psychology" size={24} color={colors.primary[500]} />,
            title: 'Psiquiatra',
            description: 'Consulta psiquiátrica'
        }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 1: // Gastos Médicos Menores (ahora muestra el contenido que antes tenía Seguros y Asistencias)
                return (
                    <View style={styles.tabContent}>
                        <View style={styles.serviceCard}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>Premier</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.cardNumber}>xxxx - xxxx - xxxx - xxxx</Text>
                                <Text style={styles.cardSubtitle}>Gastos Medicos Menores</Text>
                                <TouchableOpacity style={styles.detailsButton}>
                                    <Text style={styles.detailsButtonText}>Ver detalles</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        <View style={styles.contactSection}>
                            <Text style={styles.contactSectionTitle}>Contactanos</Text>
                            <View style={styles.contactButtons}>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="call" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="chatbubbles" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="location" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        <View style={styles.contactSection}>
                            <View style={styles.contactGrid}>
                                <TouchableOpacity style={styles.consultaButton}>
                                    <View style={styles.consultaIcon}>
                                        <Ionicons name="call" size={24} color={colors.primary[500]} />
                                    </View>
                                    <Text style={styles.consultaText}>Consultas sin costo</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.consultaButton}>
                                    <View style={styles.consultaIcon}>
                                        <MaterialIcons name="attach-money" size={24} color={colors.primary[500]} />
                                    </View>
                                    <Text style={styles.consultaText}>Consultas costo{'\n'}preferencial</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                );
            
            case 2: // Consultas sin costo
                return (
                    <View style={styles.tabContent}>
                        <View style={styles.serviceCard}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>Premier</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.cardNumber}>xxxx - xxxx - xxxx - xxxx</Text>
                                <Text style={styles.cardSubtitle}>Gastos Medicos Menores</Text>
                                <TouchableOpacity style={styles.detailsButton}>
                                    <Text style={styles.detailsButtonText}>Ver detalles</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        <View style={styles.servicesGrid}>
                            {consultasSinCostoServices.map((service, index) => (
                                <TouchableOpacity key={index} style={styles.serviceItem}>
                                    <View style={styles.serviceIcon}>
                                        {service.icon}
                                    </View>
                                    <Text style={styles.serviceTitle}>{service.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        
                        <View style={styles.contactSection}>
                            <Text style={styles.contactSectionTitle}>Contactanos</Text>
                            <View style={styles.contactButtons}>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="call" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="chatbubbles" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="location" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                );
            
            case 3: // Costo preferencial
                return (
                    <View style={styles.tabContent}>
                        <View style={styles.serviceCard}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>Premier</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.cardNumber}>xxxx - xxxx - xxxx - xxxx</Text>
                                <Text style={styles.cardSubtitle}>Gastos Medicos Menores</Text>
                                <TouchableOpacity style={styles.detailsButton}>
                                    <Text style={styles.detailsButtonText}>Ver detalles</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        <View style={styles.servicesGrid}>
                            {costoPreferencialServices.map((service, index) => (
                                <TouchableOpacity key={index} style={styles.serviceItem}>
                                    <View style={styles.serviceIcon}>
                                        {service.icon}
                                    </View>
                                    <Text style={styles.serviceTitle}>{service.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        
                        <View style={styles.contactSection}>
                            <Text style={styles.contactSectionTitle}>Contactanos</Text>
                            <View style={styles.contactButtons}>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="call" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="chatbubbles" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="location" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                );
            
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={18} color="#8E8E93" />
                <Text style={styles.searchText}>Search...</Text>
            </View>

            {/* Tabs */}
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                style={styles.tabsContainer}
                contentContainerStyle={styles.tabsContent}
            >
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab.id}
                        style={[
                            styles.tab,
                            activeTab === tab.id && styles.activeTab
                        ]}
                        onPress={() => {
                            if (tab.id === 0) {
                                onBack();
                            } else {
                                setActiveTab(tab.id);
                            }
                        }}
                    >
                        <Text style={[
                            styles.tabText,
                            activeTab === tab.id && styles.activeTabText
                        ]}>
                            {tab.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Tab Content */}
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {renderTabContent()}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: 35,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
    },
    searchText: {
        marginLeft: 8,
        color: '#8E8E93',
        fontSize: 16,
    },
    tabsContainer: {
        maxHeight: 60, // Altura fija para las pestañas
        marginBottom: 8,
    },
    tabsContent: {
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    tab: {
        paddingHorizontal: 20, // Más padding horizontal
        paddingVertical: 12, // Más padding vertical
        marginRight: 12,
        borderRadius: 25, // Más redondeado
        backgroundColor: '#E5E5E5',
        minHeight: 44, // Altura mínima estándar iOS
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: colors.primary[500],
    },
    tabText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
        textAlign: 'center',
    },
    activeTabText: {
        color: '#FFFFFF',
        fontWeight: '600',
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    tabContent: {
        paddingBottom: 120,
    },
    serviceCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 2,
        borderColor: colors.primary[300],
    },
    cardHeader: {
        marginBottom: 12,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    cardContent: {
        gap: 8,
    },
    cardNumber: {
        fontSize: 16,
        fontWeight: '500',
        color: '#666',
        marginBottom: 4,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 12,
    },
    detailsButton: {
        alignSelf: 'flex-end',
    },
    detailsButtonText: {
        color: colors.primary[500],
        fontSize: 14,
        fontWeight: '600',
    },
    servicesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 30,
        gap: 8,
    },
    serviceItem: {
        width: '31%',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 12,
        alignItems: 'center',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
        minHeight: 100,
        justifyContent: 'center',
    },
    serviceIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F8F9FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 6,
    },
    serviceTitle: {
        fontSize: 11,
        textAlign: 'center',
        color: '#333',
        fontWeight: '500',
        lineHeight: 13,
    },
    contactSection: {
        marginTop: 20,
    },
    contactSectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 16,
        textAlign: 'center',
    },
    contactGrid: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    contactButton: {
        backgroundColor: colors.primary[500],
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        minWidth: 80,
    },
    contactButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
    },
    contactText: {
        color: '#333',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 8,
        fontWeight: '500',
    },
    consultaButton: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        marginHorizontal: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    consultaIcon: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#F8F9FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    consultaText: {
        color: '#333',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: 18,
    },
});
