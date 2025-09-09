import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { homeStyles } from '../styles';

export interface Service {
    id: number;
    title: string;
    icon: string;
}

export interface SectionColors {
    cardColor: string;
    iconBgColor: string;
    iconColor: string;
}

interface ServiceSectionProps {
    title: string;
    services: Service[];
    colors: SectionColors;
    onServicePress?: (title: string) => void;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ 
    title, 
    services, 
    colors, 
    onServicePress 
}) => {
    return (
        <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>{title}</Text>
            <View style={homeStyles.serviceGrid}>
                {services.map((service) => (
                    <TouchableOpacity 
                        key={service.id} 
                        style={[
                            homeStyles.serviceCard,
                            { backgroundColor: colors.cardColor }
                        ]}
                        onPress={() => onServicePress?.(service.title)}
                    >
                        <View style={[
                            homeStyles.serviceIconContainer,
                            { backgroundColor: colors.iconBgColor }
                        ]}>
                            <Ionicons 
                                name={service.icon as any} 
                                size={24} 
                                color={colors.iconColor} 
                            />
                        </View>
                        <Text style={homeStyles.serviceTitle}>{service.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};