'use client'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextUsers from '@/context/Users';

export default function ProviderUsers({ children }: any) {
  const [usersData, setUsersData] = useState([{}])

  const value = {
    usersData,
    setUsersData,
  };

  return (
    <ContextUsers.Provider value={value}>
      {children}
    </ContextUsers.Provider>
  );
}

ProviderUsers.propTypes = {
  children: PropTypes.node.isRequired,
};