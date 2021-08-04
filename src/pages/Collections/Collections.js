import { Container } from "../../useStyles";
import { Banner, Wrapper, Text } from "./useStyles";
import Helmet from "react-helmet";
import { useEffect, useState } from "react";
import { request } from "../../services/api/request";
import Play from "../../assets/icons/play-button-svgrepo-com.svg";
import { Button, MovieInfo } from "../Show/useStyles";
import { HeartIcon, HeartIconSaved } from "../../assets/icons";
import Slider from "react-slick";
import { MoviesConfig } from "../../db";
import Movie from "../../components/Movie";
const Collections = ({ match }) => {
  const [collections, setCollections] = useState();
  const [isFetched, setIsFetched] = useState();
  useEffect(() => {
    console.log(match);
    request
      .get(`/collection/${match.params.id}`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => setCollections(res.data))
      .then(setIsFetched(true))
      .catch((err) => console.log("This is fucking error", err));
  }, [match.params.id]);
  const [heart, setHeart] = useState(false);

  return (
    <Wrapper>
      <Helmet>
        (<title>{`Collections ${collections && collections.name}`}</title>)
      </Helmet>
      {isFetched ? (
        <>
          <Banner
            style={{
              background: `url(${
                collections &&
                `https://image.tmdb.org/t/p/original/${collections.backdrop_path}`
              }) center center`,
              minHeight: "70vh",
              backgroundPosition: "center",
            }}
          >
            <MovieInfo>
              <Button>
                <img width="60" height="60" alt="" src={Play} />
              </Button>
              <Text>{collections && collections.name}</Text>
              <Container>
                <h4 style={{ margin: "10px", color: "white" }}>
                  {" "}
                  {collections && collections.overview}
                </h4>
              </Container>
              <Button className="favourites">
                {heart ? <HeartIconSaved /> : <HeartIcon />}
              </Button>
            </MovieInfo>
          </Banner>
          <Container
            style={{
              margin: "1rem auto",
            }}
          >
            <Text>Parts of {collections && collections.name}</Text>
            <Slider className="slide" {...MoviesConfig}>
              {collections &&
                collections.parts.map((el) => (
                  <Movie
                    title={el.title}
                    img={el.poster_path}
                    id={el.id}
                    key={el.id}
                  />
                ))}
            </Slider>
          </Container>
        </>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default Collections;
