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
  let [collectedCookies, setCollectedCookies] = useState(0);
  let [cookiesps, setCookiesps] = useState(0);

  collectedCookies = collectedCookies.toFixed(0);
  cookiesps = cookiesps.toFixed(2);

  return (
    <>
      <MegaWrapper>
        <UpperWrapper>
          <Money money_quantity={collectedCookies} />
          <SaveMenu cookiesps={cookiesps} setCookiesps={setCookiesps} />
          <UpdateMenu />
        </UpperWrapper>
        <MidWrapper>
          <Comment />
          <Cookie
            handleClick={() => {
              setCollectedCookies((previousState) => {
                return previousState + 1;
              });
            }}
          />
        </MidWrapper>
        <ShopMenu
          cookiesps={cookiesps}
          setCookiesps={setCookiesps}
          collectedCookies={collectedCookies}
          setCollectedCookies={setCollectedCookies}
        />
      </MegaWrapper>
      <Credits />
    </>
  );
}

export default App;
