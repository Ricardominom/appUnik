import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

interface SeguroDeVidaProps {
    onBack: () => void;
}

export const SeguroDeVida: React.FC<SeguroDeVidaProps> = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, name: 'Seguros y Asistencias', key: 'seguros' },
        { id: 1, name: 'Seguro de Vida', key: 'seguro-vida' }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 0: // Seguros y Asistencias
                return (
                    <View style={styles.tabContent}>
                        <Text style={styles.sectionTitle}>Seguro de Vida</Text>
                        
                        <View style={styles.polizasSection}>
                            <Text style={styles.polizasTitle}>Tus Polizas</Text>
                            
                            <View style={styles.polizaCard}>
                                <Text style={styles.polizaPlan}>Elite</Text>
                                <Text style={styles.polizaDetails}>Plan Personal</Text>
                                <Text style={styles.polizaNumber}>xxxx - xxxx - xxxx - xxxx</Text>
                                <Text style={styles.polizaType}>Seguro de Vida</Text>
                                <TouchableOpacity style={styles.detailsButton}>
                                    <Text style={styles.detailsButtonText}>Ver detalles</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <TouchableOpacity style={styles.beneficiariosButton}>
                                <Text style={styles.beneficiariosButtonText}>Beneficiarios +</Text>
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
                            <Text style={styles.polizasTitle}>Tus Polizas</Text>
                            
                            <View style={styles.polizaCard}>
                                <Text style={styles.polizaPlan}>Elite</Text>
                                <Text style={styles.polizaDetails}>Plan Personal</Text>
                                <Text style={styles.polizaNumber}>xxxx - xxxx - xxxx - xxxx</Text>
                                <Text style={styles.polizaType}>Seguro de Vida</Text>
                                <TouchableOpacity style={styles.detailsButton}>
                                    <Text style={styles.detailsButtonText}>Ver detalles</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <TouchableOpacity style={styles.beneficiariosButton}>
                                <Text style={styles.beneficiariosButtonText}>Beneficiarios +</Text>
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
            {/* Back Button */}
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={colors.primary[500]} />
                </TouchableOpacity>
            </View>

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
                        onPress={() => setActiveTab(tab.id)}
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
        paddingTop: 50,
    },
    backButtonContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        marginHorizontal: 16,
        marginVertical: 16,
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
        paddingBottom: 100,
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
    beneficiariosButton: {
        backgroundColor: colors.primary[400],
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignSelf: 'center',
        marginBottom: 30,
    },
    beneficiariosButtonText: {
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
