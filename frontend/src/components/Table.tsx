'use client'
import { useScheduleStore } from '@/store/useScheduleStore'
import { Appointment } from '@/types/types'
import React, { useEffect, useState } from 'react'
import '../styles/table.css'
import { formatDate, formatDisplayDate } from '@/services/dateFunctions'
import { getAppointments } from '@/services/api'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { useRouter } from 'next/router'

const Table = () => {

    const { appointments, setAppointment } = useScheduleStore()
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
            <div className='select-current-day'>
                <button onClick={() => changeDay(-1)}><IoMdArrowRoundBack /></button>
                <input
                    type="date"
                    value={selectedDate || ""}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
                <button onClick={() => changeDay(+1)}><IoMdArrowRoundForward /></button>
            </div>
            <div className='all-table-content'>
                {filterAppointments.length > 0 ? (
                    filterAppointments.map((c: Appointment) => (
                        <ul key={c.id}>
                            <li>
                                {c.name}
                            </li>
                            <li>
                                {formatDisplayDate(selectedDate)}
                            </li>
                            <li>
                                {c.hour}
                            </li>
                            <li>
                                {c.service}
                            </li>

                            <li>
                                {c.barber}
                            </li>
                        </ul>
                    ))
                ) : (
                    <p>Nenhum agendamento para a data selecionada</p>
                )}
            </div>
        </>
    )
}

export default Table