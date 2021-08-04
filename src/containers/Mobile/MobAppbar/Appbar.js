import { useState } from "react";
import { Link } from "react-router-dom";
import { MobileAppbarDatas } from "../../../db";
import { Appbar, SearchButton } from "./useStyles";
import { useAuth } from "../../../services/context/AuthContext";
import Profile from "../../../assets/icons/user.svg";
import Login from "../../../assets/icons/login.svg";
import Search from "../../../components/Search";

const MobAppbar = () => {
  const { currentUser } = useAuth();
  const [active, setActive] = useState("home");

  return (
    <Appbar>
      {MobileAppbarDatas.map((element) => (
        <Link
          className={active === element.title.toLowerCase() ? "active" : ""}
          onClick={() => setActive(element.title.toLowerCase())}
          to={element.link}
        >
          <img src={element.icon} alt={element.title} />
        </Link>
      ))}

      {currentUser ? (
        <Link to={"/profile"}>
          <img src={Profile} alt="" />
        </Link>
      ) : (
        <Link to="/auth">
          <img src={Login} alt="" />
        </Link>
      )}
    </Appbar>
  );
};

export default MobAppbar;
