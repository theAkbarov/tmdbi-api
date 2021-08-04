import { action_types } from "../constants/action_types";

const initialState = {
  movies: [],
  movie: [],
  token: "",
  search: [],
  topRated: [],
  wishlist: [],
};
export const movie_reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case action_types.SET_MOVIES:
      return {
        ...state,
        movies: payload,
      };

    case action_types.SET_COMMENTS:
      return {
        ...state,
        comments: payload,
      };
    case action_types.SET_RESULTS:
      return {
        ...state,
        results: payload,
      };

    case action_types.SET_MOVIE:
      return {
        ...state,
        movie: payload,
      };
    case action_types.SET_FAMOUS_ACTOR:
      return {
        ...state,
        famous_actor: payload,
      };
    case action_types.SET_VIDEOS:
      return {
        ...state,
        movie_videos: payload,
      };
    case action_types.SET_TOP_RATED:
      return {
        ...state,
        topRated: payload,
      };
    case action_types.SET_ACTOR:
      return {
        ...state,
        actor: payload,
      };
    case action_types.SET_TV:
      return {
        ...state,
        tv: payload,
      };
    case action_types.SET_SEASONS:
      return {
        ...state,
        seasons: payload,
      };
    case action_types.SET_WISHLIST:
      return {
        ...state,
        wishlist: payload,
      };
    case action_types.SET_IMAGES:
      return {
        ...state,
        images: payload,
      };
    case action_types.SET_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: payload,
      };

    case action_types.SET_TOKEN:
      return {
        ...state,
        token: payload,
      };

    case action_types.SET_SEARCHED:
      return {
        ...state,
        searched: payload,
      };

    default:
      return { state };
  }
};
