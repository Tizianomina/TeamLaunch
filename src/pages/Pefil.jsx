import "../style/perfil.css";

export const Pefil = () => {
  return (
    <section className="perfil-container">
      <form className="perfil-form">
        <section className="perfil-seccion-datosPersonales">
          <div className="perfil-container-photo">
            <img
              src="https://picsum.photos/200/300"
              alt=""
              className="perfil-img"
            />
            <p className="perfil-img-link">Enter your photo</p>
          </div>
          <article className="perfil-container-description">
            <div className="perfil-description-person">
              <div className="input-group-name">
                <label htmlFor="name" className="label-name">
                  Name
                </label>
                <input type="text" className="perfil-input-name" id="name" placeholder="Juan"/>
              </div>

              <div className="input-group-lastname">
                <label htmlFor="lastname" className="label-lastname">
                  Last name
                </label>
                <input
                  type="text"
                  className="perfil-input-lastname"
                  id="lastname"
                  placeholder="Perez"
                />
              </div>
            </div>

            <div className="input-group-description">
              <label htmlFor="description" className="label-description">
                Description
              </label>
              <textarea
                name=""
                id="description"
                cols="30"
                rows="10"
                className="perfil-textarea-description"
              ></textarea>
            </div>
          </article>
        </section>

        {/* ----------- */}

        <section className="perfil-seccion-redesPersonales">
          <article className="perfil-contenedor-redes">
            <label htmlFor="" className="label-linkedin">
              Linkedin
            </label>
            <input type="text" className="input-linkedin" placeholder="https://www.linkedin.com/in/JuanPerez" />

            <label htmlFor="" className="labal-Github">
              Github
            </label>
            <input type="text" className="input-Github" placeholder="https://github.com/JuanPerez"/>

            <label htmlFor="" className="labal-sitioWeb">
              Sitio web personal
            </label>
            <input type="text" className="input-sitioWeb" placeholder="https://Juan-Perez.com"/>
          </article>

          <article className="perfil-tecnologias">
            <label htmlFor="" className="perfil-titulo-tecnologia">
              Agregue una tecnología
            </label>
            <div className="agregar-tecnologia">
              <input type="text" className="input-tecnologia" />
              <button className="agregar-tecnologia-btn">+</button>
            </div>
          </article>

          {/* ----------- */}

          <section className="contenedor-idiomas">
            <article className="contendor-idiomas-checkbox">
              <div className="contendor-ingles">
                <input type="checkbox" name="ingles" id="ingles" />
                <label htmlFor="ingles">Ingles</label>
              </div>
              <div className="contenedor-espanol">
                <input type="checkbox" name="español" id="español" />
                <label htmlFor="español">Español</label>
              </div>
            </article>
            <button className="btn-cv">Subir tu CV</button>
          </section>
        </section>
        <button type="submit" className="finalizar">Finalizar</button>
      </form>
    </section>
  );
};
