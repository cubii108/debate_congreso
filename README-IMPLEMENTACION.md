# Debate en el Congreso - Actualizaciones

## Archivos actualizados y nuevos

### 📄 Nuevos archivos HTML
- **proyectos.html** - Nueva página con proyectos realizados, imágenes y conclusiones
- **index-updated.html** - Versión actualizada de index.html con logo y nuevo enlace
- **temas-updated.html** - Versión actualizada de temas.html con logo y nuevo enlace
- **objetivos-updated.html** - Versión actualizada de objetivos.html con logo y nuevo enlace
- **metodologia-updated.html** - Versión actualizada de metodologia.html con logo y nuevo enlace

### 🎨 Archivo CSS actualizado
- **styles-updated.css** - CSS actualizado con estilos para:
  - Logo de Becas Europa en el navbar
  - Página de proyectos
  - Galería de imágenes
  - Estadísticas
  - Diseño responsive

## 🚀 Instrucciones de implementación

### 1. Reemplazar archivos
Renombra los archivos actualizados eliminando el sufijo "-updated":
```
index-updated.html → index.html
temas-updated.html → temas.html
objetivos-updated.html → objetivos.html
metodologia-updated.html → metodologia.html
styles-updated.css → styles.css
```

### 2. Estructura de directorios necesaria
```
tu-proyecto/
├── index.html
├── temas.html
├── objetivos.html
├── metodologia.html
├── proyectos.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── img/
    ├── becas-europa-logo.png (NECESARIO)
    ├── proyecto1.jpg
    ├── proyecto2.jpg
    ├── proyecto3.jpg
    ├── galeria1.jpg
    ├── galeria2.jpg
    ├── galeria3.jpg
    └── galeria4.jpg
```

### 3. Logo de Becas Europa
**IMPORTANTE**: Necesitas añadir el logo de Becas Europa:
- Nombre del archivo: `becas-europa-logo.png`
- Ubicación: carpeta `img/`
- Formato recomendado: PNG con fondo transparente
- Tamaño recomendado: Alto de 80-120px (el CSS lo ajustará a 40px)

Puedes descargar el logo oficial desde:
- Web oficial de Becas Europa
- Contactando con su departamento de comunicación

### 4. Imágenes para la página de proyectos
Necesitas añadir las siguientes imágenes en la carpeta `img/`:

**Proyectos principales:**
- `proyecto1.jpg` - Debate sobre libertad y seguridad
- `proyecto2.jpg` - Debate sobre IA en educación
- `proyecto3.jpg` - Debate sobre crisis climática

**Galería:**
- `galeria1.jpg` - Intervención del líder de la oposición
- `galeria2.jpg` - Preparación de argumentos en grupo
- `galeria3.jpg` - Periodistas elaborando informe
- `galeria4.jpg` - Reflexión final y despedida

**Opciones si no tienes las imágenes aún:**
1. Usar imágenes placeholder desde https://placehold.co/
2. Usar fotos de archivo de Unsplash o Pexels con licencia libre
3. Tomar fotografías propias de los debates realizados

### 5. Cambios realizados

#### En el navbar (todas las páginas):
```html
<div class="logo-section">
    <img src="img/becas-europa-logo.png" alt="Becas Europa" class="becas-logo">
    <span class="logo">Debate en el Congreso</span>
</div>
```

#### Nuevo enlace en el menú:
```html
<li><a href="proyectos.html">Proyectos</a></li>
```

#### Nueva página proyectos.html incluye:
- 3 proyectos destacados con descripción detallada
- Imágenes de cada proyecto
- Conclusiones y reflexiones
- Galería de momentos destacados
- Estadísticas del impacto del proyecto

## 📱 Características responsive
El diseño es totalmente responsive:
- En móviles: el logo y navegación se adaptan verticalmente
- Las galerías cambian a una sola columna
- Las tarjetas de proyectos se apilan verticalmente

## 🎨 Personalización

### Colores
Los colores están definidos como variables CSS en `:root`:
```css
--color-primary: #1e3a5f;      /* Azul institucional */
--color-secondary: #9b1c1c;    /* Rojo sobrio */
--color-light: #f5f7fa;
--color-dark: #1f2933;
--color-gray: #6b7280;
```

### Ajustar tamaño del logo
En el CSS, modifica:
```css
.becas-logo {
    height: 40px;  /* Cambia este valor según necesites */
    width: auto;
}
```

## ✅ Checklist de implementación
- [ ] Renombrar archivos -updated
- [ ] Crear carpeta img/
- [ ] Añadir becas-europa-logo.png
- [ ] Añadir imágenes de proyectos (proyecto1.jpg, proyecto2.jpg, proyecto3.jpg)
- [ ] Añadir imágenes de galería (galeria1.jpg a galeria4.jpg)
- [ ] Verificar que la estructura de carpetas coincida (css/, js/, img/)
- [ ] Probar en navegador
- [ ] Verificar responsive en móvil

## 📞 Soporte
Si tienes dudas sobre la implementación, verifica:
1. Que los nombres de archivos coincidan exactamente
2. Que la estructura de carpetas sea correcta
3. Que todas las rutas en los HTML apunten correctamente a css/styles.css, js/main.js, etc.

## 🔄 Contenido editable
Puedes modificar fácilmente:
- Títulos y descripciones de los proyectos
- Fechas de realización
- Conclusiones y reflexiones
- Estadísticas en la sección de impacto
- Imágenes (solo cambia el src en el HTML)
