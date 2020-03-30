import React, { useState, useEffect } from "react";
import api, { getBooks } from "../../../services/api";

export default function BookList() {
  const [books, setBooks] = useState();

  useEffect(() => {
    console.log(getBooks("?q=a"));

    //this.loadBooks();
  }, []);

  return <div />;
}
