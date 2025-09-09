import { StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';

export const homeStyles = StyleSheet.create({
    section: {
        paddingHorizontal: 20,
        marginBottom: 32,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: colors.neutral[900],
        marginBottom: 16,
        textAlign: 'left',
        letterSpacing: -0.3,
    },
    serviceGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    serviceCard: {
        width: '48%',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        alignItems: 'center',
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.04,
        shadowRadius: 8,
        elevation: 1,
        borderWidth: 0.5,
        borderColor: colors.neutral[200],
    },
    serviceIconContainer: {
        width: 44,
        height: 44,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    serviceTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.neutral[900],
        textAlign: 'center',
        lineHeight: 20,
        letterSpacing: -0.1,
    },
});
