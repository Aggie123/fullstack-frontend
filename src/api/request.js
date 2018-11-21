import axios from "axios";

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
      console.log('response',response);
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

  async postDataNew (url,params) {

    axios.post(url, params);

  }

}

export default request;