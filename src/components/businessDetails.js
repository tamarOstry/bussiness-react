import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import { useEffect } from 'react'
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { context } from "../api/context";
import { BusinessContext } from "../api/context";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {editBusinessDetails} from '../api/business'

export function BusinessDetails() {
    const [openService, setOpenService] = useState(true);
    const [businessOwners, setBusinessOwners] = useState("");
    const [businessName, setBusinessName] = useState("");

    const location = useLocation();
    const form = location.state;

    const businessDetails = useContext(context);
    // const servicesDetails = useContext(context.ServiceContext(businessDetails.id));


    const handleClick = () => {
        setOpenService(!openService);
    };

    const saveBusinessDetails=()=>{
        businessDetails.ownersName=businessOwners;
        businessDetails.businessName=businessName;
        editBusinessDetails(businessDetails)
    }

    {/*             
   <BusinessContext.Consumer adminId='8a3807c0-af72-47e3-9369-745a7ae9889a'>
      {({theme}) => (
        setBusiness
      )}
    </BusinessContext.Consumer> */}
    return (
        <div className="div" style={{ backgroundImage: 'url(' + businessDetails.image + ')' }}>
            <h1>hi to your business</h1>
            <TextField
                id="outlined-helperText"
                label="owners"
                defaultValue={businessDetails && businessDetails.ownersName}
                onChange={(e)=>setBusinessOwners(e.target.value)}
            />
            <TextField
                id="outlined-helperText"
                label="business name"
                defaultValue="Default Value"
                onChange={(e)=>setBusinessName(e.target.value)}
            />
            <Stack direction="row" spacing={2}>
                <Button color="secondary" onClick={saveBusinessDetails}>save the changes</Button>
            </Stack>
        </div>
        //      <Fab color="secondary" aria-label="edit">
        //      <EditIcon onClick={edit} />
        //  </Fab>
    )
}
