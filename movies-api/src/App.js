import { useEffect, useState } from 'react';
import axios from 'axios'
import { FaHeart } from "react-icons/fa";

function App() {

  const myStyle = {
    fontSize : "20px",
    padding: "30px",
    fontFamily: "'Luxurious Roman', cursive" 
  };

  const [movie, setMovie] = useState([]);
  var shows = [];
  // useEffect(()=>{
  //   getData();

  //   async function getData(){
  //     const response = await fetch("https://www.omdbapi.com/?s=star%20wars&apikey=55ecb700")

  //     const data = await response.json();
  //     console.log(data)
  //     // storing the data into movies variable
  //     setMovie(data);

  //   }
  // },[]);

  useEffect(() => {
    item();
  }, []);

  const item = async () => {
    const result = await axios.get("https://www.anapioficeandfire.com/api/books")
    shows = result.data;
    setMovie(shows);
    console.log(shows);
  }

  return (
    <>
      <div style={myStyle}>
        <h2>Movies</h2>
        {movie.map((i, index) => {
          return (
            <>
              <div key={index}>
              
              <div style={{cursor : "pointer"}}><FaHeart /><p >{i.name}</p>
              </div>
              </div>
            </>
          )
        })}

      </div>
    </>
  );
}

export default App;
