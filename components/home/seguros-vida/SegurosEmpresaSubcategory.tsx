import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { homeStyles } from '../styles';

interface Service {
    id: number;
    title: string;
    icon: string;
}

interface SegurosEmpresaSubcategoryProps {
    onServicePress?: (title: string) => void;
}

export const SegurosEmpresaSubcategory: React.FC<SegurosEmpresaSubcategoryProps> = ({ onServicePress }) => {
    const services: Service[] = [
        { id: 1, title: 'Seguro de Vida', icon: 'heart-outline' },
        { id: 2, title: 'Gastos Médicos Mayores', icon: 'medical-outline' },
        { id: 3, title: 'Gastos Médicos Menores', icon: 'medical-outline' },
        { id: 4, title: 'Seguro accidentes', icon: 'shield-outline' },
    ];

    const sectionColors = {
        cardColor: '#F5F3FF', // Morado muy leve
        iconBgColor: '#EDE7F6', // Morado suave
        iconColor: '#9575CD', // Morado iOS suave
    };

    return (
        <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>Seguros empresa</Text>
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
