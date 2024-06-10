export interface carInterface{
    id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  color: string;
  status: boolean;
  price: number;
  type: string;
  placeNumber: number;
  motorType: "diesel" | "petrol";
  images: string[];
}

export interface content {
  content : carInterface[]
}