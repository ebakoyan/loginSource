import s from "./Reg.module.css";
import React from "react";

class Reg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cond: {
        name: false,
        surname: false,
        email: false,
        password: false,
      },
    };
    this.test = (e) => {
      const value = e.target.value;
      const name = e.target.getAttribute("name");
      let newCond = { ...this.state.cond };
      if (value.length >= 8) {
        e.target.style.borderColor = "green";
        newCond[name] = true;
      } else if (value.length >= 1) {
        e.target.style.borderColor = "red";
        newCond[name] = false;
      } else {
        e.target.style.borderColor = "#e0e0bb";
        newCond[name] = false;
      }
      console.log(newCond);
      this.setState({ cond: newCond });
    };
  }
  render() {
    const sbm =
      this.state.cond.name &&
      this.state.cond.surname &&
      this.state.cond.email &&
      this.state.cond.password ? (
        <input
          type='submit'
          value='Create'
          className='btn btn-success'
          style={{ border: "none" }}
        />
      ) : (
        <input
          type='submit'
          value='Create'
          className='btn btn-success'
          style={{ border: "none" }}
          disabled
        />
      );
    const icon =
      this.state.cond.name &&
      this.state.cond.surname &&
      this.state.cond.email &&
      this.state.cond.password ? (
        <i
          class='fas fa-lock-open fa-2x'
          style={{ color: "green", marginBottom: "8px" }}></i>
      ) : (
        <i class='fas fa-lock fa-2x' style={{ marginBottom: "8px" }}></i>
      );
    return (
      <div className={s.reg}>
        <form action='post' className={s.post}>
          {icon}
          <div className={s.name}>
            <input
              type='text'
              placeholder='Email'
              name='email'
              onChange={this.test}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              onChange={this.test}
            />
          </div>
          <div className={s.email}>
            <input
              type='text'
              placeholder='Name'
              name='name'
              onChange={this.test}
            />
            <input
              type='text'
              placeholder='Surname'
              name='surname'
              onChange={this.test}
            />
          </div>
          {sbm}
        </form>
      </div>
    );
  }
}

export default Reg;
