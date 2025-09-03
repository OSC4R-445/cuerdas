import Image from "next/image";
import Crear from "./crear";

export default function Main() {
  const estaLogueado = true;
  const Post1 = {
    nameAccount: "Dolar Today",
    linkFeed: "https://.com/post/1",
    description: "dolartoday.com/que-s...",
    imgFeed: "/img/dolarTodayPost.png",
    likes: 0,
    timestamp: 120394072487,
  };
  const Post2 = {
    nameAccount: "Real Lawfirm",
    linkFeed: "ttps://.com/post/2",
    description: "We've settled over 2000 cases...",
    imgFeed: "",
    likes: 0,
    timestamp: 120394802938,
  };

  return (
    <main>
      <Crear />
      <div className="postComment">
        <Image
          src="/img/dolarTodayPfp.png"
          width={50}
          height={50}
          alt="pfp"
          className="pfpMain"
        />
        <div>
          <div>Dolar Today</div>
          <button type="button" className="btn btn-link">
            dolartoday.com/que-s...
          </button>
        </div>
        <div>
          <div>3 min</div>
        </div>
        <i className="bi bi-three-dots"></i>
      </div>
      <div className="postContent">
        <Image
          src="/img/dolarTodayPost.png"
          width={500}
          height={500}
          alt="Dolar Today Post"
          className="Post"
        />
      </div>
      <div className="postFooter">
        <h4 className="bi bi-heart"></h4>
        <h4 className="bi bi-chat-right"></h4>
        <h4 className="bi bi-arrow-repeat"></h4>
        <h4 className="bi bi-send"></h4>
      </div>
      <div className="postLikes">1 Me gusta</div>
    </main>
  );
}
