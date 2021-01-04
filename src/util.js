const currentYear = new Date().getFullYear();

const baseUrl = "https://api.themoviedb.org/3";
//const popularMovies = `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ja&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_original_language=ja`;
const upcomingMovies = `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ja&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&primary_release_year=${currentYear}&with_original_language=ja`;
//const popularTVShows = `${baseUrl}/discover/tv?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ja&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_original_language=ja`;
const upcomingTVShows = `${baseUrl}/discover/tv?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ja&sort_by=first_air_date.desc&air_date.gte=${currentYear}&page=1&include_null_first_air_dates=false&with_original_language=ja`;

export const imgUrl = `https://image.tmdb.org/t/p/w500/`;
export const popularMoviesURL = (currentPage) =>
  `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ja&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_original_language=ja`;
export const upcomingMoviesURL = () => upcomingMovies;
export const popularTVShowsURL = (currentPage) =>
  `${baseUrl}/discover/tv?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ja&sort_by=popularity.desc&page=${currentPage}&include_null_first_air_dates=false&with_original_language=ja`;
export const upcomingTVShowsURL = () => upcomingTVShows;
export const movieDetailsURL = (movie_id) =>
  `${baseUrl}/movie/${movie_id}?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ja`;
export const showDetailsURL = (show_id) =>
  `${baseUrl}/tv/${show_id}?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ja`;
export const searchedURL = (searchTerm, currentPage) =>
  `${baseUrl}/search/tv?api_key=${process.env.REACT_APP_MOVIEDB_API}&original_language=ja&query=${searchTerm}&page=${currentPage}&include_adult=false`;
//export const logInURL = () => `${baseUrl}/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_MOVIEDB_API}`;
//export const guestSessionURL = () => `${baseUrl}/authentication/guest_session/new?api_key=${process.env.REACT_APP_MOVIEDB_API}`;
export const getTokenURL = () =>
  `${baseUrl}/authentication/token/new?api_key=${process.env.REACT_APP_MOVIEDB_API}`;
//export const authGuestURL = (token) => `https://www.themoviedb.org/authenticate/${token}`;
export const authGuestURL = () =>
  `${baseUrl}/authentication/guest_session/new?api_key=${process.env.REACT_APP_MOVIEDB_API}`;
export const getMovieTrailers = (movie_id) =>
  `${baseUrl}/movie/${movie_id}/videos?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=en-US`;
export const getShowTrailers = (show_id) =>
  `${baseUrl}/tv/${show_id}/videos?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=en-US`;
export const getMovieReviews = (movie_id) =>
  `${baseUrl}/movie/${movie_id}/reviews?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ja&page=1`;
export const getShowReviews = (show_id) =>
  `${baseUrl}/tv/${show_id}/reviews?api_key=${process.env.REACT_APP_MOVIEDB_API}&language=ja&page=1`;
export const logOutURL = () =>
  `${baseUrl}/authentication/session?api_key=${process.env.REACT_APP_MOVIEDB_API}`;
//en-US
//https://api.themoviedb.org/3/movie/597094/videos?api_key=05f82c4eb41cf7d38ea497c73e0da404&language=en-US
//https://api.themoviedb.org/3/authentication/guest_session/new?api_key=05f82c4eb41cf7d38ea497c73e0da404
// /search/multi?api_key=05f82c4eb41cf7d38ea497c73e0da404&language=en-US&query=dragon%20ball&page=1&include_adult=false
