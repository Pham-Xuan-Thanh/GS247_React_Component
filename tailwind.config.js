module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'red-336': '#F44336',
        '919DAF': '#919DAF',
        '344356' : '#344356',
        '5E718A' : '#5E718A',
        'background': "#1E2A3A",
        '757A83' : '#757A83',
        'E8E9EA' : '#E8E9EA',
        "E77941" : '#E77941',
        "2E4562" : "#2E4562",
        'E77941': '#E77941',
      },
      inset: {
        'leftTriangle' : 'calc(50% - 8px/2 - 185.5px)',
        'rightTriangle': 'calc(50% - 8px/2 + 193.5px)',
        'middleArrow': 'calc(50% - 8px/2 + 12px)',
        'leftArrow': 'calc(50% - 8px/2 + 24px)',
        'rightArrow' : 'calc(50% - 8px/2)',
        '331p':'331px',
        '38p': '38px',
        '54p': "54px",
        '15p':'15px',
        '10p':'10px',
        '214p':'214px',
        '25p':'25px',
        '4/5': '80%',
        '45.45': '45.45%',
        '31.25':'31.25%',
        '81.25':'81.25%',
        '85.46':'85.46%',
        '1/10':'10%',
        '0': '0%',
        '27.27': '27.27%',
        '27.08':'27.08%',
        'clac': 'calc(50% - 288px/2)',
      },
      width: {
        '371p': "371px",
        '379p' : "379px",
        '288p': '288px',
        '264p': '264px',
      },
      height:{
        '22p':"22px",
        '46p':"46px",
        '54p':"54px",
        '110p' : '110px'
      },
      lineHeight: {
        '150': '150%',
        '160': '160%',
      },
      fontFamily: {
        'inter': ['Inter']
      },
      fontSize : {
        '14p':'14px',
      },
      margin: {
        '8p': '8px',
      },
      padding: {
        '7p': '7px',
        '12p': '12px',
        '16p':'16px',
      },
      borderRadius: {
        '8p':'8px',
      },
      boxShadow:{
        "tooltipNone": " 0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",
      },
      dropShadow: {
        "tooltip" : "0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['active','focus-visible'],
      backgroundColor: ['active'],
      outline: ['hover', 'active','focus'],
    },
  },
  plugins: [],
}