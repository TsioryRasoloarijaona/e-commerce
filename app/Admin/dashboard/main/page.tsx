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
import WeeklyRevenue from '../../views/admin/default/components/WeeklyRevenue';

export default function Main() {

  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
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
          value="Ford Escape"
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
          value="Mercedes"
        />
        <MiniStatistics name="Most reserved car this month" value="Ford Escape" />
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
          value="154"
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
          value="2935"
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <TotalAppointments />
        <WeeklyRevenue />
      </SimpleGrid>
    </Box>
  );
}
