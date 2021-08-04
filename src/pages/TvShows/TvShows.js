import { Wrapper, LoadMore } from "./useStyles";
import Filter from "../../containers/Filter";
import { request } from "../../services/api/request";
import Helmet from "react-helmet";
import { useState, useEffect } from "react";
import Text from "../../components/Text/Text";
import { Container, Flex } from "../../useStyles";
import Movie from "../../components/Movie";
import { MoviesWrapper } from "../Movies/useStyles";
import { FaChevronDown } from "react-icons/fa";

const TvShows = () => {
  // const [filteredData, setFilteredDatas] = useState([])
  const [shows, setShows] = useState({
    isFetched: false,
    data: [],
  });
  const [shownMovies, setShownMovies] = useState(10);
  const [formData, setFormData] = useState({
    genre: "",
    country: "",
    year: "",
    quality: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleFillForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    request
      .get(`/tv/popular`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) =>
        setShows({
          isFetched: true,
          data: res.data,
        })
      )
      .catch((err) => console.log(err));
  }, []);
  return (
    <MoviesWrapper>
      <Filter handleSubmit={handleSubmit} handleFillForm={handleFillForm} />
      <Wrapper>
        <Container>
          <Helmet>
            ( <title>Tv shows</title>)
          </Helmet>
          <Text type="h1" text="Latest movies" />
          <Flex>
            {shows.isFetched ? (
              shows.data.results
                .slice(0, shownMovies)
                .map((el) => (
                  <Movie
                    className="w50"
                    style={{ marginBottom: "1.8rem" }}
                    title={el.name}
                    type="tv"
                    img={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                    key={el.id}
                    id={el.id}
                  />
                ))
            ) : (
              <>loading</>
            )}
          </Flex>
        </Container>
        <LoadMore>
          <button onClick={() => setShownMovies(shownMovies + 5)}>
            <span>Load more</span>
            <FaChevronDown />
          </button>
        </LoadMore>
      </Wrapper>
    </MoviesWrapper>
  );
};

export default TvShows;
