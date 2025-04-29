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
                <Image src='/logoBarber.jpg' width={150} height={150} alt='x' />
                <ul className='services'>
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