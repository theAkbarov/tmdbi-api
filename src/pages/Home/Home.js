import { useEffect, useState } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { Hero, Heading } from "./useStyles";
import {
  set_movies,
  set_top_rated,
  set_tv,
} from "../../redux/actions/movie_actions";
import { request } from "../../services/api/request";
import { BannerConfig, MoviesConfig } from "../../db";
import Card from "../../components/Card";
import { Container } from "../../useStyles";
import Movie from "../../components/Movie";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const Home = () => {
  const [datas, setDatas] = useState(
    window.localStorage.getItem("wishlist") &&
      window.localStorage.getItem("wishlist").length !== 0
      ? JSON.parse(window.localStorage.getItem("wishlist"))
      : []
  );
  const products = useSelector((state) => state.allPayloads.movies);
  const tv = useSelector((state) => state.allPayloads.tv);
  const topRated = useSelector((state) => state.allPayloads.topRated);
  const dispatch = useDispatch();
  useEffect(() => {
    request
      .get("/movie/popular", {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
          include_adult: true,
        },
      })
      .then((res) => dispatch(set_movies(res.data.results)))
      .catch((err) => console.log(err));
    request
      .get("/movie/top_rated", {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
          include_adult: true,
        },
      })
      .then((res) => dispatch(set_top_rated(res.data.results)))
      .catch((err) => console.log(err));

    request
      .get("/tv/top_rated", {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
          include_adult: true,
        },
      })
      .then((res) => dispatch(set_tv(res.data.results)))
      .catch((err) => console.log(err));
  }, []);
  window.localStorage.setItem("wishlist", JSON.stringify(datas));
  return (
    <Hero>
      <Slider
        className="hero"
        {...BannerConfig}
        style={{ position: "relative" }}
      >
        {products &&
          products
            .slice(0, 16)
            .map((el) => (
              <Card
                tagline={el.overview}
                image={el.backdrop_path}
                title={el.title}
                id={el.id}
                key={el.id}
              />
            ))}
      </Slider>
      <Container style={{ marginBottom: "3rem" }}>
        <Helmet>
          ( <title>Cinemagic | cinema portal</title>)
        </Helmet>
        <Link to="/movies">
          <Heading>Popular Films</Heading>
        </Link>
        <Slider className="slide" {...MoviesConfig}>
          {products &&
            products.map((el) => (
              <Movie
                title={el.title}
                img={el.poster_path}
                key={el.id}
                id={el.id}
              />
            ))}
        </Slider>
      </Container>
      <Container style={{ marginBottom: "3rem" }}>
        <Link to="/movies">
          <Heading>Trending</Heading>
        </Link>
        <Slider className="slide" {...MoviesConfig}>
          {topRated &&
            topRated.map((el) => (
              <Movie
                title={el.title}
                img={el.poster_path}
                key={el.id}
                id={el.id}
              />
            ))}
        </Slider>
        <Link to="/movies">
          <Heading>Tv</Heading>
        </Link>
        <Slider className="slide" {...MoviesConfig}>
          {tv &&
            tv.map((el) => (
              <Movie
                type="television"
                title={el.name}
                img={el.poster_path}
                key={el.id}
                id={el.id}
              />
            ))}
        </Slider>
      </Container>
    </Hero>
  );
};

export default Home;
