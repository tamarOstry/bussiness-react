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

export default function BusinessServices() {
	const navigate = useNavigate();	

    const location = useLocation();
    const form = location.state;
    const [listServices, setListServices] = React.useState([]);

    useEffect(() => {
        debugger
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
                    <Grid container spacing={{ xs: 2, md: 3, }}>
                        {
                        listServices === [] ? <p>no services</p> : listServices.map((services) => (
                            <Grid services xs={2} sm={3} md={3} key={services.name}>
                                <Card direction="row" sx={{ maxWidth: 345, minWidth: 345, maxHeight:340,minHeight:340 }}>
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
                                        <Typography  textAlign="center">
                                        <Button  variant="outlined" size='large'  onClick={() => navigate('/register',{state:{myServices:services}})}>Register </Button>
                                        </Typography>
                                    </CardContent>
                                </Card>


                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
                <div style={{ marginRight: 'left' }}></div>
            </Card>
        </>
    );
}
