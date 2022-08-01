import React, { useEffect } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Navigate } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { maxHeight, positions } from "@mui/system";
import CardActions from '@mui/material/CardActions';
import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { deleteBusinessService } from '../api/admin';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { TextField } from '@material-ui/core';
import { DialogTitle } from '@mui/material';
import { DialogContent } from '@mui/material';
import { DialogActions } from '@mui/material';

export function BusinessServices() {
    const location = useLocation();
    const form = location.state;
    const [listServices, setListServices] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        getAllServices(form.myBusiness.id);
    }, []);

    const getAllServices = async (id) => {
        try {
            axios.get(`https://meetings-test.herokuapp.com/service?business_id=${id}`)
                .then((res) => {
                    console.log(res.data);
                    setListServices(res.data);
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    const deleteService = async (id) => {
        const res = await deleteBusinessService(id);
        if (res)
            alert('delete successfully');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = async (fromSave) => {
        if (fromSave) {
            // if (businessName !== "")
            //     businessDetails.businessName = businessName;
            // if (businessOwners !== "")
            //     businessDetails.ownersName = businessOwners;
            // const updateBusiness = await editBusinessDetails(businessDetails);
            // if (updateBusiness !== undefined)
            //     alert('save successfully');
        }
        setOpen(false);
    };

    return (
        <>
            <Card sx={{ maxWidth: 2000, alignItems: 'center', marginTop: 2 }}>
                <CardMedia
                    component="img"
                    height="230"
                    image={form.myBusiness?.img}
                    alt="ha ha ha"
                />
                <CardContent>
                    <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h3" component="div">
                        {form.myBusiness.businessName}

                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                        {form.myBusiness.ownersName}
                    </Typography>
                    {form.fromAdmin ?
                        <Fab color="primary" aria-label="edit">
                            <AddCircleOutlineIcon />
                        </Fab> : <></>
                    }
                    <Grid container spacing={{ xs: 2, md: 3, }}>
                        {
                            listServices === [] ? <p>no services</p> : listServices.map((services) => (
                                <Grid services xs={2} sm={3} md={3} key={services.name}>
                                    <Card direction="row" sx={{ maxWidth: 345, minWidth: 345, maxHeight: 340, minHeight: 340 }}>
                                        <CardContent >
                                            <Typography variant="h5" component="div" color="primary" textAlign="center">
                                                {services.name}
                                            </Typography>
                                            <Typography variant="h6" component="div" textAlign="center">
                                                num of meetings: {services.numOfMeetings}
                                            </Typography>
                                            <Typography variant="h6" component="div" textAlign="center">
                                                duration: {services.durationOfMeeting}
                                            </Typography>
                                            <Typography variant="h6" component="div" textAlign="center">
                                                cost: {services.cost}
                                            </Typography>
                                            <Typography variant="h6" component="div" textAlign="center">
                                                place of meetings:<br />
                                                {services.address.city} {services.address.street} {services.address.number} ,
                                            </Typography>
                                            <Typography variant="h6" component="div" textAlign="center">
                                                opening between: {services.OpeningHours}
                                            </Typography>
                                            <Typography variant="body2">
                                                <br />
                                            </Typography>
                                            {form.fromAdmin ?
                                                <CardActions>
                                                    <Fab color="primary" aria-label="edit">
                                                        <EditIcon onClick={handleClickOpen}/>
                                                    </Fab>
                                                    <Fab color="primary" aria-label="edit">
                                                        <DeleteIcon onClick={() => deleteService(services.id)} />
                                                    </Fab>
                                                </CardActions> :
                                                <>
                                                    <Typography textAlign="center">
                                                        <Button variant="outlined" size='large'>Register </Button>
                                                    </Typography>
                                                </>
                                            }
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                    </Grid>
                </CardContent>
                <div style={{ marginRight: 'left' }}></div>
            </Card>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    edit my service details
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <TextField
                            id="filled-helperText"
                            // value={businessDetails && businessDetails.ownersName}
                            helperText="ownersName"
                            variant="filled"
                            // onChange={(e) => setBusinessOwners(e.target.value)}
                        />
                        <TextField
                            id="filled-helperText"
                            // value={businessDetails && businessDetails.businessName}
                            helperText="businessName"
                            variant="filled"
                            // onChange={(e) => setBusinessName(e.target.value)}
                        />
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => handleClose(true)} color="primary">
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
