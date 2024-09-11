"use strict"
const sites = {
  FACEBOOK: {
    name: "facebook",
    api: ""
  },
  COPY:  {
    name: "copy",
    api: ""
  },
  WHATSAPP: {
    name: "whatsapp",
    api: ""
  },
  LINKEDIN:{
    name: "linkedin",
    api: ""
  },
  MAIL: {
    name: "mail",
    api: ""
  },
}
Object.freeze(sites)
export const siteList = (params) => {
  

  function checkAllKeysPresent(sites, arr) {
    return arr.every(key => key in sites);
  }
    if (Array.isArray(params) === false) {
      return []
    }
  if (params.length === 0) {
      Object.values(sites)
  }
  if (checkAllKeysPresent(sites, params) === false) {
    return []
  }
  return params.map((param) => {

      
      return sites[param];
    
  });
    
}