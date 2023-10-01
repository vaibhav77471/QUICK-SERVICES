import axios from "axios";

const server = " http://apps.codebetter.in:8082/quickserve";

export const urls = {
  ADMIN_LOGIN: `${server}/auth/login`,
  USER_LIST: `${server}/user/list`,
  Delete_USER: `${server}/user/delete`,
  SERVICES_LIST: `${server}/serviceType/list`,
  SAVE_SERVICES: `${server}/serviceType/save`,
  DELETE_SERVICE: `${server}/serviceType/delete`,
  SAVE_CATEGORY_ITEM: `${server}/item/save`,
  delete_category: `${server}/item/delete`,
  CATEGORY_LIST: `${server}/item/listAll`,
  // ALLSERVICESBY_ID: `${server}/serviceType/list/id/:id`,
  SAVE_BOOKING : `${server}/booking/save`,
  MY_ORDER :  `${server}/booking/admin/bookingReq/list`,
  BOOKING_CANCEL:`${server}/booking/user/booking/cancel`,
  IMAGE_UPLOAD: `${server}/profile/uploadpic`
};

class webservices {
  getapicall(urls) {
    return axios.get(urls);
  }
  postapicall(urls, data) {
    return axios.post(urls, data);
  }
  deleteapicall(urls,id)
  {
    console.log(urls+"/"+id)
      return axios.delete(urls+"/"+id);
  }
  putApiCall(urls,id){
    return axios.put(urls+'/'+id);
  }
}


export default new webservices();
