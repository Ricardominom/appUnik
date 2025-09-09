import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';

export interface PolicyCardData {
    title: string;
    planType?: string;
    number: string;
    subtitle: string;
}

interface PolicyCardProps {
    policy: PolicyCardData;
    onDetailsPress?: () => void;
    style?: any;
}

export const PolicyCard: React.FC<PolicyCardProps> = ({ 
    policy, 
    onDetailsPress,
    style 
}) => {
    return (
        <View style={[styles.serviceCard, style]}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{policy.title}</Text>
            </View>
            <View style={styles.cardContent}>
                {policy.planType && (
                    <Text style={styles.cardPlanType}>{policy.planType}</Text>
                )}
                <Text style={styles.cardNumber}>{policy.number}</Text>
                <Text style={styles.cardSubtitle}>{policy.subtitle}</Text>
                <TouchableOpacity 
                    style={styles.detailsButton}
                    onPress={onDetailsPress}
                >
                    <Text style={styles.detailsButtonText}>Ver detalles</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
    cardPlanType: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
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
});