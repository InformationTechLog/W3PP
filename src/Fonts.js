import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
            // @font-face {
            //     font-family: 'Happiness-Sans-Title';
            //     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/Happiness-Sans-Title.woff2') format('woff2');
            //     font-weight: normal;
            //     font-style: normal;
            // }

            // @font-face {
            //     font-family: 'SeoulNamsanM';
            //     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SeoulNamsanM.woff') format('woff');
            //     font-weight: normal;
            //     font-style: normal;
            // }

            // @font-face {
            //     font-family: 'MICEGothic Bold';
            //     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/MICEGothic Bold.woff2') format('woff2');
            //     font-weight: 700;
            //     font-style: normal;
            // }

            @font-face {
                font-family: 'ChosunCentennial';
                src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/ChosunCentennial.woff2') format('woff2');
                font-weight: 100;
                font-style: normal;
            }

            @font-face {
                font-family: 'ChosunBg';
                src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunBg.woff') format('woff');
                font-weight: 100;
                font-style: normal;
            }
      `}
  />
);

export default Fonts;
