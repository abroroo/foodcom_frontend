import React, {useEffect, useState} from 'react'
import axios from 'axios';
interface Props {}

const testR = () => {




const dataExample = {
    "name": "test 121",
    "ticket_number": 243242313
  };
  
  const [count, setCount] = useState<number>(0);


  
//   const saveFormData = async () => {
//     try {
//       const response = await axios.put(
//         'http://127.0.0.1:8000/api/customer_update/243242313',
//         dataExample,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
  
//       console.log(response.data);
//       console.log('This is example Data:', JSON.stringify(dataExample));
//       setCount(1);
//     } catch (error) {
//       console.error(error);
//     }
//   };


// const saveFormData = async () => {
//       try {
//         const res = await fetch(`http://127.0.0.1/:8000/api/customer_update/243242313`, {
//           method: 'PUT',
//           mode: 'cors',
//         //   headers: {
//         //     'Content-Type': 'application/json',
//         //   },
//           body: JSON.stringify(dataExample),
//         });
//         const data = await res.json();
//         console.log(data);
//         console.log("this is example Data : ", JSON.stringify(dataExample) )
      
//       } catch (error) {
//         console.log(error);
//       }
//     };
    

 
//     saveFormData();

  
  
  
  return <div></div>
}

export default testR