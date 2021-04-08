import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const getCategories = async () => {
  try {
    const res = await axios.get(`${backendUrl}/categories`);

    return res.data;
  } catch (error) {
    console.log(error)
  }
};

export const addCategory = async ({ name }) => {
  try {
    const res = await axios.post(`${backendUrl}/categories`, { name });

    return res.data;
  } catch (error) {
    console.log(error)
  }
};

export const removeCategory = async ({ id }) => {
  try {
    const res = await axios.delete(`${backendUrl}/categories/${id}`);

    return res.data;
  } catch (error) {
    console.log(error)
  }
};