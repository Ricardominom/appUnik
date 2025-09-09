import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { homeStyles } from '../styles';

interface Service {
    id: number;
    title: string;
    icon: string;
}

interface FamiliaresSubcategoryProps {
    onServicePress?: (title: string) => void;
}

export const FamiliaresSubcategory: React.FC<FamiliaresSubcategoryProps> = ({ onServicePress }) => {
    const services: Service[] = [
        { id: 1, title: 'Seguro de Vida', icon: 'heart-outline' },
        { id: 2, title: 'Plan para el retiro', icon: 'person-outline' },
        { id: 3, title: 'Asistencia Familia', icon: 'people-outline' },
        { id: 4, title: 'Seguro de casa', icon: 'home-outline' },
        { id: 5, title: 'Plan educativo', icon: 'school-outline' },
    ];

    const sectionColors = {
        cardColor: '#F5F3FF', // Morado muy leve
        iconBgColor: '#EDE7F6', // Morado suave
        iconColor: '#9575CD', // Morado iOS suave
    };

    return (
        <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>Seguros familiares</Text>
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
