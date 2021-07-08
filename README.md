# React-redux-web-project

For Running the Application follow the commands
STEP 1: npm install  (mandatory as it will install all necessary packages requried for project)
Note: Inside the project folder where package.json is available else you will get error.

STEP 2: npm run start it will automatically does two things for you
1.Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console as warning which you can ignore

### API Calls
  const API_KEY = "mention your api key";
  const baseURL = "https://api.themoviedb.org/3";
  
  fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`;
  fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;
  fetchPopular: `${baseURL}/movie/popular?api_key=${API_KEY}&language=en-US`;
  
  searching movies: `https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query=${query}&language=en-US&sort_by=popularity.desc&include_adult=false`

### Important points to consider 

1. Redux - saga for async data fetching  : trending, toprated and popular movies
2. Understanding creation of react components and how data is passing between them is main idea of doing the project
3. Project uses a combination of React hooks, Class and functional component and Redux saga maintaining data flow between store also via route navigation as well


