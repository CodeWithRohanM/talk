import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import TalkGPT from "./Components/TalkGPT";
import AvatarGPT from "./Components/AvatarGPT";
import Extensions from "./Components/Extensions";
import { Routes, Route } from "react-router-dom";
import PersonChat from "./Components/PersonChat";
import PersonCategoryList from "./Components/PersonCategoryList";
import BusinessCategory from "./Components/BusinessCategory";
import CelebratiesCategory from "./Components/CelebratiesCategory";
import SportsCategory from "./Components/SportsCategory";
import { Sports } from "./Components/ListItems";
import NextChat from "./Components/NextChat";


// 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

const App = () => {



  return <>

    <div className="flex flex-row w-screen h-screen">

      <Routes>
        <Route exact path="/" element={<TalkGPT />}></Route>
        <Route exact path="/avatarGPT" element={<AvatarGPT />}></Route>
        <Route exact path="/extensions" element={<Extensions />}></Route>
        <Route exact path="/avatarGPT/roleplay" element={<PersonChat />}></Route>
        <Route exact path="/avatarGPT/business" element={<BusinessCategory />}></Route>
        <Route exact path="/avatarGPT/celebraties" element={<CelebratiesCategory />}></Route>
        <Route exact path="/avatarGPT/sports" element={<SportsCategory />}></Route>
        <Route exact path="/avatarGPT/nextChat" element={<NextChat />}></Route>
      </Routes>

    </div>

  </>
};

export default App;