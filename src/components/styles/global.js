import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding: 0%;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --white:#F8F9FA;
    --pink:#FF577F;
    --success:#3FE864;
    --negative:#E83F5B;
    --darkblue:#212529;
    --gray:#868E96;
    --gray2:#343B41;
    --black:#000000;
}

body{
    background-color: var(--black);
    color:var(--white);
    font-family: 'Inter', sans-serif;
}
h1,h2 ,h3 ,h4{
    font-size: 16px;
    font-weight: bolder;
}

span, p{
font-size: 12px;
font-weight: normal;
}
button{
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        filter: brightness(1.2);
    }
}
a{
    text-decoration: none;
}
`;
