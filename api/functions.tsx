import axios from "axios";

const endpoint = "https://68dd13757cd1948060ac4c21.mockapi.io/booksstore";

// GET all books
export const getAllBooks = async (onSuccess: (data: any) => void, onError: (error: any) => void) => {
  try {
    const result = await axios.get(endpoint);
    onSuccess(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    onError(error);
  }
};

// DELETE book
export const deleteBook = async (id: string) => {
  try {
    const result = await axios.delete(`${endpoint}/${id}`);
    return result.data; 
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};
