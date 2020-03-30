import React, { useState, useEffect } from "react";
import Header from "../../components/header/index";
import BookList from "Components/BookList/index";

function Home() {
  return (
    <div>
      <Header />
      <BookList />
    </div>
  );
}

export default Home;
