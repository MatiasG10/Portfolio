document.addEventListener('DOMContentLoaded', function () {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) {
        console.error("Error: '#particles-container' no encontrado.");
        return;
    }

    const config = {
        particleCount: 80, // Reducido para mejor rendimiento
        connectionDistance: 150, // Distancia máxima para conexiones
        particleSize: { min: 5, max: 10 }, // Tamaño mínimo y máximo
        colors: {
            particle: '#FF6B00', // Color principal de las partículas
            connectionBase: '255, 107, 0', // Color base para conexiones (RGB)
            glowBase: '255, 200, 50', // Color del efecto glow/brillo
            connectionMaxOpacity: 1, // Transparencia máxima de conexiones
            glowMaxOpacity: 0.2  // Transparencia del efecto glow
        },
        maxParticleSpeed: 0.3,  // Velocidad máxima de movimiento
        mouse: {
            interactionRadius: 200,
            repulsionStrength: 1.2,
            attractionStrength: 0.8
        },
        performance: {
            spatialGridSize: 150, // Para optimización
            frameSkip: 1 // Saltar frames para móviles
        }
    };

    // INICIALIZACIÓN
    particlesContainer.innerHTML = '';
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    particlesContainer.appendChild(canvas);

    // ESTADO
    let particles = [];
    const mouse = { x: null, y: null, isActive: false, isPressed: false };
    let frameCount = 0;
    let spatialGrid = new Map();

    // GRADIENTES Y EFECTOS VISUALES
    function createGradients() {
        const particleGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, config.particleSize.max * 2);
        particleGradient.addColorStop(0, '#FFE066'); // Centro brillante
        particleGradient.addColorStop(0.7, config.colors.particle); // Borde exterior
        particleGradient.addColorStop(1, 'transparent');  // Transparente afuera
        
        return { particleGradient };
    }

    const gradients = createGradients();

    function setupCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createParticles();
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * (config.particleSize.max - config.particleSize.min) + config.particleSize.min,
                speedX: (Math.random() - 0.5) * 2 * config.maxParticleSpeed,
                speedY: (Math.random() - 0.5) * 2 * config.maxParticleSpeed,
                originalSize: 0,
                pulsePhase: Math.random() * Math.PI * 2
            });
        }
        // Inicializar tamaños originales después de crear las partículas
        particles.forEach(p => p.originalSize = p.size);
    }

    // SISTEMA DE CUADRÍCULAS PARA OPTIMIZACIÓN
    function updateSpatialGrid() {
        spatialGrid.clear();
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            const gridX = Math.floor(p.x / config.performance.spatialGridSize);
            const gridY = Math.floor(p.y / config.performance.spatialGridSize);
            const key = `${gridX},${gridY}`;
            
            if (!spatialGrid.has(key)) {
                spatialGrid.set(key, []);
            }
            spatialGrid.get(key).push(i);
        }
    }

    function getNearbyParticles(particleIndex) {
        const p = particles[particleIndex];
        const gridX = Math.floor(p.x / config.performance.spatialGridSize);
        const gridY = Math.floor(p.y / config.performance.spatialGridSize);
        const nearby = [];
        
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                const key = `${gridX + x},${gridY + y}`;
                if (spatialGrid.has(key)) {
                    nearby.push(...spatialGrid.get(key));
                }
            }
        }
        return nearby.filter(idx => idx > particleIndex);
    }

    function updateParticles() {
        for (const p of particles) {
            // Movimiento suave con easing
            p.x += p.speedX;
            p.y += p.speedY;

            // Efecto de pulso sutil
            p.pulsePhase += 0.02;
            p.size = p.originalSize * (1 + 0.1 * Math.sin(p.pulsePhase));

            // Rebote suave en los bordes
            if (p.x > canvas.width - p.size) {
                p.x = canvas.width - p.size;
                p.speedX *= -0.8;
            } else if (p.x < p.size) {
                p.x = p.size;
                p.speedX *= -0.8;
            }
            
            if (p.y > canvas.height - p.size) {
                p.y = canvas.height - p.size;
                p.speedY *= -0.8;
            } else if (p.y < p.size) {
                p.y = p.size;
                p.speedY *= -0.8;
            }
        }
    }

    function drawConnections() {
        updateSpatialGrid();
        const connectionDistanceSq = config.connectionDistance * config.connectionDistance;
        
        for (let i = 0; i < particles.length; i++) {
            const nearby = getNearbyParticles(i);
            
            for (const j of nearby) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distanceSq = dx * dx + dy * dy;

                if (distanceSq < connectionDistanceSq) {
                    const distance = Math.sqrt(distanceSq);
                    const opacity = (1 - (distance / config.connectionDistance)) * config.colors.connectionMaxOpacity;
                    
                    // Línea con gradiente
                    const gradient = ctx.createLinearGradient(
                        particles[i].x, particles[i].y,
                        particles[j].x, particles[j].y
                    );
                    gradient.addColorStop(0, `rgba(${config.colors.glowBase}, ${opacity})`);
                    gradient.addColorStop(1, `rgba(${config.colors.connectionBase}, ${opacity})`);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 1.2 * (1 - distance / config.connectionDistance);
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();

                    // Efecto de glow en las conexiones
                    if (distance < connectionDistanceSq * 0.3) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 200, ${opacity * 0.3})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }
    }

    function drawParticles() {
        for (const p of particles) {
            // Sombra suave
            ctx.shadowColor = `rgba(${config.colors.glowBase}, 0.6)`;
            ctx.shadowBlur = p.size * 3;
            
            // Partícula con gradiente
            ctx.fillStyle = gradients.particleGradient;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Reset shadow
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;

            // Núcleo brillante
            ctx.fillStyle = '#FFE066';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function applyMouseInteractions() {
        if (!mouse.isActive || mouse.x === null) return;

        const interactionRadiusSq = config.mouse.interactionRadius * config.mouse.interactionRadius;
        
        for (const p of particles) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distanceSq = dx * dx + dy * dy;

            if (distanceSq < interactionRadiusSq) {
                const distance = Math.sqrt(distanceSq);
                const force = (config.mouse.interactionRadius - distance) / config.mouse.interactionRadius;
                const angle = Math.atan2(dy, dx);
                
                let strength = mouse.isPressed ? config.mouse.attractionStrength : config.mouse.repulsionStrength;
                
                const accelerationX = Math.cos(angle) * force * strength;
                const accelerationY = Math.sin(angle) * force * strength;
                
                p.x += accelerationX;
                p.y += accelerationY;
                
                // Efecto visual al interactuar
                p.size = p.originalSize * (1 + force * 0.5);
            }
        }
    }

    // EVENTOS MEJORADOS
    function handleMouseMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.isActive = true;
    }

    function handleMouseLeave() {
        mouse.isActive = false;
    }

    function handleMouseDown() {
        mouse.isPressed = true;
    }

    function handleMouseUp() {
        mouse.isPressed = false;
    }

    // REGISTRO DE EVENTOS
    window.addEventListener('resize', setupCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // ANIMACIÓN OPTIMIZADA
    function animate() {
        frameCount++;
        
        if (frameCount % config.performance.frameSkip === 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Fondo sutil con gradiente
            const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            bgGradient.addColorStop(0, 'rgba(10, 10, 20, 0.1)'); // Color inicio fondo
            bgGradient.addColorStop(1, 'rgba(20, 15, 30, 0.1)'); // Color final fondo
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            updateParticles();
            applyMouseInteractions();
            drawConnections();
            drawParticles();
        }
        
        requestAnimationFrame(animate);
    }

    // INICIALIZACIÓN
    setupCanvas();
    animate();
    
    console.log('✨ Sistema de partículas optimizado y estético cargado');
});