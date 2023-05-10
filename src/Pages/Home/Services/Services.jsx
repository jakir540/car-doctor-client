import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services,setServices] = useState([])


    useEffect(()=>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])




    return (
        <div className='my-5'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-orange-500'>Services</h1>
                <h3 className='text-5xl font-bold'>Our Services</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>

           <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 my-8">
           {
                services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
            }
           </div>
            
        </div>
    );
};

export default Services;