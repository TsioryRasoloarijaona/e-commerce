import { Box, Button, Flex, Icon, Select, Text, useColorModeValue } from '@chakra-ui/react';

import Card from '../../../../components/admin/card/Card';
import LineChart from '../../../../components/admin/charts/LineChart';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { MdBarChart, MdOutlineCalendarToday } from 'react-icons/md';
import { Car } from './CarInterface';
import { RiArrowUpSFill } from 'react-icons/ri';
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from '../../../../variables/charts';
import PieChart from '@/app/Admin/components/admin/charts/PieChart';
import { ApexOptions } from 'apexcharts'
import { pieChartOptions } from '../../../../variables/charts';

interface FetchData {
    count: number;
    car: Car;
}
export default function TotalAppointment(props: { [x: string]: any }) {
	const { ...rest } = props;

	// Chakra Color Mode

	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	const iconColor = useColorModeValue('brand.500', 'white');
	const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	const bgHover = useColorModeValue({ bg: 'secondaryGray.400' }, { bg: 'whiteAlpha.50' });
	const bgFocus = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.100' });

	const [ mounted, setMounted ] = useState(false);
	const [chartData, setChartData] = useState<number[]>([]);
	const [chartLabels, setChartLabels] = useState<string[]>([]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setMounted(true);
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	const handleMonthChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
		const month = event.target.value;
		try {
		  const response = await fetch(`http://localhost:8080/rdv/count/byCar/month/${month}`);
		  const data: [number, Car][] = await response.json();
		  const transformedData = data.map(([count, car]) => ({
			name: car.name,
			data: count,
		  }));
		  setChartData(transformedData.map(car => car.data));
		  setChartLabels(transformedData.map(car => car.name));
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  };	

	return (
		<Card justifyContent='center' alignItems='center' flexDirection='column' w='100%' mb='0px' {...rest}>
      <Flex justify='space-between' ps='0px' pe='20px' pt='5px' w='100%'>
        <Flex align='center' w='100%'>
          <Select
            onChange={handleMonthChange}
            bg={boxBg}
            fontSize='sm'
            fontWeight='500'
            color={textColorSecondary}
            borderRadius='7px'
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
			<option value="4">April</option>
			<option value="5">May</option>
			<option value="6">June</option>
			<option value="7">July</option>
			<option value="8">August</option>
			<option value="9">September</option>
			<option value="10">October</option>
			<option value="11">November</option>
			<option value="12">December</option>
          </Select>
          <Button
            ms='auto'
            alignItems='center'
            justifyContent='center'
            bg={bgButton}
            _hover={bgHover}
            _focus={bgFocus}
            _active={bgFocus}
            w='37px'
            h='37px'
            lineHeight='100%'
            borderRadius='10px'
            {...rest}>
            <MdBarChart color={iconColor} w='24px' h='24px' />
          </Button>
        </Flex>
      </Flex>
      <Flex w='100%' flexDirection='column'>
        <Flex flexDirection='column' me='20px' mt='28px'>
          <Text color={textColor} fontSize='34px' textAlign='start' fontWeight='500' lineHeight='100%'>
            Total Appointments
          </Text>
        </Flex>
        <Box minH='260px' minW='75%' mt='auto'>
          {mounted && <PieChart chartData={chartData} chartOptions={{ ...pieChartOptions, labels: chartLabels }} />} {/* Use PieChart component */}
        </Box>
      </Flex>
    </Card>
  );
}
