// import { extendTheme } from "@chakra-ui/react";

// const theme = extendTheme({
//   fonts: {
//     body: `'ChosunCentennial', sans-serif`,
//     heading: `'ChosunCentennial', sans-serif`,
//   },
//   bgColor= {"gray.300"}
// });

// export default theme;

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  //styles 키값이라니?
  styles: {
    //전역 스타일을 설정할 수 있습니다.
    global: {
      //body태그의 속성을 나타냅니다.
      body: {
        backgroundColor: "gray.300",
        color: "gray.700",
      },
    },
  },
  fonts: {
    body: `'ChosunCentennial', sans-serif`,
    heading: `'ChosunCentennial', sans-serif`,
  },
});

export default theme;
