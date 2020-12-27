import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post} onClick={() => props.click(props.id)}>
      <div>
        <h2>{props.obj.title}</h2>
      </div>
      <div className={s.photo}>
        <img src={props.obj.img} alt='' />
      </div>
      <div>
        <p>{props.obj.body}</p>
      </div>
    </div>
  );
};
export default Post;
