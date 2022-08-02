import React, { useState, useEffect, createContext } from "react";
import { getBusinessByAdminId } from "./admin";

export const context = createContext([]);

export const BusinessContext = (props) => {
    const [business, setBusiness] = useState([]);

    useEffect(() => {
        getBusiness();
    }, []);

// props.adminId
    const getBusiness = (props) => {
        try {
            getBusinessByAdminId('4b9adeb6-65df-4121-92ad-60fe48f687e7').then((business) => {
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

