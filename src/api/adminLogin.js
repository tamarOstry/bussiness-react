import axios from 'axios';
export async function  logIn(userName, password) {
    const sighIn='sighIn'
    const admin = {
        userName: userName,
        password:password
    };
    // await axios.post(`https://meetings-test.herokuapp.com/user/${sighIn}`, { admin })
    //     .then(res => {
    //       if(res.status === 200 && res.ok) 
    //          return res.json();
    //     })
    //     .then(data => {
    //         if(data)
    //           return data.id;
    //     })
    return '5a6e2782-a082-4656-9da2-1367a27e99ff';
};


export function Register(firstName,lastName,userName,password,email,phonNumber) {
    return fetch('http://localhost:3016/nurse', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            password: password,
            email: email,
            phoneNumber: phonNumber,
        }),
    })
        .then(response => {
            if (response.ok && response.status == 200)
                return response.json();})
        .then(data => {
            if (data)
                alert(data._id);
                return
        }).catch((err) => {
            console.log(err);
        });
}


export function update(firstName, lastName, userName, password, email, phonNumber) {
    let Userid = JSON.parse(sessionStorage.getItem('user')).id;
    return fetch('http://localhost:3016/nurse' + Userid, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            password: password,
            email: email,
            phoneNumber: phonNumber,
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data)
                alert(data._id);
        });
}