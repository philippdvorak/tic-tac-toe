import styled from "styled-components";

export const GameSuper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #587B7F;
  color: #E2C044;
`;

export const GameBoard = styled.div`
  position: fixed;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 20px;
  box-shadow: 15px 15px 50px rgba(0,0,0,.1),
              -15px -15px 50px rgba(0,0,0,.1);
              
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const GameInfo = styled.div`
  position: fixed;
  top: 35%;
  font-size: 2rem;
  text-align: center;
  
  ol {
    position: fixed;
    left: 30%;
    top: 30%;
    max-height: 35%;
    min-height: 35%;
    overflow-y: auto;
    overflow-x: hidden;
    
    li {
      list-style: none;
    }
    
    button {
      background-color: #587B7F;
      color: #E2C044;
      box-shadow: 3px 3px 5px rgba(0,0,0,.2),
                  -3px -3px 5px rgba(255,255,255,.2);
      border-radius: 6px;
      border: none;
      height: 5vh;
      width: 10vw;
      transition: box-shadow .5s;
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 10px;
      margin-right: 20px;
      cursor: pointer;
      
      &.active {
        cursor: default;
        color: #587B7F;
        background-color: #E2C044;
        box-shadow: 3px 3px 5px rgba(0,0,0,.2),
          -3px -3px 5px rgba(0, 0,0,.2);
        
        &:hover {
          box-shadow: 3px 3px 3px rgba(0,0,0,.2),
                      -3px -3px 3px rgba(0,0,0,.2);
        }
      }
      
      &:first-child {
        margin-top: 10px;
      }
      
      &:last-child {
        margin-bottom: 0;
      }
      
      &:hover {
        box-shadow: 3px 3px 3px rgba(0,0,0,.2),
                    -3px -3px 3px rgba(255,255,255,.2),
                    inset 3px 3px 3px rgba(0,0,0,.2),
                    inset -3px -3px 3px rgba(0,0,0,.2);
        transition: box-shadow .5s;
      }
    }
  }
`;