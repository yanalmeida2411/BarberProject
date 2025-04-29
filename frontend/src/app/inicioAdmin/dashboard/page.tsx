'use client'
import React, { useEffect, useState } from 'react'
import '../../../styles/dashboard.css'
import { formatDate, formatDisplayDate } from '@/services/dateFunctions';
import { useScheduleStore } from '@/store/useScheduleStore';
import { deleteAppointment, getAppointments, updateAppointments } from '@/services/api';
import { getStats } from '@/constants/dashboardConstants';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ImBin2 } from "react-icons/im";
import { FcCancel } from "react-icons/fc";
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const page = () => {

  const { appointments, setAppointment } = useScheduleStore();

  const [selectedDate, setSelectedDate] = useState<string>(new Date().toLocaleDateString('en-CA'));// aqui ele utiliza o mesmo fuso-horario dos EUA, padrão 

  const { filterAppointments,
    totalValueOfAppointments,
    concluded, pending, canceled,
    pendingAppointments, concludedAppointments,
    canceledAppointments } = getStats(appointments, selectedDate)

  useEffect(() => {
    getAppointments()
      .then((response) => {
        setAppointment(response)
      });
  }, []);

  // alterar o dia e evitar erro no fuso-horario
  const changeDay = (change: number) => {
    const current = new Date(selectedDate + "T00:00")
    current.setDate(current.getDate() + change);
    setSelectedDate(formatDate(current))
  }

  return (
    <>
      <div className='all-content-dashboard'>
        <div className='info-appointments'>
          <button onClick={() => changeDay(-1)}><IoMdArrowRoundBack /></button>
          <input
            type="date"
            value={selectedDate || ""}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <button onClick={() => changeDay(+1)}><IoMdArrowRoundForward /></button>
        </div>
        <ul className='info-status'>
          <li className='appointments-content'>Agendamentos <br />
            <span>{filterAppointments.length}</span>
          </li>

          <li className='no-concluded-content'>Falta Atender <br />
            <span>{pending}</span>
          </li>
          <li className='concluded-content'>Concluídos <br />
            <span>{concluded}</span>
          </li>
          <li className='canceled-content'>Cancelados <br />
            <span>{canceled}</span>
          </li>
          <li className='total-content'>Total a receber<br />
            <span>R$ {totalValueOfAppointments.toFixed(2).replace(".", ",")}</span>
          </li>
        </ul>
        <div className='status-appointments'>
          <div className='status-appointments-each-appointment no-concluded'>
            <h2>Falta Atender</h2>
            {pendingAppointments.length > 0 ? (
              pendingAppointments.map((items) => (
                <ul key={items.id} className='map-ul'>
                  <li>Nome:
                    <span>{items.name}</span>
                  </li>
                  <li>Data:
                    <span>{formatDisplayDate(selectedDate)}</span>
                  </li>

                  <li>Horário:
                    <span>{items.hour}</span>
                  </li>
                  <li>Serviço:
                    <span>{items.service}</span>
                  </li>
                  <li>Barbeiro:
                    <span>{items.barber}</span>
                  </li>
                  <li>
                    <button className='concluded-button'
                      onClick={() =>
                        updateAppointments(items.id, { isActive: false, isConcluded: true, wasCanceled: false })
                          .then(() => getAppointments().then(setAppointment))}>
                      <IoMdCheckmarkCircleOutline size={20} color='green'/>
                    </button>
                    <button className='cancel-button'
                      onClick={() =>
                        updateAppointments(items.id, { isActive: false, isConcluded: false, wasCanceled: true })
                          .then(() => getAppointments().then(setAppointment))}>
                      <FcCancel size={20}/>
                    </button>
                    <button className='remove-button'
                      onClick={() => deleteAppointment(items.id)
                        .then(() => getAppointments().then(setAppointment))}>
                      <ImBin2 size={15} color='red'/>
                    </button>
                  </li>
                </ul>
              ))
            ) : (<p>Nenhum agendamento para a data selecionada</p>
            )}
          </div>
          <div className='status-appointments-each-appointment concluded'>
            <h2>Concluídos</h2>
            {concludedAppointments.length > 0 ? (
              concludedAppointments.map((items) => (
                <ul key={items.id} className='map-ul'>
                  <li>Nome:
                    <span>{items.name}</span>
                  </li>
                  <li>Data:
                    <span>{formatDisplayDate(selectedDate)}</span>
                  </li>

                  <li>Horário:
                    <span>{items.hour}</span>
                  </li>
                  <li>Serviço:
                    <span>{items.service}</span>
                  </li>
                  <li>Barbeiro:
                    <span>{items.barber}</span>
                  </li>
                  <li>
                    <button className='cancel-button'
                      onClick={() =>
                        updateAppointments(items.id, { isActive: false, isConcluded: false, wasCanceled: true })
                          .then(() => getAppointments().then(setAppointment))}>
                      <FcCancel size={20}/>
                    </button>
                    <button className='no-concluded-button'
                      onClick={() =>
                        updateAppointments(items.id, { isActive: true, isConcluded: false, wasCanceled: false })
                          .then(() => getAppointments().then(setAppointment))}>
                      <MdRadioButtonUnchecked size={20} color='yellow'/>
                    </button>
                    <button className='remove-button'
                      onClick={() => deleteAppointment(items.id)
                        .then(() => getAppointments().then(setAppointment))}>
                      <ImBin2 size={15} color='red'/>
                    </button>
                  </li>
                </ul>
              ))
            ) : (<p>Nenhum agendamento para a data selecionada</p>
            )}
          </div>
          <div className='status-appointments-each-appointment canceled'>
            <h2>Cancelados</h2>
            {canceledAppointments.length > 0 ? (
              canceledAppointments.map((items) => (
                <ul key={items.id} className='map-ul'>
                  <li>Nome:
                    <span>{items.name}</span>
                  </li>
                  <li>Data:
                    <span>{formatDisplayDate(selectedDate)}</span>
                  </li>

                  <li>Horário:
                    <span>{items.hour}</span>
                  </li>
                  <li>Serviço:
                    <span>{items.service}</span>
                  </li>
                  <li>Barbeiro:
                    <span>{items.barber}</span>
                  </li>
                  <li>
                    <button className='concluded-button'
                      onClick={() =>
                        updateAppointments(items.id, { isActive: false, isConcluded: true, wasCanceled: false })
                          .then(() => getAppointments().then(setAppointment))}>
                      <IoMdCheckmarkCircleOutline size={20} color='green'/>
                    </button>
                    <button className='no-concluded-button'
                      onClick={() =>
                        updateAppointments(items.id, { isActive: true, isConcluded: false, wasCanceled: false })
                          .then(() => getAppointments().then(setAppointment))}>
                      <MdRadioButtonUnchecked size={20} color='yellow'/>
                    </button>
                    <button className='remove-button'
                      onClick={() => deleteAppointment(items.id)
                        .then(() => getAppointments().then(setAppointment))}>
                      <ImBin2 size={15} color='red'/>
                    </button>
                  </li>
                </ul>
              ))
            ) : (<p>Nenhum agendamento para a data selecionada</p>
            )}
          </div>
        </div>
      </div >
    </>
  )
}

export default page