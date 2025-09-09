import React from 'react';
import { ServiceSection } from '../shared';
import { SECTION_SERVICES, SECTION_COLORS, SECTION_TITLES } from '../data';

interface MisValesSectionProps {
    onServicePress?: (title: string) => void;
}

export const MisValesSection: React.FC<MisValesSectionProps> = ({ onServicePress }) => {
    return (
        <ServiceSection
            title={SECTION_TITLES['mis-vales']}
            services={SECTION_SERVICES['mis-vales']}
            colors={SECTION_COLORS['mis-vales']}
            onServicePress={onServicePress}
        />
    );
};