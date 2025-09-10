import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

interface SeguroDeAutoProps {
    onBack: () => void;
}

export const SeguroDeAuto: React.FC<SeguroDeAutoProps> = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        { id: 0, name: 'Seguros y Asistencias', key: 'seguros' },
        { id: 1, name: 'Seguro de Auto', key: 'seguro-auto' },
        { id: 2, name: 'Asistencia Vial', key: 'asistencia-vial' }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 0: // Seguros y Asistencias
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.sectionTitle}>Seguro de Auto</Text>
                        
                        <View style={styles.polizasSection}>
                            <Text style={styles.polizasTitle}>Tus Pólizas</Text>
                            
                            <View style={styles.polizaCard}>
                                <Text style={styles.polizaPlan}>Cobertura Amplia</Text>
                                <Text style={styles.polizaDetails}>Plan Vehicular</Text>
                                <Text style={styles.polizaNumber}>xxxx - xxxx - xxxx - xxxx</Text>
                                <Text style={styles.polizaType}>Seguro de Auto</Text>
                                <TouchableOpacity style={styles.detailsButton}>
                                    <Text style={styles.detailsButtonText}>Ver detalles</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <TouchableOpacity style={styles.reportarButton}>
                                <Text style={styles.reportarButtonText}>Reporta tu siniestro</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.contactSection}>
                            <Text style={styles.contactSectionTitle}>Contactanos</Text>
                            <View style={styles.contactButtons}>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="call" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton}>
                                    <MaterialIcons name="build" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="mail" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                );
            
            case 1: // Seguro de Auto
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.sectionTitle}>Seguro de Auto</Text>
                        
                        <View style={styles.polizasSection}>
                            <Text style={styles.polizasTitle}>Tus Pólizas</Text>
                            
                            <View style={styles.polizaCard}>
                                <Text style={styles.polizaPlan}>Cobertura Amplia</Text>
                                <Text style={styles.polizaDetails}>Plan Vehicular</Text>
                                <Text style={styles.polizaNumber}>xxxx - xxxx - xxxx - xxxx</Text>
                                <Text style={styles.polizaType}>Seguro de Auto</Text>
                                <TouchableOpacity style={styles.detailsButton}>
                                    <Text style={styles.detailsButtonText}>Ver detalles</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <TouchableOpacity style={styles.reportarButton}>
                                <Text style={styles.reportarButtonText}>Reporta tu siniestro</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Servicios del seguro de auto */}
                        <View style={styles.servicesSection}>
                            <Text style={styles.servicesSectionTitle}>Servicios Incluidos</Text>
                            <View style={styles.servicesGrid}>
                                <TouchableOpacity style={styles.serviceItem}>
                                    <View style={styles.serviceIcon}>
                                        <Ionicons name="car-outline" size={24} color={colors.primary[500]} />
                                    </View>
                                    <Text style={styles.serviceTitle}>Daños Materiales</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.serviceItem}>
                                    <View style={styles.serviceIcon}>
                                        <MaterialIcons name="local-hospital" size={24} color={colors.primary[500]} />
                                    </View>
                                    <Text style={styles.serviceTitle}>Gastos Médicos</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.serviceItem}>
                                    <View style={styles.serviceIcon}>
                                        <Ionicons name="shield-outline" size={24} color={colors.primary[500]} />
                                    </View>
                                    <Text style={styles.serviceTitle}>Robo Total</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.serviceItem}>
                                    <View style={styles.serviceIcon}>
                                        <MaterialIcons name="build" size={24} color={colors.primary[500]} />
                                    </View>
                                    <Text style={styles.serviceTitle}>Asistencia Vial</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.serviceItem}>
                                    <View style={styles.serviceIcon}>
                                        <Ionicons name="people-outline" size={24} color={colors.primary[500]} />
                                    </View>
                                    <Text style={styles.serviceTitle}>Responsabilidad Civil</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.serviceItem}>
                                    <View style={styles.serviceIcon}>
                                        <MaterialIcons name="gavel" size={24} color={colors.primary[500]} />
                                    </View>
                                    <Text style={styles.serviceTitle}>Defensa Jurídica</Text>
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
                                    <MaterialIcons name="build" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="mail" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                );
            
            case 2: // Asistencia Vial
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.sectionTitle}>Asistencia Vial</Text>
                        
                        <View style={styles.polizasSection}>
                            <Text style={styles.polizasTitle}>Servicios de Asistencia</Text>
                            
                            <View style={styles.servicesGrid}>
                                <TouchableOpacity style={styles.serviceItem}>
                                    <View style={styles.serviceIcon}>
                                        <MaterialIcons name="build" size={24} color={colors.primary[500]} />
                                    </View>
                                    <Text style={styles.serviceTitle}>Grúa</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.serviceItem}>
                                    <View style={styles.serviceIcon}>
                                        <Ionicons name="battery-charging-outline" size={24} color={colors.primary[500]} />
                                    </View>
                                    <Text style={styles.serviceTitle}>Pasa Corriente</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.serviceItem}>
                                    <View style={styles.serviceIcon}>
                                        <MaterialIcons name="local-gas-station" size={24} color={colors.primary[500]} />
                                    </View>
                                    <Text style={styles.serviceTitle}>Combustible</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.serviceItem}>
                                    <View style={styles.serviceIcon}>
                                        <Ionicons name="key-outline" size={24} color={colors.primary[500]} />
                                    </View>
                                    <Text style={styles.serviceTitle}>Cerrajería</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.serviceItem}>
                                    <View style={styles.serviceIcon}>
                                        <MaterialIcons name="tire-repair" size={24} color={colors.primary[500]} />
                                    </View>
                                    <Text style={styles.serviceTitle}>Cambio de Llanta</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.serviceItem}>
                                    <View style={styles.serviceIcon}>
                                        <Ionicons name="call-outline" size={24} color={colors.primary[500]} />
                                    </View>
                                    <Text style={styles.serviceTitle}>Línea de Emergencia</Text>
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
                                    <MaterialIcons name="build" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="mail" size={24} color="#FFFFFF" />
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
        maxHeight: 60,
        marginBottom: 8,
    },
    tabsContent: {
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginRight: 12,
        borderRadius: 25,
        backgroundColor: '#E5E5E5',
        minHeight: 44,
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
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
        marginBottom: 30,
    },
    polizasSection: {
        marginBottom: 40,
    },
    polizasTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 20,
        textAlign: 'left',
    },
    polizaCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 2,
        borderColor: colors.primary[300],
    },
    polizaPlan: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    polizaDetails: {
        fontSize: 14,
        color: '#666',
        marginBottom: 12,
    },
    polizaNumber: {
        fontSize: 16,
        fontWeight: '500',
        color: '#666',
        marginBottom: 8,
    },
    polizaType: {
        fontSize: 14,
        color: '#666',
        marginBottom: 16,
    },
    detailsButton: {
        alignSelf: 'flex-end',
    },
    detailsButtonText: {
        color: colors.primary[500],
        fontSize: 14,
        fontWeight: '600',
    },
    reportarButton: {
        backgroundColor: colors.primary[400],
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignSelf: 'center',
        marginBottom: 30,
    },
    reportarButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    servicesSection: {
        marginBottom: 30,
    },
    servicesSectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 16,
        textAlign: 'left',
    },
    servicesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
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
    contactButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
    },
    contactButton: {
        backgroundColor: colors.primary[500],
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        minWidth: 60,
        minHeight: 60,
    },
});