import { useState, useEffect } from 'react';

const usePopularCar = (): string => {
  const [popularCar, setPopularCar] = useState<string>('');

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('https://e-car.onrender.com/rdv/favorite/car');
        if (response.ok) {
          const data: [number, string] = await response.json();
          setPopularCar(data[1]); 
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return popularCar;
};

export default usePopularCar;
