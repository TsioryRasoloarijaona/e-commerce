'use client';

import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

import MiniStatistics from '../../components/admin/card/MiniStatistics';
import IconBox from '../../components/admin/icons/IconBox';

import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from 'react-icons/md';

import TotalAppointments from '../../views/admin/default/components/TotalAppointments';

import usePopularCar from '../../hooks/main/usePopularCar';
import usePopularBrand from '../../hooks/main/usePopularBrand';
import useAppointmentByMonth from '../../hooks/main/useAppointmentByMonth';

export default function Main() {

  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  const popularCar:string = usePopularCar();
  const popularBrand:string = usePopularBrand();
  const appointmentByMonth:number = useAppointmentByMonth();

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2, '2xl': 6 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="Popular car"
          value={popularCar}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name="Popular brand"
          value={popularBrand}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
              icon={<Icon w="28px" h="28px" as={MdAddTask} color="white" />}
            />
          }
          name="All appointments this month"
          value={appointmentByMonth}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name="All appointments"
          value={appointmentByMonth}
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <TotalAppointments />
      </SimpleGrid>
    </Box>
  );
}
