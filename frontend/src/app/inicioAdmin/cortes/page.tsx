'use client'
import React, { useEffect, useState } from 'react'
import '../../../styles/cut-register.css'
import { useScheduleStore } from '@/store/useScheduleStore'
import { Appointment } from '@/types/types'
import { formatDisplayDate } from '@/services/dateFunctions'
import { getAppointments, postAppointments } from '@/services/api'
import { useBarberStore } from '@/store/useBarberStore'
import { RiCalendarScheduleLine } from "react-icons/ri";
import { RxReset } from "react-icons/rx";


const page = () => {

  const { barbers, hourStore, barberAppointment, setBarberAppointment } = useBarberStore()

  const { appointments, setAppointment } = useScheduleStore();

  useEffect(() => {
    getAppointments()
      .then((response) => {
        setAppointment(response)
      });
  }, []);


  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [barber, setBarber] = useState("");
  const [hour, setHour] = useState("");
  const [date, setDate] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newApp: Omit<Appointment, 'id'> = {
      name,
      hour,
      service,
      date,
      barber,
      isActive: true,
      wasCanceled: false,
      isConcluded: false
    }
    try {
      await postAppointments(newApp)
        .then(() => getAppointments()
          .then(setAppointment));

      setBarberAppointment([...barberAppointment, { hour, date }]);

    } finally {
      setName('');
      setService('');
      setBarber('');
      setHour('');
      setDate('');
    }
  }

  const handleReset = () => {
    setName('');
    setService('');
    setBarber('');
    setHour('');
    setDate('');
  };

  const withoutCanceledAppointments =
    appointments.filter((app) => app.isActive === true || app.isConcluded === true);

  return (
    <>
      <form onSubmit={handleSubmit}
        className='all-content-register'>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name='name'
          placeholder='Digite o Nome do Cliente'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="service">Serviço</label>
        <select
          name='service'
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="" disabled defaultValue={""}>Selecione o Serviço</option>
          <option value="corte masculino">corte masculino</option>
          <option value="barba completa">barba completa</option>
          <option value="sobrancelha">sobrancelha</option>
          <option value="luzes/descoloração">luzes/descoloração</option>
          <option value="limpeza de pele">limpeza de pele</option>
          <option value="corte + barba">corte + barba</option>
          <option value="corte + sobrancelha">corte + sobrancelha</option>
          <option value="barba + sobrancelha">barba + sobrancelha</option>
        </select>
        <label htmlFor="barber">Barber</label>
        <select
          name='barber'
          value={barber}
          onChange={(e) => setBarber(e.target.value)}
          required
        >
          <option value="" disabled defaultValue={""}>Selecione um Barbeiro</option>
          {barbers.map((barber) => (
            <option key={barber.name} value={barber.name}>{barber.name}</option>
          ))}
        </select>
        <label htmlFor="date">Data</label>
        <input
          type="date"
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label htmlFor="hour">Horário</label>
        <select
          name='hour'
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          required
        >
          <option value="" disabled>Selecione o Horário</option>
          {hourStore.map((h) => {
            // Verifica se o horário já está ocupado para o barbeiro escolhido
            // como estou buscando direto no appointments, nao preciso usar banco de dados
            const isOccupied = appointments.some(
              (app) =>
                app.barber === barber && app.date === date && app.hour === h && app.isActive
            );
            return (
              <option key={h} value={h} disabled={isOccupied}>
                {h} {isOccupied && "(ocupado)"}
              </option>
            );
          })}
        </select>
        <button type='submit'>Agendar<span><RiCalendarScheduleLine size={30} /></span></button>
        <button type='reset' onClick={handleReset}>Limpar<RxReset size={30} /></button>
      </form>
      <div className='all-last-registers'>
        <h2>Últimos Agendamentos</h2>
        {withoutCanceledAppointments.length === 0 ?
          (<p>Nenhum agendamento feito</p>) :
          withoutCanceledAppointments.map((app: Appointment) => (
            <ul key={app.id}>
              <li>
                {app.name}
              </li>
              <li>
                {formatDisplayDate(app.date)}
              </li>
              <li>
                {app.hour}
              </li>
              <li>
                {app.service}
              </li>
              <li>
                {app.barber}
              </li>
            </ul>
          ))
        }
      </div>
    </>
  )
}

export default page