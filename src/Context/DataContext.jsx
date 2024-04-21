import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    axios.get('/db.json')
      .then(response => {
        setCreators(response.data.creators);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  return (
    <DataContext.Provider value={creators}>
      {children}
    </DataContext.Provider>
  );
};
