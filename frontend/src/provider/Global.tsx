'use client'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextDefault from '../context/Global';

export default function ProviderGlobal({ children }: any) {
  const [logged, setLogged] = useState(false)
  const [token, setToken] = useState('')
  const [role, setRole] = useState(2)
  const [theme, setTheme] = useState('light')

  const value = {
    logged,
    setLogged,
    token,
    setToken,
    role,
    setRole,
    theme,
    setTheme
  };

  return (
    <ContextDefault.Provider value={value}>
      {children}
    </ContextDefault.Provider>
  );
}

ProviderGlobal.propTypes = {
  children: PropTypes.node.isRequired,
};