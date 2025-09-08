import styled from "styled-components";
import { useAuthStore } from "../../store/AuthStore";
import { Btnsave } from "../../index";
export function HomeTemplate() {
    const {singOut} = useAuthStore();
    return (
        <Container>
  <h1 style={{ color: "#fff" }}>Home template</h1>
  <Btnsave titulo="Cerrar sesion" bgcolor="#fff" funcion={singOut}/>
</Container>
    );
}
const Container = styled.div`
display: flex;
justify-content:center;
align-items:center;
height: 100vh;
background-color: ${({ theme }) => theme.bgtotal};
color: ${({ theme }) => theme.text};
width: 100%;
`;