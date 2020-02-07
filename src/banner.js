const banner = {
  init: initBanner
};
function initBanner() {
  let g = "color:#777;font-weight:bold;";
  let b = "color:#0F669D;font-weight:bold;";

  let textChrome = `                                                                                              
                                                                                                  
               %cAAA               RRRRRRRRRRRRRRRRR   UUUUUUUU     UUUUUUUULLLLLLLLLLL             
              %cA:::A              R::::::::::::::::R  U::::::U     U::::::UL:::::::::L             
             %cA:::::A             R::::::RRRRRR:::::R U::::::U     U::::::UL:::::::::L             
            %cA:::::::A            RR:::::R     R:::::RUU:::::U     U:::::UULL:::::::LL             
           %cA:::::::::A             R::::R     R:::::R U:::::U     U:::::U   L:::::L               
          %cA:::::A:::::A            R::::R     R:::::R U:::::D     D:::::U   L:::::L               
         %cA:::::A A:::::A           R::::RRRRRR:::::R  U:::::D     D:::::U   L:::::L               
        %cA:::::A   A:::::A          R:::::::::::::RR   U:::::D     D:::::U   L:::::L               
       %cA:::::A     A:::::A         R::::RRRRRR:::::R  U:::::D     D:::::U   L:::::L               
      %cA:::::AAAAAAAAA:::::A        R::::R     R:::::R U:::::D     D:::::U   L:::::L               
     %cA:::::::::::::::::::::A       R::::R     R:::::R U:::::D     D:::::U   L:::::L               
    %cA:::::AAAAAAAAAAAAA:::::A      R::::R     R:::::R U::::::U   U::::::U   L:::::L         LLLLLL
   %cA:::::A             A:::::A   RR:::::R     R:::::R U:::::::UUU:::::::U LL:::::::LLLLLLLLL:::::L
  %cA:::::A               A:::::A  R::::::R     R:::::R  UU:::::::::::::UU  L::::::::::::::::::::::L
 %cA:::::A                 A:::::A R::::::R     R:::::R    UU:::::::::UU    L::::::::::::::::::::::L
%cAAAAAAA                   AAAAAAARRRRRRRR     RRRRRRR      UUUUUUUUU      LLLLLLLLLLLLLLLLLLLLLLLL`;

  console.log(textChrome, g, b, g, b, g, b, g, b, g, b, g, b, g, b, g, b);
}

export default banner;
