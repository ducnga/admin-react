import { API_LOGIN } from './../constants/Config';

export default (Email, Password) => axios({
    method: 'post',
    data: { Email, Password },
    url: API_LOGIN,
}).then(Respon => {
    console.log(Respon.data);
    localStorage.setItem('jwt_token', Respon.data.token);
})
