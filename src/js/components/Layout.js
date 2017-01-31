import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  fetchTweets() {
    // this.props.dispatch(fetchTweets())
  }

  render() {
    var user = this.props.user;
    var tweets = this.props.tweets;

    if (!tweets.length) {
      var fetchTweets = null;// this.fetchTweets.bind(this);
      return <button onClick={fetchTweets}>load tweets</button>
    }

    // var myListOfTweets

    return <div>
      <h1>{user.name}</h1>
    </div>
  }
}
