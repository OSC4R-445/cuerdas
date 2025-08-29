import Image from "next/image";
import Crear from "./crear";

export default function Main() {
  return (
    <>
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
    </>
  );
}