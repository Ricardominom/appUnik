export const typography = {
  fontFamily: {
    regular: 'Lufga-Regular',
    semibold: 'Lufga-SemiBold',
    black: 'Lufga-Black',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
    '5xl': 42,
  },
  fontWeights: {
    regular: '400' as const,
    semibold: '600' as const,
    black: '900' as const,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export default typography;