import { useEffect, useState } from 'react';

type Appointment = {
    id: string;
    carId: number;
    carName: string;
    lastName: string;
    email: string;
    contact: number;
    appointmentDate: string;
    status: string;
};

const useFetchAppointments = (url: string) => {
    const [data, setData] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                const formattedData = result.map((appointment: any) => ({
                    id: appointment.id,
                    carId: appointment.car.id,
                    carName: appointment.car.name,
                    lastName: appointment.lastName,
                    email: appointment.email,
                    contact: appointment.contact,
                    appointmentDate: appointment.appointmentDate,
                    status: appointment.status,
                }));
                setData(formattedData);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetchAppointments;
