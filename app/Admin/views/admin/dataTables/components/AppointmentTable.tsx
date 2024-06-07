import { Box, Button, Flex, Icon, Popover, PopoverBody, PopoverContent, PopoverTrigger, Progress, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable
} from '@tanstack/react-table';

import Card from '../../../../components/admin/card/Card';
import * as React from 'react';
import useFetchAppointments from '@/app/Admin/hooks/appointments/useFetchAppointment';
import { useEffect, useState } from 'react';


type Appointment = {
	id: number;
	carId: number;
	carName: string;
	lastName: string;
	email: string;
	contact: number;
	appointmentDate: string;
	status: string;
};

const columnHelper = createColumnHelper<Appointment>();

export default function AppointmentTable({ apiUrl, tableData }: { apiUrl: string, tableData: Appointment[] }) {
	const { data, loading, error } = useFetchAppointments(apiUrl);
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');

	const [appointment, setAppointment] = React.useState<Appointment[]>(tableData);

	const handleValidate = async (id: number) => {
		const response = await fetch(`http://localhost:8080/rdv/validate/${id}`
			, { method: 'PUT' });
		if (response.ok) {
			setAppointment(prevData =>
				prevData.map(appointment =>
					appointment.id === id ? { ...appointment, status: "validated" } : appointment
				)
			);
			alert("Appointment validated")
		}
	};

	const handleReject = async (id: number) => {
		const response = await fetch(`http://localhost:8080/rdv/reject/${id}`
			, { method: 'PUT' });
		if (response.ok) {
			setAppointment(prevData =>
				prevData.map(appointment =>
					appointment.id === id ? { ...appointment, status: "rejected" } : appointment
				)
			);
			alert("Appointment rejected");
		}
	};

	const renderStatus = (status: string) => {
        let color = '';
        let text = '';
        switch (status) {
            case 'pending':
                color = 'orange.400';
                text = 'Pending';
                break;
            case 'validated':
                color = 'green.400';
                text = 'Validated';
                break;
            case 'rejected':
                color = 'red.400';
                text = 'Rejected';
                break;
            case 'archived':
                color = 'gray.400';
                text = 'Archived';
                break;
            default:
                color = 'gray.400';
                text = 'Unknown';
        }
        return <Text color={color} fontSize='sm' fontWeight='700'>{text}</Text>;
    };


	const columns = [
		columnHelper.accessor('id', {
			id: 'id',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					APPOINTMENT ID
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()}
					</Text>
				</Flex>
			)
		}),
		columnHelper.accessor('carId', {
			id: 'carId',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					CAR ID
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()}
					</Text>
				</Flex>
			)
		}),
		columnHelper.accessor('carName', {
			id: 'carName',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					CAR NAME
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()}
					</Text>
				</Flex>
			)
		}),
		columnHelper.accessor('lastName', {
			id: 'lastName',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					NAME
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()}
					</Text>
				</Flex>
			)
		}),
		columnHelper.accessor('email', {
			id: 'email',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					EMAIL
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()}
					</Text>
				</Flex>
			)
		}),
		columnHelper.accessor('contact', {
			id: 'contact',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					CONTACT
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()}
					</Text>
				</Flex>
			)
		}),
		columnHelper.accessor('appointmentDate', {
			id: 'appointmentDate',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					APPOINTMENT DATE
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()}
					</Text>
				</Flex>
			)
		}),
		columnHelper.accessor('status', {
			id: 'status',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					STATUS
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
					{renderStatus(info.getValue())}
					</Text>
				</Flex>
			)
		}),
		columnHelper.display({
			id: 'validations',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					VALIDATIONS
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Popover>
						<PopoverTrigger>
							<Button variant="outline">Action</Button>
						</PopoverTrigger>
						<PopoverContent>
							<PopoverBody display='flex' flexDirection='column'>
								<Button variant="outline" mb={2} onClick={() => handleValidate(info.row.original.id)}>Validate</Button>
								<Button variant="outline" mb={2} onClick={() => handleReject(info.row.original.id)}>Reject</Button>
								<Button variant="outline">Archive</Button>
							</PopoverBody>
						</PopoverContent>
					</Popover>
				</Flex>
			)
		})
	];

	const table = useReactTable({
		data: data,
		columns,
		state: {
			sorting
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: true
	});

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<Card flexDirection='column' w='100%' px='0px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
			<Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
				<Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
					APPOINTMENTS
				</Text>
			</Flex>
			<Box overflow='auto' height='400px'>
				<Table variant='simple' color='gray.500' mb='24px' mt="12px">
					<Thead position='sticky' top={0} zIndex={1} bg={useColorModeValue('white', 'gray.800')}>
						{table.getHeaderGroups().map((headerGroup) => (
							<Tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<Th
											key={header.id}
											colSpan={header.colSpan}
											pe='10px'
											borderColor={borderColor}
											cursor='pointer'
											onClick={header.column.getToggleSortingHandler()}>
											<Flex
												justifyContent='space-between'
												align='center'
												fontSize={{ sm: '10px', lg: '12px' }}
												color='gray.400'>
												{flexRender(header.column.columnDef.header, header.getContext())}{{
													asc: '',
													desc: '',
												}[header.column.getIsSorted() as string] ?? null}
											</Flex>
										</Th>
									);
								})}
							</Tr>
						))}
					</Thead>
					<Tbody>
						{table.getRowModel().rows.slice(0, 11).map((row) => {
							return (
								<Tr key={row.id}>
									{row.getVisibleCells().map((cell) => {
										return (
											<Td
												key={cell.id}
												fontSize={{ sm: '14px' }}
												minW={{ sm: '150px', md: '200px', lg: 'auto' }}
												borderColor='transparent'>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</Td>
										);
									})}
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</Box>
		</Card>
	);
}
