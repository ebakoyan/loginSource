import axios from "axios";
import s from "./Create.module.css";

function Create(props) {
  const submit = (event) => {
    console.log(event.target.title.value);
    const obj = {
      title: event.target.title.value,
      body: event.target.body.value,
      img: event.target.img.value,
    };
    axios
      .post("https://blog-28321-default-rtdb.firebaseio.com/posts.json", obj)
      .then(props.click("posts"));
    event.preventDefault();
  };
  return (
    <div className={s.form}>
      <form onSubmit={submit}>
        <input
          type='text'
          className='form-control'
          name='title'
          id='title'
          placeholder='title'
        />
        <input
          className='form-control'
          type='text'
          name='body'
          id='body'
          placeholder='Body'
        />
        <input
          className='form-control'
          type='text'
          name='img'
          id='img'
          placeholder='imgSRC'
        />
        <input
          style={{ margin: "0 auto", display: "block" }}
          type='submit'
          className='btn btn-success'
          value='Create'
        />
      </form>
    </div>
  );
}

export default Create;
