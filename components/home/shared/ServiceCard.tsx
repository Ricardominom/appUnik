import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { homeStyles } from '../styles';
import { Service, SectionColors } from './ServiceSection';

interface ServiceCardProps {
    service: Service;
    colors: SectionColors;
    onPress?: (title: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, colors, onPress }) => {
    return (
        <TouchableOpacity 
            style={[
                homeStyles.serviceCard,
                { backgroundColor: colors.cardColor }
            ]}
            onPress={() => onPress?.(service.title)}
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
    );
};