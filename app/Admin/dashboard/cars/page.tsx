'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';
import CarTable from '../../views/admin/dataTables/components/CarTable';
import carTableData from '../../views/admin/dataTables/variables/carTableData';
import React from 'react';

export default function DataTables() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <CarTable tableData={carTableData} />
    </Box>
  );
}
