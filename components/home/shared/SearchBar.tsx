import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
    placeholder?: string;
    style?: any;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
    placeholder = "Search...",
    style 
}) => {
    return (
        <View style={[styles.searchContainer, style]}>
            <Ionicons name="search" size={18} color="#8E8E93" />
            <Text style={styles.searchText}>{placeholder}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
    },
    searchText: {
        marginLeft: 8,
        color: '#8E8E93',
        fontSize: 16,
    },
});