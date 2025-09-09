import React from 'react';
import { ServiceSection } from '../shared';
import { SECTION_SERVICES, SECTION_COLORS, SECTION_TITLES } from '../data';

interface EstiloVidaSectionProps {
    onServicePress?: (title: string) => void;
}

export const EstiloVidaSection: React.FC<EstiloVidaSectionProps> = ({ onServicePress }) => {
    return (
        <ServiceSection
            title={SECTION_TITLES['estilo-vida']}
            services={SECTION_SERVICES['estilo-vida']}
            colors={SECTION_COLORS['estilo-vida']}
            onServicePress={onServicePress}
        />
    );
};
