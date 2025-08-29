import Image from "next/image";
import Nav from "./nav";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <h1 className="bi bi-at"></h1>
        </div>
        <Nav />
        <div>
          <h1 className="bi bi-list"></h1>
        </div>
      </header>
    </>
  );
}
