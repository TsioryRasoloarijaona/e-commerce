type RowObj = {
    id: string;
    name: string;
    description: string;
    brand: string;
    model: string;
    color: string;
    motorType: string;
    power: number;
    placeNumber: number;
    status: string;
    price: number;
    images: string[];
};

const carTableData: RowObj[] = [
    {
        id: "car001",
        name: "Tesla Model S",
        description: "A luxury electric car offering long range and exceptional performance.",
        brand: "Tesla",
        model: "Model S",
        color: "Black",
        motorType: "Electric",
        power: 670,
        placeNumber: 5,
        status: "pinned",
        price: 89900,
        images: ["image1.jpg", "image2.jpg", "image3.jpg"]
    },
    {
        id: "car002",
        name: "Renault Clio",
        description: "A versatile and economical city car, perfect for urban driving.",
        brand: "Renault",
        model: "Clio",
        color: "Red",
        motorType: "Gasoline",
        power: 90,
        placeNumber: 5,
        status: "pinned",
        price: 89900,
        images: ["image1.jpg", "image2.jpg", "image3.jpg"]
    },
    {
        id: "car003",
        name: "BMW X5",
        description: "A spacious and powerful SUV with comfortable driving and advanced technology.",
        brand: "BMW",
        model: "X5",
        color: "White",
        motorType: "Diesel",
        power: 300,
        placeNumber: 7,
        status: "pinned",
        price: 70000,
        images: ["x5_1.jpg", "x5_2.jpg", "x5_3.jpg"]
    },

];
export default carTableData;
