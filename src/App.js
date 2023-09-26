import React, { useState } from "react";

import Money from "./components/Money/Money";
import SaveMenu from "./components/SaveMenu/SaveMenu";
import Comment from "./components/Comment/Comment";
import Cookie from "./components/Cookie/Cookie";
import ShopMenu from "./components/ShopMenu/ShopMenu";
import UpdateMenu from "./components/UpdateMenu/UpdateMenu";
import Credits from "./components/Credits/Credits";
import UpperWrapper from "./components/Wrappers/UpperWrapper";
import MidWrapper from "./components/Wrappers/MidWrapper";
import MegaWrapper from "./components/Wrappers/MegaWrapper";

function App() {
  const [collectedCookies, setCollectedCookies] = useState(0);
  let [cookiesps, setCookiesps] = useState(0);

  let seconds = 60;
  cookiesps = (collectedCookies / seconds).toFixed(2);

  return (
    <>
      <MegaWrapper>
        <UpperWrapper>
          <Money money_quantity={collectedCookies} />
          <SaveMenu cookiesps={cookiesps} />
          <UpdateMenu />
        </UpperWrapper>
        <MidWrapper>
          <Comment />
          <Cookie
            handleClick={() => {
              setCollectedCookies(collectedCookies + 1);
            }}
          />
        </MidWrapper>
        <ShopMenu collectedCookies={collectedCookies} />
      </MegaWrapper>
      <Credits />
    </>
  );
}

export default App;
