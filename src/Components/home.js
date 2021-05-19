import styled from "styled-components";
import ImageSlider from "./imageSlider";
import Viewers from "./viewers";
import Recommendations from "./Recommendations";
import NewToDisney from "./NewToDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommendations = [];
  let newtodisney = [];
  let original = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommendations = [
              ...recommendations,
              { id: doc.id, ...doc.data() },
            ];
            break;
          case "new":
            newtodisney = [...newtodisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            original = [...original, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        setMovies({
          recommendations: recommendations,
          newtodisney: newtodisney,
          original: original,
          trending: trending,
        })
      );
    });
  }, [userName]);
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommendations />
      <NewToDisney />
      <Originals />
      <Trending />
    </Container>
  );
};
const Container = styled.main`
  position: relative;
  background: url("./images/home-background.png");
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 cal(3.5vw - 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
