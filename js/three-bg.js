// Three.js animated hero background + section particle systems.
// Lifted verbatim from the original markintheloop.com inline scripts.

function initThreeJS() {
    const container = document.getElementById('threejs-container');
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 2;

    scene.fog = new THREE.Fog(0x000000, 1, 50);

    const ambientLight = new THREE.AmbientLight(0x50EB97, 0.4);
    scene.add(ambientLight);

    const light1 = new THREE.DirectionalLight(0x50EB97, 2.5);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xFD9F5B, 1.5);
    light2.position.set(-5, -5, -5);
    scene.add(light2);

    const geometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    const vertices = geometry.attributes.position;
    for (let i = 0; i < vertices.count; i++) {
        const x = vertices.getX(i);
        const y = vertices.getY(i);
        const wave = Math.sin(x * 0.3) * Math.cos(y * 0.3) * 0.8;
        vertices.setZ(i, wave);
    }
    geometry.computeVertexNormals();

    const material1 = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x50EB97, transparent: true, opacity: 0.9 });
    const material2 = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xFD9F5B, transparent: true, opacity: 0.7 });

    const mesh1 = new THREE.Mesh(geometry.clone(), material1);
    const mesh2 = new THREE.Mesh(geometry.clone(), material2);
    mesh1.rotation.x = -Math.PI / 3;
    mesh2.rotation.x = -Math.PI / 3;
    mesh2.position.y = -0.1;
    scene.add(mesh1);
    scene.add(mesh2);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
        particlePositions[i]     = (Math.random() - 0.5) * 50;
        particlePositions[i + 1] = (Math.random() - 0.5) * 50;
        particlePositions[i + 2] = (Math.random() - 0.5) * 50;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({ color: 0xFD9F5B, size: 0.15, transparent: true, opacity: 0.8 });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += 0.01;

        const vertices1 = mesh1.geometry.attributes.position;
        const vertices2 = mesh2.geometry.attributes.position;
        for (let i = 0; i < vertices1.count; i++) {
            const x = vertices1.getX(i);
            const y = vertices1.getY(i);
            const wave1 = Math.sin(x * 0.3 + time) * Math.cos(y * 0.3 + time) * 0.8;
            const wave2 = Math.sin(x * 0.2 + time * 1.1) * Math.cos(y * 0.4 + time * 0.9) * 0.6;
            vertices1.setZ(i, wave1);
            vertices2.setZ(i, wave2);
        }
        vertices1.needsUpdate = true;
        vertices2.needsUpdate = true;

        mesh1.rotation.z += 0.002;
        mesh2.rotation.z -= 0.001;
        particles.rotation.y += 0.001;

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function generateParticles() {
    const container = document.querySelector('.floating-particles');
    if (!container) return;
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        container.appendChild(particle);
    }
}

function createParticleSystem(containerId, color) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 1, 3000);
    camera.position.z = 1000;

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const particleCount = 500;
    for (let i = 0; i < particleCount; i++) {
        vertices.push(
            Math.random() * 2000 - 1000,
            Math.random() * 2000 - 1000,
            Math.random() * 2000 - 1000
        );
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({ color: color, size: 2, transparent: true, opacity: 0.7 });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    function animate() {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.001;
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    });
}
