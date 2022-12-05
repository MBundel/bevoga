import { useEffect } from "react";

useEffect(()=>{
    const getResponse = async() =>{
        const url = `https://api.getresponse.com/v3
        `
    }
})


fetch(`https://app.getresponse.com/oauth2_authorize.html?response_type=code&client_id=_${process.env.REACT_APP_GETRESPONSE_API_KEY}&state=xyz`, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})