import { useState, useEffect } from 'react';

const useAppointmentByMonth = (): number=> {
  const [appointmentByMonth, setAppointmentByMonth] = useState<number>(0);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('http://localhost:8080/rdv/total/thisMonth');
        if (response.ok) {
          const data: number = await response.json();
          setAppointmentByMonth(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return appointmentByMonth;
};

export default useAppointmentByMonth;
