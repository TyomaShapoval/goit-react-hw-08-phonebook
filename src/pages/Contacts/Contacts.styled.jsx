import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  flex-grow: 1;
`;

const sectionDynamicStyle = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 500px;
  min-height: 570px;
  padding: 20px;
  background-color: ${theme.colors.secondaryBackgroundColor};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
`;

const sectionTitleDynamicStyle = ({ theme }) => css`
  margin: 0;
  text-align: center;
  font-size: 28px;
  color: ${theme.colors.mainColor};
`;

export const Section = styled.section`
  ${sectionDynamicStyle}
`;

export const SectionTitle = styled.h2`
  ${sectionTitleDynamicStyle}
`;