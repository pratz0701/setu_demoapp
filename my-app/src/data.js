import React,{useContext , useEffect,createContext,useReducer} from 'react';

const AppContext = createContext();
const URL = "https://www.omdbapi.com/?s=game&apikey=dab40600";
const initialMovie = { 
  movies :[],
  singlemovie:{},
  isLoading:false,
};

const reducer = (movie,action)=>{
   switch(action.type){
     case "SET_LOADING":
     return{
      ...movie,
      isLoading:true,
     }; 
     
     case "MOVIE_DATA":
      return{  
        ...movie,
        movies:action.payload,
        isLoading:false,
      };

      case "MOVIE_SINGLE_DATA":
      return{  
        ...movie,
        singlemovie:action.payload,
        movies:action.payload,
        isLoading:false,
      };
     
    default:
    return movie;
   };
  };


function AppProvider({ children }) {
  const [movie, setmovie] = useReducer(reducer, initialMovie);

  const getmovie = async () => {
    setmovie({ type: "SET_LOADING", payload: movie });
    try {
      const res = await fetch(URL);
      const data = await res.json();
      const realdata = data.Search;
      setmovie({ type: "MOVIE_DATA", payload: realdata });
    } catch (error) {
      console.log(error);
    }
  };

  const getsinglemovie = async () => {
    setmovie({ type: "SET_LOADING", payload: movie });
    try {
      const res = await fetch(URL);
      const data = await res.json();
      const realdata = data.Search;
      setmovie({ type: "MOVIE_SINGLE_DATA", payload: realdata });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getmovie();
  }, []);

  return (
    <AppContext.Provider value={{ ...movie,getsinglemovie }}>
      {children}
    </AppContext.Provider>
  );
};

const UseMovieData = () =>{
  return useContext(AppContext);
}

export default AppProvider;
export {AppContext,UseMovieData};