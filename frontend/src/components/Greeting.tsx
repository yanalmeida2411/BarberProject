'use client'
import { usePathname } from 'next/navigation'
import '../styles/greeting.css'

export default function Greeting() {
  const pathname = usePathname()

  if (pathname.includes('/inicioAdmin')) {
    return <h1 className='greeting'>Bem-vindo, Administrador</h1>
  }

  if (pathname.includes('/inicio')) {
    return <h1 className='greeting'>Bem-vindo, Barbeiro</h1>
  }

  return null // Não mostra nada em outras páginas
}