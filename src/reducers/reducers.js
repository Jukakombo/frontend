import {
  CREATE__POST,
  DELETE__POST,
  GET__POST,
  UPDATE__POST,
} from "../constansts";

const posts = (action, postsData = []) => {
  switch (action.type) {
    case GET__POST:
      return action.payload;

    case CREATE__POST:
      return [...postsData, action.payload];

    case UPDATE__POST:
      return postsData.map((update) =>
        update._id === action.payload._id ? action.payload : update
      );

    case DELETE__POST:
      return postsData.filter((eleminate) => eleminate._id !== action.payload);
   

    default:
      return postsData;
  }
};

export default posts 