import axios from 'axios'

export default class Apiservices {
   private  static url:string ="https://jsonplaceholder.typicode.com/users";
   // private static empurl="http://localhost:8080/Show/all/Employee";
   private  static urlpost:string ="https://jsonplaceholder.typicode.com/posts";
   private  static urlDelet:string ="https://jsonplaceholder.typicode.com/posts/1";
   private  static urlupdate:string ="https://jsonplaceholder.typicode.com/posts/1";

   public static getData(){
    let apiURL:string=`${this.url}`;
    return axios.get(apiURL);
   }
   public static postEmp(obj:string){
      let apiURL:string=`${this.urlpost}`;
       return axios.post(apiURL,obj);
   }

   public static DeleteData(){
      let apiURL:string=`${this.urlDelet}`;
      return axios.delete(apiURL);
   }
   public static Updatedata(id:number){
      
      let apiURL:string=`${this.urlupdate}`;
      return axios.put(apiURL,id);
   }
}