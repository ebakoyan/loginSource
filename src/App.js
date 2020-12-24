// import "./App.css";
import React from "react";
import Header from "./Components/Header/Haeader";
import Login from "./Components/Login/Login";
import Reg from "./Components/Reg/Reg";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
    this.setLogin = () => this.setState({ login: true });
    this.setReg = () => this.setState({ login: false });
  }

  render() {
    const compoment = this.state.login ? <Login /> : <Reg />;
    return (
      <div>
        <Header login={this.setLogin} reg={this.setReg} />
        {compoment}
      </div>
    );
  }
}

export default App;
