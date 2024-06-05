type RowObj = {
    id: string;
    carId: string;
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    appointmentDate: string;
    status: string;
};

const appointmentTableData: RowObj[] = [
   {
    id: "app001",
    carId: "car001",
    firstName: "Carol",
    lastName: "Davis",
    email: "carol.davis@example.com",
    contact: "+3344556677",
    appointmentDate: "2024-06-12 09:00:00",
    status: "pending"
   },
   {
    id: "app002",
    carId: "car002",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    contact: "+1234567890",
    appointmentDate: "2024-06-10 10:00:00",
    status: "validated"
   },
   {
    id: "app003",
    carId: "car003",
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    contact: "+1122334455",
    appointmentDate: "2024-06-08T11:00:00Z",
    status: "archived"
   },
];
export default appointmentTableData;
