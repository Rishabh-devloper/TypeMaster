import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
*{
   box-sizing: border-box
    
}
body{
    background-color: black ;
    color: white;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear ;
}

.canvas{
    display: grid;
    min-height: 100vh;
    grid-auto-flow: row;
    grid-template-row: auto 1fr auto ;
    gap:0.5rem;
    padding : 2rem;
    width: 100vw;
    align-item:center;
    text-align:center;
}




`

