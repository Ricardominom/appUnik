import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { homeStyles } from '../styles';

interface Service {
    id: number;
    title: string;
    icon: string;
}

interface SegurosVidaSectionProps {
    onServicePress: (title: string) => void;
}

export const SegurosVidaSection: React.FC<SegurosVidaSectionProps> = ({ onServicePress }) => {
    const services: Service[] = [
        { id: 1, title: 'Seguro Empresa', icon: 'business-outline' },
        { id: 2, title: 'Familiares', icon: 'home-outline' },
        { id: 3, title: 'Seguro de Auto', icon: 'car-outline' },
        { id: 4, title: 'Descubre tu Seguro Ideal', icon: 'search-outline' },
    ];

    const sectionColors = {
        cardColor: '#F5F3FF', // Morado muy leve
        iconBgColor: '#EDE7F6', // Morado suave
        iconColor: '#9575CD', // Morado iOS suave
    };

    return (
        <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>Seguros y Vida</Text>
            <View style={homeStyles.serviceGrid}>
                {services.map((service) => (
                    <TouchableOpacity 
                        key={service.id} 
                        style={[
                            homeStyles.serviceCard,
                            { backgroundColor: sectionColors.cardColor }
                        ]}
                        onPress={() => onServicePress(service.title)}
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
