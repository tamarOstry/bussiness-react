import axios from 'axios';

   export const getBusiness = async () => {
        try {
            debugger
            const business = await axios.get('https://meetings-test.herokuapp.com/business');
            return business.data;
        }
        catch (error) {
            console.log('error in get business');
        }
    }




