import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';

export interface Tab {
    id: number;
    name: string;
    key: string;
}

interface TabContainerProps {
    tabs: Tab[];
    activeTab: number;
    onTabPress: (tabId: number) => void;
    style?: any;
}

export const TabContainer: React.FC<TabContainerProps> = ({ 
    tabs, 
    activeTab, 
    onTabPress, 
    style 
}) => {
    return (
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            style={[styles.tabsContainer, style]}
            contentContainerStyle={styles.tabsContent}
        >
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.id}
                    style={[
                        styles.tab,
                        activeTab === tab.id && styles.activeTab
                    ]}
                    onPress={() => onTabPress(tab.id)}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === tab.id && styles.activeTabText
                    ]}>
                        {tab.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    tabsContainer: {
        maxHeight: 60,
        marginBottom: 8,
    },
    tabsContent: {
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginRight: 12,
        borderRadius: 25,
        backgroundColor: '#E5E5E5',
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: colors.primary[500],
    },
    tabText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
        textAlign: 'center',
    },
    activeTabText: {
        color: '#FFFFFF',
        fontWeight: '600',
    },
});