import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { homeStyles } from '../styles';

interface Service {
    id: number;
    title: string;
    icon: string;
}

interface EstiloVidaSectionProps {
    onServicePress?: (title: string) => void;
}

export const EstiloVidaSection: React.FC<EstiloVidaSectionProps> = ({ onServicePress }) => {
    const services: Service[] = [
        { id: 1, title: 'Gyms y Studios', icon: 'fitness-outline' },
    ];

    const sectionColors = {
        cardColor: '#F0F8F0', // Verde muy leve
        iconBgColor: '#E8F5E8', // Verde suave
        iconColor: '#66BB6A', // Verde iOS suave
    };

    return (
        <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>Estilo de vida</Text>
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
