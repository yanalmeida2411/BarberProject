import { Service } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import '../styles/services.css'



const Services: React.FC<Service> = ({ name, value, image }) => {
    return (
        <>
            <div className='services-component'>
                <Image src={image} alt='x'
                    width={200}
                    height={150} />
                <span>{name}</span>
                <span>R${value.toFixed(2).replace('.',',')}</span>
            </div>
        </>
    )
}

export default Services