import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.btn}>
        <button
          className='btn btn-success'
          onClick={() => props.setPage("login")}>
          Login
        </button>
        <button
          className='btn btn-primary'
          onClick={() => props.setPage("reg")}>
          Create New Account
        </button>
        <button className='btn btn-info' onClick={() => props.setPage("posts")}>
          Posts
        </button>
        <button
          className='btn btn-info'
          onClick={() => props.setPage("create")}>
          Create post
        </button>
      </div>
    </header>
  );
};
export default Header;
