import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Home() {
  // const [query, setQuery] = useState("");
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  // const[page,setPage] = useState("1")

  const getmemes = async () => {
    let url = `https://api.imgflip.com/get_memes`;
    // setLoading(true)
   
   

    await axios({
      method: "GET",
      url: url,
      
    })
      .then((res) => {
        console.log(res.data.data.memes);
        // setLoading(false)
        setMemes(res.data.data.memes);
        setLoading(false)
      })
    
  };

  // const prevp = () => {
  //   setPage()
    
  // };
  // const nextp = () => {
  //   setPage(page + 1 )
    
  // };

 

  useEffect(() => {
    getmemes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <>
    <div>sdfsda</div>
      {/* <Search>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          value={query}
          onKeyDown={keyPress}
          placeholder="Search Images Here"
        />
        <button onClick={search}>Search</button>
      </Search> */}
      <Hom>
        {loading? <p> Loading...</p>:memes.map((e, id) => {
          return (
            <Memes key={id}>
              <p>
                <b>Shot By:-</b>
                {e.name}
              </p>
              <a href={e.url}>
                <img
                  src={e.url}
                  alt={e.alt}
                  style={{
                    minWidth: "300px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                />
              </a>
            </Memes>
          );
        })}
        
      </Hom>

      {/* <Buttons>
        <button onClick={getphotos("prev")}>prev</button>
        <button onClick={getphotos("next")}>next</button>
        
      </Buttons> */}
    </>
  );
}

const Hom = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const Search = styled.div`
  width: 100vw;
  text-align: center;
  margin-top: 30px;

  input {
    width: 40%;
    margin: 5px;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  button {
    /* width: 40%; */
    cursor: pointer;
    margin: 5px;
    padding: 10px;
    /* outline: none; */
    border: none;
    border-radius: 5px;
  }
`;
const Memes  = styled.div`
  margin: 20px;
  transition: transform 0.5s ease;

  &&:hover {
    transform: scale(1.1);
  }
`;
const Buttons = styled.div`
text-align: center;
width: 100%;
margin: 20px;
display: flex;
align-items: center;
justify-content: center;


button{
  padding: 5px;
  margin: 10px;
  cursor: pointer;
}

`;

