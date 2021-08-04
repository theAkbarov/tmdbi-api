import {
  MovieCard,
  Image,
  Text,
  Button,
  Remove,
  Wrapper,
  Loader,
} from "./useStyles.js";
import Play from "../../assets/icons/play-button-svgrepo-com.svg";
import DeleteIcon from "../../assets/icons/trash.svg";

const Movie = ({
  title,
  img,
  id,
  deleteBtn,
  deleteHandler,
  type,
  className,
}) => {
  const link = type === "tv" ? "tv" : type === "television" ? "tv" : "show";
  return (
    <Wrapper className={className}>
      <MovieCard to={`/${link}/${id}`}>
        <Image>
          <Loader>
            <img
              alt={title}
              src={`https://image.tmdb.org/t/p/original${img}`}
            />
          </Loader>
          <Button style={{ width: "50px" }}>
            <img src={Play} alt="" />
          </Button>
        </Image>
        <div className="shadow"></div>
        <Text>{title}</Text>
      </MovieCard>
      {deleteBtn ? (
        <Remove onClick={() => deleteHandler(id)}>
          <img src={DeleteIcon} alt="" />
        </Remove>
      ) : (
        <></>
      )}
      <Button className="wishlist">add to wishlist</Button>
    </Wrapper>
  );
};

export default Movie;
