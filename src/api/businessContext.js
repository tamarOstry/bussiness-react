import React, { useState, useEffect, createContext } from "react";
import { getBusinessByAdminId,getServicesByBusinessId } from "./admin";

export const context = createContext([]);

export const BusinessContext = (props) => {
    const [business, setBusiness] = useState([]);

    useEffect(() => {
        getBusiness();
    }, []);

// props.adminId
    const getBusiness = (props) => {
        try {
            getBusinessByAdminId('7e83d637-c83f-4145-a650-0d3c5adc3199').then((business) => {
                console.log(business);
                setBusiness(business);
            });
        } catch (err) {
            console.log(err);
        }
    }

    return <context.Provider value={business}>
        {props.children}
    </context.Provider>
}

