import { useEffect, useState } from 'react';
function App() {

  const[movie, setMovie] = useState(null);

useEffect(()=>{
  getData();

  async function getData(){
    const response = await fetch("https://www.omdbapi.com/?s=star%20wars&apikey=55ecb700")
   
    const data = await response.json();
    console.log(data)
    // storing the data into movies variable
    setMovie(data);
    
  }
},[]);
 
  return (
    <>
    <h3>Movies</h3>
    {movie && (
      movie.map((movies,index) => {
      <div key={index}>
        <p>{movies.Title}</p>
      </div>
    })
    )}
    </>
  );
}

export default App;
