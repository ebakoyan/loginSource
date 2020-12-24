import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.btn}>
        <button className='btn btn-success' onClick={props.login}>
          Login
        </button>
        <button className='btn btn-primary' onClick={props.reg}>
          Create New Account
        </button>
      </div>
    </header>
  );
};
export default Header;
