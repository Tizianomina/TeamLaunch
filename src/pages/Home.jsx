import "../style/home.css";
import work from "../assets/work.png";
import team from "../assets/team.png";
import { NavBar } from "../components/NavBar";
import { Proyect } from "../components/Proyect";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <NavBar />
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

      <section className="preguntas-contenedor">
        <h1 className="pregunta-n1">¿Qué vas a poder hacer?</h1>
        <ul className="respuestas-n1">
          <li>Crear y practicar tu programación en un equipo de trabajo.</li>
          <li>Obtener experiencia en trabajo en equipo totalmente GRATIS!</li>
          <li>
            Inscribirte en lo que consideres apto a tus conocimiento y
            experiencia.
          </li>
          <li>
            Añadir proyecto a tu portafolio con posbilidad de subirlo a la
            sección de proyectos de TeamLaunch. Todo esto y MUCHO MÁS
          </li>
        </ul>
        <h1 className="pregunta-n2">¿Cómo lo vas hacer?</h1>
        <ul className="respuestas-n2">
          <li>Crear y practicar tu programación en un equipo de trabajo.</li>
          <li>Obtener experiencia en trabajo en equipo totalmente GRATIS!</li>
          <li>
            Inscribirte en lo que consideres apto a tus conocimiento y
            experiencia.
          </li>
          <li>
            Añadir proyecto a tu portafolio con posbilidad de subirlo a la
            sección de proyectos de TeamLaunch. Todo esto y MUCHO MÁS
          </li>
        </ul>
      </section>
      <section className="proyectos-contenedor">
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
      </section>

      <section className="nosotros-contenedor">
        <div className="nosotros-img-contenedor">
          <img className="nosotros-img" src={team} alt="" />
        </div>
        <div className="nosotros">
          <h1 className="nosotros-titulo">¿Quiénes somos?</h1>
          <p className="nosotros-descripcion">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae fuga
            vel nam recusandae officia, distinctio animi et explicabo
            accusantium nulla? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quae fuga vel nam recusandae officia, distinctio
            animi et explicabo accusantium nulla? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quae fuga vel nam recusandae officia,
            distinctio animi et explicabo accusantium nulla? Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Quae fuga vel nam recusandae
            officia, distinctio animi et explicabo accusantium nulla?
          </p>
        </div>
      </section>
      <Footer/>
    </>
  );
};
