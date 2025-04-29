'use client'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()


  const handleAdminClick = () => {
    router.push('/inicioAdmin')
  }

  const handleBarberSelect = () => {
    router.push('/inicio')
  }

  return (
    <>

      <div className="all-content-options">
        <h1>Selecione Uma Opção</h1>
        <button onClick={handleAdminClick}> Admin</button>
        <button onClick={handleBarberSelect}>Barber</button>
      </div >
    </>
  );
}
