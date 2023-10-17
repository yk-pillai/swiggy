import Profile from "./Profile"
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0,
    // };
    console.log("P-constructor");
  }

  // async componentDidMount() {
  //   console.log("P-didMount");
  //   const data = await fetch("https://api.github.com/users/yk-pillai");
  //   const json = await data.json();
  //   this.setState(json);
  //   this.interval = setInterval(()=>{
  //     console.log("Interval")
  //   },1000)
  // }

  componentDidUpdate() {
    console.log("P-didUpdate");
  }

  componentWillUnmount() {
    console.log("P-willUnmount");
    clearInterval(this.interval);
  }

  render() {
    console.log("P-render");
    return (
      <div>
        <h1 className="font-bold text-center">About me.</h1>
        {/* {this.state.count}
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Click
        </button> */}
        <Profile child={1} />
        {/* <Profile child={2} /> */}
      </div>
    );
  }
}
export default About;
