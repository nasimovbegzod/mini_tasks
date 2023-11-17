import { useEffect, useState } from "react"
export const url = ' https://fakestoreapi.com/'
export const useFetchData = () => {
  const [data, setdata] = useState([])
  const getData = async () => {
    const response = await fetch( url + 'products');
    const data = await response.json();
    setdata(data);
  };
  console.log(data);
  useEffect(() => {
  getData()
  }, [])
  return{data}
}