import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="container animate-in-up" style={{margin: "30px"}}>
      <h1 style={{textAlign: "center", lineHeight: "2", color: "#0d47a1"}}>Acerca de LA TIENDA ONLINE</h1>
      <p>
        ¡Bienvenido a LA TIENDA ONLINE! Somos más que una tienda; somos un destino donde la diversión, la creatividad y la tecnología se encuentran. En LA TIENDA ONLINE, nos apasiona brindar a nuestros clientes una experiencia de compra única, ofreciendo una cuidada selección de juguetes, artículos de librería y productos de computación.
      </p>

      <section>
        <h2>Nuestra Historia</h2>
        <p>
          Comenzamos nuestra travesía con el sueño de crear un espacio en línea donde las familias pudieran encontrar todo lo que necesitan para satisfacer las distintas necesidades de sus hogares. Desde entonces, hemos evolucionado y crecido, manteniendo nuestro compromiso con la calidad y la diversidad.
        </p>
      </section>

      <section>
        <h2>Nuestra Misión</h2>
        <p>
          En LA TIENDA ONLINE, nuestra misión es inspirar la imaginación, fomentar el aprendizaje y facilitar la conexión a través de productos de alta calidad. Buscamos ser el lugar de referencia para familias, estudiantes y entusiastas de la tecnología, ofreciendo productos que estimulen la mente y brinden horas de diversión.
        </p>
      </section>

      <section>
        <h2>Nuestros Productos</h2>
        <p>
          <strong>Juguetes:</strong> Descubre nuestra amplia gama de juguetes diseñados para todas las edades. Desde juguetes educativos hasta los últimos productos en tendencia, en LA TIENDA ONLINE encontrarás algo para cada ocasión.
        </p>
        <p>
          <strong>Artículos de Librería:</strong> Explora nuestro extenso catálogo de artículos de librería que abarcan desde libros infantiles hasta suministros de arte. Fomentamos la creatividad y el amor por la lectura.
        </p>
        <p>
          <strong>Computación:</strong> Para los amantes de la tecnología, ofrecemos una cuidada selección de productos de computación, desde gadgets innovadores hasta equipos de última generación. Mantente actualizado con las últimas tendencias tecnológicas.
        </p>
      </section>

      <section>
        <h2>Compromiso con la Calidad</h2>
        <p>
          En LA TIENDA ONLINE, la calidad es nuestra prioridad. Trabajamos con proveedores de confianza para asegurar que cada producto que ofrecemos cumpla con los más altos estándares.
        </p>
      </section>

      <section>
        <h2>Contacto</h2>
        <p>
          Nos encantaría escucharte. Si tienes alguna pregunta, comentario o sugerencia, no dudes en ponerte en contacto con nuestro equipo de atención al cliente. Estamos aquí para ayudarte.
        </p>
      </section>

      <p>
        Gracias por elegir LA TIENDA ONLINE. ¡Esperamos que disfrutes de tu experiencia de compra con nosotros!
      </p>
    </div>
  );
};

export default AboutPage;
