'use client';
import { Box } from '@chakra-ui/react';
import AppointmentTable from '../../views/admin/dataTables/components/AppointmentTable';
import appointmentTableData from '../../views/admin/dataTables/variables/appointmentTableData';

import React from 'react';

export default function Appointments() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <AppointmentTable tableData={appointmentTableData} />
    </Box>
  );
}
