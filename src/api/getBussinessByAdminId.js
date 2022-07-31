import axios from 'axios';
export const getBusinessByAdminId=async(adminId)=> {
    try {
        const res= await axios.get(`https://meetings-test.herokuapp.com/business/${adminId}`);
        return res.data;
    } catch (err) {
        console.log(err)
      }
    }


export async function getServicesByBusinessId(businessId) {
    try {
        const res =await axios.get(`https://meetings-test.herokuapp.com/service?business_id=${businessId}`);
        return res.data;
      } catch (err) {
        console.log(err)
      }
}