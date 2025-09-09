import React from 'react';
import { ServiceSection } from '../shared';
import { SECTION_SERVICES, SECTION_COLORS, SECTION_TITLES } from '../data';

interface CumplimientoSectionProps {
    onServicePress?: (title: string) => void;
}

export const CumplimientoSection: React.FC<CumplimientoSectionProps> = ({ onServicePress }) => {
    return (
        <ServiceSection
            title={SECTION_TITLES['cumplimiento']}
            services={SECTION_SERVICES['cumplimiento']}
            colors={SECTION_COLORS['cumplimiento']}
            onServicePress={onServicePress}
        />
    );
};
