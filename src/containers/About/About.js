import { useEffect, useState } from "react";
import { Heading } from "../../pages/Home/useStyles";
import { request } from "../../services/api/request";
import { MoviesConfig } from "../../db";
import Slider from "react-slick";
import { AboutWrapper, Datas, CastGroup, Actors, Actor } from "./useStyles";
import { LazyLoadImage } from "react-lazy-load-image-component";
const About = ({ movie }) => {
  const [data, setData] = useState({
    isFetched: false,
    data: [],
  });
  useEffect(() => {
    request
      .get(`/movie/${movie.id}/credits`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) =>
        setData({
          isFetched: true,
          data: res.data,
        })
      )
      .catch((err) => console.log(err));
  }, [movie.id]);
  return (
    <AboutWrapper>
      <img
        className="backdrop"
        src={
          movie && `https://image.tmdb.org/t/p/original/${movie.poster_path}`
        }
        alt="shartmas"
      />
      <Datas>
        <Heading style={{ marginTop: "0" }}>{movie && movie.title}</Heading>
        <h4>
          Rating: <b>{movie && movie.vote_average}</b>
        </h4>
        <h4>
          Language: <b> {movie && movie.original_language}</b>
        </h4>
        <h4>
          Genre: <b> {movie.genres[0] ? movie.genres[0].name : null}</b>
        </h4>
        <p>{movie && movie.overview}</p>
        <p style={{ margin: "0 0 10px  0" }}>Actors:</p>
        <CastGroup>
          <Actors>
            <Slider {...MoviesConfig} className="slide">
              {data.isFetched ? (
                data.data.cast.map((el) => (
                  <Actor to={`/person/${el.id}`} key={el.id}>
                    <LazyLoadImage
                      src={`https://image.tmdb.org/t/p/original/${el.profile_path}`}
                      alt=""
                    />
                    <p>{el.name}</p>
                  </Actor>
                ))
              ) : (
                <></>
              )}
            </Slider>
          </Actors>
        </CastGroup>
      </Datas>
    </AboutWrapper>
  );
};

export default About;
