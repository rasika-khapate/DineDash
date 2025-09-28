import UserFunctional from "./UserFunctional";
import UserClass from "./UserClass";
import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    console.log("Parent Constructor");
    super(props);
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  componentWillUnmount() {
    console.log("Parent Component will unmount");
  }

  render() {
    console.log("Parent Render");
    return (
      <>
      <div className="m-4 p-4">
        <h1>About Us</h1>
        <h3>This is About Us page</h3>
        <div className="flex justify-around">
          <UserFunctional />
          <UserClass name={"Rasika class"} />
          <UserClass  name={"Suhasini class"} />
          {/* <UserClass name={"Tushar class"} /> */}
        </div>
        </div>
      </>
    );
  }
}

// const About = () => {
//   return (
//     <>
//       <h1>About Us</h1>
//       <h3>This is About Us page</h3>
//       <div id="about-us-sub-components">
//       <UserFunctional />
//       <UserClass name={"Rasika class"} />
//       </div>
//     </>
//   );
// };

export default About;
