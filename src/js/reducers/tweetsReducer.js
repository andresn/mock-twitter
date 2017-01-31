export default function reducer(state={
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_TWEETS": {
        state.fetching = true;
        return state
      }
      /*
      case "FETCH_TWEETS_REJECTED": {
        var state = Object.assign({}, state, {fetching: true, error: action.payload})
        return state
      }
      case "FETCH_TWEETS_FULFILLED": {
        var state = Object.assign({}, state, {fetching: false, fetched: true, tweets: action.payload})
        return state
      }
      */
      case "ADD_TWEET": {
        return {
          ...state,
          tweets: [...state.tweets, action.payload],
        }
      }
      case "UPDATE_TWEET": {
        const { id, text } = action.payload
        const newTweets = [...state.tweets]
        const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)
        newTweets[tweetToUpdate] = action.payload;

        return {
          ...state,
          tweets: newTweets,
        }
      }
      case "DELETE_TWEET": {
        return {
          ...state,
          tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
        }
      }
    }

    return state
}
