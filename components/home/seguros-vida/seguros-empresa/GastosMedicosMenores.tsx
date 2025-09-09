import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { TabContainer, ContactSection, PolicyCard, SearchBar } from '../../shared';
import type { Tab, PolicyCardData } from '../../shared';

interface GastosMedicosMenoresProps {
    onBack: () => void;
}

export const GastosMedicosMenores: React.FC<GastosMedicosMenoresProps> = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs: Tab[] = [
        { id: 0, name: 'Seguros y Asistencias', key: 'seguros' },
        { id: 1, name: 'Gastos Médicos Menores', key: 'gastos' },
        { id: 2, name: 'Consultas sin costo', key: 'consultas' },
        { id: 3, name: 'Costo preferencial', key: 'costo-preferencial' }
    ];

    const policyData: PolicyCardData = {
        title: 'Premier',
        number: 'xxxx - xxxx - xxxx - xxxx',
        subtitle: 'Gastos Medicos Menores'
    };

    const handleTabPress = (tabId: number) => {
        if (tabId === 0) {
            onBack();
        } else {
            setActiveTab(tabId);
        }
    };

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
                        <PolicyCard 
                            policy={policyData}
                            onDetailsPress={() => console.log('Details pressed')}
                        />
                        
                        <ContactSection />
                        
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
                        <PolicyCard 
                            policy={policyData}
                            onDetailsPress={() => console.log('Details pressed')}
                        />
                        
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
                        
                        <ContactSection />
                    </View>
                );
            
            case 3: // Costo preferencial
                return (
                    <View style={styles.tabContent}>
                        <PolicyCard 
                            policy={policyData}
                            onDetailsPress={() => console.log('Details pressed')}
                        />
                        
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
                        
                        <ContactSection />
                    </View>
                );
            
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <SearchBar />
            <TabContainer 
                tabs={tabs}
                activeTab={activeTab}
                onTabPress={handleTabPress}
            />

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
    content: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    tabContent: {
        paddingBottom: 120,
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
    contactGrid: {
        flexDirection: 'row',
        justifyContent: 'space-around',
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
