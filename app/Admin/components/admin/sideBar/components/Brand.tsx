import {Flex, useColorModeValue, Text} from '@chakra-ui/react'
import { HSeparator } from '../../separator/Separator'

export default function SideBarBrand(){
    let logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<Text className='font-extrabold' fontSize='2xl' color={logoColor}>E-CAR DASHBOARD</Text>
			<HSeparator mb='20px' />
		</Flex>
	);
}