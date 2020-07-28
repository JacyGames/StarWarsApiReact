

class ApiService {

    baseUrl = "https://swapi.dev/api/";

    getData = async (url) => {
        const response = await fetch(this.baseUrl + url);
        return await response.json();
   }
   getSomething = (items, page) => {
        return  this.getData(`${items}/?page=${page}`);
   }
    getSomethingInfo =(items) => {
        return this.getData(`${items}/`).then(response => response.count);
    }


}
export default ApiService;