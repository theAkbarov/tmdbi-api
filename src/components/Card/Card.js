import { CardHolder } from "./useStyles";
import { Container } from "../../useStyles";
import { Link } from "react-router-dom";

const Card = ({ title, id, image, year, genre, tagline }) => {
  return (
    <CardHolder>
      <Link to={`/show/${id}`} className="shadow">
        <Container
          style={{
            background: `url(https://image.tmdb.org/t/p/original/${image})`,
            padding: "10rem 2rem",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h1 style={{ color: "white", mixBlendMode: "difference" }}>
              {title}
            </h1>
            <h3
              style={{
                color: "white",
                mixBlendMode: "difference",
                width: "450px",
              }}
            >
              {tagline}
            </h3>
          </div>
        </Container>
      </Link>
    </CardHolder>
  );
};

export default Card;
