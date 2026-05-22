// ============================================
// PetShop - Tienda de Productos para Mascotas
// ============================================

// Array de productos
const productos = [
    {
        id: 1,
        nombre: "Premium Dog Food",
        descripcion: "Alimento balanceado premium para perros adultos. Rico en proteínas y vitaminas.",
        precio: 45.99,
        categoria: "perros",
        imagen: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=300&fit=crop",
        destacado: true,
        badge: "Más Vendido"
    },
    {
        id: 2,
        nombre: "Interactive Toy Set",
        descripcion: "Set de juguetes interactivos para estimular a tu perro. Incluye pelota y mordedor.",
        precio: 19.99,
        categoria: "perros",
        imagen: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&h=300&fit=crop",
        destacado: false,
        badge: null
    },
    {
        id: 3,
        nombre: "Cat Scratching Post",
        descripcion: "Rascador de sisal para gatos. Incluye plataforma y pelotas interactivas.",
        precio: 39.99,
        categoria: "gatos",
        imagen: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=300&fit=crop",
        destacado: true,
        badge: "Nuevo"
    },
    {
        id: 4,
        nombre: "Aquarium Starter Kit",
        descripcion: "Kit completo para peceras de 20 galones. Incluye filtro, luces LED y decoración.",
        precio: 129.99,
        categoria: "peces",
        imagen: "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?w=400&h=300&fit=crop",
        destacado: true,
        badge: "Oferta"
    },
    {
        id: 5,
        nombre: "Comfortable Pet Bed",
        descripcion: "Cama ortopédica para mascotas. Funda lavable y base antideslizante.",
        precio: 49.99,
        categoria: "perros",
        imagen: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop",
        destacado: true,
        badge: "Popular"
    },
    {
        id: 6,
        nombre: "Parrot Food Mix",
        descripcion: "Mezcla de semillas premium para loros y aves exóticas. Contiene vitaminas.",
        precio: 24.99,
        categoria: "aves",
        imagen: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=300&fit=crop",
        destacado: false,
        badge: null
    },
    {
        id: 7,
        nombre: "Adjustable Dog Leash",
        descripcion: "Correa extensible de hasta 5 metros. Sistema de bloqueo automático.",
        precio: 29.99,
        categoria: "perros",
        imagen: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
        destacado: false,
        badge: null
    },
    {
        id: 8,
        nombre: "Cat Food Premium",
        descripcion: "Alimento húmedo premium para gatos. Sabor chicken en gelatina.",
        precio: 15.99,
        categoria: "gatos",
        imagen: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
        destacado: true,
        badge: "Nuevo"
    },
    {
        id: 9,
        nombre: "Fish Tank Filter",
        descripcion: "Filtro biológico para acuarios hasta 50 galones. Silencioso y eficiente.",
        precio: 59.99,
        categoria: "peces",
        imagen: "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?w=400&h=300&fit=crop",
        destacado: false,
        badge: null
    },
{
        id: 10,
        nombre: "Bird Cage Large",
        descripcion: "Jaula espaciosa para loros. Acero inoxidable con complementos incluidos.",
        precio: 89.99,
        categoria: "aves",
        imagen: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=400&h=300&fit=crop",
        destacado: true,
        badge: "Recomendado"
    },
    {
        id: 11,
        nombre: "Cat Tower",
        descripcion: "Torre de rascado multifuncional con cueva y plataforma. 180cm de altura.",
        precio: 79.99,
        categoria: "gatos",
        imagen: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=300&fit=crop",
        destacado: false,
        badge: null
    },
    {
        id: 12,
        nombre: "Dog Training Kit",
        descripcion: "Kit de entrenamiento profesional. Incluye clicker, premios y guía.",
        precio: 34.99,
        categoria: "perros",
        imagen: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
        destacado: false,
        badge: null
    }
];

// Carrito de compras
let carrito = [];

// ============================================
// Función para renderizar productos
// ============================================
function renderizarProductos(productosAMostrar) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    if (productosAMostrar.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-search display-1 text-muted"></i>
                <h4 class="mt-3 text-muted">No se encontraron productos</h4>
            </div>
        `;
        return;
    }

    productosAMostrar.forEach(producto => {
        const badgeHTML = producto.badge 
            ? `<span class="product-badge">${producto.badge}</span>` 
            : '';

        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-3 fade-in';
        card.innerHTML = `
            <div class="card product-card h-100">
                <div class="product-image-wrapper">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" loading="lazy">
                    ${badgeHTML}
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text flex-grow-1">${producto.descripcion}</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <span class="product-price">$${producto.precio.toFixed(2)}</span>
                        <button class="btn btn-add-cart" onclick="agregarAlCarrito(${producto.id})">
                            <i class="bi bi-cart-plus me-1"></i> Agregar
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// ============================================
// Función para agregar producto al carrito
// ============================================
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const productoEnCarrito = carrito.find(p => p.id === id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    actualizarContadorCarrito();
    actualizarCarritoModal();
    mostrarToast(`"${producto.nombre}" agregado al carrito`, 'success');
}

// ============================================
// Función para eliminar producto del carrito
// ============================================
function eliminarDelCarrito(id) {
    const indice = carrito.findIndex(p => p.id === id);
    if (indice > -1) {
        const producto = carrito[indice];
        if (producto.cantidad > 1) {
            producto.cantidad--;
        } else {
            carrito.splice(indice, 1);
        }
    }
    actualizarContadorCarrito();
    actualizarCarritoModal();
}

// ============================================
// Función para actualizar el contador del navbar
// ============================================
function actualizarContadorCarrito() {
    const total = carrito.reduce((sum, p) => sum + p.cantidad, 0);
    const badge = document.getElementById('cartCount');
    badge.textContent = total;
    badge.style.display = total > 0 ? 'block' : 'none';
}

// ============================================
// Función para actualizar el modal del carrito
// ============================================
function actualizarCarritoModal() {
    const container = document.getElementById('cartItems');
    const subtotal = document.getElementById('cartSubtotal');

    if (carrito.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-cart-x"></i>
                <h5>Tu carrito está vacío</h5>
                <p class="text-muted">Agrega productos para comenzar</p>
            </div>
        `;
        subtotal.textContent = '$0.00';
        return;
    }

    let html = '';
    let total = 0;

    carrito.forEach(producto => {
        const subtotalProducto = producto.precio * producto.cantidad;
        total += subtotalProducto;

        html += `
            <div class="cart-item">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="cart-item-info">
                    <h6>${producto.nombre}</h6>
                    <p>$${producto.precio.toFixed(2)} x ${producto.cantidad}</p>
                    <small class="text-muted">Subtotal: $${subtotalProducto.toFixed(2)}</small>
                </div>
                <div class="cart-item-actions">
                    <button class="btn-remove" onclick="eliminarDelCarrito(${producto.id})" title="Eliminar">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    subtotal.textContent = `$${total.toFixed(2)}`;
}

// ============================================
// Función para vaciar el carrito
// ============================================
function vaciarCarrito() {
    if (carrito.length === 0) {
        mostrarToast('El carrito ya está vacío', 'info');
        return;
    }
    
    const modalCarrito = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    modalCarrito.hide();
    
    setTimeout(() => {
        carrito = [];
        actualizarContadorCarrito();
        actualizarCarritoModal();
        mostrarToast('Carrito vaciado correctamente', 'info');
    }, 300);
}

// ============================================
// Función para finalizar compra
// ============================================
function finalizarCompra() {
    if (carrito.length === 0) {
        mostrarToast('Agrega productos antes de comprar', 'info');
        return;
    }

    const modalCarrito = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    modalCarrito.hide();

    setTimeout(() => {
        const modalCompra = new bootstrap.Modal(document.getElementById('purchaseModal'));
        modalCompra.show();
        
        // Vaciar después de mostrar el mensaje de éxito
        setTimeout(() => {
            carrito = [];
            actualizarContadorCarrito();
            actualizarCarritoModal();
        }, 1000);
    }, 300);
}

// ============================================
// Función para mostrar toast de notificación
// ============================================
function mostrarToast(mensaje, tipo = 'success') {
    let container = document.querySelector('.toast-container');
    
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    
    const iconClass = tipo === 'success' ? 'bi-check-circle-fill' : 'bi-info-circle-fill';
    const bgClass = tipo === 'success' ? 'toast-success' : 'toast-info';
    
    toast.innerHTML = `
        <div class="toast-icon ${bgClass}">
            <i class="bi ${iconClass}"></i>
        </div>
        <div>
            <strong>${tipo === 'success' ? '¡Éxito!' : 'Información'}</strong>
            <p class="mb-0">${mensaje}</p>
        </div>
    `;

    container.appendChild(toast);

    // Eliminar después de 3 segundos
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// Función de búsqueda de productos
// ============================================
function buscarProductos(termino) {
    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(termino.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(termino.toLowerCase()) ||
        producto.categoria.toLowerCase().includes(termino.toLowerCase())
    );
    renderizarProductos(productosFiltrados);
}

// ============================================
// Función de filtrado por categoría
// ============================================
function filtrarPorCategoria(categoria) {
    let productosFiltrados;
    
    if (categoria === 'all') {
        productosFiltrados = productos;
    } else {
        productosFiltrados = productos.filter(p => p.categoria === categoria);
    }
    
    renderizarProductos(productosFiltrados);
}

// ============================================
// Botón volver arriba
// ============================================
function setupBackToTop() {
    const btn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            btn.style.display = 'flex';
        } else {
            btn.style.display = 'none';
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// Validación del formulario de registro
// ============================================
function setupFormValidation() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        const passwordInputs = form.querySelectorAll('input[type="password"]');
        const password = passwordInputs[0].value;
        const confirmPassword = passwordInputs[1].value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        mostrarToast('¡Registro exitoso! Bienvenido a PetShop', 'success');
        
        // Mostrar mensaje de éxito debajo del formulario
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        
        form.reset();
        form.classList.remove('was-validated');
        
        // Ocultar el mensaje después de 4 segundos
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 4000);
    });
}

// ============================================
// Inicialización
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar todos los productos
    renderizarProductos(productos);
    
    // Configurar búsqueda
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        buscarProductos(e.target.value);
    });
    
    // Configurar filtros
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filtrarPorCategoria(btn.dataset.filter);
        });
    });
    
    // Configurar botones del modal
    document.getElementById('clearCartBtn').addEventListener('click', vaciarCarrito);
    document.getElementById('checkoutBtn').addEventListener('click', finalizarCompra);
    
    // Configurar botón volver arriba
    setupBackToTop();
    
    // Configurar validación de formulario
    setupFormValidation();
    
    // Ocultar mensaje de éxito cuando el usuario escribe en el formulario
    const form = document.getElementById('registrationForm');
    form.addEventListener('input', () => {
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'none';
    });
    
    console.log('PetShop inicializado correctamente');
});

// ============================================
// Funciones globales para usar en HTML
// ============================================
window.agregarAlCarrito = agregarAlCarrito;
window.eliminarDelCarrito = eliminarDelCarrito;
window.vaciarCarrito = vaciarCarrito;
window.finalizarCompra = finalizarCompra;