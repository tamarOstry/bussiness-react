import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { context } from "../api/serviceContext";
import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export function Services() {
    const [services, setServices] = useState([]);
    let navigate = useNavigate();
    // const { getServices } = useContext(context);
    const ss =useContext(context);
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
        // getServicesFromContext();
        navigate('/businessServices',{state:{myBusiness:form.business,fromAdmin:true}})
    }, [])

    const getServicesFromContext = async () => {
        // const s = await getServices(form.business.id);
        // const s = await getServices(form.business.id);
        // setServices(s);
    }

    return (
        <>
            {/* <Card sx={{ maxWidth: 2000, alignItems: 'center', marginTop: 2 }}>
                <CardMedia
                    component="img"
                    height="230"
                    image={form.business?.img}
                    alt="ha ha ha"
                />
                <CardContent>
                    <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h3" component="div">
                        {form.business.businessName}

                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                        {form.business.ownersName}
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3, }}>
                        {
                        ss === [] ? <p>no services</p> : ss.map((services) => (
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
                                        <Button  variant="outlined" size='large'>Register </Button>
                                        </Typography>
                                    </CardContent>
                                </Card>


                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
                <div style={{ marginRight: 'left' }}></div>
            </Card> */}
        </>
    )
}
