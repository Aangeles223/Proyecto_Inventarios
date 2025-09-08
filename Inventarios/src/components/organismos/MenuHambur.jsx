import styled from "styled-components";
import { LinksArray, SecondarylinksArray, ToggleTema,  } from "../../index";
import {NavLink} from "react-router-dom"
import {v} from "../../styles/variables"
import { useState } from "react";

export function MenuHambur(){
    const [click, setClick] = useState(false);
    return(
        <Container>
            <NavBar>
                <section>
                <HamburgerMenu onClick={() => setClick(!click)}>

    <label  className={click?"toggle active": "toggle"} for="checkbox">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
                </HamburgerMenu>
                </section>
                <Menu $click={click.toString()}>
        {LinksArray.map(({ icon, label, to }) => (
          <div onClick={()=>setClick(!click)}
            className="LinkContainer"
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <div className="Linkicon">{icon}</div>
              <span>{label}</span>

            </NavLink>
          </div>
        ))}
        <Divider />
        {SecondarylinksArray.map(({ icon, label, to }) => (
          <div onClick={()=>setClick(!click)}
            className="LinkContainer"
            key={label}
          >
            <NavLink
              to={to}
              className="Links"
            >
              <div className="Linkicon">{icon}</div>
             <span>{label}</span>

            </NavLink>
          </div>
        ))}
        <ToggleTema/>
        <Divider />
        
      
    </Menu>
            </NavBar>
        </Container>
    );
}
const Container = styled.div`
background-color: ${(props) => props.theme.body};
`

const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 100ch;
`

const HamburgerMenu = styled.span`
/* From Uiverse.io by vinodjangid07 */ 
position:fixed;
top:2rem;
left:10px;
z-index : 100;
#checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .5s;
  &.active{
  transition-duration: .5s;
  transform: rotate(180deg);
  .bars {
  position: absolute;
  transition-duration: .5s;
}
  #bar2 {
  transform: scaleX(0);
  transition-duration: .5s;
}
  #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: .5s;
}
  #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: .5s;
}
  }
}

.bars {
  width: 100%;
  height: 4px;
  background-color: ${(props) => props.theme.text};
  border-radius: 4px;
}

#bar2 {
  transition-duration: .8s;
}

#bar1,#bar3 {
  width: 70%;
}
`

const Menu = styled.div`
  display:flex;
  align-items: center;
  list-style: none;
  z-index: 10;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  background: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
  backdrop-filter: blur(3px);
  transform: ${({ $click }) => ($click === "true" ? "translateY(0)" : "translateY(1000%)")};
  transition: all 0.5s ease;
  .LinkContainer{
  &:hover{
  background: ${(props) => props.theme.bgAlpha};
 }

    .Links{
    width: 100vw;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.text};
    height: 80px;
    .Linkicon{
    padding: ${() => v.smSpacing} ${() => v.mdSpacing};
    display: flex;
    svg{
      font-size: 25px;
    }
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;