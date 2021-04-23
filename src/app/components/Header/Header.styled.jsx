import styled from "styled-components";

import background from "../../../../public/images/background.jpg";
// https://styled-components.com/

export const Wrapper = styled.div`
  background-image: url(${background});
  height: 500px; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
`;
export const Content = styled.div`
  text-align: left;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

export const Search = styled.input`
  padding: 8px;
`;
