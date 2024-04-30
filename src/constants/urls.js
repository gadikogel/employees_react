// const MAIN_URL ="http://localhost:3001";
// const urls ={
//     EMPLOYEES_URL:MAIN_URL
// }
// export default urls;
import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:3001"
});