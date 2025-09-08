
import { AuthContextProvider, MyRoutes, Light, Dark, Sidebar, MenuHambur } from "./index";
import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { createContext } from "react";
import { Device } from "./styles/breackpoints";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'


export const ThemeContext = createContext(null);

function useResponsive() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile, isTablet, isDesktop };
}

function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          <Container className={sidebarOpen ? "active" : ""}>
            {(isDesktop || isTablet) && (
              <section className="ContentSidebar">
                <Sidebar state={sidebarOpen} setState={() => setSidebarOpen(!sidebarOpen)} />
              </section>
            )}
            {isMobile && (
              <section className="ContentMenuhambur">
                <MenuHambur />
              </section>
            )}
            <section className="ContentRoutes">
              <MyRoutes />
            </section>
          </Container>
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.bgtotal};
  .ContentSidebar {
    display: none;
  }
  &.active .ContentSidebar {
    display: initial;
  }
  @media ${Device.tablet} {
    .ContentSidebar {
      display: initial;
    }
  }
  .ContentMenuhambur {
    display: block;
    position: absolute;
    left: 20px;
  }
  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active {
      .ContentSidebar {
        display: initial;
      }
      .ContentMenuhambur {
        display: none;
      }
    }
    .ContentRoutes {
      grid-column: 1;
      width: 100%;
      @media ${Device.tablet} {
        grid-column: 2;
      }
    }
  }
`;

export default App;
