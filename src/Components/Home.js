import React from "react";
import Main from "./Main";
import Products from "./Products";

const Home = (props) => (
    <>
        <Main />
        <Products OnClickBtn={props.OnAddBtnClick} onRemoveBtn={props.onRemoveBtnClick} />
    </>
);

export default React.memo(Home);