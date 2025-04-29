'use client'
import Image from 'next/image'
import '../styles/aside-admin.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const AsideAdmin = () => {
    const pathname = usePathname();
    return (
        <>
            <aside className='aside-admin'>
                <Image src='/logoBarber.jpg' width={150} height={150} alt='x' />
                <ul className='services'>
                    <li className={pathname === "/inicioAdmin" ? 'current-page ' : undefined}>
                        <Link href={"/inicioAdmin"}
                        >
                            Agendamentos
                        </Link></li>
                    <li className={pathname === "/inicioAdmin/dashboard" ? 'current-page ' : undefined}>
                        <Link href={"/inicioAdmin/dashboard"}>
                            Dashboard
                        </Link></li>
                    <li className={pathname === "/inicioAdmin/servicos" ? 'current-page ' : undefined}>
                        <Link href={"/inicioAdmin/servicos"}>
                            Serviços</Link></li>
                    <li className={pathname === "/inicioAdmin/cortes" ? 'current-page ' : undefined}>
                        <Link href={"/inicioAdmin/cortes"}>
                            Agendar Corte
                        </Link></li>
                    <li className={pathname === "/inicioAdmin/barbeiros" ? 'current-page ' : undefined}>
                        <Link href={"/inicioAdmin/barbeiros"}>
                            Barbeiros
                        </Link></li>
                    <li className={pathname === "/" ? 'current-page ' : undefined}>
                        <Link href={"/"}
                        >
                            Voltar
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default AsideAdmin