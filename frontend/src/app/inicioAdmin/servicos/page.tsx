import Services from '@/components/Services'
import React from 'react'
import '../../../styles/services.css'

const page = () => {
  // os itens unicos terao duração de 30 min e os pacotes de 1h
  return (
    <>
      <div className='all-services-content'>
        <h1>Serviço Padrão</h1>
        <ul className='single-services'>
          <li>
            <Services
              image='/testeImg.jpg'
              name={"Corte Masculino"}
              value={30}
            />
          </li>
          <li>
            <Services
              image='/barba.jpg'
              name={"Barba Completa"}
              value={20}
            />
          </li>
          <li>
            <Services
              image='/sobrancelha.jpg'
              name={"Sobrancelha"}
              value={15}
            />
          </li>
          <li>
            <Services
              image='/luzes.jpg'
              name={"Luzes/Descoloração"}
              value={30}
            />
          </li>
          <li>
            <Services
              image='/limpeza.jpg'
              name={"Limpeza de Pele"}
              value={25}
            />
          </li>
        </ul>
        <h1>Pacote de Serviço</h1>
        <ul className='service-package'>
          <li>
            <Services
              image='/pacote.jpg'
              name={"Corte + Barba"}
              value={45}
            />
          </li>
          <li>
            <Services
              image='/pacote.jpg'
              name={"Corte + Sobrancelha"}
              value={40}
            />
          </li>
          <li>
            <Services
              image='/pacote.jpg'
              name={"Barba + Sobrancelha"}
              value={30}
            />
          </li>
        </ul>
      </div>
    </>
  )
}

export default page