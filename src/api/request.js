import axios from "axios";

const apiUrl='127.0.0.1:3001/api'

let request={

  async postData (url,params){

    let initConfig={
      method: 'POST',
      credentials: 'include', // cookies
      // mode: 'no-cors ', 
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body:JSON.stringify(params)
    };

    try{
      let response = await fetch(url,initConfig);
      if(!response){
        throw new Error('No response!');
      }else{
        if(response.ok){
          try{
            let jsonData=response.json();
            return jsonData;
          }catch(err){
            throw err;
          }
        }else{
          throw new Error('Request error');
        }

      }
    }catch(err){
      throw err;
    }

  },

  async getData(url){
    axios.get(url);
  },

  async postDataNew (url,params) {
    // console.log('postDataNew',url,`${apiUrl}${url}`,params);

    //axios.post(`${apiUrl}${url}`, params);
    axios.post(url, params);


  }

}

export default request;