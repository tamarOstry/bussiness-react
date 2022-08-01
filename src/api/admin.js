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

export async function getMeetingsByBusinessId(businessId) {
  try {
      const res =await axios.get(`https://meetings-test.herokuapp.com/service?business_id=${businessId}`);
      return res.data;
    } catch (err) {
      console.log(err)
    }
}



export const editBusinessDetails=async(businessDetails)=> {
  try {
    debugger
      const res= await axios.put(`https://meetings-test.herokuapp.com/business/${businessDetails.id}`,{"business":businessDetails});
      return res.data;
  } catch (err) {
      console.log(err)
    }
  }

  export const deleteBusinessService=async(serviceId)=> {
    try {
      debugger
        const res= await axios.delete(`https://meetings-test.herokuapp.com/service/${serviceId}`);
        return res.data;
    } catch (err) {
        console.log(err)
      }
    }
