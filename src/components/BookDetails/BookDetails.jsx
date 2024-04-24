import { useState, useEffect, useRef } from "react";
import React from "react";
import bookimage from "../../images/book.jpeg";
import "swiper/css";
import CommentModal from "../BookDetails/CommetModal";

const BookDetails = ({ book, onClose }) => {
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

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  const carouselData = [
    {
      imgSrc: "https://source.unsplash.com/random/100x100?sig=1",
      quote:
        "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!",
      author: "Leroy Jenkins",
      position: "CEO of Company Co.",
    },
    {
      imgSrc: "https://source.unsplash.com/random/100x100?sig=1",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Jane Doe",
      position: "CTO of Innovations Inc.",
    },
    {
      imgSrc: "https://source.unsplash.com/random/100x100?sig=1",
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Smith",
      position: "Lead Developer",
    },
    {
      imgSrc: "https://source.unsplash.com/random/100x100?sig=1",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      author: "Alice Johnson",
      position: "Marketing Director",
    },
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, [carouselData.length]);

  const setActive = (index) => {
    clearInterval(intervalRef.current);
    setActiveIndex(index);

    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000);
  };

  const openCommentModal = () => {
    setIsCommentModalOpen(true);
  };

  const closeCommentModal = () => {
    setIsCommentModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="relative block overflow-hidden rounded-lg  bg-white border border-gray-100 p-12">
        <button
          onClick={onClose} // Call onClose function when the button is clicked
          className="absolute -end-1 -top-1 rounded-full border border-gray-300 bg-gray-100 p-1"
        >
          <span className="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div class="relative mx-auto">
          <div class="grid max-w-x1 gap-8 mx-auto ">
            <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
              <a href="/blog-post">
                <div class="flex-shrink-0">
                  <img
                    class="object-cover w-[54rem] h-48 rounded-lg"
                    src={bookimage}
                    alt=""
                  />
                </div>
              </a>
              <div class="flex flex-col justify-between flex-1">
                <div class="flex-1">
                  <a href="/blog-post">
                    <div class="flex pt-6 space-x-1 text-lg text-gray-500">
                      <time datetime="2020-03-10"> Mar 10, 2020 </time>
                      <span aria-hidden="true"> · </span>
                      <span> 4 min read </span>
                    </div>
                  </a>
                  <a href="#" class="block mt-2 space-y-6">
                    <h3 class="text-3xl font-semibold leading-none tracking-tighter text-neutral-600">
                      Typography on app.
                    </h3>
                    <p class="text-x2 font-normal text-gray-500">
                      Filling text so you can see how it looks like with text.
                      Did I said text?
                    </p>
                    <div class="flex items-center mt-6">
                      <div class="ml-3">
                        <p class="text-xl font-medium text-gray-700 group-hover:text-neutral-600">
                          Jazz Torp
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="p-6">
          <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
              <img
                src={carouselData[activeIndex].imgSrc}
                alt=""
                className="w-20 h-20 rounded-full dark:bg-gray-500"
              />
              <blockquote className="max-w-lg text-lg italic font-medium text-center">
                "{carouselData[activeIndex].quote}"
              </blockquote>
              <div className="text-center dark:text-gray-600">
                <p>{carouselData[activeIndex].author}</p>
                <p>{carouselData[activeIndex].position}</p>
              </div>
              <div className="flex space-x-2">
                {carouselData.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Page ${index + 1}`}
                    className={`w-2 h-2 rounded-full ${
                      index === activeIndex
                        ? "dark:bg-gray-900"
                        : "dark:bg-gray-400"
                    }`}
                  ></button>
                ))}
              </div>
              <button
                className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                onClick={() => handleClickToOpen(book)}
              >
                <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                <span className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Add Comment
                </span>
              </button>
            </div>
            {isPopupOpen && (
              <CommentModal book={selectedBook} onClose={handleClose} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BookDetails;
