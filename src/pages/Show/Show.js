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
  set_videos,
  set_comments,
} from "../../redux/actions/movie_actions";
import { GrShareOption } from "react-icons/gr";

import { useDispatch, useSelector } from "react-redux";
import Share from "../../components/Share";
import { HeartIcon, HeartIconSaved } from "../../assets/icons";
import Play from "../../assets/icons/play-button-svgrepo-com.svg";
import Slider from "react-slick";
import { MoviesConfig, ShowsData, SimilarConfig } from "../../db";
import Navbar from "../../components/Navbar/Navbar";
import Fallback from "../../assets/images/fallback.png";
import Helmet from "react-helmet";
import { notification } from "antd";
import Videos from "../../containers/Videos/Videos";
const Show = ({ match }) => {
  const [active, setActive] = useState("about");
  const [heart, setHeart] = useState(false);
  const [modal, setModal] = useState(false);
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

  const openNotification = (placement, text) => {
    notification.info({
      message: text,
      description: "",
      placement,
    });
  };

  const seasons = useSelector((state) => state.allPayloads.seasons);

  useEffect(() => {
    request
      .get(`/movie/${match.params.id}`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => dispatch(set_movie(res.data)))
      .catch((err) => console.log("This is fucking error", err));
    request
      .get(`/movie/${match.params.id}/similar`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => dispatch(set_seasons(res.data.results)))
      .catch((err) => console.log("This is fucking error", err));
    request
      .get(`/movie/${match.params.id}/images`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => dispatch(set_images(res)))
      .catch((err) => console.log("This is fucking error", err));

    request
      .get(`/movie/${match.params.id}/videos`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => dispatch(set_videos(res.data.results)))
      .catch((err) => console.log("This is fucking error", err));

    request
      .get(`/movie/${match.params.id}/reviews`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => dispatch(set_comments(res.data.results)))
      .catch((err) => console.log("This is fucking error", err));

    request
      .get(`/movie/${match.params.id}/recommendations`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => dispatch(set_recommendations(res.data.results)))
      .catch((err) => console.log("This is fucking error", err));

    setHeart(false);
  }, [match.params.id]);

  const wishlistHandler = (product) => {
    const products = [...wishlist, product];
    setWishlist(products);
    window.localStorage.setItem("wishlist", JSON.stringify(products));
    setHeart(true);
    if (!heart) {
      openNotification("bottomRight", ` Successfully added to wishlist!`);
    }
  };
  return (
    <ShowWrapper>
      <Helmet>
        ( <title>Watch "{movie ? movie.title : "movies"}"</title>)
      </Helmet>
      {movie ? (
        <>
          <Banner
            style={{
              background: `url(${
                movie &&
                `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
              }) center center / cover`,
              minHeight: "70vh",
            }}
          >
            <MovieInfo>
              <Button>
                <img width="60" height="60" alt="" src={Play} />
              </Button>
              <Text>{movie && movie.title}</Text>
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
            <button onClick={() => setModal(!modal)} className="share-button">
              <GrShareOption color="yellow" />
            </button>
          </Banner>
          <Container>
            <Seasons>
              <Text>Recommendations</Text>
              <Slider {...SimilarConfig} className="slide">
                {recommendations &&
                  recommendations.map((el) => (
                    <div key={el.id}>
                      <Link
                        key={el.id}
                        style={{
                          margin: "8px 12px",
                          display: "inline-block",
                          width: "120px",
                        }}
                        to={`/show/${el.id}`}
                      >
                        <div
                          style={{
                            minHeight: "180px",
                            maxWidth: "120px",
                            background: "rgba(0,0,0,.5)",
                            marginBottom: ".2rem",
                            borderRadius: "4px",
                            backdropFilter: "blur(4px)",
                          }}
                        >
                          <img
                            width="120"
                            src={
                              el.poster_path
                                ? `https://image.tmdb.org/t/p/original/${el.poster_path}`
                                : Fallback
                            }
                            alt=""
                          />
                        </div>
                        <p
                          style={{
                            color: "white",
                            fontSize: "12px",
                          }}
                        >
                          {el.original_title}
                        </p>
                      </Link>
                    </div>
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
            ) : active === "videos" ? (
              <Videos />
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
                      title={el.title}
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
      <Share
        name={movie && movie.title}
        movie={movie}
        active={modal}
        setModal={setModal}
      />
    </ShowWrapper>
  );
};

export default Show;
