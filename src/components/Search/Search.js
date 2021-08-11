import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../useStyles";
import { MdKeyboardVoice } from "react-icons/md";
import { AiOutlineAudioMuted } from "react-icons/ai";
import {
  Wrapper,
  Button,
  Input,
  Output,
  ListItem,
  Datas,
  Switcher,
  PrimaryBtn,
  Center,
} from "./useStyles";
import { request } from "../../services/api/request";
import { useDispatch } from "react-redux";
import { set_results } from "../../redux/actions/movie_actions";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Search = ({ setSearchbar, active, close }) => {
  const inputRef = useRef();
  const [typed, setTyped] = useState("");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [searchBase, setSearchBase] = useState("movies");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-EN" });

  const handleSearch = (e) => {
    setTyped(e && e.target.value);
    setTimeout(() => {
      request
        .get(`/search/${searchBase === "movies" ? "movie" : "person"}`, {
          params: {
            api_key: "86940d36084c3669a50736d6baf4f3ce",
            query: typed || transcript,
            include_adult: true,
          },
        })
        .then((res) => setData(res.data.results))
        .catch((err) => console.log(err));
    }, 1000);
  };
  const handleCollectionSearch = (e) => {
    setTyped(e.target.value);
    setTimeout(() => {
      request
        .get(`/search/collection`, {
          params: {
            api_key: "86940d36084c3669a50736d6baf4f3ce",
            query: e.target.value,
            page: 1,
            include_adult: true,
          },
        })
        .then((res) => setData(res.data.results))
        .catch((err) => console.log(err));
    }, 0);
  };
  const baseChangeHandler = (e) => {
    setSearchBase(e);
    setData([]);
    inputRef.current.value = "";
  };

  useEffect(() => {
    if (active === true) {
      inputRef.current.focus();
      setTyped("");
    }
  }, [active]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const stopHandler = () => {
    SpeechRecognition.stopListening();
    setTimeout(() => {
      setTyped(transcript);
      handleSearch();
    }, 100);
    resetTranscript();
  };
  return (
    <Wrapper className={active ? "show" : ""}>
      <Container
        style={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="form">
          <Button
            className={listening ? "active" : ""}
            onTouchStart={startListening}
            onMouseDown={startListening}
            onTouchEnd={() => stopHandler()}
            onMouseUp={() => stopHandler()}
          >
            <MdKeyboardVoice />
          </Button>

          <Input
            ref={inputRef}
            onChange={(e) =>
              searchBase === "collection"
                ? handleCollectionSearch(e)
                : handleSearch(e)
            }
            value={typed}
            type="search"
            placeholder={`Type to search ${searchBase}`}
          />
          {close ? (
            <></>
          ) : (
            <Button
              onClick={() => {
                setSearchbar(false);
                setData([]);
              }}
            >
              &times;
            </Button>
          )}
        </div>

        <Output>
          {data &&
            data.slice(0, 3).map((el) => (
              <ListItem key={el.id}>
                {searchBase === "movies" ? (
                  <Link
                    onClick={() => {
                      setSearchbar(false);
                      setData([]);
                    }}
                    to={`/show/${el.id}`}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original${
                        el.poster_path && el.poster_path
                      }`}
                      alt={el.title}
                    />
                    <Datas>
                      <h3>{el.title || el.original_name}</h3>
                      <p>Voted: {el.vote_count} times</p>
                    </Datas>
                  </Link>
                ) : searchBase === "actors" ? (
                  <Link
                    onClick={() => {
                      setSearchbar(false);
                      setData([]);
                    }}
                    to={`/person/${el.id}`}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original${
                        el.profile_path && el.profile_path
                      }`}
                      alt={el.name}
                    />
                    <Datas>
                      <h3>{el.name}</h3>
                      <p>Popularity: {el.popularity}</p>
                    </Datas>
                  </Link>
                ) : searchBase === "collection" ? (
                  <Link
                    onClick={() => {
                      setSearchbar(false);
                      setData([]);
                    }}
                    to={`/collection/${el.id}`}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original${
                        el.poster_path && el.poster_path
                      }`}
                      alt={el.title}
                    />
                    <Datas>
                      <h3>{el.title || el.original_name}</h3>
                      <p>Voted: {el.vote_count} times</p>
                    </Datas>
                  </Link>
                ) : null}
              </ListItem>
            ))}
          {data.length > 0 ? (
            <Link
              to={`/results/${typed}`}
              onClick={() => {
                setSearchbar(false);
                setData([]);
              }}
            >
              <PrimaryBtn
                onClick={() => dispatch(set_results(data))}
                className="results"
              >
                Show all results
              </PrimaryBtn>
            </Link>
          ) : (
            <></>
          )}
        </Output>
      </Container>
      <Switcher>
        <PrimaryBtn
          className={searchBase === "movies" ? "active" : ""}
          onClick={(e) => baseChangeHandler(e.target.textContent.toLowerCase())}
        >
          Movies
        </PrimaryBtn>
        <PrimaryBtn
          className={searchBase === "actors" ? "active" : ""}
          onClick={(e) => baseChangeHandler(e.target.textContent.toLowerCase())}
        >
          Actors
        </PrimaryBtn>
        <PrimaryBtn
          className={searchBase === "collection" ? "active" : ""}
          onClick={(e) => baseChangeHandler(e.target.textContent.toLowerCase())}
        >
          Collection
        </PrimaryBtn>
      </Switcher>

      <div>
        {/* <p>Microphone: {listening ? "on" : "off"}</p> */}
        <Center className={listening ? "recording" : ""}>
          <h3>{transcript ? transcript : "Listening..."}</h3>
          <Button
            className={`mute button hvr-float ${listening ? "recording" : ""}`}
            onClick={stopHandler}
          >
            <AiOutlineAudioMuted />
          </Button>
        </Center>
        <p></p>
      </div>
    </Wrapper>
  );
};

export default Search;
