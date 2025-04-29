import { getServiceValue } from "@/services/totalValue";
import { Appointment } from "@/types/types";

export const getStats = (appointments: Appointment[], selectedDate: string) => {
  // filtrar pela data escolhida
  const filterAppointments = appointments.filter((app: Appointment) => {
    return app.date === selectedDate;
  });

  const totalValueOfAppointments = filterAppointments
    .filter((app) => !app.isActive && app.wasCanceled === false)
    .reduce((total, app) => total + getServiceValue(app.service), 0);

  const concludedAppointments = filterAppointments.filter(
    (app) => app.isConcluded === true
  );

  const concluded = concludedAppointments.length;

  const pendingAppointments = filterAppointments.filter(
    (app) => app.isActive === true
  );

  const pending = pendingAppointments.length;

  const canceledAppointments = filterAppointments.filter(
    (app) => app.wasCanceled === true
  );

  const canceled = canceledAppointments.length;

  return {
    canceledAppointments,
    concludedAppointments,
    pendingAppointments,
    filterAppointments,
    totalValueOfAppointments,
    concluded,
    pending,
    canceled,
  };
};
