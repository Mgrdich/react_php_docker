import {FC} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledUl = styled.ul`
  padding: 0;
  background: black;
  font-family: Arial, sans serif;
  font-size: 12px;
  text-transform: uppercase;
`

const StyledLi = styled.li`
  display: inline-block;

  a {
    display: block;
    padding: 10px;
    color: white;
    text-decoration: none;
  }
`

interface INavigationBar {
    routes: Array<{
        url: string,
        text: string
    }>
}

const NavigationBar: FC<INavigationBar> = ({routes}) => {
    return (
        <nav>
            <StyledUl>
                {
                    routes.map(item => (
                        <StyledLi>
                            <Link to={item.url}>{item.text}</Link>
                        </StyledLi>
                    ))
                }
            </StyledUl>
        </nav>
    );
};

export default NavigationBar;