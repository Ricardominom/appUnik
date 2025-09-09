import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { homeStyles } from '../styles';

interface Service {
    id: number;
    title: string;
    icon: string;
}

interface CumplimientoSectionProps {
    onServicePress?: (title: string) => void;
}

export const CumplimientoSection: React.FC<CumplimientoSectionProps> = ({ onServicePress }) => {
    const services: Service[] = [
        { id: 1, title: 'NOM 035', icon: 'checkmark-circle-outline' },
        { id: 2, title: 'NOM 037', icon: 'shield-checkmark-outline' },
    ];

    const sectionColors = {
        cardColor: '#F0FBF8', // Turquesa muy leve
        iconBgColor: '#E0F2F1', // Turquesa suave
        iconColor: '#4DB6AC', // Turquesa iOS suave
    };

    return (
        <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>Cumplimiento</Text>
            <View style={homeStyles.serviceGrid}>
                {services.map((service) => (
                    <TouchableOpacity 
                        key={service.id} 
                        style={[
                            homeStyles.serviceCard,
                            { backgroundColor: sectionColors.cardColor }
                        ]}
                        onPress={() => onServicePress?.(service.title)}
                    >
                        <View style={[
                            homeStyles.serviceIconContainer,
                            { backgroundColor: sectionColors.iconBgColor }
                        ]}>
                            <Ionicons 
                                name={service.icon as any} 
                                size={24} 
                                color={sectionColors.iconColor} 
                            />
                        </View>
                        <Text style={homeStyles.serviceTitle}>{service.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};
