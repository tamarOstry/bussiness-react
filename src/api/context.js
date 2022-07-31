import React, { useState, useEffect, createContext } from "react";
import { getBusinessByAdminId,getServicesByBusinessId } from "./getBussinessByAdminId";

export const context = createContext([]);

export const BusinessContext = (props) => {
    const [business, setBusiness] = useState([]);

    useEffect(() => {
        getBusiness();
    }, []);

// props.adminId
    const getBusiness = (props) => {
        try {
            getBusinessByAdminId('8a3807c0-af72-47e3-9369-745a7ae9889a').then((business) => {
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


// export const ServicesContext = (props) => {
//     const [services, setServices] = useState([]);

//     useEffect(() => {
//         getServices();
//     }, []);

// // props.adminId
//     const getServices = (props) => {
//         try {
//             getServicesByBusinessId(props.businessId).then((services) => {
//                 console.log(services);
//                 setServices(services);
//             });
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     return <context.Provider value={services}>
//         {props.children}
//     </context.Provider>
// }

