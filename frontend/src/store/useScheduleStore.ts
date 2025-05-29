import { Appointment } from "@/types/types";
import { create } from "zustand";

type AppointmentState = {
  appointments: Appointment[];
  setAppointment: (newAppointment: Appointment[]) => void;
};

export const useScheduleStore = create<AppointmentState>((set) => ({
  appointments: [],
  setAppointment: (newAppointment: Appointment[]) =>
    set(() => ({
      appointments: newAppointment,
    })),
}));