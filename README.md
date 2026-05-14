# PetShop - Tienda de Productos para Mascotas

> Proyecto de tienda online para productos de mascotas construido con HTML5, CSS3, Bootstrap 5 y JavaScript vanilla.

##  Estructura del Proyecto

```
Tienda_animales/
├── index.html          # Página principal
├── style.css           # Estilos personalizados
├── script.js          # Funcionalidad JavaScript
├── assets/            # (Reservado para recursos locales)
│   └── images/
├── docs/              # (Reservado para documentación adicional)
└── README.md          # Este archivo
```

##  Características

- **Diseño Responsive**: Adaptable a móviles, tablets y desktop
- **Navbar**: Menú de navegación con buscador y carrito dinámico
- **Hero Section**: Banner principal con imagen de mascotas
- **Productos**: 12 productos con filtros por categoría
- **Categorías**: Perros, Gatos, Aves y Peces
- **Carrito de Compras**: Funcionalidad completa (agregar, eliminar, vaciar)
- **Formulario de Registro**: Validaciones HTML5
- **Testimonios**: Section de clientes felices
- **FAQ**: Preguntas frecuentes en acordión
- **Footer**: Redes sociales, contacto y enlaces
- **Extras**: Botón flotante WhatsApp, botón "Volver arriba"

##  Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos personalizados con variables CSS
- **Bootstrap 5.3**: Framework CSS (CDN)
- **Bootstrap Icons**: Iconos (CDN)
- **JavaScript Vanilla**: Sin frameworks adicionales

##  Dependencias (CDN)

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap Icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

## Imágenes

Todas las imágenes se cargan desde **Unsplash** usando URLs directas. Las imágenes incluyen:

- Productos para perros (comida, juguetes, camas, correas)
- Productos para gatos (rascadores, comida)
- Productos para aves (semillas, jaulas)
- Productos para peces (acuarios, filtros)
- Imágenes de categorías y testimonios

##  Cómo Ejecutar

1. Clonar o descargar el repositorio
2. Abrir `index.html` en cualquier navegador web
3. No requiere instalación de dependencias locales

```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Con servidor local (Python)
python -m http.server 8000

# Opción 3: Con servidor local (Node.js)
npx serve
```

##  Navegadores Soportados

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

##  Funcionalidades del Carrito

| Función | Descripción |
|---------|-------------|
| Agregar producto | Click en "Agregar" actualiza el contador |
| Eliminar producto | Click en ícono de papelera |
| Ver carrito | Click en ícono del carrito |
| Vaciar carrito | Botón "Vaciar Carrito" en el modal |
| Finalizar compra | Muestra modal de confirmación |

##  Filtros de Productos

- **Todos**: Muestra todos los productos
- **Perros**: Solo productos de perros
- **Gatos**: Solo productos de gatos
- **Aves**: Solo productos de aves
- **Peces**: Solo productos de peces

##  Validaciones del Formulario

- Todos los campos son obligatorios
- Email con formato válido
- Teléfono con formato válido
- Contraseña mínimo 8 caracteres
- Confirmar contraseña debe coincidir
- Aceptar términos y condiciones

##  Licencia

Este proyecto es de uso educativo y personal.

---

**Nota**: Este proyecto usa CDN para las dependencias, por lo que requiere conexión a internet para funcionar correctamente.