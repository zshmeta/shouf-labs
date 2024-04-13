import styled from 'styled-components';


export const ComponentTreeRoot = styled.div`
  display: block;
  padding: 0px;
  color: darkblue;
  font-family: 'Gloria Hallelujah', cursive;
  min-height: content;
`;

export const StyledList = styled.ul`
  list-style-position: inside;
  width: 100wh;
  height: 100%;
  background: whitesmoke;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0.5rem 0.5rem 2rem rgb(0 0 0 / 0.4);
  padding: 0;
  margin: 0;
  border-radius: 0.3rem;
  text-align: left;
  li {
    list-style-type: none;
    border-bottom: 1px solid cyan;
    border-top: 1px solid cyan; 
    transition: border 0.3s ease-in-out, font-size 0.3s ease-in-out; 
    margin-bottom: 0px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 13px;
    cursor: pointer;
    font-size: 22px;

    &:first-child {
      border-top: 2px solid cyan;
    }
    &:last-child {
      margin-bottom: 1rem;
      border-bottom: 2px solid cyan;
    }
    &:hover {
      border-top: 2px solid darkblue;
      border-bottom: 2px solid darkblue;
      margin-bottom: 0.5px;
      position: relative;
      margin-bottom: 0.1px;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 13px;
    &:first-child {
      border-top: 2px solid darkblue;
    }
    &:last-child {
      margin-bottom: 1rem;
      border-bottom: 2px solid darkblue;
    }
      & span {
         position: absolute;
         bottom: 5px;
         left: 20%;
        font-size: 30px;
        // transition: font-size 0.2s ease-in-out;
      }

  }

    &::marker {
      content: url("../src/assets/marker.svg") ' ';
      
    }
    }

    & .unreadable {
      color: #FF9900;
      font-size: 17px;
     pointer-events: none;
     &::marker {
       content: url("../src/assets/marker3.svg") ' ';
     }
    }
  


& .active {
  border-top: 2px solid darkblue;
  border-bottom: 2px solid darkblue;
  margin-bottom: 0.5px;
  position: relative;
  margin-bottom: 0.1px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 13px;

  &:first-child {
    border-top: 2px solid darkblue;
  }
  &:last-child {
    margin-bottom: 1rem;
    border-bottom: 2px solid darkblue;
  }

  & span {
    position: absolute;
    bottom: 5px;
    left: 20%;
    font-size: 30px;
  }

  &::marker {
    content: url("../src/assets/marker2.svg") ' ';
  }
}
}
  
 `;



export const StyledListItem = styled.li`

`