import React, { useState, useEffect } from 'react'
function Genre(props) {
  const [isLoaded, setLoaded] = useState(true);
  const [content, setContent] = useState([]);
  const sendGenre = (e) => {
    console.log("genre : " + e.target.textContent)
    props.setGlobalGenre(e.target.textContent);
  }
  // so i will run only one time after first execution of return statement
    // useeffect -> outer function, async function  
  useEffect(function () {
    (async function () {
      // fetch is inbuilt feature of browser that makes the request to get data -> promise based
      let response = await fetch('https://react-backend101.herokuapp.com/genres');
      response = await response.json();
      // console.log(response); 
      setLoaded(false);
      setContent(response);
    })();
  }

    , [])
  return (
    <div className="Genre" style={{height:"200px", width:"200px"}}>
      <div className="
      mr-0 border-2 w-40 text-center h-10 font-bold" style={{width:"150px", height:"50px"}}
        onClick={sendGenre}>All Genre</div>
      {isLoaded == true ?
        <button className="font-bold"> Loading...</button >
        : content.genres.map(function (genre) {
          return (< button style={{width:"150px", height:"50px"}}
            key={genre._id}
            className="mr-1 border-2 w-40 text-center h-10 border-t-2 font-bold"
            onClick={sendGenre}
          >
            {genre.name}</button>
          )
        }
        )
      }
    </div >


  )
}

export default Genre;