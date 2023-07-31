import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = async () => {
    const [data, setData] = useState();

    await useEffect(() => {
         axios
        .get(
         "https://api.nasa.gov/planetary/apod?api_key=QhiFx7qkJb1PB7PPGV5ZKzrtWdSKHKa0oiCbxFqJ"
        )
        .then((response) => setData(response.data));
    }, []);

    return(data)
}