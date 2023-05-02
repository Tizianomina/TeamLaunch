import "../style/home.css";
import work from "../assets/work.png";

export const Home = () => {
  return (
    <>
      <section className="landingPage-contenedor">
        <div className="landingPage-titulo-comenzar">
          <h1 className="">
            ¡Arranca con tus primeros proyectos! <br />
            <br /> Comienza AHORA
          </h1>
          <button className="landingPage-boton-comenzar">Getting</button>
        </div>
        <div className="landingPage-contenedor-imagen">
          <img className="landingPage-img" src={work} alt="" />
        </div>
      </section>
    </>
  );
};
