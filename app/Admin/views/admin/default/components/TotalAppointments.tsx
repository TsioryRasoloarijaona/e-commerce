import { Box,  Flex, Select, Text, useColorModeValue } from '@chakra-ui/react';

import Card from '../../../../components/admin/card/Card';
import { useEffect, useState } from 'react';
import { Car } from './CarInterface';
import PieChart from '@/app/Admin/components/admin/charts/PieChart';
import { pieChartOptions } from '@/app/Admin/variables/charts';

export default function TotalAppointment(props: { [x: string]: any }) {
	const { ...rest } = props;

	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

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
		  const response = await fetch(`https://e-car.onrender.com/rdv/count/byCar/month/${month}`);
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
        </Flex>
      </Flex>
      <Flex w='100%' flexDirection='column'>
        <Flex flexDirection='column' me='20px' mt='28px'>
          <Text color={textColor} fontSize='34px' textAlign='start' fontWeight='500' lineHeight='100%'>
            Total Appointments
          </Text>
        </Flex>
        <Box minH='260px' minW='75%' mt='auto'>
          {mounted && <PieChart chartData={chartData} chartOptions={{ ...pieChartOptions, labels: chartLabels }} />} 
        </Box>
      </Flex>
    </Card>
  );
}
