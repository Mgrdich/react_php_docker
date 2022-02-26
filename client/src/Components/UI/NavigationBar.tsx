import {FC} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledUl = styled.ul`
  padding: 0;
  background: black;
  font-size: 12px;
  text-transform: uppercase;
  margin: 0;
`;

const StyledLi = styled.li`
  display: inline-block;

  a {
    display: block;
    padding: 10px;
    color: var(--text-color);
    font-size: 16px;
    text-decoration: none;
    &:hover {
      color: var(--hover-text-color);
    }
  }
`;

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
                        <StyledLi key={item.url}>
                            <Link to={item.url}>{item.text}</Link>
                        </StyledLi>
                    ))
                }
            </StyledUl>
        </nav>
    );
};

export default NavigationBar;