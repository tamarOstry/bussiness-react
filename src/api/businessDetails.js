import axios from 'axios';

   export const getServices =  (id) => {
        try {
             axios.get(`https://meetings-test.herokuapp.com/service?business_id=${id}`)
            .then((res) => {
                debugger;
                console.log(res.data)
                return res.data;
            } )
        }
        catch (error) {
            console.log('error in get business');
        }
    }
