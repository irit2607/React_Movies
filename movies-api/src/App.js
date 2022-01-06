import { useEffect, useState } from 'react';
import axios from 'axios'
import { FaHeart } from "react-icons/fa";
import './App.css';

function App() {

  const myStyle = {
    fontSize: "20px",
    padding: "30px",
    fontFamily: "'Luxurious Roman', cursive"
  };

  const [movie, setMovie] = useState([]);
  const [data1, setData1] = useState([]);
  var shows = [];
  let isValid = false;

  useEffect(() => {
    item();
  }, []);

  const item = async () => {
    const result = await axios.get("https://www.anapioficeandfire.com/api/books")
    shows = result.data;
    setMovie(shows);
    console.log(shows);
  }

  const handleClick = async (name, index) => {
    setData1([...data1, name]);
    console.log(data1)
  }


  return (
    <>
      <div className="App">
        <table>
          <tr>
            <th>Movies</th>
            <th>Selected Movies</th>
          </tr>
          <tr>
            <td>
              {movie.map((i, index) => {
                return (
                  <div key={index}>
                    <div style={{ cursor: "pointer" }}><FaHeart onClick={() => handleClick(i.name, index)} /><p >{i.name}</p></div>
                  </div>
                )
              })}
            </td>

            <td>
              {data1.map((demo) => {
                return (
                  <>
                    <div>{data1[data1.indexOf(demo)]}</div>
                  </>
                )
              })}
            </td>
          </tr>


        </table>
      </div>

      {/* <div style={myStyle}>
        <h2>Movies</h2>
        {movie.map((i, index) => {
          return (
            <>
              <div key={index}>
                <div style={{ cursor: "pointer" }}><FaHeart /><p >{i.name}</p>
                </div>
              </div>
            </>
          )
        })}

      </div> */}
    </>
  );
}

export default App;
