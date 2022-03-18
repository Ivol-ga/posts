import React from "react";
import { CardsList } from "./components/CardList";
import { Header } from "./components/Header";
// import { Cards } from "./components/Cards";
// import { Header } from "./components/Header";
// import { Sort } from "./components/Sort";
// import { Footer } from "./components/Footer";
// import jsonData from "./data.json";
// import { Logo } from "./components/Logo";
// import { Search } from "./components/Search";
// import { SearchInfo } from './components/SearchInfo';
// import { Button } from "./components/Button";

export const App = () => {
  return (
    <>
      <Header/>
          <main className="cards__container">
            <CardsList/>
           
      </main>
      {/* <Footer /> */ }
    </>
  );
  }
