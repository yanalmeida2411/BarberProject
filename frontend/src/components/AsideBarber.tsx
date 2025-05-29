'use client'
import Image from 'next/image'
import '../styles/aside-admin.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const AsideBarber = () => {
    const pathname = usePathname();
    return (
        <>
            <aside className='aside-admin'>
            <h1>Aura for Barbers</h1>
                <ul className='services'>
                <li className={pathname === "/inicio" ? 'current-page ' : undefined}>
                        <Link href={"/inicio"}
                        >
                            Agendamentos
                        </Link></li>
                <li className={pathname === "/inicio/barbeiros" ? 'current-page ' : undefined}>
                        <Link href={"/inicio/barbeiros"}>
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

export default AsideBarber;