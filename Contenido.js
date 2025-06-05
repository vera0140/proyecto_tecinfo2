const cursosDetalle = {
    triturar: `
<h3>Tritura y Prepara la Mezcla</h3>
<p>En este curso te enseñamos a recoger papel usado, triturarlo en pequeños pedazos y luego mezclarlo con agua para crear una pasta homogénea. Es el primer paso esencial para fabricar papel reciclado.</p>
<ul>
<li>Materiales necesarios</li>
<li>Pasos para triturar correctamente</li>
<li>Cómo mezclar con agua para obtener la pasta ideal</li>
</ul>
    `,
    moldeo: `
<h3>Moldeo y Secado</h3>
<p>Aprenderás a colocar la mezcla en moldes especiales para darle forma a las hojas. También cubrimos técnicas de secado para que las hojas queden resistentes y listas para usarse.</p>
<ul>
<li>Tipos de moldes</li>
<li>Técnicas para evitar burbujas</li>
<li>Consejos para el secado natural y rápido</li>
</ul>
    `,
    creativas: `
<h3>Aplicaciones Creativas</h3>
<p>Descubre las múltiples maneras en que puedes usar tu papel reciclado para manualidades, decoración y arte. ¡Dale vida a tus creaciones con un toque ecológico!</p>
<ul>
<li>Manualidades y tarjetas</li>
<li>Decoración ecológica</li>
<li>Arte con papel reciclado</li>
</ul>
    `
};
 
const btnsDetalle = document.querySelectorAll('.btn-detalle');
const detalleSection = document.getElementById('detalle-curso');
const detalleContenido = document.getElementById('detalle-contenido');
const btnCerrar = document.getElementById('btn-close');
 
btnsDetalle.forEach(btn => {
    btn.addEventListener('click', () => {
        const curso = btn.getAttribute('data-curso');
        detalleContenido.innerHTML = cursosDetalle[curso] || '<p>Información no disponible.</p>';
        detalleSection.classList.remove('hidden');
        detalleSection.focus();
    });
});
 
btnCerrar.addEventListener('click', () => {
    detalleSection.classList.add('hidden');
    detalleContenido.innerHTML = '';
});
