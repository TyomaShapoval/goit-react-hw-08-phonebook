export const light = {
  name: 'light-mode',
  colors: {
    mainColor: '#D2D9DC',
    accentColor: '#545E2E',
    mainBackgroundColor: '#B0C3CC',
    secondaryBackgroundColor: '#93A8B5',
  },
  fontStyles: {
    size: '18px',
    weight: '700',
  },
  breakPoints: {
    mobile: '@media screen and (min-width: 320px)',
    tablet: '@media screen and (min-width: 768px)',
    desktop: '@media screen and (min-width: 1200px)',
  },
  borderRadius: '20px',
  boxShadow:
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
};

export const dark = {
  name: 'dark-mode',
  colors: {
    mainColor: '#101E28',
    accentColor: '#E8B287',
    mainBackgroundColor: '#275E78',
    secondaryBackgroundColor: '#6C8C98',
  },
  fontStyles: {
    size: '18px',
    weight: '700',
  },
  breakPoints: {
    mobile: '@media (min-width: 320px)',
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1200px)',
  },
  borderRadius: '20px',
  boxShadow:
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
};

export const theme = {
  dark,
  light,
};
