import "./BookList.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
//import Dialog from "@material-ui/core/Dialog";
import BookDetails from "../BookDetails/BookDetails";
//import DialogContent from "@material-ui/core/DialogContent";
import bookimage from "../../images/book.jpeg";

const BookList = () => {
  const [Bookdetails, setBookdetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api-ad.tharuksha.com/books/getAll");
        console.log(response.data);
        setBookdetails(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleClickToOpen = (book) => {
    setSelectedBook(book);
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="py-20">
      asdw as dwa sa
      <div className="xl:container mx-auto px-6 md:px-12">
        <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Bookdetails.map((Book) => (
            <button
              key={Book.id}
              className="group relative rounded-3xl space-y-6 overflow-hidden"
              onClick={() => handleClickToOpen(Book)}
            >
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={bookimage} // Ensure you have an image attribute
              />
              <div className="text-center">
                <h2 className="text-lg font-semibold">{Book.bookName}</h2>
                <p className="text-sm text-gray-500">{Book.bookAuthor}</p>
                <p className="text-sm text-gray-500">{Book.addedOn}</p>
              </div>
            </button>
          ))}
        </div>
        {isPopupOpen && (
          <BookDetails book={selectedBook} onClose={handleClose} />
        )}
      </div>
    </div>
  );
};
export default BookList;
