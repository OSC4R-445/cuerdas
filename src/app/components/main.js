import Image from "next/image";
import Crear from "./crear";

const Card = ({ post }) => {
  return (
    <div className="card">
      <div className="postComment">
        <Image
          src={post.profileImg}
          width={50}
          height={50}
          alt={`Profile of ${post.nameAccount}`}
          className="pfpMain"
        />
        <div>
          <div>{post.nameAccount}</div>
          <p>{post.description}</p>
        </div>
        <div>
          <div>{post.timestamp}</div>
        </div>
        <i className="bi bi-three-dots"></i>
      </div>

      <div className="postContent">
        {post.imgFeed && (
          <Image
            src={post.imgFeed}
            width={500}
            height={500}
            alt={`Post from ${post.nameAccount}`}
            className="Post"
          />
        )}
      </div>

      <div className="postFooter">
        <h4 className="bi bi-heart"></h4>
        <h4 className="bi bi-chat-right"></h4>
        <h4 className="bi bi-arrow-repeat"></h4>
        <h4 className="bi bi-send"></h4>
      </div>

      <div className="postLikes">{post.likes} Me gusta</div>
    </div>
  );
};

export default function Main() {
  const estaLogueado = true

  const posts = [
    {
      nameAccount: "Dolar Today",
      profileImg: "/img/dolarTodayPfp.png",
      linkFeed: "https://.com/Posts/1",
      description: "dolartoday.com/que-s...",
      imgFeed: "/img/dolarTodayPost.png",
      likes: 125,
      timestamp: "3 min",
      id: 1,
    },
    {
      nameAccount: "Real Lawfirm",
      profileImg: "/img/dolarTodayPfp.png",
      linkFeed: "https://.com/Posts/2",
      description: "We've settled over 2000 cases...",
      imgFeed: "/img/dolarTodayPost.png",
      likes: 30,
      timestamp: "10 min",
      id: 2,
    }
  ];

  return (
    <main>
      <Crear />
      <Card key={posts[0].id} post={posts[0]} />
      {estaLogueado && <Card key={posts[1].id} post={posts[1]} />}
    </main>
  );
}