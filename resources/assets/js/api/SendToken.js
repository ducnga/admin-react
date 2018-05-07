import { API_CHECK_TOKEN } from './../constants/Config';

export default (token) => axios({
    method: 'post',
    data: { token },
    url: API_CHECK_TOKEN,
}).then(Respon =>Respon.data);
