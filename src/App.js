import React,{useEffect,useState} from "react";
import Axios from "axios";

import "./App.css"

 function App () {

  const[weatherdata,setweatherdata] = useState({});

  const[search,setSearch] = useState("")

  const fetchApi = async (e) => {
    const Api = `https://api.openweathermap.org/data/2.5/weather?&appid=34be34cd6ea30f893e6b918e8a86cf01&q=${search}&units=metric`
      if (e.key === 'Enter'){
         try{
          let response =await Axios.get(Api)
          setweatherdata(response.data)
         
         }catch(err){
          console.log(err)
         }
        }
  }

 

 


return(

  <div className="home-container">

        <div className=" main-container ">

                
          

                <div className="cards">
                <div>
                <input onChange={(e)=>setSearch(e.target.value)} onKeyPress={fetchApi} placeholder="search a town" type="text" />
                {weatherdata.main && (
                  <div>
                  <h1>{weatherdata?.name}</h1>
                  <h1>
                    <div>{weatherdata?.main.temp} <sup>&deg;C</sup></div>
                   </h1>
                  <h1></h1>
                  <br /> <br />
                  <h2>{weatherdata?.weather[0].description}</h2>
                  </div>
                )}
                 </div>


</div>

    </div>

  </div>
)
}
export default App