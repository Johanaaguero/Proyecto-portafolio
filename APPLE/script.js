const portafolioData = [
  {
    titulo: 'APPLE',
    descripcion: 'Sitio web responsive desarrollado con HTML, CSS y JavaScript para mostrar mi información personal y proyectos.',
    imagen: 'img/proy1.png',
    enlace: '#',
  },
  {
    titulo: 'Spotify',
    descripcion: 'Aplicación sencilla para gestionar tareas diarias usando JavaScript y localStorage.',
    imagen: 'img/proy2.png',
    enlace: '#',
  },
  {
    titulo: 'TOYOTA',
    descripcion: 'Blog construido con WordPress para compartir artículos de programación y tecnología.',
    imagen: 'img/proy3.png',
    enlace: '#',
  }
];

window.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('#portafolio ul');
  portafolioData.forEach(proyecto => {
    const li = document.createElement('li');
    li.className = 'portafolio-card';

    li.innerHTML = `
      <img src="${proyecto.imagen}" alt="Imagen proyecto ${proyecto.titulo}" />
      <h4>${proyecto.titulo}</h4>
      <p>${proyecto.descripcion}</p>
      <button onclick="alert('Más detalles del proyecto: ${proyecto.titulo}')">Ver más</button>
    `;

    ul.appendChild(li);
  });
});