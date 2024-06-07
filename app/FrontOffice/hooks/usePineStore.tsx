
import { carInterface } from "../interface/carInterface";
import { create } from "zustand";

interface pinedCar {
  cars: carInterface[];
  addCar: (car: carInterface) => void;
  removeCar: (car: carInterface) => void;
}
export const usePinedStore = create<pinedCar>((set) => ({
  cars: [],
  addCar: (car: carInterface) =>
    set((state) => ({ cars: [...state.cars, car] })),
  removeCar: (car: carInterface) =>
    set((state) => ({ cars: state.cars.filter((c) => c.id !== car.id) })),
}));

interface countPin {
    count : number ;
    inc : ()=>void;
    dec : ()=>void;
}

export const useCountStore = create<countPin>((set)=>({
    count : 0 ,
    inc : ()=> set((state)=>({count : state.count + 1})),
    dec : ()=> set((state)=>({count : state.count - 1}))
}))
