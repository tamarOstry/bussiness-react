import React, { useState, useEffect, createContext } from "react";
import { getServicesByBusinessId } from "./admin";

export const context = createContext([]);

export const ServicesContext = (props) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices(props);
    }, []);

     function getServices (businessId) {
        try {
            console.log(props.id);
            getServicesByBusinessId(businessId).then((services) => {
                console.log(services);
                setServices(services);
            });
        } catch (err) {
            console.log(err);
        }
    }

    return <context.Provider value={services}>
        {props.children}
    </context.Provider>
}

// '06589d1a-842c-467c-9f8c-d9deb95b4d19'
