import Config from './config';


//let instance = null;

class AppUtil {

  constructor() {
    //instance = this;
  }

  
  getHeaders() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');
    myHeaders.append('Access-Control-Allow-Origin', document.location.origin);
    myHeaders.append('Access-Control-Allow-Credentials', "true");

    
    return myHeaders;
  }

  
}

export default new AppUtil();

/*import AppUtil from '../../../modules/appUtil.js';*/
