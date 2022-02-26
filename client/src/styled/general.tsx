import styled from "styled-components";
import {FC} from "react";

export const StyledHeader = styled.div`
  text-align: center;
  font-size: 35px;
`;

interface IFlexContainer {
    width?: number;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justifyContent?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'stretch' | 'center' | 'start' | 'end';
    cursor?: 'help' | 'wait' | 'crosshair' | 'pointer' | 'grab';
    maxWidth?: number;
    flexWrap?: string;
    flexGrow?: number;
    padding?: string;
    margin?: string;
}

export const FlexContainer: FC<IFlexContainer> = styled.div<IFlexContainer>`
  display: flex;
  width: ${({width}) => width};
  flex-direction: ${({flexDirection}) => flexDirection || 'row'};
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: ${({alignItems}) => alignItems};
  max-width: ${({maxWidth}) => maxWidth};
  flex-wrap: ${({flexWrap}) => (flexWrap ? 'wrap' : 'nowrap')};
  flex-grow: ${({flexGrow}) => (flexGrow ? 1 : 'initial')};
  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
  cursor: ${({cursor}) => cursor};
  position: relative;
`;

interface IFlexItem {
    flex?: string;
    flexBasis?: string;
    margin?: string;
    padding?: string;
    width?: string;
}

export const FlexItem: FC<IFlexItem> = styled.div<IFlexItem>`
  flex: ${({flex}) => flex};
  flex-basis: ${({flexBasis}) => flexBasis};
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};
  width: ${({width}) => width};
`;