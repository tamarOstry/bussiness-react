import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { context } from "../api/serviceContext";

export function Services() {
    const [services, setServices] = useState();
    const { getServices } = useContext(context);
    // const services =useContext(context);
    // const s = useContext(context);
    const location = useLocation();
    const form = location.state;
    console.log(form.business.id)
    // const newLocal = <context.Consumer value={form.business}>
    //     {({ theme }) => (
    //         <div>{theme}</div>
    //     )}
    // </context.Consumer>;

    useEffect(() => {
        getServicesFromContext();
    }, [])

    const getServicesFromContext = async () => {
        const s = await getServices(form.business.id);
        setServices(s);
    }

    return (
        <div>
            <div>services</div>
            {/* {services && services.map(service => (
                <div>{service.name}</div>
            ))} */}
        </div>
    )
}
