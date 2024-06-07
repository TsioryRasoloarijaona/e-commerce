'use client';
import { Box } from '@chakra-ui/react';
import AppointmentTable from '../../views/admin/dataTables/components/AppointmentTable';
import appointmentTableData from '../../views/admin/dataTables/variables/appointmentTableData';

import React, {useState, useEffect} from 'react';

const AppointmentsPage = () => {
  const apiUrl = 'http://localhost:8080/rdv/allRdv';

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <AppointmentTable apiUrl={apiUrl} />
    </Box>
  );
};

export default AppointmentsPage;

// export default function Appointments() {
//   return (
//     <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
//         <AppointmentTable tableData={appointmentTableData} />
//     </Box>
//   );
// }
