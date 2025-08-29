import Image from "next/image";

export default function Crear() {
  return (
    <>
      <div className="Crear">
        <Image
          src="/img/pfp.png"
          width={50}
          height={50}
          alt="pfp"
          className="pfpMain"
        />
        <input placeholder="Iniciar un hilo..." />
        <button type="button" className="btn btn-secondary">
          Publicar
        </button>
      </div>
    </>
  );
}
