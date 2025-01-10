import { useEffect, useState } from "react";
import axios from 'axios'

export default function Posts(){
    const[postdata,setPostData]=useState([])
    useEffect(()=>{
        let url ="http://localhost/Razobyte/wordpress/wp-json/wp/v2/posts"
      axios.get(url).then((res)=>{
        setPostData(res.data)
      })
    })
    return(
<>
{postdata.map((itme,id)=>{
    console.log(itme)
    return(
        <div key={id}>
        <ul>
        <li>{itme.title.rendered}</li>
    
  
        </ul>
        </div>
    )
    
})}

</>
        
    )

}