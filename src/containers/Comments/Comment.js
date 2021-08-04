import { CommentWrapper, Button, Comments } from "./useStyles";
import send from "../../assets/icons/send.svg";
import { useAuth } from "../../services/context/AuthContext";
import { useSelector } from "react-redux";
import Person from "../../components/Person/Person";
const Comment = ({ movie }) => {
  const comments = useSelector((state) => state.allPayloads.comments);
  const currentUser = useAuth();

  return (
    <>
      <CommentWrapper>
        <span>
          {currentUser.currentUser
            ? currentUser.currentUser.email.split("")[0].toUpperCase()
            : ""}
        </span>
        <input
          type="text"
          placeholder={`Write a comment about "${movie && movie.title}"`}
        />
        <Button>
          <img src={send} alt="" />
        </Button>
      </CommentWrapper>
      <Comments>
        {comments && comments.map((el) => <Person el={el} />)}
      </Comments>
    </>
  );
};

export default Comment;
