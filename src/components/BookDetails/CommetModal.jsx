import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AddReview from "./AddReview";
import StarRating from "./StarRating";
import UpdateReview from "./UpdateReview";

const CommentModal = ({ book, onClose }) => {
  const [Commentdetails, setCommentdetails] = useState([]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isUpdatePopupOpen, setIsUpdatePopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleClickToOpen = (book) => {
    setSelectedBook(book);
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  const handleClickToOpenUpdate = async (response) => {
    console.log(response);
    setIsUpdatePopupOpen(true);
    localStorage.setItem("reviewid", response);
  };

  const update = () => {};

  const handleCloseUpdate = () => {
    setIsUpdatePopupOpen(false);
  };

  const handleClickToOpenDelete = () => {
    setIsDeletePopupOpen(true);
  };

  const handleCloseDelete = () => {
    setIsDeletePopupOpen(false);
  };

  const deleteComment = async (res) => {
    console.log(res);
    try {
      const response = await axios.delete(
        `https://api-ad.tharuksha.com/review/deleteComment/${res}`
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect(() => {
  //   const fetching = async () => {
  //     try {
  //       const user_id = book.userid;
  //       const response = await axios.get(
  //         `https://api-ad.tharuksha.com/api/signin`
  //       );
  //       console.log(response.data);
  //       window.location.reload();
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetching();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const book_id = book.bookId;
        const response = await axios.get(
          `http://localhost:8080/review/comments/${book_id}`
        );
        console.log(response.data);
        setCommentdetails(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center p-12">
      <div className="p-12">
        <div class="relative ">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div>
            <table class="w-full text-md bg-white shadow-md rounded mb-">
              <tbody>
                <tr class="border-b">
                  <th class="text-left p-3 px-5">Comment</th>
                  <th class="text-left p-3 px-5">Ratings</th>
                  <th>
                    {" "}
                    <button
                      onClick={() => handleClickToOpen(book.bookId)}
                      type="button"
                      class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Add a Comment
                    </button>
                  </th>
                </tr>
                {isPopupOpen && (
                  <AddReview book={selectedBook} onClose={handleClose} />
                )}
                {Commentdetails.map((response) => (
                  <tr
                    key={response.reviewid}
                    class="border-b hover:bg-orange-100"
                  >
                    <td class="p-4 px-5">
                      <h2 className="text-2xl text-gray-500">
                        {response.comments}
                      </h2>
                    </td>

                    <td class="p-4 px-5">
                      <h2 className="text-2xl text-gray-500">
                        <StarRating rating={response.rating} />
                      </h2>
                    </td>

                    <td class="p-3 px-5 flex justify-end">
                      <button
                        onClick={() =>
                          handleClickToOpenUpdate(response.reviewid)
                        }
                        type="button"
                        class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => deleteComment(response.reviewid)}
                        type="button"
                        class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>

                      {isUpdatePopupOpen && (
                        <UpdateReview
                          onClose={handleCloseUpdate}
                          comment={response}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
