import { createContext, useContext, useEffect, useState } from 'react';

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
  const [climate, setClimate] = useState(() => {
    // Initialize climate from localStorage or default to 50
    const storedClimate = localStorage.getItem('climate');
    return storedClimate ? parseInt(storedClimate) : 50;
  });
  const [humidity, setHumidity] = useState(() => {
    const storedHumidity = localStorage.getItem('humidity');
    return storedHumidity ? parseInt(storedHumidity) : 40;
  });

  useEffect(() => {
    localStorage.setItem('humidity', humidity)
  }, [humidity])

  useEffect(() => {
    // Update localStorage when climate changes
    localStorage.setItem('climate', climate);
  }, [climate]);

  return (
    <ClimateContext.Provider value={{ climate, setClimate, humidity, setHumidity }}>
      {children}
    </ClimateContext.Provider>
  );
}
