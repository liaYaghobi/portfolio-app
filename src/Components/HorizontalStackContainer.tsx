// TwoColumnContainer.tsx
import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface HorizontalStackContainerProps extends BoxProps {
  children: React.ReactNode;
}

const HorizontalStackContainer: React.FC<HorizontalStackContainerProps> = ({ children, ...rest }) => {
  return (
    <Box sx={{ display: 'flex', gap: '16px', ...rest, marginBottom: '150px' }}>
      {React.Children.map(children, (child, index) => (
        <Box key={index} sx={{ flex: '1' }}>
          {child}
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalStackContainer;
