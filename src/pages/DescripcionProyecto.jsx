import React from 'react';
import '../style/descripcionProyecto.css';
import { NavBar } from '../components/NavBar';

export const DescripcionProyecto = () => {
  return (
    <>
      <NavBar />
      <section className='contenedor'>
        <div className='cabeza-proyecto'>
          <img className='imagen' src="https://picsum.photos/200/300" alt="Imagen proyecto" />
          <div className='info-basica'>
            <p>Project title: <span> Proyecto de Bienes Raices</span> </p>
            <p>Number of participants: <span>10</span></p>
            <a className='descargar' href="#"><span>Download Material</span></a>
          </div>
        </div>
        <div>
          <p className='desProy'>
            <span>Descripción del proyecto: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro tempore veniam blanditiis repellat maxime quisquam at dolores qui similique nihil recusandae fuga minus, amet facere. Quia provident possimus asperiores necessitatibus? <br />
            Deserunt facilis pit? Quod quia corporis fugit error eaque, fugiat ducimus obcaecati magnam nesciuns.
            <br />
            Deserunt facilis quibusdam dignissimos iste earum eligendi commodi molestiae! Quasi, aperiam. Laboriosam sunt, maiores nostrum nobis amet quos suscipit? Quod quia corporis fugit error eaque, fugiat ducimus obcaecati magnillum quaerat, nam autem amet maxime voluptas! Libero corrupti ea itaque nobis earum eum accusantium aliquam!
            Ullam sed voluptatum similique debitis animi dolorum adipisci temporibus rem suscipit, soluta architecto vel est dolores nesciunt dicta cumque accusantium ab saepe consequatur. Molestias sint porro, obcaecati corporis delectus nam?
            Ducimus qui quod nostrum placeat nobis praesentium odio. Necessitatibus, vitae dignissimos rem itaque optio dolor consequatur at suscipit veritatis iure, vero sint, nihil magnam? Magni modi tempora ab quisquam praesentium.
            Illum, pariatur recusandae fuga est dignissimos magnam numquam quia quasi blanditiis ipsa quam sint provident vero ullam corporis reiciendis laboriosam aut doloribus sit maiores nisi eius? Voluptatibus officia nihil repellendus.
          </p>
        </div>
        <div>
          <ul>
            <li className='yo'>
              <div>
                Participants: Me
                <ul>
                  FrontEnd React
                </ul>
                <ul>
                  BackEnd Node
                </ul>
              </div>
              <button className='salir'>X</button>

            </li>
            <li>Participants 2
              <ul>
                FrontEnd React
              </ul>
              <ul>
                BackEnd Node
              </ul>
            </li>
            <li>Participants 3
              <ul>
                FrontEnd React
              </ul>
              <ul>
                BackEnd Node
              </ul>
            </li>
          </ul>
        </div>
        <button className='unirse'><a href="#">Join me</a></button>
      </section>
    </>

  )
}
