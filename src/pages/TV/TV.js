import { Container, Flex } from "../../useStyles";
import { Wrapper } from "./useStyles";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { set_tv } from "../../redux/actions/movie_actions";
import { request } from "../../services/api/request";
import Movie from "../../components/Movie";

const TV = () => {
  const tv = useSelector((state) => state.allPayloads.tv);
  const dispatch = useDispatch();
  useEffect(() => {
    request
      .get("/tv/top_rated", {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => dispatch(set_tv(res.data.results)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Wrapper>
      <Container>
        <h1 style={{ color: "white" }}>Popular tv shows</h1>
        <Flex>
          {tv &&
            tv
              .slice(0, 18)
              .map((el) => (
                <Movie
                  style={{ marginBottom: "1.8rem" }}
                  title={el.name}
                  img={el.poster_path}
                  key={el.id}
                  id={el.id}
                />
              ))}
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default TV;
