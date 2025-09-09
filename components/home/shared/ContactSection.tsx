import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

export interface ContactButton {
    icon: React.ReactNode;
    onPress?: () => void;
}

interface ContactSectionProps {
    title?: string;
    buttons?: ContactButton[];
    style?: any;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
    title = "Contactanos", 
    buttons,
    style 
}) => {
    // Default contact buttons if none provided
    const defaultButtons: ContactButton[] = [
        { 
            icon: <Ionicons name="call" size={24} color="#FFFFFF" />,
            onPress: () => console.log('Call pressed')
        },
        { 
            icon: <Ionicons name="chatbubbles" size={24} color="#FFFFFF" />,
            onPress: () => console.log('Chat pressed')
        },
        { 
            icon: <Ionicons name="location" size={24} color="#FFFFFF" />,
            onPress: () => console.log('Location pressed')
        },
    ];

    const contactButtons = buttons || defaultButtons;

    return (
        <View style={[styles.contactSection, style]}>
            <Text style={styles.contactSectionTitle}>{title}</Text>
            <View style={styles.contactButtons}>
                {contactButtons.map((button, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={styles.contactButton}
                        onPress={button.onPress}
                    >
                        {button.icon}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        minWidth: 80,
    },
});