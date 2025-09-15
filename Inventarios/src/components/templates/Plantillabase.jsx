import styled from "styled-components";
import { useAuthStore } from "../../store/AuthStore";
import { Btnsave, Header } from "../../index";
import { useState } from "react";
export function PlantillaBase() {
    const [state, setState] = useState(false);
    return (
        <Container>
            <header className='header'>
                <Header 
                    stateConfig={{state: state, setState: () => setState
                    (!state)}}
                />
            </header>
            <section className="area1">

            </section>
            <section className="area2">

            </section>
            <section className="main">

            </section>
        </Container>
    );
}
const Container = styled.div`
height: 100vh;
background-color: ${({ theme }) => theme.bgtotal};
color: ${({ theme }) => theme.text};
width: 100%;
display: grid;
padding:15px;
grid-template-areas:
    "header"
    "area1"
    "area2"
    "main";
grid-template-rows: 100px 100px 100px auto;
.header{
    grid-area: header;
    background-color: rgba(103, 93, 241, 0.14);
    display: flex;
    align-items: center;
}
.area1{
    grid-area: area1;
    background-color: rgba(46, 43, 90, 0.14);
    display: flex;
    align-items: center;
}
.area2{
    grid-area: area2;
    background-color: rgba(98, 14, 68, 0.14);
    display: flex;
    align-items: center;

}
.main{
    grid-area: main;
    background-color: rgba(103, 93, 241, 0.14);
}
`;