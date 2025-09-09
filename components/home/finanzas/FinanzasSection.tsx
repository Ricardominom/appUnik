import React from 'react';
import { ServiceSection } from '../shared';
import { SECTION_SERVICES, SECTION_COLORS, SECTION_TITLES } from '../data';

interface FinanzasSectionProps {
    onServicePress?: (title: string) => void;
}

export const FinanzasSection: React.FC<FinanzasSectionProps> = ({ onServicePress }) => {
    return (
        <ServiceSection
            title={SECTION_TITLES['finanzas']}
            services={SECTION_SERVICES['finanzas']}
            colors={SECTION_COLORS['finanzas']}
            onServicePress={onServicePress}
        />
    );
};
