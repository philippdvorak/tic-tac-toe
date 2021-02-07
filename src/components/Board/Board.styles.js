import styled from "styled-components";

export const BoardGame = styled.div`
`;

export const BoardRow = styled.div`
  display: table;
  
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

export const Status = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;