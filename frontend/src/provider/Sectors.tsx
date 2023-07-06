'use client'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextSectors from '@/context/Sectors';

export default function ProviderSectors({ children }: any) {
  const [sectorsData, setSectorsData] = useState([{}])

  const value = {
    sectorsData,
    setSectorsData,
  };

  return (
    <ContextSectors.Provider value={value}>
      {children}
    </ContextSectors.Provider>
  );
}

ProviderSectors.propTypes = {
  children: PropTypes.node.isRequired,
};