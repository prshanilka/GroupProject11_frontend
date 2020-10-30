import axios from 'axios';
const bapi = axios.create({
  baseURL: 'http://localhost:3000/api/',
  //headers: { 'X-API-TOKEN': store.state.token },
})
const token="ddd";
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = {
};
export default {

  getSomeData () {
    return bapi.get('/endpoint')
  },
  auth: (req,callBack) => {
    bodyParameters.username=req.username;
    bodyParameters.password=req.password;
    bapi.post('/users/login',bodyParameters,config
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
        return callBack(null,udata.data);

    }
  ).catch(err => {
      console.log(err.response);

  });









}
}