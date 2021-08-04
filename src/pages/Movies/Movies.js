import { useState, useEffect } from "react";
import { MoviesWrapper } from "./useStyles";
import Text from "../../components/Text/Text";
import { Container, Flex } from "../../useStyles";
import Movie from "../../components/Movie";
import Helmet from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { request } from "../../services/api/request";
import Filter from "../../containers/Filter";
import { set_movies } from "../../redux/actions/movie_actions";
const Movies = () => {
  const movies = useSelector((state) => state.allPayloads.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    request
      .get("/movie/popular", {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => dispatch(set_movies(res.data.results)))
      .catch((err) => console.log(err));
  }, []);
  const [filteredData, setFilteredDatas] = useState([]);
  const [formData, setFormData] = useState({
    genre: "",
    country: "",
    year: "",
    quality: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    request
      .get(`/updates/shows?since=${formData.year}`)
      .then((res) => setFilteredDatas(res))
      .catch((err) => console.log(err));
  };
  const handleFillForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <MoviesWrapper>
      <Helmet>
        ( <title> Movies</title>)
      </Helmet>
      <Filter handleSubmit={handleSubmit} handleFillForm={handleFillForm} />
      <Container>
        <Text type="h1" text="Latest movies" />
        <Flex>
          {movies &&
            movies
              .slice(0, 20)
              .map((el) => (
                <Movie
                  className="w50"
                  style={{ marginBottom: "1.8rem" }}
                  title={el.title}
                  img={el.poster_path}
                  key={el.id}
                  id={el.id}
                />
              ))}
        </Flex>
      </Container>
    </MoviesWrapper>
  );
};

export default Movies;
