import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '92d66af10495782dbf7116658cb2e14f';
class MoviesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchTrendingMovies() {
    try {
      const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}&language=en-US&page=${this.page}`;
      const response = await axios.get(url);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchMoviesByName() {
    try {
      const searchParams = new URLSearchParams({
        api_key: '92d66af10495782dbf7116658cb2e14f',
        query: this.searchQuery,
        page: this.page,
        include_adult: false,
      });
      const url = `${BASE_URL}search/movie?${searchParams}`;
      const response = await axios.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchFilmDetails(id) {
    try {
      const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchFilmVideo(id) {
    try {
      const url = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

//  імпортуйте цей екземпляр класу для роботи з fetch
export const moviesApiService = new MoviesApiService();
