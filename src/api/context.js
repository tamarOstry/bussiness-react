import React, { useState, useEffect, createContext } from "react";
import { getBusinessByAdminId,getServicesByBussinessId } from "./getBussinessByAdminId";

export const context = createContext([]);

export const Context = (props) => {
    const [business, setBusiness] = useState([]);
    useEffect(() => {
        getBusiness();
    }, []);

    const getBusiness = () => {
        try {
            getBusinessByAdminId(props.adminId).then((business) => {
                console.log(business);
                getServicesByBussinessId(business.id).then((businessDetails) => {
                    console.log(businessDetails);
                    setBusiness([...businessDetails]);
                });
            });
        } catch (err) {
            console.log(err);
        }
    }

    return <context.Provider value={business}>
        {props.children}
    </context.Provider>
}

