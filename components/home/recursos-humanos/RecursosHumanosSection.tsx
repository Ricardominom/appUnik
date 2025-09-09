import React from 'react';
import { ServiceSection } from '../shared';
import { SECTION_SERVICES, SECTION_COLORS, SECTION_TITLES } from '../data';

interface RecursosHumanosSectionProps {
    onServicePress?: (title: string) => void;
}

export const RecursosHumanosSection: React.FC<RecursosHumanosSectionProps> = ({ onServicePress }) => {
    return (
        <ServiceSection
            title={SECTION_TITLES['recursos-humanos']}
            services={SECTION_SERVICES['recursos-humanos']}
            colors={SECTION_COLORS['recursos-humanos']}
            onServicePress={onServicePress}
        />
    );
};
