'use client'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ContextWhatsAppData } from '@/context';

export default function ProviderWhatsAppData({ children }: any) {
  const [whatsAppDataData, setWhatsAppData] = useState([{}])

  const value = {
    whatsAppDataData,
    setWhatsAppData
  };

  return (
    <ContextWhatsAppData.Provider value={value}>
      {children}
    </ContextWhatsAppData.Provider>
  );
}

ProviderWhatsAppData.propTypes = {
  children: PropTypes.node.isRequired,
};