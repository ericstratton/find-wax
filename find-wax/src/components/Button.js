import React from 'react';
import { Button } from 'react-native-paper';

export default function Button() {
  return (
    <Button
      theme={{
        roundness: 3,
        fonts: { medium: 'Open Sans' }
      }}
      {...props}
      >
        Search
    </Button>
  );
}
