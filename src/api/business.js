import axios from 'axios';
export const editBusinessDetails=async(id,businessDetails)=> {
    try {
        const res= await axios.get(`https://meetings-test.herokuapp.com/business/${id}`,{"business":businessDetails});
        return res.data;
    } catch (err) {
        console.log(err)
      }
    }
