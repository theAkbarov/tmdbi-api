import { useEffect, useState } from "react";
import { Container, Flex } from "../../useStyles";
import { Wrapper, UserinfoWrapper, CenteredButton, Data } from "./useStyles";
import { request } from "../../services/api/request";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import {
  set_actor,
  set_famous_actors,
} from "../../redux/actions/movie_actions";
import Movie from "../../components/Movie";
import Slider from "react-slick";
import { Image } from "antd";
import { ImagesConfig, MoviesConfig } from "../../db";
import { Link } from "react-router-dom";
const ActorsInfo = ({ match }) => {
  const dispatch = useDispatch();
  const actor = useSelector((state) => state.allPayloads.actor);
  const famous_actor = useSelector((state) => state.allPayloads.famous_actor);
  const [data, setData] = useState({ isFetched: false, data: [] });
  const [image, setImage] = useState({ isFetched: false, images: [] });
  const [list, setList] = useState(10);
  useEffect(() => {
    request
      .get(`/person/${match.params.id}/movie_credits`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => dispatch(set_actor(res.data)))
      .catch((err) => console.log(err));

    request
      .get(`/person/popular`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => dispatch(set_famous_actors(res.data.results)))
      .catch((err) => console.log(err));

    request
      .get(`/person/${match.params.id}`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) =>
        setData({ isFetched: true, data: res.data, images: data.images })
      )
      .catch((err) => console.log(err));

    request
      .get(`/person/${match.params.id}/images`, {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => setImage({ isFetched: true, images: res.data }))
      .catch((err) => console.log(err));
  }, [match.params.id]);
  return (
    <Wrapper>
      <Container>
        {data.isFetched && (
          <Data>
            <div>
              <LazyLoadImage
                width="350"
                src={`https://image.tmdb.org/t/p/original/${data.data.profile_path}`}
              />
            </div>
            <UserinfoWrapper>
              <h3>
                Fullname: <b>{data.data.name}</b>
              </h3>
              <h4>
                Country: <b>{data.data.place_of_birth}</b>
              </h4>
              <h4>
                Birthday: <b>{data.data.birthday}</b>
              </h4>
              <p style={{ display: "flex", alignItems: "flex-start" }}>
                About {data.data.name}:
              </p>
              <p style={{ display: "flex", alignItems: "flex-start" }}>
                {" "}
                {data.data.biography}
              </p>
              <div
                style={{
                  width: "800px",
                }}
              >
                <h2>
                  Images of <b>{data.data.name}</b>
                </h2>
                <Slider {...ImagesConfig} className="slide">
                  {image.isFetched &&
                    image.images.profiles.map((el) => (
                      <div>
                        <Image
                          style={{ borderRadius: "8px" }}
                          width="150px"
                          src={`https://image.tmdb.org/t/p/original/${el.file_path}`}
                        />
                      </div>
                    ))}
                </Slider>
              </div>
            </UserinfoWrapper>
          </Data>
        )}
        <div>
          <h2 style={{ color: "white" }}>Famous actors all of the time:</h2>
          <Slider {...MoviesConfig} className="slide">
            {famous_actor &&
              famous_actor.map((el) => (
                <div key={el.name}>
                  <Image
                    style={{ borderRadius: "8px" }}
                    width="150px"
                    src={`https://image.tmdb.org/t/p/original/${el.profile_path}`}
                  />
                  <Link to={`/person/${el.id}`}>
                    <h3 style={{ color: "white", padding: "1rem 0" }}>
                      {el.name}
                    </h3>
                  </Link>
                </div>
              ))}
          </Slider>
        </div>
        <h2
          style={{
            color: "white",
            marginTop: "2rem",
          }}
        >
          {data.isFetched && data.data.name} acted movies:
        </h2>
        <Flex>
          {actor &&
            actor.cast
              .slice(0, list)
              .map((el) => (
                <Movie
                  className="w50"
                  title={el.title}
                  img={el.poster_path}
                  id={el.id}
                  key={el.key}
                />
              ))}
        </Flex>
        <CenteredButton>
          <button onClick={() => setList(list + 5)}>View more</button>
        </CenteredButton>
      </Container>
    </Wrapper>
  );
};
export default ActorsInfo;
