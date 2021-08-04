import { Container } from "../../useStyles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../services/api/request";
import About from "../../containers/About";
import Movie from "../../components/Movie";
import Images from "../../containers/Images";
import Comments from "../../containers/Comments";
import {
  ShowWrapper,
  Banner,
  MovieInfo,
  Button,
  Text,
  Seasons,
} from "./useStyles";
import {
  set_movie,
  set_seasons,
  set_images,
  set_recommendations,
} from "../../redux/actions/movie_actions";

import { useDispatch, useSelector } from "react-redux";
import { HeartIcon, HeartIconSaved } from "../../assets/icons";
import Play from "../../assets/icons/play-button-svgrepo-com.svg";
import Slider from "react-slick";
import { MoviesConfig, ShowsData } from "../../db";
import Navbar from "../../components/Navbar/Navbar";
import Helmet from "react-helmet";
const Show = ({ match }) => {
  const [active, setActive] = useState("about");
  const [heart, setHeart] = useState(false);
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.allPayloads.movie);
  const recommendations = useSelector(
    (state) => state.allPayloads.recommendations
  );
  // const wishlist = useSelector((state) => state.allPayloads.wishlist);
  const [wishlist, setWishlist] = useState(
    window.localStorage.getItem("wishlist") !== null
      ? JSON.parse(window.localStorage.getItem("wishlist"))
      : []
  );

  const seasons = useSelector((state) => state.allPayloads.seasons);

  useEffect(() => {
    request
      .get(`/tv/${match.params.id}`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => dispatch(set_movie(res.data)))
      .catch((err) => console.log("This is fucking error", err));
    request
      .get(`/tv/${match.params.id}/similar`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => dispatch(set_seasons(res.data.results)))
      .catch((err) => console.log("This is fucking error", err));
    request
      .get(`/tv/${match.params.id}/images`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => dispatch(set_images(res)))
      .catch((err) => console.log("This is fucking error", err));

    request
      .get(`/tv/${match.params.id}/recommendations`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => dispatch(set_recommendations(res.data.results)))
      .catch((err) => console.log("This is fucking error", err));
  }, [match.params.id]);
  const wishlistHandler = (product) => {
    const products = [...wishlist, product];
    setWishlist(products);
    window.localStorage.setItem("wishlist", JSON.stringify(products));
    setHeart(true);
  };
  return (
    <ShowWrapper>
      <Helmet>
        ( <title>Watch "{movie ? movie.name : "movies"}"</title>)
      </Helmet>
      {movie ? (
        <>
          <Banner
            style={{
              background: `url(${
                movie &&
                `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
              })`,
              minHeight: "70vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <MovieInfo>
              <Button>
                <img width="60" height="60" alt="" src={Play} />
              </Button>
              <Text>{movie && movie.name}</Text>
              <h3 style={{ margin: "10px", color: "white" }}>
                {" "}
                {movie.tagline}
              </h3>
              <Button
                onClick={() => wishlistHandler(movie)}
                className="favourites"
              >
                {heart ? <HeartIconSaved /> : <HeartIcon />}
              </Button>
            </MovieInfo>
          </Banner>
          <Container>
            <Seasons>
              <Text>Recommendations</Text>
              <Slider {...MoviesConfig} className="slide">
                {recommendations &&
                  recommendations.map((el) => (
                    <>
                      <Link
                        key={el.id}
                        style={{ margin: "8px 12px", display: "inline-block" }}
                        to={`/tv/${el.id}`}
                      >
                        <img
                          width="120"
                          src={
                            el.poster_path &&
                            `https://image.tmdb.org/t/p/original/${el.poster_path}`
                          }
                          alt=""
                        />
                        <p
                          style={{
                            color: "white",
                            fontSize: "12px",
                          }}
                        >
                          {el.original_name}
                        </p>
                      </Link>
                    </>
                  ))}
              </Slider>
            </Seasons>
            <Navbar data={ShowsData} setActive={setActive} active={active} />
            {active === "about" ? (
              <About movie={movie} />
            ) : active === "comments" ? (
              <Comments movie={movie} />
            ) : active === "images" ? (
              <Images />
            ) : (
              ""
            )}
            {seasons && <Text>Similar</Text>}

            <Slider className="slide" {...MoviesConfig}>
              {seasons &&
                seasons
                  .slice(10, 20)
                  .map((el) => (
                    <Movie
                      type="tv"
                      title={el.name}
                      img={el.poster_path}
                      id={el.id}
                      key={el.id}
                    />
                  ))}
            </Slider>
            {!seasons && (
              <h1 style={{ whiteSpace: "nowrap" }}>
                Similar movies is not available now. Sorry :(
              </h1>
            )}
          </Container>
        </>
      ) : (
        <></>
      )}
    </ShowWrapper>
  );
};

export default Show;
