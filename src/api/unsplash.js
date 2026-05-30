import axios from "axios";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
console.log("API Key loaded:", ACCESS_KEY ? "YES ✅" : "NO ❌");

const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const searchImages = async (query, page = 1) => {
  try {
    const response = await unsplashApi.get("/search/photos", {
      params: {
        query,
        per_page: 20,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Unsplash API Error:",
      error.response?.status,
      error.response?.data,
    );
    throw error;
  }
};

export const getRandomImages = async () => {
  try {
    const response = await unsplashApi.get("/photos/random", {
      params: { count: 20 },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Unsplash API Error:",
      error.response?.status,
      error.response?.data,
    );
    throw error;
  }
};
