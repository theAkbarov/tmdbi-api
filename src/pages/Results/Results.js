import React from "react";
import { useSelector } from "react-redux";
import Movie from "../../components/Movie";
import { Container, Flex } from "../../useStyles";

export default function Results({ match }) {
  const result = useSelector((state) => state.allPayloads.results);
  return (
    <div
      style={{
        paddingTop: "3.7rem",
      }}
    >
      <Container>
        <h1
          style={{
            padding: "1rem",
            color: "white",
            fontWeight: 600,
          }}
        >
          Search results for{" "}
          {match.params.name.charAt(0).toUpperCase() +
            match.params.name.slice(1)}
        </h1>
        <Flex>
          {result.map((el) => (
            <Movie
              img={el.poster_path}
              title={el.title}
              key={el.id}
              id={el.id}
            />
          ))}
        </Flex>
      </Container>
    </div>
  );
}
