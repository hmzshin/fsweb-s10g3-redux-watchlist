import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import {
  nextMovie,
  previousMovie,
  startOver,
} from "./store/reducers/orderReducer";
import { addFavorite } from "./store/reducers/favoriteReducer";

function App() {
  const dispatch = useDispatch();
  const order = useSelector((store) => store.order);
  const movies = useSelector((store) => store.movie);
  const favMovies = useSelector((store) => store.favorite);

  function sonrakiFilm() {
    dispatch(nextMovie());
  }
  function addFav() {
    const movie = movies.filter((movie, index) => index == order);
    console.log(movie);
    dispatch(addFavorite(movie));
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie />

          <div className="flex gap-3 justify-end py-3">
            {order == 0 ? null : (
              <button
                onClick={() => dispatch(previousMovie())}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Önceki
              </button>
            )}

            {order == movies.length - 1 ? (
              <button
                onClick={() => dispatch(startOver())}
                className="select-none px-4 py-2 border text-white bg-red-600  hover:bg-red-500"
              >
                Başa Dön
              </button>
            ) : (
              <button
                onClick={sonrakiFilm}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Sıradaki
              </button>
            )}

            <button
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
              onClick={addFav}
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
