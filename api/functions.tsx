import axios from "axios";

const endpoint = "https://68dd13757cd1948060ac4c21.mockapi.io/booksstore";

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

//delete book
export const deleteBook = async (id: string, 
    onSuccess: (data: any) => void, onError: (error: any) => void) => {
  try {
    const result = await axios.delete(`${endpoint}/${id}`);
    onSuccess(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    onError(error);
  }
};