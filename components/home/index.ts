// Estilos compartidos
export { homeStyles } from './styles';

// Componentes compartidos
export { 
    ServiceSection, 
    ServiceCard, 
    TabContainer, 
    ContactSection, 
    PolicyCard, 
    SearchBar 
} from './shared';

export type { 
    Service, 
    SectionColors, 
    Tab, 
    ContactButton, 
    PolicyCardData 
} from './shared';

// Configuración de datos
export { SECTION_SERVICES, SECTION_COLORS, SECTION_TITLES } from './data';

// Secciones principales
export { EstiloVidaSection } from './estilo-vida/EstiloVidaSection';
export { FinanzasSection } from './finanzas/FinanzasSection';
export { ExperienciasSection } from './experiencias/ExperienciasSection';
export { RecursosHumanosSection } from './recursos-humanos/RecursosHumanosSection';
export { MisValesSection } from './mis-vales/MisValesSection';
export { CumplimientoSection } from './cumplimiento/CumplimientoSection';

// Secciones de seguros
export { 
    SegurosVidaSection, 
    SegurosEmpresaSubcategory, 
    FamiliaresSubcategory, 
    SeguroDeAuto,
    GastosMedicosMenores, 
    SeguroDeVida, 
    SeguroVidaFamiliar 
} from './seguros-vida';
