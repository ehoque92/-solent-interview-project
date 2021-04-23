import styled from "styled-components";

export const Wrapper = styled.div`
  background: lightgray;
  padding: 2rem 3rem;
`;

export const ProfileCard = styled.div`
  background: white;
  border: 1px black solid;
  width: 400px;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  text-align: left;


  &:hover {
    background-color: #C8B7FA;
    cursor: pointer;
    
    }
  
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  margin-right: 20px;
`;

export const ProfileName = styled.div`
  display: inline-block;
  position: relative;
  bottom: 15px;
`;

