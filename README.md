# PetShop - Tienda de Productos para Mascotas

Proyecto de tienda online para productos de mascotas construido con HTML5, CSS3, Bootstrap 5 y JavaScript vanilla.

## Estructura del Proyecto

```
Tienda_animales/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── .gitignore
└── README.md
```

## Características

- **Diseño Responsive**: Adaptable a móviles, tablets y desktop con Bootstrap Grid
- **Navbar**: Menú de navegación con buscador y carrito dinámico
- **Hero Section**: Banner principal con imagen de mascotas
- **Productos**: 12 productos con filtros por categoría (Perros, Gatos, Aves, Peces)
- **Carrito de Compras**: Funcionalidad completa (agregar, eliminar, vaciar, subtotal)
- **Formulario de Registro**: Validaciones HTML5 con Bootstrap
- **Testimonios**: Sección de clientes felices
- **FAQ**: Preguntas frecuentes en acordeón
- **Footer**: Redes sociales, contacto y enlaces rápidos
- **Extras**: Botón flotante WhatsApp, botón "Volver arriba", búsqueda en tiempo real

## Tecnologías

| Tecnología | Versión | CDN |
|------------|---------|-----|
| HTML5 | - | - |
| CSS3 | - | - |
| Bootstrap | 5.3.2 | `cdn.jsdelivr.net/npm/bootstrap@5.3.2` |
| Bootstrap Icons | 1.11.1 | `cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1` |
| JavaScript | ES6+ | Vanilla (sin frameworks) |

## Cómo Ejecutar

Abrir `index.html` en cualquier navegador:

```bash
# Servidor local con Python
python -m http.server 8000

# Servidor local con Node.js
npx serve
```

## Funcionalidades del Carrito

| Función | Descripción |
|---------|-------------|
| Agregar producto | Incrementa contador y muestra toast |
| Eliminar producto | Resta cantidad o remueve del carrito |
| Ver carrito | Modal con productos, cantidades y subtotal |
| Vaciar carrito | Limpia todo el carrito |
| Finalizar compra | Modal de confirmación |

## Convenciones del Código

- **CSS**: Variables CSS para colores, selectores por clase, animaciones con `@keyframes`
- **JS**: Funciones nombradas, eventos con `addEventListener`, carrito como array de objetos
- **HTML**: Semántico con secciones (`section`, `nav`, `footer`), atributos `aria-*` para accesibilidad

## Licencia

Este proyecto es de uso educativo y personal.

**Nota**: Requiere conexión a internet para cargar las dependencias CDN.
