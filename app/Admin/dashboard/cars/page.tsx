'use client'

import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import CarTable from '../../views/admin/dataTables/components/CarTable';

const CarsPage = () => {
  const [carTableData, setCarTableData] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const res = await fetch('https://e-car.onrender.com/car/allCar');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      setCarTableData(data);

      res.headers.append('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.headers.append('Pragma', 'no-cache');
    };

    fetchCars();
  }, []);

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <CarTable tableData={carTableData} />
    </Box>
  );
};

export default CarsPage;
