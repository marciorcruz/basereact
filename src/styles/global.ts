import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';

export default createGlobalStyle`

${normalize}
    :root {
        --black: #0f0f0f;
        --lighterBlack: #2b2b2b;
        --darkBlack: #242424;
        --yellow: #ffd400;
        --white: #ffffff;
        --pinkishGrey: #bcbcbc;
        --lightGrey: #e9eae8;
        --lighterGrey: #f4f7f9;
        --danger: #e33a58;
        --warmGrey: #777777;
        --snow: #f0f0f0;
        --greyishBrown: #555555;
        --grey: #cecece;
        --greyish: #4e4e4e;
        --denseGrey: #8899a5;
        --orangeYellow: #ffa900;
        --tangerine: #ff8b00;
        --pinkish-grey: #d0d0d0;
        --warm-grey: #9e9e9e;
        --greyishBrownTwo: #3b3836;
        --purplishGrey: #5f5d60;
        --silver: #cdd6db;
        --whiteTwo: #fbfbfb;
        --lipstick: #e53755;
        --warmGreyThree: #808080;
        --blackGrey: #565656;
        --cementGrey:#8D8D8D;


        // TaaS //

        --blue: #0068FF;
        --lightBlue: #71DDFF;
        --skyBlue: #20BFF4;
        --darkBlue: #0034BB;
        --purple: #6B36B3;
        --red: #EC1724;
        --green: #00AB85;
        --yellow: #F9B300;
        --pink: #EC1771;
        --lightBlack: #141414;
        --lightGrey: #f1f1f1;
        --disabled: #BDBDBD;
        --green: #00AA54;
        --mintGreen: #00AB85;

        --bodyBG: #FBFBFB;

        --primaryFont:'Poppins', -apple-system,system-ui, BlinkMacSystemFont, "Segoe UI",Roboto, "Helvetica" ,sans-serif;

        --secondaryFont:'Inter', -apple-system,system-ui, BlinkMacSystemFont, "Segoe UI",Roboto, "Helvetica" ,sans-serif;

        --siteWidth: 1248px;

        --globalGap: 24px;
        --globalPadding: 24px;
        --globalRadius: 10px;
        --globalShadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
    }

    html, body, textarea, select, input {
        font-family: var(--secondaryFont);
        background: var(--bodyBG);
        font-size: 16px;

    }



    h1,h2,h3,h4,h5,h6 {
        font-family: var(--primaryFont);
        font-weight: 600;
    }
`;
