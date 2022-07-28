import axios from 'axios';
export async function  getBusinessByAdminId(adminId) {
    // try {
    //     const res = axios.get(`https://meetings-test.herokuapp.com/business/${adminId}`).then(() => {
    //     return res.data;
    //  })
    //   } catch (err) {
    //     console.log(err)
    //   }
let business=
{
  userId:"5a6e2782-a082-4656-9da2-1367a27e99ff",
  business:{
        ownersName: "tamar&esty",
        businessName: "water sport",
        img:"https://bestanimations.com/media/water/920370318endless-ocean-gif.gif",
        services:[
                {
                    serviceName:"abuvim",
                    numOfMeetings:7,
                    durationOfMeeting:"20 miniutes",
                    cost:"100$",
                    OpeningHours:"10:00-19:00",
                    address:{
                        city:"Tiberias",
                        street:"rimon",
                        number:5
                    }
                },
                {
                  serviceName:"abuvim",
                  numOfMeetings:7,
                  durationOfMeeting:"20 miniutes",
                  cost:"100$",
                  OpeningHours:"10:00-19:00",
                  address:{
                      city:"Tiberias",
                      street:"rimon",
                      number:5
                  }
              },
              {
                serviceName:"abuvim",
                numOfMeetings:7,
                durationOfMeeting:"20 miniutes",
                cost:"100$",
                OpeningHours:"10:00-19:00",
                address:{
                    city:"Tiberias",
                    street:"rimon",
                    number:5
                }
            },
            {
              serviceName:"abuvim",
              numOfMeetings:7,
              durationOfMeeting:"20 miniutes",
              cost:"100$",
              OpeningHours:"10:00-19:00",
              address:{
                  city:"Tiberias",
                  street:"rimon",
                  number:5
              }
          }
         ]
     }
}
    return business;
    }


export async function getServicesByBussinessId(bussinessId) {
    try {
        const res = axios.get(`https://meetings-test.herokuapp.com/service?business_id=${bussinessId}`).then(() => {
        return res.data;
     })
      } catch (err) {
        console.log(err)
      }
}