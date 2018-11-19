// import axios from "axios";

let request={

  getData: async (url,params) =>{
    let initConfig={
      method: 'POST',
      credentials: 'include', // cookies
      cache: 'no-cache ', // cookies
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body:JSON.stringify(params)
    };

    try{
      let response = fetch(url,initConfig);
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

}

export default request;