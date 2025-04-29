import { create } from "zustand";
import { Barber, BarberAppointment } from "../types/types";

type BarberState = {
  barbers: Barber[];
  setBarber: (barbers: Barber[]) => void;
  barberAppointment: BarberAppointment[];
  setBarberAppointment: (app: BarberAppointment[]) => void;
  hourStore: string[];
};

export const useBarberStore = create<BarberState>((set) => ({
  barbers: [
    { name: "barbeiro x" },
    { name: "barbeiro y" },
    { name: "barbeiro z" },
  ],
  setBarber: (newBarber: Barber[]) =>
    set(() => ({
      barbers: newBarber,
    })),
  barberAppointment: [],
  setBarberAppointment: (newBarberAppointment: BarberAppointment[]) =>
    set(() => ({
      barberAppointment: newBarberAppointment,
    })),
  hourStore: [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ],
}));
