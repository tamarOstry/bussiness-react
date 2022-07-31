import React, { useEffect } from "react"
import { getBusiness } from "../api/homeUser";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { padding, style } from "@mui/system";
import Stack from '@mui/material/Stack'; 
import { useNavigate } from 'react-router-dom';

export default function HomeUser() {

  const [listBusiness, setListBusiness] = React.useState([]);
	let navigate = useNavigate();	

  useEffect(() => {
    getAllBusiness();
  }, []);

  const getAllBusiness = async () => {
    try {

      const business = await getBusiness();
      console.log(business);
      setListBusiness(business);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div id="allBusiness" >
      <Typography gutterBottom variant="h2" component="div" sx={{ textAlign: 'center', padding: '10px', }}>All Business</Typography>
       <Stack padding={3} direction="row" spacing={5} sx={{'& .MuiCard-root': { m: 5},flexWrap: 'wrap' }} > 
      {/* <Box
      sx={{
        '& .MuiCard-root': { m: 5, width: '2500ch' },
      }} */}
    {/* > */}

        {listBusiness.map(business =>
          <Card direction="row" sx={{ maxWidth: 345, minWidth: 345 }}>
            <CardMedia
              component="img"
              alt="busines"
              height="140"
              image={business.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {business.businessName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {business.ownersName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {business.phone}
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Register for services</Button> */}
              <Button variant="contained"  onClick={() => navigate('/businessDetails',{state:{myBusiness:business}})}  >Register for services</Button>
            </CardActions>
          </Card>

        )}
      </Stack>

    </div>

  )
}



