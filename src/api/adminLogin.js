import axios from 'axios';
export const logIn=async(userName, password)=> {
    const sighIn='sighIn'
    try {
        const res= await axios.post(`https://meetings-test.herokuapp.com/user/${sighIn}`,
        {
         username:userName,
         password:password
        });
        return res.data;
    } catch (err) {
        console.log(err)
      }
};

