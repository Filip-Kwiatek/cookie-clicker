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
  const [money_quantity, setMoney_Quantity] = useState(0);
  let [cookiesps, setCookiesps] = useState(0);

  let seconds = 60;
  cookiesps = (money_quantity / seconds).toFixed(2);

  return (
    <>
      <MegaWrapper>
        <UpperWrapper>
          <Money money_quantity={money_quantity} />
          <SaveMenu cookiesps={cookiesps} />
          <UpdateMenu />
        </UpperWrapper>
        <MidWrapper>
          <Comment />
          <Cookie
            handleClick={() => {
              setMoney_Quantity(money_quantity + 1);
            }}
          />
        </MidWrapper>
        <ShopMenu money_quantity={money_quantity} />
      </MegaWrapper>
      <Credits />
    </>
  );
}

export default App;
