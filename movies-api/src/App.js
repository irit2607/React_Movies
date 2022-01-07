import { useEffect, useState } from 'react';
import axios from 'axios'
import { FaHeart } from "react-icons/fa";
import './App.css';

function App() {

  const myStyle = {
    backgroundColor: "black",
    color: "white",
    fontSize: "15px",
    padding: "8px 30px",
    borderRadius: "5px",
    margin: "10px 0px",
    cursor: "pointer",
    alignItems: "flex-start"
  };

  const [movie, setMovie] = useState([]);
  const [data1, setData1] = useState([]);
  var shows = [];

  useEffect(() => {
    item();
  }, []);

  const item = async () => {
    const result = await axios.get("https://www.anapioficeandfire.com/api/books")
    shows = result.data;
    setMovie(shows);
    console.log(shows);
  }

  const handleClick = (name, index) => {
    setData1([...data1, name]);

  }

  const onDelete = (e) => {
    console.log(e);
    const del = data1.filter((item) => (item !== e))         // 1. data = 1
    setData1(del);
    console.log(data1);
  }

  return (
    <>
      <div className="App">
        <table>
          <tr>
            <th style={{ paddingLeft: "12em", fontSize: "20px", }}>Movies</th>
            <th style={{ paddingLeft: "15em", fontSize: "20px" }}>Selected Movies</th>
          </tr>
          <tr>
            <td style={{ paddingLeft: "15em" }}>
              {movie.map((i, index) => {
                return (
                  <div key={index}>
                    <div style={{ cursor: "pointer" }}>
                      <p style={{ fontSize: "20px", alignItems: "flex-start" }}>
                        {i.name}</p>
                      <td>
                        <FaHeart style={{ fontSize: "25px" }} onClick={() => handleClick(i.name, index)} />
                      </td>
                      <hr></hr>

                    </div>
                  </div>
                )
              })}
            </td>
            <div style={{ marginTop: "-0.5em" }}> <td style={{ paddingLeft: "16em", fontSize: "20px" }}>
              {data1.map((demo) => {                                       // demo is a object in which map func searially executing the object i.e each single data  
                return (                     // data1[data1.indexOf(demo)]
                  <>                                                                       
                    {data1.length === 0 ? "No selected value" : <p>{demo}</p>}                   

                    <button className="btn btn-sm btn-danger" onClick={() => onDelete(demo)} style={myStyle}>
                      DELETE
                    </button><br />
                  </>
                )
              })}
            </td></div>

          </tr>


        </table>

      </div>


    </>
  );
}

export default App;
