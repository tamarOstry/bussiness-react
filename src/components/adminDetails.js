import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from 'react';



export function AdminDetails() {

    // useEffect()
    return (
        <div class="div">
           <h1>hello for your business details</h1>
           <Fab color="secondary" aria-label="edit">
              <EditIcon />
           </Fab>
        </div>
    )
}
