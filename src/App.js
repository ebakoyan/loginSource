// import "./App.css";
import React from "react";
import Header from "./Components/Header/Haeader";
import Login from "./Components/Login/Login";
import Reg from "./Components/Reg/Reg";
import Posts from "./Components/Posts/Posts";
import Create from "./Components/Create/Create";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: "posts",
    };
    this.setPage = (newPage) => {
      this.setState({ page: newPage });
    };
  }
  render() {
    let component = null;
    switch (this.state.page) {
      case "login":
        component = <Login />;
        break;
      case "reg":
        component = <Reg />;
        break;
      case "posts":
        component = <Posts />;
        break;
      case "create":
        component = <Create click={(page) => this.setPage(page)} />;
        break;
      default:
        component = <Posts />;
    }
    return (
      <div>
        <Header setPage={this.setPage} />
        {component}
      </div>
    );
  }
}

export default App;
