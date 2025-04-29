'use client'
import { useScheduleStore } from '@/store/useScheduleStore';
import '../../../styles/barbers.css'
import { useBarberStore } from '@/store/useBarberStore';
import { useEffect, useState } from 'react';
import { getAppointments } from '@/services/api';
import { formatDate } from '@/services/dateFunctions';
import { Appointment, Barber } from '@/types/types';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const page = () => {

  const { barbers, hourStore } = useBarberStore()

  const { appointments, setAppointment } = useScheduleStore();

  const [selectedDate, setSelectedDate] = useState<string>(new Date().toLocaleDateString('en-CA'));

  const changeDay = (change: number) => {
    const current = new Date(selectedDate + "T00:00")
    current.setDate(current.getDate() + change);
    setSelectedDate(formatDate(current))
  }

  const filterAppointments = appointments.filter((app: Appointment) => {
    return app.date === selectedDate && app.isActive === true;
  });

  useEffect(() => {
    if (appointments.length === 0) {
      getAppointments().then((response) => {
        setAppointment(response)
      });
    }
  }, []);

  return (
    <>
      <div className='all-barbers-content'>
        <div className='select-current-day-barbers'>
          <button onClick={() => changeDay(-1)}><IoMdArrowRoundBack /></button>
          <input
            type="date"
            value={selectedDate || ""}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <button onClick={() => changeDay(+1)}><IoMdArrowRoundForward /></button>
        </div>
        <h2>Disponibilidade dos Barbeiros</h2>
        {
          barbers.map((barber) => {
            const filteringBarberAppointment = filterAppointments.filter((app) => app.barber === barber.name)

            const availableHours = hourStore.filter((hour) =>
              !filteringBarberAppointment.some((app) => app.hour === hour))

            return (
              <div key={barber.name} className="barber-availability">
                <h3>{barber.name}</h3>
                <ul>
                  {hourStore.map((hour) => {
                    const isAvailable = availableHours.includes(hour);
                    return (
                      <li key={hour} style={{
                        backgroundColor: isAvailable ? '#90EE90' : '#FF6347'
                      }}>
                        {hour}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default page