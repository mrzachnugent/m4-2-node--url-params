import React, { useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import styled from "styled-components";

const EntryContent = styled.div`
  margin: 0 24px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 45px;
  span {
    font-size: 10px;
    color: #888;
    font-weight: 500;
  }
`;

const TitleContainer = styled.div`
  font-weight: 600;
  padding-left: 25px;
  font-size: 18px;
  p {
    color: #666;
    font-style: italic;
    padding-top: 5px;
  }
`;

const NumberAndTitleContainer = styled.div`
  display: flex;
`;

const PublicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 12px;
  color: #888;
`;

const Top50 = () => {
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    // this is where we fetch the data from the server and add it to state.
    fetch("/top50")
      .then((res) => res.json())
      .then((json) => {
        setAllSongs(json.data);
      });
  }, []);

  console.log("Top50.js: allSongs: ", allSongs);

  return (
    <>
      <Header pageTitle="Top 50 Songs Streamed on Spotify" />
      {allSongs.map((song) => {
        return <Content song={song} />;
      })}
    </>
  );
};

export default Top50;
