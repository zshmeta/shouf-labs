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
    margin-bottom: 0.1px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 13px;
    cursor: pointer;
    &:first-child {
      border-top: 2px solid cyan;
    }
    &:last-child {
      margin-bottom: 1rem;
      border-bottom: 2px solid cyan;
    }
    & span {
      font-size: 20px;
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
         bottom:-5px;
         left: 20%;
        font-size: 33px;
        transition: font-size 0.3s ease-in-out;

      }
      & active {
        font-size: 33px;
      }
    }
  }



  ::marker {
    content: url("../src/assets/marker.svg") ' ';
  }

  li:nth-child(3n)::marker {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='9' viewBox='0 0 50 50'%3E%3Cpath d='M46.5 12.5c-.4-1.1-1.3-1.8-2.2-2-4.2-4-11.6-4.3-17.1-4.1-6.9.3-13.9 2.1-19.4 6.5C2 17.5-2.4 25.7 2.5 32.6c2.2 3.2 5.5 4.9 9 5.5 3.3 1.7 6.7 3.3 10.2 4.4 7.8 2.3 17 1.6 23.2-4.3 7.3-7 4.8-17.3 1.6-25.7zm-20.2 2.7c.6 0 1.3 0 1.8.2 1.1.4 1.7 1.3 2 2.3-1-1.2-2.4-2.1-3.8-2.5zm-1.4 6.6c.9.9 1.3 2.2-.2 2.3-2 .2-1.1-1.9.2-2.3zm-11.8 9.8c-.6-.3-2.9-1.1-3.2-1.8-.2-.5 1.4-3.1 2.1-4.2.3.5.7 1 1.2 1.4 0 .3.1.6.2.8.5 1.9 1.5 3.1 2.9 4h-.2c-.8.1-1.6.1-2.5-.1-.2 0-.3 0-.5-.1zM24 36.4c1.6-.7 3-1.5 4.3-2.5.8.2 1.7.3 2.5.5 2.5.4 5.2.9 7.7.6-.9.6-2 1.1-3 1.4-3.9 1.3-7.7 1-11.5 0z'/%3E%3C/svg%3E") ' ';
  }

  li:nth-child(3n - 1)::marker {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='9' viewBox='0 0 50 50'%3E%3Cpath d='M48.3 23.7c-1-9.9-9.9-15.6-18.8-17.8-8.2-2.1-18.8-2.6-24.6 4.8C.6 16.2 1 23.6 4.3 29.3c-.5 1-.8 2-1 3-.6 4 2 7.6 5.1 10 5.9 4.4 14 4.2 19.6-.4 1.5 0 2.9-.2 4.4-.5 1.8 0 3.5 0 5.3-.1 2.3-.1 3.5-1.9 3.5-3.7 4.5-3.3 7.7-8.2 7.1-13.9zM9.1 17.8c1.1-4.1 4.9-5.8 8.8-6.1.9-.1 1.9-.1 2.9-.1-3.2 1.6-6.3 4.6-8 7.4-.1.1-.1.2-.2.3-1.1.9-2.1 1.9-3 2.9-.2.2-.4.4-.5.6-.4-1.7-.5-3.3 0-5z'/%3E%3C/svg%3E") ' ';
  }
 `;



export const StyledListItem = styled.li`

`