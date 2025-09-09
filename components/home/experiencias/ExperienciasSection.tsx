import React from 'react';
import { ServiceSection } from '../shared';
import { SECTION_SERVICES, SECTION_COLORS, SECTION_TITLES } from '../data';

interface ExperienciasSectionProps {
    onServicePress?: (title: string) => void;
}

export const ExperienciasSection: React.FC<ExperienciasSectionProps> = ({ onServicePress }) => {
    return (
        <ServiceSection
            title={SECTION_TITLES['experiencias']}
            services={SECTION_SERVICES['experiencias']}
            colors={SECTION_COLORS['experiencias']}
            onServicePress={onServicePress}
        />
    );
};
