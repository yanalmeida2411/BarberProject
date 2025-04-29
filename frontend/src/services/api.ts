import { Appointment } from "@/types/types";
import axios from "axios";

const API_URL = "http://localhost:3000";

export async function getAppointments() {
  const response = await axios.get(`${API_URL}/inicioAdmin`);

  return response.data;
}

export async function postAppointments(
  newAppointment: Omit<Appointment, "id">
) {
  try {
    const response = await axios.post(`${API_URL}/inicioAdmin`, newAppointment);
    return response.data;
  } catch (err) {
    console.log("Erro no Agendamento", err);
    throw err;
  }
}

export async function updateAppointments(
  id: string,
  update: Partial<Appointment>
) {
  try {
    const response = await axios.patch(`${API_URL}/inicioAdmin/${id}`, update);
    return response.data;
  } catch (err) {
    console.log("Erro no Agendamento", err);
    throw err;
  }
}

export async function deleteAppointment(id: string) {
  try {
    const response = await axios.delete(`${API_URL}/inicioAdmin/${id}`);
    return response.data;
  } catch (err) {
    console.log("Erro no Agendamento", err);
    throw err;
  }
}
