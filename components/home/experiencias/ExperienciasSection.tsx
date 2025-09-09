import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { homeStyles } from '../styles';

interface Service {
    id: number;
    title: string;
    icon: string;
}

interface ExperienciasSectionProps {
    onServicePress?: (title: string) => void;
}

export const ExperienciasSection: React.FC<ExperienciasSectionProps> = ({ onServicePress }) => {
    const services: Service[] = [
        { id: 1, title: 'Experiencias y descuentos', icon: 'gift-outline' },
    ];

    const sectionColors = {
        cardColor: '#F0FDFF', // Cian muy leve
        iconBgColor: '#E0F7FA', // Cian suave
        iconColor: '#4DD0E1', // Cian iOS suave
    };

    return (
        <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>Experiencias</Text>
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
