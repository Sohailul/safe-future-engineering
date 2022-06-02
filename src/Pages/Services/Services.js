import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-24'>
            <h1 class="text-5xl font-bold text-center divider mb-24">Our Services</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-stretch mb-24'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;