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
