import { API_TOKEN } from './../constants/Config';

export default (token) => axios({
    method: 'post',
    data: { token },
    url: API_TOKEN,
}).then(function(d){
    console.log(d)
}).catch(function(e){
    return <Redirect to='/login-system' />
})
