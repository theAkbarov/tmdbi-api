import { Wrapper, External, Block, Friend } from "./useStyles";
import { v4 as uuidv4 } from "uuid";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TelegramShareButton,
  TwitterShareButton,
  VKIcon,
  TelegramIcon,
  VKShareButton,
} from "react-share";
import { FaRegCopy } from "react-icons/fa";
import { useState } from "react";
import { notification } from "antd";
const Share = ({ active, name, setModal, movie }) => {
  const openNotification = (placement, text) => {
    notification.info({
      message: text,
      description: "",
      placement,
    });
  };

  const copyhandler = () => {
    navigator.clipboard.writeText(window.location.href);
    setModal(false);
    openNotification("bottomRight", "Copied to clipboard");
  };
  const [FriendsStore, SetFriendsStore] = useState(
    window.localStorage.getItem("friends") &&
      window.localStorage.getItem("friends").length !== 0
      ? JSON.parse(window.localStorage.getItem("friends"))
      : [
          {
            name: "test user",
            email: "test@email.com",
            age: 45,
            id: uuidv4(),
            favlist: [],
            image: null,
          },
        ]
  );
  const shareMovieHandler = (data, el) => {
    el.favlist.push(data);
    window.localStorage.setItem("friends", JSON.stringify(FriendsStore));
    openNotification("bottomRight", `Successfully shared to ${el.name}`);
    setModal(false);
  };
  return (
    <>
      <Wrapper className={active ? "active" : ""}>
        <Block>
          <h3>Share "{name}"</h3>
          <div
            style={{
              display: "flex",
            }}
          >
            <input
              style={{
                flexGrow: "1",
                outline: "none",
                borderRadius: "40px",
                padding: "4px 8px",
                border: "1px solid #ddd",
              }}
              type="text"
              placeholder={window.location.href}
              value={window.location.href}
            />
            <button
              style={{
                borderRadius: "40px",
                border: "1px solid #ddd",
                cursor: "pointer",
              }}
              onClick={() => copyhandler()}
            >
              <FaRegCopy />
            </button>
          </div>
          <button className="close-button" onClick={() => setModal(false)}>
            &times;
          </button>
          <div>
            <p style={{ color: "black" }}>Friends:</p>
            {FriendsStore.map((el) => (
              <Friend
                key={el.name}
                onClick={() => shareMovieHandler(movie, el)}
              >
                {el.name}
              </Friend>
            ))}
          </div>
          <External>
            <p>Or choose the external links down below:</p>
            <FacebookShareButton
              quote={`Share with your friends`}
              url={window.location.href}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={window.location.href}
              quote={`Share with your friends`}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <TelegramShareButton
              url={window.location.href}
              quote={`Share with your friends`}
              className="Demo__some-network__share-button"
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <VKShareButton
              url={window.location.href}
              quote={`Share with your friends`}
              className="Demo__some-network__share-button"
            >
              <VKIcon size={32} round />
            </VKShareButton>
          </External>
        </Block>
      </Wrapper>
    </>
  );
};

export default Share;
