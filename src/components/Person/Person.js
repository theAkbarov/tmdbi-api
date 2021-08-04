import React, { useState } from "react";
import { Wrapper, Image, Content } from "./useStyles";
import Fallback from "../../assets/images/fallback.png";

export default function Person({ el }) {
  const [moreInfo, setMoreInfo] = useState(true);
  const remover = (str) => {
    var [, ...arr] = str;
    if (arr[0] === "h") {
      return arr.join("");
    } else {
      return `https://image.tmdb.org/t/p/original/${str}`;
    }
  };
  return (
    <Wrapper key={el.id}>
      <div>
        <Image
          src={
            el.author_details.avatar_path
              ? remover(el.author_details.avatar_path)
              : Fallback
          }
          alt=""
        />
      </div>
      <Content>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>{el.author}</h3>
          <p>{el.updated_at.split("").splice(0, 10)}</p>
        </div>
        <p className={moreInfo ? "" : "more"}>{el.content}</p>
        <button onClick={() => setMoreInfo(!moreInfo)}>
          read {moreInfo ? "more" : "less"}
        </button>
      </Content>
    </Wrapper>
  );
}
