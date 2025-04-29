export interface Admin {
  id: string;
  name: string;
  isAdmin?: boolean;
}

export interface Appointment {
  id: string;
  name: string;
  hour: string;
  service: string;
  date: string;
  barber: string;
  isActive?: boolean;
  wasCanceled?: boolean;
  isConcluded?: boolean;
}

export type BarberAppointment = Pick<Appointment, "hour" | "date">;

export interface Barber {
  id?: string;
  name: string;
  appointments?: BarberAppointment[];
}

export interface Service {
  name: string;
  value: number;
  image: string;
}
