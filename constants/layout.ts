import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const layout = {
  window: {
    width: screenWidth,
    height: screenHeight,
  },
  isSmallDevice: screenWidth < 375,
  isMediumDevice: screenWidth >= 375 && screenWidth < 768,
  isLargeDevice: screenWidth >= 768,
  
  // Responsive dimensions
  getResponsiveWidth: (percentage: number) => screenWidth * (percentage / 100),
  getResponsiveHeight: (percentage: number) => screenHeight * (percentage / 100),
  
  // Safe margins
  horizontalMargin: screenWidth * 0.05, // 5% of screen width
  verticalMargin: screenHeight * 0.02, // 2% of screen height,
  
  // Container widths
  containerWidth: Math.min(screenWidth * 0.9, 400),
  maxContentWidth: 600,
};

export default layout;