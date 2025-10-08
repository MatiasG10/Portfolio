/**
 * infinite-loop.js
 * Módulo para gestionar loops infinitos de herramientas/tecnologías
 * Autor: Pablo Matías Ganne Moreno
 * Fecha: 2025
 */

class InfiniteLoop {
    /**
     * Constructor del loop infinito
     * @param {Object} options - Configuración del loop
     * @param {string} options.trackId - ID del elemento track
     * @param {boolean} options.enableParallax - Habilitar efecto parallax con mouse
     * @param {number} options.parallaxSpeed - Velocidad del parallax
     */
    constructor(options = {}) {
        this.options = {
            enableParallax: true,
            parallaxSpeed: 20,
            ...options
        };
        
        this.tracks = [];
        this.mouseX = 0;
        this.isInitialized = false;
    }

    /**
     * Inicializar el loop infinito
     */
    init() {
        if (this.isInitialized) {
            console.warn('InfiniteLoop ya está inicializado');
            return;
        }

        // Buscar todos los tracks automáticamente
        this.findAndInitializeTracks();

        // Configurar parallax si está habilitado
        if (this.options.enableParallax) {
            this.setupParallax();
        }

        this.isInitialized = true;
        console.log('✅ InfiniteLoop inicializado correctamente');
    }

    /**
     * Buscar y inicializar todos los tracks en el DOM
     */
    findAndInitializeTracks() {
        const trackElements = document.querySelectorAll('.loop-track');
        
        if (trackElements.length === 0) {
            console.warn('No se encontraron elementos con clase .loop-track');
            return;
        }

        trackElements.forEach((track, index) => {
            // Si no tiene ID, asignar uno automáticamente
            if (!track.id) {
                track.id = `loop-track-${index + 1}`;
            }

            this.createLoop(track.id);
            this.tracks.push(track);
        });

        console.log(`📦 ${trackElements.length} tracks inicializados`);
    }

    /**
     * Crear loop infinito duplicando elementos
     * @param {string} trackId - ID del track
     */
    createLoop(trackId) {
        const track = document.getElementById(trackId);
        
        if (!track) {
            console.error(`❌ No se encontró el elemento con ID: ${trackId}`);
            return;
        }

        // Obtener items originales
        const items = Array.from(track.children);
        
        if (items.length === 0) {
            console.warn(`⚠️ El track ${trackId} no tiene items`);
            return;
        }

        // Duplicar items para loop infinito
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });

        console.log(`✨ Loop creado para ${trackId} (${items.length} items duplicados)`);
    }

    /**
     * Configurar efecto parallax con el mouse
     */
    setupParallax() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX / window.innerWidth;
            this.updateParallax();
        });

        console.log('🖱️ Parallax habilitado');
    }

    /**
     * Actualizar posición del parallax
     */
    updateParallax() {
        this.tracks.forEach((track, index) => {
            const speed = (index + 1) * this.options.parallaxSpeed;
            const offset = (this.mouseX - 0.5) * speed;
            
            // Mantener la animación base y agregar el offset del parallax
            track.style.transform = `translateX(calc(-50% + ${offset}px))`;
        });
    }

    /**
     * Agregar un nuevo item a un track específico
     * @param {string} trackId - ID del track
     * @param {Object} itemData - Datos del item {img, label}
     */
    addItem(trackId, itemData) {
        const track = document.getElementById(trackId);
        
        if (!track) {
            console.error(`❌ No se encontró el track: ${trackId}`);
            return;
        }

        const newItem = this.createToolItem(itemData);
        
        // Agregar el item y su duplicado
        track.appendChild(newItem);
        track.appendChild(newItem.cloneNode(true));

        console.log(`➕ Item agregado a ${trackId}`);
    }

    /**
     * Crear elemento HTML para un tool item
     * @param {Object} data - {img, label}
     * @returns {HTMLElement}
     */
    createToolItem(data) {
        const item = document.createElement('div');
        item.className = 'tool-item';

        const img = document.createElement('img');
        img.src = data.img;
        img.alt = data.label;

        const span = document.createElement('span');
        span.textContent = data.label;

        item.appendChild(img);
        item.appendChild(span);

        return item;
    }

    /**
     * Pausar todos los loops
     */
    pauseAll() {
        this.tracks.forEach(track => {
            track.style.animationPlayState = 'paused';
        });
    }

    /**
     * Reanudar todos los loops
     */
    resumeAll() {
        this.tracks.forEach(track => {
            track.style.animationPlayState = 'running';
        });
    }

    /**
     * Destruir la instancia y limpiar eventos
     */
    destroy() {
        if (this.options.enableParallax) {
            document.removeEventListener('mousemove', this.updateParallax);
        }

        this.tracks = [];
        this.isInitialized = false;

        console.log('🗑️ InfiniteLoop destruido');
    }
}

// ============================================
// INICIALIZACIÓN AUTOMÁTICA
// ============================================

/**
 * Función de inicialización simple (legacy)
 * Mantiene compatibilidad con el código existente
 */
function createInfiniteLoop(trackId) {
    const track = document.getElementById(trackId);
    if (!track) return;

    const items = Array.from(track.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
}

// ============================================
// EXPORTAR (si usas módulos ES6)
// ============================================

// export default InfiniteLoop;
// export { createInfiniteLoop };

// ============================================
// AUTO-INICIALIZACIÓN AL CARGAR EL DOM
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Opción 1: Usar la clase (recomendado)
    const infiniteLoop = new InfiniteLoop({
        enableParallax: true,
        parallaxSpeed: 20
    });
    infiniteLoop.init();

    // Guardar instancia global para debugging
    window.infiniteLoop = infiniteLoop;
});

/**
 * EJEMPLOS DE USO:
 * 
 * // Básico - Auto-inicialización
 * <script src="js/infinite-loop.js"></script>
 * 
 * // Personalizado
 * const loop = new InfiniteLoop({
 *     enableParallax: true,
 *     parallaxSpeed: 30
 * });
 * loop.init();
 * 
 * // Agregar items dinámicamente
 * loop.addItem('loop-track', {
 *     img: 'https://img.icons8.com/color/96/react-native.png',
 *     label: 'React'
 * });
 * 
 * // Pausar/Reanudar
 * loop.pauseAll();
 * loop.resumeAll();
 * 
 * // Desde consola del navegador
 * window.infiniteLoop.pauseAll();
 */