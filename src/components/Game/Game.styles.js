import styled from "styled-components";

export const GameSuper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: #587B7F;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
`;

export const GameBoard = styled.div`
  position: fixed;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  filter: blur(10px 50px);
  box-shadow: 15px 15px 50px rgba(0,0,0,.1),
              -15px -15px 50px rgba(0,0,0,.1);
`;

export const GameInfo = styled.div`
  margin-left: 20px;
`;