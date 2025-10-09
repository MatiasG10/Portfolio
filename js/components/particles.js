// Partículas de fondo

document.addEventListener('DOMContentLoaded', function () {
    const particlesContainer = document.getElementById('particles-container');
    const particleCount = 80;

    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Tamaño aleatorio
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Posición aleatoria
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;

        // Opacidad aleatoria
        particle.style.opacity = Math.random() * 0.5 + 0.2;

        // Color usando tu variable --Main-color
        particle.style.background = '#FFB800';

        particlesContainer.appendChild(particle);

        // Animación de movimiento
        animateParticle(particle);
    }

    // Función para animar partículas
    function animateParticle(particle) {
        let x = parseFloat(particle.style.left);
        let y = parseFloat(particle.style.top);
        let xSpeed = (Math.random() - 0.5) * 0.5;
        let ySpeed = (Math.random() - 0.5) * 0.5;

        function move() {
            x += xSpeed;
            y += ySpeed;

            // Rebotar en los bordes
            if (x <= 0 || x >= 100) xSpeed *= -1;
            if (y <= 0 || y >= 100) ySpeed *= -1;

            particle.style.left = `${x}vw`;
            particle.style.top = `${y}vh`;

            requestAnimationFrame(move);
        }

        move();
    }

    // Efecto de conexión entre partículas
    const canvas = document.createElement('canvas');
    particlesContainer.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function drawConnections() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const particles = document.querySelectorAll('.particle');
        const maxDistance = 150;

        particles.forEach(p1 => {
            const rect1 = p1.getBoundingClientRect();
            const x1 = rect1.left + rect1.width / 2;
            const y1 = rect1.top + rect1.height / 2;

            particles.forEach(p2 => {
                if (p1 === p2) return;

                const rect2 = p2.getBoundingClientRect();
                const x2 = rect2.left + rect2.width / 2;
                const y2 = rect2.top + rect2.height / 2;

                const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

                if (distance < maxDistance) {
                    const opacity = 1 - (distance / maxDistance);
                    ctx.strokeStyle = `rgba(255, 184, 0, ${opacity * 0.3})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(drawConnections);
    }

    drawConnections();

    // Efecto de interacción con el ratón
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Efecto de repulsión en partículas cercanas al ratón
        const particles = document.querySelectorAll('.particle');
        const repulsionRadius = 100;

        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);

            if (distance < repulsionRadius) {
                const force = (repulsionRadius - distance) / repulsionRadius;
                const angle = Math.atan2(y - mouseY, x - mouseX);

                const moveX = Math.cos(angle) * force * 5;
                const moveY = Math.sin(angle) * force * 5;

                particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
            } else {
                particle.style.transform = 'translate(0, 0)';
            }
        });
    });
});