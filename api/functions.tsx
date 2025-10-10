import axios from "axios";

const endpoint = "https://68dd13757cd1948060ac4c21.mockapi.io/booksstore";

// GET all books
export const getAllBooks = async () => {
  try {
    const result = await axios.get(endpoint);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

// DELETE book
export const deleteBook = async (id: string) => {
  try {
    const result = await axios.delete(`${endpoint}/${id}`);
    return result.data; 
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error; // Re-throw the error so it can be caught in the component
  }
};

// POST book -add new book
export const addBook = async (book: { name: string; 
  cover: string;}) => {
  try {
    const result = await axios.post(endpoint, book);
    return result.data; 
  } catch (error) {
    console.error("Error adding book:", error);
  }
};

// edit book - edit book
export const editBook = async(id: string, updatedBook: { name: string; cover: string; }) => {
  try {
    const response = await axios.put(`${endpoint}/${id}`, updatedBook);
    return response.data;
  } catch (error) {
    console.error("Error editing book:", error);
    throw error; // Re-throw the error so it can be caught in the component
  }
}