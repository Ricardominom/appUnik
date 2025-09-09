import { Service, SectionColors } from '../shared/ServiceSection';

// Centralized service data configuration
export const SECTION_SERVICES: Record<string, Service[]> = {
    'estilo-vida': [
        { id: 1, title: 'Gyms y Studios', icon: 'fitness-outline' },
    ],
    'finanzas': [
        { id: 1, title: 'Prestamos', icon: 'cash-outline' },
        { id: 2, title: 'Salario on demand', icon: 'card-outline' },
        { id: 3, title: 'Inversiones', icon: 'trending-up-outline' },
    ],
    'experiencias': [
        { id: 1, title: 'Experiencias y descuentos', icon: 'gift-outline' },
    ],
    'recursos-humanos': [
        { id: 1, title: 'Mi portal de Recursos Humanos', icon: 'trophy-outline' },
    ],
    'cumplimiento': [
        { id: 1, title: 'NOM 035', icon: 'checkmark-circle-outline' },
        { id: 2, title: 'NOM 037', icon: 'shield-checkmark-outline' },
    ],
    'mis-vales': [
        { id: 1, title: 'Vales de despensa', icon: 'cash-outline' },
        { id: 2, title: 'TAG Gasolina', icon: 'car-outline' },
        { id: 3, title: 'Vale Gasolina', icon: 'car-sport-outline' },
        { id: 4, title: 'Vale Restaurante', icon: 'restaurant-outline' },
        { id: 5, title: 'Ver todos', icon: 'grid-outline' },
    ],
};

// Centralized color schemes
export const SECTION_COLORS: Record<string, SectionColors> = {
    'estilo-vida': {
        cardColor: '#F0F8F0', // Verde muy leve
        iconBgColor: '#E8F5E8', // Verde suave
        iconColor: '#66BB6A', // Verde iOS suave
    },
    'finanzas': {
        cardColor: '#FFFAF5', // Naranja muy leve
        iconBgColor: '#FFF3E0', // Naranja suave
        iconColor: '#FFB74D', // Naranja iOS suave
    },
    'experiencias': {
        cardColor: '#F0FDFF', // Cian muy leve
        iconBgColor: '#E0F7FA', // Cian suave
        iconColor: '#4DD0E1', // Cian iOS suave
    },
    'recursos-humanos': {
        cardColor: '#FEF2F5', // Rosa muy leve
        iconBgColor: '#FCE4EC', // Rosa suave
        iconColor: '#F06292', // Rosa iOS suave
    },
    'cumplimiento': {
        cardColor: '#F0FBF8', // Turquesa muy leve
        iconBgColor: '#E0F2F1', // Turquesa suave
        iconColor: '#4DB6AC', // Turquesa iOS suave
    },
    'mis-vales': {
        cardColor: '#FFFEF8', // Amarillo muy leve
        iconBgColor: '#FFF8E1', // Amarillo suave
        iconColor: '#FFD54F', // Amarillo iOS suave
    },
};

// Section titles mapping
export const SECTION_TITLES: Record<string, string> = {
    'estilo-vida': 'Estilo de vida',
    'finanzas': 'Mis Finanzas',
    'experiencias': 'Experiencias',
    'recursos-humanos': 'Recursos Humanos',
    'cumplimiento': 'Cumplimiento',
    'mis-vales': 'Mis Vales',
};