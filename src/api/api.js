import axios from "axios";
const API = 'https://644e78ff1b4567f4d5887c27.mockapi.io/shoes/storage';
//const API= 'https://644cfdb757f12a1d3dd51a8b.mockapi.io/Shoes/Storage';
export const fetchData = async () => {
    try {
      const response = await axios.get(`${API}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  export async function getshoeById(id){
    try{
        const respone=await axios.get(`${API}/${id}`);
        return respone.data;
    }catch(error){
        console.error('Error fetching data:', error);
        return null;
      }
  };
export async function addShoe(shoe)
{
    try{
    const respone = await axios.post(`${API}`,shoe);
return respone.data;
}
catch(error){
    console.log(error);
    return null;
}
};

export async function EditShoe(shoe,id)
{
    try{
    const respone = await axios.put(`${API}/${id}`,shoe);
return respone.data;
}
catch(error){
    console.log(error);
    
}
};
export const  deleteShoe= async(id)=>{
{
    try{
     await axios.delete(`${API}/${id}`);
return respone.data;
}
catch(error){
    console.log(error);
   
}
};
}
export async function Shoe(shoe)
{
    try{
    const respone = await axios.get(`${API}`,shoe);
return respone.data;
}
catch(error){
    console.log(error);
    return null;
}
};