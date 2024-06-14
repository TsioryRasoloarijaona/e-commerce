import { useState, useEffect } from 'react';

const usePopularBrand = (): string => {
  const [popularBrand, setPopularBrand] = useState<string>('');

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('https://e-car.onrender.com/rdv/favorite/brand');
        if (response.ok) {
          const data: [number, string] = await response.json();
          setPopularBrand(data[1]); 
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return popularBrand;
};

export default usePopularBrand;
