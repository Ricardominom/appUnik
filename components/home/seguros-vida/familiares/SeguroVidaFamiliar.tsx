import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

interface SeguroVidaFamiliarProps {
    onBack: () => void;
}

export const SeguroVidaFamiliar: React.FC<SeguroVidaFamiliarProps> = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState(1); // Empezar en "Seguro de Vida"
    const [activeMember, setActiveMember] = useState(0); // Empezar en "Mamá"

    const tabs = [
        { id: 0, name: 'Seguros y Asistencias', key: 'seguros' },
        { id: 1, name: 'Seguro de Vida', key: 'seguro-vida' },
        { id: 2, name: 'Extension Familiar', key: 'extension-familiar' }
    ];

    const familyMembers = [
        { id: 0, name: 'Mamá', active: true },
        { id: 1, name: 'Papá', active: true },
        { id: 2, name: 'Hijo 1', active: true }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 0: // Seguros y Asistencias
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.sectionTitle}>Seguro de Vida</Text>
                        
                        <View style={styles.polizasSection}>
                            <View style={styles.polizasHeader}>
                                <Text style={styles.polizasTitle}>Tus Polizas</Text>
                                <TouchableOpacity style={styles.nuevaPolizaButton}>
                                    <Text style={styles.nuevaPolizaButtonText}>Nueva Poliza +</Text>
                                </TouchableOpacity>
                            </View>
                            
                            {/* Family Members Tabs */}
                            <View style={styles.membersContainer}>
                                {familyMembers.map((member) => (
                                    <TouchableOpacity
                                        key={member.id}
                                        style={[
                                            styles.memberTab,
                                            activeMember === member.id && styles.activeMemberTab,
                                            !member.active && styles.inactiveMemberTab
                                        ]}
                                        onPress={() => setActiveMember(member.id)}
                                    >
                                        <Text style={[
                                            styles.memberTabText,
                                            activeMember === member.id && styles.activeMemberTabText,
                                            !member.active && styles.inactiveMemberTabText
                                        ]}>
                                            {member.name}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            
                            <View style={styles.polizaCard}>
                                <Text style={styles.polizaPlan}>Elite</Text>
                                <Text style={styles.polizaDetails}>Plan Familiar</Text>
                                <Text style={styles.polizaNumber}>xxxx - xxxx - xxxx - xxxx</Text>
                                <Text style={styles.polizaType}>Seguro de Vida</Text>
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
                                    <MaterialIcons name="medical-services" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="mail" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                );
            
            case 1: // Seguro de Vida
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.sectionTitle}>Seguro de Vida</Text>
                        
                        <View style={styles.polizasSection}>
                            <View style={styles.polizasHeader}>
                                <Text style={styles.polizasTitle}>Tus Polizas</Text>
                                <TouchableOpacity style={styles.nuevaPolizaButton}>
                                    <Text style={styles.nuevaPolizaButtonText}>Nueva Poliza +</Text>
                                </TouchableOpacity>
                            </View>
                            
                            {/* Family Members Tabs */}
                            <View style={styles.membersContainer}>
                                {familyMembers.map((member) => (
                                    <TouchableOpacity
                                        key={member.id}
                                        style={[
                                            styles.memberTab,
                                            activeMember === member.id && styles.activeMemberTab,
                                            !member.active && styles.inactiveMemberTab
                                        ]}
                                        onPress={() => setActiveMember(member.id)}
                                    >
                                        <Text style={[
                                            styles.memberTabText,
                                            activeMember === member.id && styles.activeMemberTabText,
                                            !member.active && styles.inactiveMemberTabText
                                        ]}>
                                            {member.name}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            
                            <View style={styles.polizaCard}>
                                <Text style={styles.polizaPlan}>Elite</Text>
                                <Text style={styles.polizaDetails}>Plan Familiar</Text>
                                <Text style={styles.polizaNumber}>xxxx - xxxx - xxxx - xxxx</Text>
                                <Text style={styles.polizaType}>Seguro de Vida</Text>
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
                                    <MaterialIcons name="medical-services" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Ionicons name="mail" size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                );
            
            case 2: // Extension Familiar
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.sectionTitle}>Extension Familiar</Text>
                        
                        <View style={styles.polizasSection}>
                            <View style={styles.polizasHeader}>
                                <Text style={styles.polizasTitle}>Tus Polizas</Text>
                                <TouchableOpacity style={styles.nuevaPolizaButton}>
                                    <Text style={styles.nuevaPolizaButtonText}>Nueva Poliza +</Text>
                                </TouchableOpacity>
                            </View>
                            
                            {/* Family Members Tabs */}
                            <View style={styles.membersContainer}>
                                {familyMembers.map((member) => (
                                    <TouchableOpacity
                                        key={member.id}
                                        style={[
                                            styles.memberTab,
                                            activeMember === member.id && styles.activeMemberTab,
                                            !member.active && styles.inactiveMemberTab
                                        ]}
                                        onPress={() => setActiveMember(member.id)}
                                    >
                                        <Text style={[
                                            styles.memberTabText,
                                            activeMember === member.id && styles.activeMemberTabText,
                                            !member.active && styles.inactiveMemberTabText
                                        ]}>
                                            {member.name}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            
                            <View style={styles.polizaCard}>
                                <Text style={styles.polizaPlan}>Elite</Text>
                                <Text style={styles.polizaDetails}>Plan Familiar</Text>
                                <Text style={styles.polizaNumber}>xxxx - xxxx - xxxx - xxxx</Text>
                                <Text style={styles.polizaType}>Extension Familiar</Text>
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
                                    <MaterialIcons name="medical-services" size={24} color="#FFFFFF" />
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
    polizasHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    polizasTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    nuevaPolizaButton: {
        backgroundColor: 'transparent',
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    nuevaPolizaButtonText: {
        color: colors.primary[500],
        fontSize: 14,
        fontWeight: '500',
    },
    membersContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 12,
    },
    memberTab: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#E5E5E5',
        minHeight: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeMemberTab: {
        backgroundColor: '#333',
    },
    inactiveMemberTab: {
        backgroundColor: '#F0F0F0',
        opacity: 0.6,
    },
    memberTabText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    activeMemberTabText: {
        color: '#FFFFFF',
        fontWeight: '600',
    },
    inactiveMemberTabText: {
        color: '#999',
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
        paddingVertical: 14,
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
