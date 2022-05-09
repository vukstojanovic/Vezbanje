import axiosInstance from "./api";

const API_KEY = "3777887344792e204fa6a4f9bb2f0fcd";

const moviesService = {
  fetchTrending: async () => {
    const response = await axiosInstance.get(
      `/trending/all/week?api_key=${API_KEY}&language=en-US`
    );
    const results = response.data.results;
    return results;
  },
  fetchNetflixOriginals: async () => {
    const response = await axiosInstance.get(
      `/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    const results = response.data.results;
    return results;
  },
  fetchTopRated: async () => {
    const response = await axiosInstance.get(
      `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    );
    const results = response.data.results;
    return results;
  },
  fetchActionMovies: async () => {
    const response = await axiosInstance.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    const results = response.data.results;
    return results;
  },
  fetchComedyMovies: async () => {
    const response = await axiosInstance.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    const results = response.data.results;
    return results;
  },
  fetchHorrorMovies: async () => {
    const response = await axiosInstance.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=27`
    );
    const results = response.data.results;
    return results;
  },
  fetchRomanceMovies: async () => {
    const response = await axiosInstance.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
    const results = response.data.results;
    return results;
  },
  fetchDocumentaries: async () => {
    const response = await axiosInstance.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=99`
    );
    const results = response.data.results;
    return results;
  },
  fetchNewReleases: async () => {
    const response = await axiosInstance.get(
      `/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    const results = response.data.results;
    return results;
  },
};

export default moviesService;
