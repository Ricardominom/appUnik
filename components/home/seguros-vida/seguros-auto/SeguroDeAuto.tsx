import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

interface SeguroDeAutoProps {
    onBack: () => void;
}

export const SeguroDeAuto: React.FC<SeguroDeAutoProps> = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState(1);
    const [selectedVehicle, setSelectedVehicle] = useState('BMW Serie 2');

    const tabs = [
        { id: 0, name: 'Seguros y Asistencias', key: 'seguros' },
        { id: 1, name: 'Seguro de Auto', key: 'seguro-auto' }
    ];

    const vehicles = [
        { id: 1, name: 'BMW Serie 2', selected: true },
        { id: 2, name: 'Mazda 3', selected: false }
    ];

    const activeClaimsData = [
        {
            id: 1,
            type: 'Repuesto de cristal',
            vehicle: 'BMW Serie 2 2024',
            icon: 'car-outline',
            selected: false
        },
        {
            id: 2,
            type: 'Robo de faros',
            vehicle: 'BMW Serie 2 2024',
            icon: 'car-outline',
            selected: true
        }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 0: // Seguros y Asistencias
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.sectionTitle}>Seguros de Auto</Text>
                        
                        {/* Tus Pólizas Section */}
                        <View style={styles.polizasSection}>
                            <View style={styles.polizasHeader}>
                                <Text style={styles.polizasTitle}>Tus Pólizas</Text>
                                <TouchableOpacity style={styles.nuevaPolizaButton}>
                                    <Text style={styles.nuevaPolizaButtonText}>Nueva Póliza +</Text>
                                </TouchableOpacity>
                            </View>
                            
                            {/* Vehicle Selection Tabs */}
                            <View style={styles.vehicleTabsContainer}>
                                {vehicles.map((vehicle) => (
                                    <TouchableOpacity
                                        key={vehicle.id}
                                        style={[
                                            styles.vehicleTab,
                                            vehicle.selected && styles.selectedVehicleTab
                                        ]}
                                        onPress={() => setSelectedVehicle(vehicle.name)}
                                    >
                                        <Text style={[
                                            styles.vehicleTabText,
                                            vehicle.selected && styles.selectedVehicleTabText
                                        ]}>
                                            {vehicle.name}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            {/* Policy Card */}
                            <View style={styles.policyCard}>
                                <View style={styles.policyHeader}>
                                    <View style={styles.carIconContainer}>
                                        <Ionicons name="car-outline" size={32} color={colors.primary[500]} />
                                    </View>
                                    <View style={styles.policyInfo}>
                                        <Text style={styles.policyVehicle}>BMW Serie 2 2024</Text>
                                        <Text style={styles.policyNumber}>xxxx - xxxx - xxxx - xxxx</Text>
                                        <TouchableOpacity>
                                            <Text style={styles.verDetallesText}>Ver detalles</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.policyDates}>
                                        <Text style={styles.policyLabel}>Vencimiento</Text>
                                        <Text style={styles.policyDate}>2027-12-31</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* Reclamos Activos Section */}
                        <View style={styles.reclamosSection}>
                            <View style={styles.reclamosHeader}>
                                <Text style={styles.reclamosTitle}>Reclamos Activos</Text>
                                <TouchableOpacity style={styles.reportarSiniestroButton}>
                                    <Text style={styles.reportarSiniestroText}>Reportar Siniestro +</Text>
                                </TouchableOpacity>
                            </View>

                            {activeClaimsData.map((claim) => (
                                <TouchableOpacity 
                                    key={claim.id}
                                    style={[
                                        styles.claimCard,
                                        claim.selected && styles.selectedClaimCard
                                    ]}
                                >
                                    <View style={styles.claimIconContainer}>
                                        <Ionicons name={claim.icon as any} size={24} color={colors.primary[500]} />
                                    </View>
                                    <View style={styles.claimInfo}>
                                        <Text style={styles.claimType}>{claim.type}</Text>
                                        <Text style={styles.claimVehicle}>{claim.vehicle}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Contact Section */}
                        <View style={styles.contactSection}>
                            <Text style={styles.contactTitle}>contacto</Text>
                            <View style={styles.contactButtons}>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="call" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="time" size={24} color="#FFFFFF" />
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
                        <Text style={styles.sectionTitle}>Seguros de Auto</Text>
                        
                        {/* Policy Card - Simplified for second tab */}
                        <View style={styles.policyCard}>
                            <View style={styles.policyHeader}>
                                <View style={styles.carIconContainer}>
                                    <Ionicons name="car-outline" size={32} color={colors.primary[500]} />
                                </View>
                                <View style={styles.policyInfo}>
                                    <Text style={styles.policyVehicle}>BMW Serie 2 2024</Text>
                                    <Text style={styles.policyNumber}>xxxx - xxxx - xxxx - xxxx</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.verDetallesText}>Ver detalles</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.policyDates}>
                                    <Text style={styles.policyLabel}>Vencimiento</Text>
                                    <Text style={styles.policyDate}>2027-12-31</Text>
                                </View>
                            </View>
                        </View>

                        {/* Reclamos Activos Section */}
                        <View style={styles.reclamosSection}>
                            <View style={styles.reclamosHeader}>
                                <Text style={styles.reclamosTitle}>Reclamos Activos</Text>
                                <TouchableOpacity style={styles.reportarSiniestroButton}>
                                    <Text style={styles.reportarSiniestroText}>Reportar Siniestro +</Text>
                                </TouchableOpacity>
                            </View>

                            {activeClaimsData.map((claim) => (
                                <TouchableOpacity 
                                    key={claim.id}
                                    style={[
                                        styles.claimCard,
                                        claim.selected && styles.selectedClaimCard
                                    ]}
                                >
                                    <View style={styles.claimIconContainer}>
                                        <Ionicons name={claim.icon as any} size={24} color={colors.primary[500]} />
                                    </View>
                                    <View style={styles.claimInfo}>
                                        <Text style={styles.claimType}>{claim.type}</Text>
                                        <Text style={styles.claimVehicle}>{claim.vehicle}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Contact Section */}
                        <View style={styles.contactSection}>
                            <Text style={styles.contactTitle}>contacto</Text>
                            <View style={styles.contactButtons}>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="call" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="time" size={24} color="#FFFFFF" />
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
        marginBottom: 30,
    },
    polizasHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    polizasTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    nuevaPolizaButton: {
        backgroundColor: 'transparent',
    },
    nuevaPolizaButtonText: {
        color: colors.primary[500],
        fontSize: 14,
        fontWeight: '500',
    },
    vehicleTabsContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        gap: 12,
    },
    vehicleTab: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#E5E5E5',
    },
    selectedVehicleTab: {
        backgroundColor: '#333',
    },
    vehicleTabText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    selectedVehicleTabText: {
        color: '#FFFFFF',
    },
    policyCard: {
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
    policyHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    carIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F8F9FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    policyInfo: {
        flex: 1,
    },
    policyVehicle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    policyNumber: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    verDetallesText: {
        fontSize: 14,
        color: colors.primary[500],
        fontWeight: '500',
    },
    policyDates: {
        alignItems: 'flex-end',
    },
    policyLabel: {
        fontSize: 12,
        color: '#666',
        marginBottom: 2,
    },
    policyDate: {
        fontSize: 14,
        color: '#333',
        fontWeight: '500',
    },
    reclamosSection: {
        marginBottom: 30,
    },
    reclamosHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    reclamosTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    reportarSiniestroButton: {
        backgroundColor: 'transparent',
    },
    reportarSiniestroText: {
        color: colors.primary[500],
        fontSize: 14,
        fontWeight: '500',
    },
    claimCard: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
    },
    selectedClaimCard: {
        borderColor: colors.primary[500],
        backgroundColor: '#FFFFFF',
    },
    claimIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F8F9FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    claimInfo: {
        flex: 1,
    },
    claimType: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginBottom: 4,
    },
    claimVehicle: {
        fontSize: 14,
        color: '#666',
    },
    contactSection: {
        marginTop: 20,
        alignItems: 'center',
    },
    contactTitle: {
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