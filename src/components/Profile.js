import React from "react";
import UserContext from "../utils/userContext";
import { useContext } from "react";

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    console.log("C-constructor" + this.props.child);
  }

  async componentDidMount() {
    console.log("C-didMount" + this.props.child);
    const data = await fetch("https://api.github.com/users/yk-pillai");
    const json = await data.json();
    this.setState(json);
  }

  componentDidUpdate() {
    console.log("C-didUpdate" + this.props.child);
  }

  componentWillUnmount(){
    console.log("C-willUnmount" + this.props.child);
  }

  render() {
    console.log("C-render" + this.props.child);
    // console.log(this.state);
    return (
      <div className="profile">
        <img className="w-28" src={this.state?.avatar_url}></img>
        <UserContext.Consumer>
          {({user}) => (
            <>
              <div>Name : {user.name}</div>
              <div>Email : {user.email}</div>
            </>
          )}
        </UserContext.Consumer>
        <h1>Github Username : {this.state?.login}</h1>
      </div>
    );
  }
}

export default Profile;
