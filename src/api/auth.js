import axios from 'axios';
import { bUrl } from '../constants/config'
const bapi = axios.create({
  baseURL: bUrl,
  //headers: { 'X-API-TOKEN': store.state.token },
})




const bodyParameters = {
};

export function myF () {
  return axios.get('/elders')
}


export default {
  getSomeData () {
    return bapi.get('/endpoint')
  },
  auth: (req,callBack) => {
    bodyParameters.username=req.username;
    bodyParameters.password=req.password;
  bapi.post('/users/login',bodyParameters
  ).then(
    user => {
      console.log("ds");
      console.log(user.data);
        if(user.data.success == 0){
          console.log(user.data);
          return callBack(user.data);
        }
        const udata=user.data;
        localStorage.jwt=udata.token;
        localStorage.jwtr=udata.refresh;
        return callBack(null,udata.data);

    }
  ).catch(err => {
      console.log(err.response);

  });









  },
}