import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { GiNotebook } from 'react-icons/gi';

const headerContainerDynamicStyle = ({theme}) => css`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 15px;
    max-width: 320px;
    margin: 0 auto;
    padding: 0 20px;

    ${theme.breakPoints.tablet} {
    flex-direction: row;
    justify-content: space-between;
    max-width: 768px;
    padding: 0 32px;
  }
  ${theme.breakPoints.desktop} {
    max-width: 1200px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const containerDynamicStyle = ({theme}) => css`
  max-width: 320px;
    margin: 0 auto;
    padding: 0 20px;
 
    ${theme.breakPoints.tablet} {
    max-width: 768px;
    padding: 0 32px;
  }
  ${theme.breakPoints.desktop} {
    max-width: 1200px;
  }
`

const headerDynamicStyle = ({theme}) => css`
  background-color: ${theme.colors.secondaryBackgroundColor};
  padding: 20px;
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const logoTextDynamicStyle = ({theme}) => css`
  margin: 0;
  color: ${theme.colors.mainColor};
  font-size: 20px;
  font-weight: ${theme.fontStyles.weight};
  ${theme.breakPoints.tablet} {
    font-size: 30px;
  }
  ${theme.breakPoints.desktop} {
    font-size: 50px;
  }
`

const styledMainDynamicStyle = ({theme}) => css`
   flex-grow: 1;
  background-color: ${theme.colors.mainBackgroundColor};
`

const logoIconDynamicStyle = ({theme}) => css`
   color: ${theme.colors.mainColor};
`

export const HeaderContainer = styled.div`
  ${headerContainerDynamicStyle}
`

export const Container = styled.div`
  ${containerDynamicStyle}
`

export const Header = styled.header`
  ${headerDynamicStyle}
`

export const LogoText = styled.p`
  ${logoTextDynamicStyle}
`

export const StyledMain = styled.main`
  ${styledMainDynamicStyle}
`
export const LogoIcon = styled(GiNotebook)`
  ${logoIconDynamicStyle}
`