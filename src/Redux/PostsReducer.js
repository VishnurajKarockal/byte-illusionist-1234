import * as types from './ActionType';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case types.FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              comments: action.payload.comments,
            };
          }
          return post;
        }),
      };
    case types.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              comments: [...post.comments, action.payload.comment],
            };
          }
          return post;
        }),
      };
    case types.UPDATE_POST_LIKES:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              likes: action.payload.likes,
            };
          }
          return post;
        }),
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default PostsReducer;
