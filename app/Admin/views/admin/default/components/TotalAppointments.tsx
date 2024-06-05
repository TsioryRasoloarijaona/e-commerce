import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';

import Card from '../../../../components/admin/card/Card';
import LineChart from '../../../../components/admin/charts/LineChart';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { MdBarChart, MdOutlineCalendarToday } from 'react-icons/md';

import { RiArrowUpSFill } from 'react-icons/ri';
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from '../../../../variables/charts';

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

	useEffect(() => {
		const timeout = setTimeout(() => {
			setMounted(true);
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<Card justifyContent='center' alignItems='center' flexDirection='column' w='100%' mb='0px' {...rest}>
			<Flex justify='space-between' ps='0px' pe='20px' pt='5px' w='100%'>
				<Flex align='center' w='100%'>
					<Button bg={boxBg} fontSize='sm' fontWeight='500' color={textColorSecondary} borderRadius='7px'>
						<Icon as={MdOutlineCalendarToday} color={textColorSecondary} me='4px' />
						This month
					</Button>
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
						<Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
					</Button>
				</Flex>
			</Flex>
			<Flex w='100%' flexDirection={{ base: 'column', lg: 'row' }}>
				<Flex flexDirection='column' me='20px' mt='28px'>
					<Text color={textColor} fontSize='34px' textAlign='start' fontWeight='700' lineHeight='100%'>
						54
					</Text>

				</Flex>
				<Box minH='260px' minW='75%' mt='auto'>
					<LineChart chartData={lineChartDataTotalSpent} chartOptions={lineChartOptionsTotalSpent} />
				</Box>
			</Flex>
		</Card>
	);
}
