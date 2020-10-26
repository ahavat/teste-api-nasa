import styled from 'styled-components';


export const Header = styled.div`
margin-top: 0px;
`;

export const Container = styled.div`
* {
    padding: 0;
    margin: 0;
  }

display: flex;
flex-direction: row-reverse;
background-color: #fff;
flex-wrap: wrap-reverse;
object-fit: cover;
justify-content: center;

.item2 {
  .cards {
    img {
      height: 150px;
      width: 200px;
      margin-top: -6px;
    }
    #iconcircle {
      font-size: 15px;
      margin-left: 90px;
      margin-top: 80px;
      position: absolute;
      height: 30px;
    }
    h4 {
      font-size: 15px;
      margin-left: 64px;
      margin-top: 60px;
      position: absolute;
    }
    #textcard {
       color: transparent;
    }
    img:hover {
      opacity: 0.5;
      transition: 850ms;
     }
   } 
    #textcard:hover {
      font-family: sans-serif;
      color: green;
      font-size: 30px;
    }
}
`;
export const button = styled.div`
  color: #f7f7f7;
`;

