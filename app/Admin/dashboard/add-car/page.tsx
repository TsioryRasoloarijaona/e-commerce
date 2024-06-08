'use client';
import { useImageStore } from '../../components/admin/inputFile/inputFule';
import React from 'react';
import AddCarForm from '../../components/admin/form/AddCarForm';
import {useForm} from "react-hook-form"
import { carInterface } from '@/app/FrontOffice/interface/carInterface';

import {
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function AddCar() {

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
        Add new car
      </Text>
      <AddCarForm/>
    </Box>
  );
}
