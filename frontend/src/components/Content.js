import React from "react";
import styled from "styled-components";

const Content = ({ song }) => {
  return (
    <Wrapper>
      <NumberAndTitleContainer>
        <NumberContainer>
          #{song.rank} <span>({song.streams} streams)</span>
        </NumberContainer>
        <TitleContainer>
          {song.title}
          <p>by {song.artist}</p>
        </TitleContainer>
      </NumberAndTitleContainer>
      <PublicationContainer>
        publication date: {song.publicationDate}
      </PublicationContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

export default Content;
