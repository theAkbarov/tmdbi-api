import { v4 as uuidv4 } from "uuid";
import {
  Modal,
  UserAdd,
  User,
  UserData,
  Row,
  CloseButton,
  Card,
  DeleteBtn,
} from "./useStyles";
import { useState } from "react";
import { useRef } from "react";
import Movie from "../../components/Movie";

const Friends = () => {
  const userNameRef = useRef();
  const userAgeRef = useRef();
  const userImageRef = useRef();
  const userEmailRef = useRef();
  const [modal, setModal] = useState(false);
  const [selectedUser, setSetSelecterUser] = useState({});
  const [userModal, setUserModal] = useState(false);
  const [FriendsStore, SetFriendsStore] = useState(
    window.localStorage.getItem("friends")
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
  const [file, setFile] = useState({ file: null });
  const handleSubmitFile = (e) => {
    setFile({ file: URL.createObjectURL(e.target.files[0]) });
  };
  const addUserHandler = () => {
    if (userNameRef.current.value.length > 0) {
      let newUserObj = {
        name: userNameRef.current.value,
        email: userEmailRef.current.value,
        age: userAgeRef.current.value,
        id: uuidv4(),
        favlist: [],
        image: file.file,
      };
      setTimeout(() => {
        // SetFriendsStore(oldValues => [...oldValues, newUserObj])
        FriendsStore.push(newUserObj);
        window.localStorage.setItem("friends", JSON.stringify(FriendsStore));
        SetFriendsStore(JSON.parse(window.localStorage.getItem("friends")));
      }, 1000);
      setModal(false);
    }
  };
  const showUserMovies = (data) => {
    setSetSelecterUser(FriendsStore.filter((el) => el.id === data.id));
    setUserModal(true);
  };
  const closeUserModalHandler = () => {
    setUserModal(false);
    setSetSelecterUser({});
  };
  const deleteFriendHandler = (id) => {
    let deletedFriendIndex = FriendsStore.findIndex(
      (friend) => friend.id === id
    );
    FriendsStore.splice(deletedFriendIndex, 1);
    window.localStorage.setItem("friends", JSON.stringify(FriendsStore));
    SetFriendsStore(JSON.parse(window.localStorage.getItem("friends")));
  };
  return (
    <div>
      <Card>
        {FriendsStore.map((el) => (
          <div style={{ position: "relative", width: "20%", margin: "1rem" }}>
            <User onClick={() => showUserMovies(el)}>
              <img width="100" src={el.image} alt="" />
              <h3>{el.name}</h3>
            </User>
            <DeleteBtn onClick={() => deleteFriendHandler(el.id)}>
              &times;
            </DeleteBtn>
          </div>
        ))}
      </Card>
      <UserAdd style={{ color: "white" }} onClick={() => setModal(true)}>
        Add user
      </UserAdd>
      <Modal style={{ display: modal ? "block" : "none" }}>
        <DeleteBtn onClick={() => setModal(false)}>&times;</DeleteBtn>
        <h1>Add users:</h1>
        <input
          required
          ref={userNameRef}
          type="text"
          placeholder="type username"
        />
        <input
          required
          ref={userEmailRef}
          type="email"
          placeholder="type email"
        />
        <input required ref={userAgeRef} type="number" placeholder="type age" />
        <input
          required
          ref={userImageRef}
          onChange={handleSubmitFile}
          type="file"
          placeholder="upload a picture"
        />
        <UserAdd onClick={addUserHandler}>Add</UserAdd>
      </Modal>
      <UserData style={{ display: userModal ? "block" : "none" }}>
        {userModal ? (
          <>
            <Row>
              <h2 style={{ color: "white" }}>Name: {selectedUser[0].name}</h2>
              <CloseButton onClick={closeUserModalHandler}>&times;</CloseButton>
            </Row>
            <div>
              <p>Email: {selectedUser[0].email}</p>
            </div>
            <h2
              style={{
                borderTop: "1px solid #aaa",
                paddingTop: "1rem",
                color: "white",
              }}
            >
              Shared movies:
            </h2>
            <div
              style={{ display: "flex", marginTop: "1rem", flexWrap: "wrap" }}
            >
              {selectedUser[0].favlist.length > 0 &&
                selectedUser[0].favlist.map((el) => (
                  <Movie
                    title={el.title}
                    id={el.id}
                    img={el.poster_path && el.poster_path}
                  />
                ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </UserData>
    </div>
  );
};

export default Friends;
