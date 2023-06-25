import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "92c04e091336746db";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async() => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response => response.json())
            .then(res => {
                setData(res)
            })
        }
        fetchData();
    }, [term])


    return { data }

}
export default useGoogleSearch;













//  useEffect(() => {
//     const fetchData = async () => {
//     try {
//         const response = await axios.get(`https://www.googleapis.com/customersearch/v1`, {
//         params: {
//             key: API_KEY,
//           cx: CONTEXT_KEY,
//           q: term
//         }
//       });
//       setData(response.data);
//     } catch (error) {
//       // Handle error
//       console.log(error);
//     }
//   };

//   fetchData();
// }, [term]);
    

