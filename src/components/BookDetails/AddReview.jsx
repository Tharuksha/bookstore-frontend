import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AddReview = ({ book, onClose }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleClickToOpen = (book) => {
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  const [values, setValues] = useState({
    comments: "test 3",
    rating: 3,
    userid: 2,
    book_id: book.bookId,
  });

  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post("https://api-ad.tharuksha.com/review/addComment", values)
      .then((res) => {
        window.location.reload();
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div class="grid place-items-center fixed inset-0 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center p-12">
      <div class="w-11/12 p-12 bg-white lg:w-10/12">
        <h1 class="text-xl font-semibold">
          Hello there ?,{" "}
          <span class="font-normal">
            please add your review about this book{" "}
          </span>
        </h1>
        <form class="mt-6" onSubmit={handleAdd}>
          <label
            for="text"
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Comment
          </label>
          <input
            id="text"
            type="text"
            name="text"
            onChange={(e) => setValues({ ...values, comments: e.target.value })}
            placeholder="type your comment here"
            autocomplete="text"
            class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <label
            for="password"
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Ratings
          </label>
          <input
            id="text"
            type="text"
            name="text"
            onChange={(e) => setValues({ ...values, rating: e.target.value })}
            placeholder="enter your ratings here"
            autocomplete="text"
            class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />

          <div class="flex justify-between gap-3">
            <button
              onClick={onClose}
              class="w-1/2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-red-500 shadow-lg focus:outline-none hover:bg-red-600 hover:shadow-none"
            >
              Cancel
            </button>

            <button
              type="submit"
              class="w-1/2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
