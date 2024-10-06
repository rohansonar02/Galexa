const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a light source
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Adjust the intensity
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 0, 10).normalize();
scene.add(directionalLight);

// Create a starry background
const starsGeometry = new THREE.BufferGeometry();
const starsCount = 5000;
const positionArray = new Float32Array(starsCount * 3);

for (let i = 0; i < starsCount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 1000; // Random positions
}

starsGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

// Exoplanets data
const exoplanets = [
    { name: "Kepler-186f", mass: 0.56, radius: 1.11, color:'textures/texture1.jpg' },
    { name: "Proxima Centauri b", mass: 1.27, radius: 1.07, color: 'textures/texture1.jpg'},
    { name: "TRAPPIST-1e", mass: 0.6, radius: 1.03, color:'textures/texture1.jpg' },
    { name: "LHS 1140 b", mass: 6.64, radius: 1.4, color:'textures/texture1.jpg' },
    { name: "TOI 700 d", mass: 1.1, radius: 1.12, color:'textures/texture1.jpg' },
    { name: "HD 40307 g", mass: 7.1, radius: 1.6, color: 'textures/texture1.jpg'},
    { name: "K2-72e", mass: 0.54, radius: 1.3, color:'textures/texture1.jpg' },
    { name: "Gliese 581g", mass: 3.1, radius: 1.3, color: 'textures/texture1.jpg'},
    { name: "Kepler-442b", mass: 2.4, radius: 1.34, color: 'textures/texture1.jpg'},
    { name: "55 Cancri e", mass: 8.08, radius: 1.88, color:'textures/texture1.jpg' },
    { name: "WASP-19b", mass: 1.1, radius: 1.36, color:'textures/texture1.jpg' },
    { name: "K2-99b", mass: 0.76, radius: 1.08, color:'textures/texture1.jpg' },
    { name: "WASP-30b", mass: 1.12, radius: 1.03, color:'textures/texture1.jpg' },
    { name: "WASP-31b", mass: 0.93, radius: 1.11, color:'textures/texture1.jpg' },
    { name: "Kepler-69c", mass: 0.8, radius: 1.7, color:'textures/texture1.jpg' },
    { name: "WASP-85b", mass: 0.8, radius: 1.18, color:'textures/texture1.jpg' },
    { name: "WASP-78b", mass: 1.3, radius: 1.2, color:'textures/texture1.jpg' },
    { name: "WASP-39b", mass: 0.9, radius: 1.2, color: 'textures/texture1.jpg'},
    { name: "HAT-P-32b", mass: 0.67, radius: 1.59, color:'textures/texture1.jpg' },
    { name: "WASP-42b", mass: 1.2, radius: 1.14, color:'textures/texture1.jpg' },
    { name: "Kepler-186f", mass: 0.56, radius: 1.11, color:'textures/texture1.jpg' },
    { name: "Proxima Centauri b", mass: 1.27, radius: 1.07, color: 'textures/texture1.jpg'},
    { name: "TRAPPIST-1e", mass: 0.6, radius: 1.03, color:'textures/texture1.jpg' },
    { name: "LHS 1140 b", mass: 6.64, radius: 1.4, color:'textures/texture1.jpg' },
    { name: "TOI 700 d", mass: 1.1, radius: 1.12, color:'textures/texture1.jpg' },
    { name: "HD 40307 g", mass: 7.1, radius: 1.6, color: 'textures/texture1.jpg'},
    { name: "K2-72e", mass: 0.54, radius: 1.3, color:'textures/texture1.jpg' },
    { name: "Gliese 581g", mass: 3.1, radius: 1.3, color: 'textures/texture1.jpg'},
    { name: "Kepler-442b", mass: 2.4, radius: 1.34, color: 'textures/texture1.jpg'},
    { name: "55 Cancri e", mass: 8.08, radius: 1.88, color:'textures/texture1.jpg' },
    { name: "WASP-19b", mass: 1.1, radius: 1.36, color:'textures/texture1.jpg' },
    { name: "K2-99b", mass: 0.76, radius: 1.08, color:'textures/texture1.jpg' },
    { name: "WASP-30b", mass: 1.12, radius: 1.03, color:'textures/texture1.jpg' },
    { name: "WASP-31b", mass: 0.93, radius: 1.11, color:'textures/texture1.jpg' },
    { name: "Kepler-69c", mass: 0.8, radius: 1.7, color:'textures/texture1.jpg' },
    { name: "WASP-85b", mass: 0.8, radius: 1.18, color:'textures/texture1.jpg' },
    { name: "WASP-78b", mass: 1.3, radius: 1.2, color:'textures/texture1.jpg' },
    { name: "WASP-39b", mass: 0.9, radius: 1.2, color: 'textures/texture1.jpg'},
    { name: "HAT-P-32b", mass: 0.67, radius: 1.59, color:'textures/texture1.jpg' },
    { name: "WASP-42b", mass: 1.2, radius: 1.14, color:'textures/texture1.jpg' },
    { name: "Kepler-186f", mass: 0.56, radius: 1.11, color:'textures/texture1.jpg' },
    { name: "Proxima Centauri b", mass: 1.27, radius: 1.07, color: 'textures/texture1.jpg'},
    { name: "TRAPPIST-1e", mass: 0.6, radius: 1.03, color:'textures/texture1.jpg' },
    { name: "LHS 1140 b", mass: 6.64, radius: 1.4, color:'textures/texture1.jpg' },
    { name: "TOI 700 d", mass: 1.1, radius: 1.12, color:'textures/texture1.jpg' },
    { name: "HD 40307 g", mass: 7.1, radius: 1.6, color: 'textures/texture1.jpg'},
    { name: "K2-72e", mass: 0.54, radius: 1.3, color:'textures/texture1.jpg' },
    { name: "Gliese 581g", mass: 3.1, radius: 1.3, color: 'textures/texture1.jpg'},
    { name: "Kepler-442b", mass: 2.4, radius: 1.34, color: 'textures/texture1.jpg'},
    { name: "55 Cancri e", mass: 8.08, radius: 1.88, color:'textures/texture1.jpg' },
    { name: "WASP-19b", mass: 1.1, radius: 1.36, color:'textures/texture1.jpg' },
    { name: "K2-99b", mass: 0.76, radius: 1.08, color:'textures/texture1.jpg' },
    { name: "WASP-30b", mass: 1.12, radius: 1.03, color:'textures/texture1.jpg' },
    { name: "WASP-31b", mass: 0.93, radius: 1.11, color:'textures/texture1.jpg' },
    { name: "Kepler-69c", mass: 0.8, radius: 1.7, color:'textures/texture1.jpg' },
    { name: "WASP-85b", mass: 0.8, radius: 1.18, color:'textures/texture1.jpg' },
    { name: "WASP-78b", mass: 1.3, radius: 1.2, color:'textures/texture1.jpg' },
    { name: "WASP-39b", mass: 0.9, radius: 1.2, color: 'textures/texture1.jpg'},
    { name: "HAT-P-32b", mass: 0.67, radius: 1.59, color:'textures/texture1.jpg' },
    { name: "WASP-42b", mass: 1.2, radius: 1.14, color:'textures/texture1.jpg' },
        { name: "Kepler-186f", mass: 0.56, radius: 1.11, color:'textures/texture1.jpg' },
    { name: "Proxima Centauri b", mass: 1.27, radius: 1.07, color: 'textures/texture1.jpg'},
    { name: "TRAPPIST-1e", mass: 0.6, radius: 1.03, color:'textures/texture1.jpg' },
    { name: "LHS 1140 b", mass: 6.64, radius: 1.4, color:'textures/texture1.jpg' },
    { name: "TOI 700 d", mass: 1.1, radius: 1.12, color:'textures/texture1.jpg' },
    { name: "HD 40307 g", mass: 7.1, radius: 1.6, color: 'textures/texture1.jpg'},
    { name: "K2-72e", mass: 0.54, radius: 1.3, color:'textures/texture1.jpg' },
    { name: "Gliese 581g", mass: 3.1, radius: 1.3, color: 'textures/texture1.jpg'},
    { name: "Kepler-442b", mass: 2.4, radius: 1.34, color: 'textures/texture1.jpg'},
    { name: "55 Cancri e", mass: 8.08, radius: 1.88, color:'textures/texture1.jpg' },
    { name: "WASP-19b", mass: 1.1, radius: 1.36, color:'textures/texture1.jpg' },
    { name: "K2-99b", mass: 0.76, radius: 1.08, color:'textures/texture1.jpg' },
    { name: "WASP-30b", mass: 1.12, radius: 1.03, color:'textures/texture1.jpg' },
    { name: "WASP-31b", mass: 0.93, radius: 1.11, color:'textures/texture1.jpg' },
    { name: "Kepler-69c", mass: 0.8, radius: 1.7, color:'textures/texture1.jpg' },
    { name: "WASP-85b", mass: 0.8, radius: 1.18, color:'textures/texture1.jpg' },
    { name: "WASP-78b", mass: 1.3, radius: 1.2, color:'textures/texture1.jpg' },
    { name: "WASP-39b", mass: 0.9, radius: 1.2, color: 'textures/texture1.jpg'},
    { name: "HAT-P-32b", mass: 0.67, radius: 1.59, color:'textures/texture1.jpg' },
    { name: "WASP-42b", mass: 1.2, radius: 1.14, color:'textures/texture1.jpg' },
    { name: "HAT-P-30b", mass: 1.08, radius: 1.17, color: 0x0033ff },
    { name: "HAT-P-11b", mass: 0.08, radius: 1.5, color: 0xcc00cc },
    { name: "WASP-83b", mass: 2.4, radius: 1.5, color: 0x66ccff },
    { name: "WASP-47b", mass: 0.73, radius: 1.08, color: 0x00cc33 },
    { name: "WASP-35b", mass: 1.1, radius: 1.01, color: 0x33cc00 },
    { name: "K2-141b", mass: 0.36, radius: 1.3, color: 0xffcc66 },
    { name: "WASP-85b", mass: 0.8, radius: 1.25, color: 0x6600cc },
    { name: "WASP-94b", mass: 0.91, radius: 1.14, color: 0xccff33 },
    { name: "HD 131399 Ab", mass: 4.0, radius: 1.9, color: 0x6600ff },
    { name: "HD 20782 b", mass: 1.3, radius: 1.15, color: 0xffcc33 },
    { name: "WASP-120b", mass: 1.4, radius: 1.45, color: 0xff6600 },
    { name: "WASP-80b", mass: 0.9, radius: 1.03, color: 0x99ff66 },
    { name: "WASP-66b", mass: 1.0, radius: 1.13, color: 0x33cc66 },
    { name: "K2-142b", mass: 0.67, radius: 1.05, color: 0x00ccff },
    { name: "WASP-101b", mass: 0.74, radius: 1.3, color: 0x0066cc },
    { name: "WASP-104b", mass: 0.88, radius: 1.2, color: 0xffcc00 },
    { name: "WASP-110b", mass: 0.96, radius: 1.14, color: 0xcc00ff },
    { name: "WASP-13b", mass: 1.1, radius: 1.2, color: 0x66ccff },
    { name: "WASP-85b", mass: 0.8, radius: 1.18, color: 0xffcc00 },
    { name: "WASP-78b", mass: 1.3, radius: 1.2, color: 0x6600cc },
    { name: "WASP-39b", mass: 0.9, radius: 1.2, color: 0xff6600 },
    { name: "HAT-P-32b", mass: 0.67, radius: 1.59, color: 0xff00cc },
    { name: "WASP-42b", mass: 1.2, radius: 1.14, color: 0x00ccff },
    { name: "HAT-P-30b", mass: 1.08, radius: 1.17, color: 0x0033ff },
    { name: "HAT-P-11b", mass: 0.08, radius: 1.5, color: 0xcc00cc },
    { name: "WASP-83b", mass: 2.4, radius: 1.5, color: 0x66ccff },
    { name: "WASP-47b", mass: 0.73, radius: 1.08, color: 0x00cc33 },
    { name: "WASP-35b", mass: 1.1, radius: 1.01, color: 0x33cc00 },
    { name: "K2-141b", mass: 0.36, radius: 1.3, color: 0xffcc66 },
    { name: "WASP-85b", mass: 0.8, radius: 1.25, color: 0x6600cc },
    { name: "WASP-94b", mass: 0.91, radius: 1.14, color: 0xccff33 },
    { name: "HD 131399 Ab", mass: 4.0, radius: 1.9, color: 0x6600ff },
    { name: "HD 20782 b", mass: 1.3, radius: 1.15, color: 0xffcc33 },
    { name: "WASP-120b", mass: 1.4, radius: 1.45, color: 0xff6600 },
    { name: "WASP-80b", mass: 0.9, radius: 1.03, color: 0x99ff66 },
    { name: "WASP-66b", mass: 1.0, radius: 1.13, color: 0x33cc66 },
    { name: "K2-142b", mass: 0.67, radius: 1.05, color: 0x00ccff },
    { name: "WASP-101b", mass: 0.74, radius: 1.3, color: 0x0066cc },
    { name: "WASP-104b", mass: 0.88, radius: 1.2, color: 0xffcc00 },
    { name: "WASP-110b", mass: 0.96, radius: 1.14, color: 0xcc00ff },
    { name: "WASP-13b", mass: 1.1, radius: 1.2, color: 0x66ccff },
    { name: "K2-138b", mass: 0.91, radius: 1.05, color: 0x0033cc },
    { name: "WASP-138b", mass: 1.1, radius: 1.18, color: 0x00ff33 },
    { name: "K2-89b", mass: 1.2, radius: 1.07, color: 0xff9900 },
    { name: "WASP-102b", mass: 1.5, radius: 1.5, color: 0x66cc00 },
    { name: "WASP-108b", mass: 0.74, radius: 1.18, color: 0xff00cc },
    { name: "WASP-107b", mass: 0.7, radius: 1.3, color: 0xffcc00 },
    { name: "K2-61b", mass: 1.1, radius: 1.09, color: 0x3399cc },
    { name: "WASP-119b", mass: 0.84, radius: 1.24, color: 0x00cc99 },
    { name: "K2-120b", mass: 0.76, radius: 1.14, color: 0xffccff },
    { name: "K2-102b", mass: 1.2, radius: 1.05, color: 0x33ffcc },
    { name: "WASP-122b", mass: 1.0, radius: 1.05, color: 0xff9900 },
    { name: "WASP-139b", mass: 1.0, radius: 1.12, color: 0x00cc00 },
    { name: "K2-122b", mass: 0.89, radius: 1.18, color: 0x99cc33 },
    { name: "WASP-145b", mass: 1.07, radius: 1.25, color: 0x00ccff },
    { name: "WASP-128b", mass: 0.93, radius: 1.03, color: 0xffcc00 },
    { name: "K2-72b", mass: 1.3, radius: 1.06, color: 0x3399cc },
    { name: "K2-123b", mass: 0.79, radius: 1.02, color: 0x99cc00 },
    { name: "WASP-133b", mass: 1.1, radius: 1.09, color: 0xff6600 },
    { name: "K2-141c", mass: 0.87, radius: 1.11, color: 0x33ffcc },
    { name: "K2-138c", mass: 1.2, radius: 1.15, color: 0x00ff99 },
    { name: "K2-140b", mass: 0.89, radius: 1.16, color: 0x99ff33 },
    { name: "WASP-144b", mass: 1.1, radius: 1.12, color: 0xff00cc },
    { name: "K2-139b", mass: 0.99, radius: 1.04, color: 0x33cc33 },
    { name: "WASP-132b", mass: 1.04, radius: 1.18, color: 0x33ff66 },
    { name: "K2-126b", mass: 1.1, radius: 1.15, color: 0x00ccff },
    { name: "K2-100b", mass: 1.5, radius: 1.08, color: 0xffcc33 },
    { name: "WASP-123b", mass: 0.8, radius: 1.01, color: 0x3300ff },
    { name: "WASP-146b", mass: 1.08, radius: 1.14, color: 0x6600cc },
    { name: "Kepler-186f", mass: 0.56, radius: 1.11, color: 0xffcc00 },
    { name: "Proxima Centauri b", mass: 1.27, radius: 1.07, color: 0x00ffcc },
    { name: "TRAPPIST-1e", mass: 0.6, radius: 1.03, color: 0xff00cc },
    { name: "LHS 1140 b", mass: 6.64, radius: 1.4, color: 0xcc00ff },
    { name: "TOI 700 d", mass: 1.1, radius: 1.12, color: 0xffccff },
    { name: "HD 40307 g", mass: 7.1, radius: 1.6, color: 0xffcc00 },
    { name: "K2-72e", mass: 0.54, radius: 1.3, color: 0x00ccff },
    { name: "Gliese 581g", mass: 3.1, radius: 1.3, color: 0xff6600 },
    { name: "Kepler-442b", mass: 2.4, radius: 1.34, color: 0x00cc00 },
    { name: "55 Cancri e", mass: 8.08, radius: 1.88, color: 0xcccc00 },
    { name: "HD 97658 b", mass: 1.6, radius: 1.24, color: 0xff3300 },
    { name: "K2-18 b", mass: 2.6, radius: 1.18, color: 0x99ff33 },
    { name: "Kepler-22b", mass: 2.4, radius: 2.4, color: 0xff6633 },
    { name: "WASP-17b", mass: 0.5, radius: 1.89, color: 0x66ccff },
    { name: "WASP-121b", mass: 1.2, radius: 1.77, color: 0xffcc33 },
    { name: "WASP-43b", mass: 2.0, radius: 1.26, color: 0x99cc00 },
    { name: "HD 209458 b", mass: 0.69, radius: 1.35, color: 0x0033cc },
    { name: "WASP-19b", mass: 1.1, radius: 1.36, color: 0x9900cc },
    { name: "K2-99b", mass: 0.76, radius: 1.08, color: 0xff00cc },
    { name: "WASP-30b", mass: 1.12, radius: 1.03, color: 0xccccff },
    { name: "WASP-31b", mass: 0.93, radius: 1.11, color: 0x3366ff },
    { name: "Kepler-69c", mass: 0.8, radius: 1.7, color: 0x33cc33 },
    { name: "WASP-85b", mass: 0.8, radius: 1.18, color: 0xffcc00 },
    { name: "WASP-78b", mass: 1.3, radius: 1.2, color: 0x6600cc },
    { name: "WASP-39b", mass: 0.9, radius: 1.2, color: 0xff6600 },
    { name: "HAT-P-32b", mass: 0.67, radius: 1.59, color: 0xff00cc },
    { name: "WASP-42b", mass: 1.2, radius: 1.14, color: 0x00ccff },
    { name: "HAT-P-30b", mass: 1.08, radius: 1.17, color: 0x0033ff },
    { name: "HAT-P-11b", mass: 0.08, radius: 1.5, color: 0xcc00cc },
    { name: "WASP-83b", mass: 2.4, radius: 1.5, color: 0x66ccff },
    { name: "WASP-47b", mass: 0.73, radius: 1.08, color: 0x00cc33 },
    { name: "WASP-35b", mass: 1.1, radius: 1.01, color: 0x33cc00 },
    { name: "K2-141b", mass: 0.36, radius: 1.3, color: 0xffcc66 },
    { name: "WASP-85b", mass: 0.8, radius: 1.25, color: 0x6600cc },
    { name: "WASP-94b", mass: 0.91, radius: 1.14, color: 0xccff33 },
    { name: "HD 131399 Ab", mass: 4.0, radius: 1.9, color: 0x6600ff },
    { name: "HD 20782 b", mass: 1.3, radius: 1.15, color: 0xffcc33 },
    { name: "WASP-120b", mass: 1.4, radius: 1.45, color: 0xff6600 },
    { name: "WASP-80b", mass: 0.9, radius: 1.03, color: 0x99ff66 },
    { name: "WASP-66b", mass: 1.0, radius: 1.13, color: 0x33cc66 },
    { name: "K2-142b", mass: 0.67, radius: 1.05, color: 0x00ccff },
    { name: "WASP-101b", mass: 0.74, radius: 1.3, color: 0x0066cc },
    { name: "WASP-104b", mass: 0.88, radius: 1.2, color: 0xffcc00 },
    { name: "WASP-110b", mass: 0.96, radius: 1.14, color: 0xcc00ff },
    { name: "WASP-13b", mass: 1.1, radius: 1.2, color: 0x66ccff },
    { name: "K2-138b", mass: 0.91, radius: 1.05, color: 0x0033cc },
    { name: "WASP-138b", mass: 1.1, radius: 1.18, color: 0x00ff33 },
    { name: "K2-89b", mass: 1.2, radius: 1.07, color: 0xff9900 },
    { name: "WASP-102b", mass: 1.5, radius: 1.5, color: 0x66cc00 },
    { name: "WASP-108b", mass: 0.74, radius: 1.18, color: 0xff00cc },
    { name: "WASP-107b", mass: 0.7, radius: 1.3, color: 0xffcc00 },
    { name: "K2-61b", mass: 1.1, radius: 1.09, color: 0x3399cc },
    { name: "WASP-119b", mass: 0.84, radius: 1.24, color: 0x00cc99 },
    { name: "K2-120b", mass: 0.76, radius: 1.14, color: 0xffccff },
    { name: "K2-102b", mass: 1.2, radius: 1.05, color: 0x33ffcc },
    { name: "WASP-122b", mass: 1.0, radius: 1.05, color: 0xff9900 },
    { name: "WASP-139b", mass: 1.0, radius: 1.12, color: 0x00cc00 },
    { name: "K2-122b", mass: 0.89, radius: 1.18, color: 0x99cc33 },
    { name: "WASP-145b", mass: 1.07, radius: 1.25, color: 0x00ccff },
    { name: "WASP-128b", mass: 0.93, radius: 1.03, color: 0xffcc00 },
    { name: "K2-72b", mass: 1.3, radius: 1.06, color: 0x3399cc },
    { name: "K2-123b", mass: 0.79, radius: 1.02, color: 0x99cc00 },
    { name: "WASP-133b", mass: 1.1, radius: 1.09, color: 0xff6600 },
    { name: "K2-141c", mass: 0.87, radius: 1.11, color: 0x33ffcc },
    { name: "K2-138c", mass: 1.2, radius: 1.15, color: 0x00ff99 },
    { name: "K2-140b", mass: 0.89, radius: 1.16, color: 0x99ff33 },
    { name: "K2-89b", mass: 1.2, radius: 1.07, texture: 'textures/texture1.jpg' },
    { name: "WASP-102b", mass: 1.5, radius: 1.5, texture: 'textures/texture1.jpg' },
    { name: "WASP-108b", mass: 0.74, radius: 1.18, texture: 'textures/texture1.jpg' },
    { name: "WASP-107b", mass: 0.7, radius: 1.3, texture: 'textures/texture1.jpg' },
    { name: "K2-61b", mass: 1.1, radius: 1.09, texture: 'textures/texture1.jpg' },
    { name: "WASP-144b", mass: 1.1, radius: 1.12, color: 0xff00cc },
    { name: "K2-139b", mass: 0.99, radius: 1.04, color: 0x33cc33 },
    { name: "WASP-132b", mass: 1.04, radius: 1.18, color: 0x33ff66 },
    { name: "K2-126b", mass: 1.1, radius: 1.15, color: 0x00ccff },
    { name: "K2-100b", mass: 1.5, radius: 1.08, color: 0xffcc33 },
    { name: "WASP-123b", mass: 0.8, radius: 1.01, color: 0x3300ff },
    { name: "WASP-146b", mass: 1.08, radius: 1.14, color: 0x6600cc },
    { name: "Kepler-186f", mass: 0.56, radius: 1.11, color: 0xffcc00 },
    { name: "Proxima Centauri b", mass: 1.27, radius: 1.07, color: 0x00ffcc },
    { name: "TRAPPIST-1e", mass: 0.6, radius: 1.03, color: 0xff00cc },
    { name: "LHS 1140 b", mass: 6.64, radius: 1.4, color: 0xcc00ff },
    { name: "TOI 700 d", mass: 1.1, radius: 1.12, color: 0xffccff },
    { name: "HD 40307 g", mass: 7.1, radius: 1.6, color: 0xffcc00 },
    { name: "K2-72e", mass: 0.54, radius: 1.3, color: 0x00ccff },
    { name: "Gliese 581g", mass: 3.1, radius: 1.3, color: 0xff6600 },
    { name: "Kepler-442b", mass: 2.4, radius: 1.34, color: 0x00cc00 },
    { name: "55 Cancri e", mass: 8.08, radius: 1.88, color: 0xcccc00 },
    { name: "HD 97658 b", mass: 1.6, radius: 1.24, color: 0xff3300 },
    { name: "K2-18 b", mass: 2.6, radius: 1.18, color: 0x99ff33 },
    { name: "Kepler-22b", mass: 2.4, radius: 2.4, color: 0xff6633 },
    { name: "WASP-17b", mass: 0.5, radius: 1.89, color: 0x66ccff },
    { name: "WASP-121b", mass: 1.2, radius: 1.77, color: 0xffcc33 },
    { name: "WASP-43b", mass: 2.0, radius: 1.26, color: 0x99cc00 },
    { name: "HD 209458 b", mass: 0.69, radius: 1.35, color: 0x0033cc },
    { name: "WASP-19b", mass: 1.1, radius: 1.36, color: 0x9900cc },
    { name: "K2-99b", mass: 0.76, radius: 1.08, color: 0xff00cc },
    { name: "WASP-30b", mass: 1.12, radius: 1.03, color: 0xccccff },
    { name: "WASP-31b", mass: 0.93, radius: 1.11, color: 0x3366ff },
    { name: "Kepler-69c", mass: 0.8, radius: 1.7, color: 0x33cc33 },
    { name: "WASP-85b", mass: 0.8, radius: 1.18, color: 0xffcc00 },
    { name: "WASP-78b", mass: 1.3, radius: 1.2, color: 0x6600cc },
    { name: "WASP-39b", mass: 0.9, radius: 1.2, color: 0xff6600 },
    { name: "HAT-P-32b", mass: 0.67, radius: 1.59, color: 0xff00cc },
    { name: "WASP-42b", mass: 1.2, radius: 1.14, color: 0x00ccff },
    { name: "HAT-P-30b", mass: 1.08, radius: 1.17, color: 0x0033ff },
    { name: "HAT-P-11b", mass: 0.08, radius: 1.5, color: 0xcc00cc },
    { name: "WASP-83b", mass: 2.4, radius: 1.5, color: 0x66ccff },
    { name: "WASP-47b", mass: 0.73, radius: 1.08, color: 0x00cc33 },
    { name: "WASP-35b", mass: 1.1, radius: 1.01, color: 0x33cc00 },
    { name: "K2-141b", mass: 0.36, radius: 1.3, color: 0xffcc66 },
    { name: "WASP-85b", mass: 0.8, radius: 1.25, color: 0x6600cc },
    { name: "WASP-94b", mass: 0.91, radius: 1.14, color: 0xccff33 },
    { name: "HD 131399 Ab", mass: 4.0, radius: 1.9, color: 0x6600ff },
    { name: "HD 20782 b", mass: 1.3, radius: 1.15, color: 0xffcc33 },
    { name: "WASP-120b", mass: 1.4, radius: 1.45, color: 0xff6600 },
    { name: "WASP-80b", mass: 0.9, radius: 1.03, color: 0x99ff66 },
    { name: "WASP-66b", mass: 1.0, radius: 1.13, color: 0x33cc66 },
    { name: "K2-142b", mass: 0.67, radius: 1.05, color: 0x00ccff },
    { name: "WASP-101b", mass: 0.74, radius: 1.3, color: 0x0066cc },
    { name: "WASP-104b", mass: 0.88, radius: 1.2, color: 0xffcc00 },
    { name: "WASP-110b", mass: 0.96, radius: 1.14, color: 0xcc00ff },
    { name: "WASP-13b", mass: 1.1, radius: 1.2, color: 0x66ccff },
    { name: "K2-138b", mass: 0.91, radius: 1.05, color: 0x0033cc },
    { name: "WASP-138b", mass: 1.1, radius: 1.18, color: 0x00ff33 },
    { name: "K2-89b", mass: 1.2, radius: 1.07, color: 0xff9900 },
    { name: "WASP-102b", mass: 1.5, radius: 1.5, color: 0x66cc00 },
    { name: "WASP-108b", mass: 0.74, radius: 1.18, color: 0xff00cc },
    { name: "WASP-107b", mass: 0.7, radius: 1.3, color: 0xffcc00 },
    { name: "K2-61b", mass: 1.1, radius: 1.09, color: 0x3399cc },
    { name: "WASP-119b", mass: 0.84, radius: 1.24, color: 0x00cc99 },
    { name: "K2-120b", mass: 0.76, radius: 1.14, color: 0xffccff },
    { name: "K2-102b", mass: 1.2, radius: 1.05, color: 0x33ffcc },
    { name: "WASP-122b", mass: 1.0, radius: 1.05, color: 0xff9900 },
    { name: "WASP-139b", mass: 1.0, radius: 1.12, color: 0x00cc00 },
    { name: "K2-122b", mass: 0.89, radius: 1.18, color: 0x99cc33 },
    { name: "WASP-145b", mass: 1.07, radius: 1.25, color: 0x00ccff },
    { name: "WASP-128b", mass: 0.93, radius: 1.03, color: 0xffcc00 },
    { name: "K2-72b", mass: 1.3, radius: 1.06, color: 0x3399cc },
    { name: "K2-123b", mass: 0.79, radius: 1.02, color: 0x99cc00 },
    { name: "WASP-133b", mass: 1.1, radius: 1.09, color: 0xff6600 },
    { name: "K2-141c", mass: 0.87, radius: 1.11, color: 0x33ffcc },
    { name: "K2-138c", mass: 1.2, radius: 1.15, color: 0x00ff99 },
    { name: "K2-140b", mass: 0.89, radius: 1.16, color: 0x99ff33 },
    { name: "WASP-144b", mass: 1.1, radius: 1.12, color: 0xff00cc },
    { name: "K2-139b", mass: 0.99, radius: 1.04, color: 0x33cc33 },
    { name: "WASP-132b", mass: 1.04, radius: 1.18, color: 0x33ff66 },
    { name: "K2-126b", mass: 1.1, radius: 1.15, color: 0x00ccff },
    { name: "K2-100b", mass: 1.5, radius: 1.08, color: 0xffcc33 },
    { name: "WASP-123b", mass: 0.8, radius: 1.01, color: 0x3300ff },
    { name: "WASP-146b", mass: 1.08, radius: 1.14, color: 0x6600cc },
    { name: "Kepler-186f", mass: 0.56, radius: 1.11, color: 0xffcc00 },
    { name: "Proxima Centauri b", mass: 1.27, radius: 1.07, color: 0x00ffcc },
    { name: "TRAPPIST-1e", mass: 0.6, radius: 1.03, color: 0xff00cc },
    { name: "LHS 1140 b", mass: 6.64, radius: 1.4, color: 0xcc00ff },
    { name: "TOI 700 d", mass: 1.1, radius: 1.12, color: 0xffccff },
    { name: "HD 40307 g", mass: 7.1, radius: 1.6, color: 0xffcc00 },
    { name: "K2-72e", mass: 0.54, radius: 1.3, color: 0x00ccff },
    { name: "Gliese 581g", mass: 3.1, radius: 1.3, color: 0xff6600 },
    { name: "Kepler-442b", mass: 2.4, radius: 1.34, color: 0x00cc00 },
    { name: "55 Cancri e", mass: 8.08, radius: 1.88, color: 0xcccc00 },
    { name: "HD 97658 b", mass: 1.6, radius: 1.24, color: 0xff3300 },
    { name: "K2-18 b", mass: 2.6, radius: 1.18, color: 0x99ff33 },
    { name: "Kepler-22b", mass: 2.4, radius: 2.4, color: 0xff6633 },
    { name: "WASP-17b", mass: 0.5, radius: 1.89, color: 0x66ccff },
    { name: "WASP-121b", mass: 1.2, radius: 1.77, color: 0xffcc33 },
    { name: "WASP-43b", mass: 2.0, radius: 1.26, color: 0x99cc00 },
    { name: "HD 209458 b", mass: 0.69, radius: 1.35, color: 0x0033cc },
    { name: "WASP-19b", mass: 1.1, radius: 1.36, color: 0x9900cc },
    { name: "K2-99b", mass: 0.76, radius: 1.08, color: 0xff00cc },
    { name: "WASP-30b", mass: 1.12, radius: 1.03, color: 0xccccff },
    { name: "WASP-31b", mass: 0.93, radius: 1.11, color: 0x3366ff },
    { name: "Kepler-69c", mass: 0.8, radius: 1.7, color: 0x33cc33 },
    { name: "WASP-85b", mass: 0.8, radius: 1.18, color: 0xffcc00 },
    { name: "WASP-78b", mass: 1.3, radius: 1.2, color: 0x6600cc },
    { name: "WASP-39b", mass: 0.9, radius: 1.2, color: 0xff6600 },
    { name: "HAT-P-32b", mass: 0.67, radius: 1.59, color: 0xff00cc },
    { name: "WASP-42b", mass: 1.2, radius: 1.14, color: 0x00ccff },
    { name: "HAT-P-30b", mass: 1.08, radius: 1.17, color: 0x0033ff },
    { name: "HAT-P-11b", mass: 0.08, radius: 1.5, color: 0xcc00cc },
    { name: "WASP-83b", mass: 2.4, radius: 1.5, color: 0x66ccff },
    { name: "WASP-47b", mass: 0.73, radius: 1.08, color: 0x00cc33 },
    { name: "WASP-35b", mass: 1.1, radius: 1.01, color: 0x33cc00 },
    { name: "K2-141b", mass: 0.36, radius: 1.3, color: 0xffcc66 },
    { name: "WASP-85b", mass: 0.8, radius: 1.25, color: 0x6600cc },
    { name: "WASP-94b", mass: 0.91, radius: 1.14, color: 0xccff33 },
    { name: "HD 131399 Ab", mass: 4.0, radius: 1.9, color: 0x6600ff },
    { name: "HD 20782 b", mass: 1.3, radius: 1.15, color: 0xffcc33 },
    { name: "WASP-120b", mass: 1.4, radius: 1.45, color: 0xff6600 },
    { name: "WASP-80b", mass: 0.9, radius: 1.03, color: 0x99ff66 },
    { name: "WASP-66b", mass: 1.0, radius: 1.13, color: 0x33cc66 },
    { name: "K2-142b", mass: 0.67, radius: 1.05, color: 0x00ccff },
    { name: "WASP-101b", mass: 0.74, radius: 1.3, color: 0x0066cc },
    { name: "WASP-104b", mass: 0.88, radius: 1.2, color: 0xffcc00 },
    { name: "WASP-110b", mass: 0.96, radius: 1.14, color: 0xcc00ff },
    { name: "WASP-13b", mass: 1.1, radius: 1.2, color: 0x66ccff },
    { name: "K2-138b", mass: 0.91, radius: 1.05, color: 0x0033cc },
    { name: "WASP-138b", mass: 1.1, radius: 1.18, color: 0x00ff33 },
    { name: "K2-89b", mass: 1.2, radius: 1.07, color: 0xff9900 },
    { name: "WASP-102b", mass: 1.5, radius: 1.5, color: 0x66cc00 },
    { name: "WASP-108b", mass: 0.74, radius: 1.18, color: 0xff00cc },
    { name: "WASP-107b", mass: 0.7, radius: 1.3, color: 0xffcc00 },
    { name: "K2-61b", mass: 1.1, radius: 1.09, color: 0x3399cc },
    { name: "WASP-119b", mass: 0.84, radius: 1.24, color: 0x00cc99 },
    { name: "K2-120b", mass: 0.76, radius: 1.14, color: 0xffccff },
    { name: "K2-102b", mass: 1.2, radius: 1.05, color: 0x33ffcc },
    { name: "WASP-122b", mass: 1.0, radius: 1.05, color: 0xff9900 },
    { name: "WASP-139b", mass: 1.0, radius: 1.12, color: 0x00cc00 },
    { name: "K2-122b", mass: 0.89, radius: 1.18, color: 0x99cc33 },
    { name: "WASP-145b", mass: 1.07, radius: 1.25, color: 0x00ccff },
    { name: "WASP-128b", mass: 0.93, radius: 1.03, color: 0xffcc00 },
    { name: "K2-72b", mass: 1.3, radius: 1.06, color: 0x3399cc },
    { name: "K2-123b", mass: 0.79, radius: 1.02, color: 0x99cc00 },
    { name: "WASP-133b", mass: 1.1, radius: 1.09, color: 0xff6600 },
    { name: "K2-141c", mass: 0.87, radius: 1.11, color: 0x33ffcc },
    { name: "K2-138c", mass: 1.2, radius: 1.15, color: 0x00ff99 },
    { name: "K2-140b", mass: 0.89, radius: 1.16, color: 0x99ff33 },
    { name: "WASP-144b", mass: 1.1, radius: 1.12, color: 0xff00cc },
    { name: "K2-139b", mass: 0.99, radius: 1.04, color: 0x33cc33 },
    { name: "WASP-132b", mass: 1.04, radius: 1.18, color: 0x33ff66 },
    { name: "K2-126b", mass: 1.1, radius: 1.15, color: 0x00ccff },
    { name: "K2-100b", mass: 1.5, radius: 1.08, color: 0xffcc33 },
    { name: "WASP-123b", mass: 0.8, radius: 1.01, color: 0x3300ff },
    { name: "WASP-146b", mass: 1.08, radius: 1.14, color: 0x6600cc },
    { name: "Kepler-186f", mass: 0.56, radius: 1.11, color: 0xffcc00 },
    { name: "Proxima Centauri b", mass: 1.27, radius: 1.07, color: 0x00ffcc },
    { name: "TRAPPIST-1e", mass: 0.6, radius: 1.03, color: 0xff00cc },
    { name: "LHS 1140 b", mass: 6.64, radius: 1.4, color: 0xcc00ff },
    { name: "TOI 700 d", mass: 1.1, radius: 1.12, color: 0xffccff },
    { name: "HD 40307 g", mass: 7.1, radius: 1.6, color: 0xffcc00 },
    { name: "K2-72e", mass: 0.54, radius: 1.3, color: 0x00ccff },
    { name: "Gliese 581g", mass: 3.1, radius: 1.3, color: 0xff6600 },
    { name: "Kepler-442b", mass: 2.4, radius: 1.34, color: 0x00cc00 },
    { name: "55 Cancri e", mass: 8.08, radius: 1.88, color: 0xcccc00 },
    { name: "HD 97658 b", mass: 1.6, radius: 1.24, color: 0xff3300 },
    { name: "K2-18 b", mass: 2.6, radius: 1.18, color: 0x99ff33 },
    { name: "Kepler-22b", mass: 2.4, radius: 2.4, color: 0xff6633 },
    { name: "WASP-17b", mass: 0.5, radius: 1.89, color: 0x66ccff },
    { name: "WASP-121b", mass: 1.2, radius: 1.77, color: 0xffcc33 },
    { name: "WASP-43b", mass: 2.0, radius: 1.26, color: 0x99cc00 },
    { name: "HD 209458 b", mass: 0.69, radius: 1.35, color: 0x0033cc },
    { name: "WASP-19b", mass: 1.1, radius: 1.36, color: 0x9900cc },
    { name: "K2-99b", mass: 0.76, radius: 1.08, color: 0xff00cc },
    { name: "WASP-30b", mass: 1.12, radius: 1.03, color: 0xccccff },
    { name: "WASP-31b", mass: 0.93, radius: 1.11, color: 0x3366ff },
    { name: "Kepler-69c", mass: 0.8, radius: 1.7, color: 0x33cc33 },
    { name: "WASP-85b", mass: 0.8, radius: 1.18, color: 0xffcc00 },
    { name: "WASP-78b", mass: 1.3, radius: 1.2, color: 0x6600cc },
    { name: "WASP-39b", mass: 0.9, radius: 1.2, color: 0xff6600 },
    { name: "HAT-P-32b", mass: 0.67, radius: 1.59, color: 0xff00cc },
    { name: "K2-138b", mass: 0.91, radius: 1.05, color: 0x0033cc },
    { name: "WASP-138b", mass: 1.1, radius: 1.18, color: 0x00ff33 },
    { name: "K2-89b", mass: 1.2, radius: 1.07, color: 0xff9900 },
    { name: "WASP-102b", mass: 1.5, radius: 1.5, color: 0x66cc00 },
    { name: "WASP-108b", mass: 0.74, radius: 1.18, color: 0xff00cc },
    { name: "WASP-107b", mass: 0.7, radius: 1.3, color: 0xffcc00 },
    { name: "K2-61b", mass: 1.1, radius: 1.09, color: 0x3399cc },
    { name: "WASP-119b", mass: 0.84, radius: 1.24, color: 0x00cc99 },
    { name: "K2-120b", mass: 0.76, radius: 1.14, color: 0xffccff },
    { name: "HD 97658 b", mass: 1.6, radius: 1.24, color: 0xff3300 },
    { name: "K2-18 b", mass: 2.6, radius: 1.18, color: 0x99ff33 },
    { name: "Kepler-22b", mass: 2.4, radius: 2.4, color: 0xff6633 },
    { name: "WASP-17b", mass: 0.5, radius: 1.89, color: 0x66ccff },
    { name: "WASP-121b", mass: 1.2, radius: 1.77, color: 0xffcc33 },
    { name: "WASP-43b", mass: 2.0, radius: 1.26, color: 0x99cc00 },
    { name: "HD 209458 b", mass: 0.69, radius: 1.35, color: 0x0033cc },
    { name: "K2-89b", mass: 1.2, radius: 1.07, color: 0xff9900 },
    { name: "WASP-102b", mass: 1.5, radius: 1.5, color: 0x66cc00 },
    { name: "WASP-108b", mass: 0.74, radius: 1.18, color: 0xff00cc },
    { name: "WASP-107b", mass: 0.7, radius: 1.3, color: 0xffcc00 },
    { name: "K2-61b", mass: 1.1, radius: 1.09, color: 0x3399cc },
    { name: "WASP-119b", mass: 0.84, radius: 1.24, color: 0x00cc99 },
    { name: "K2-120b", mass: 0.76, radius: 1.14, color: 0xffccff },
    { name: "K2-102b", mass: 1.2, radius: 1.05, color: 0x33ffcc },
    { name: "WASP-122b", mass: 1.0, radius: 1.05, color: 0xff9900 },
    { name: "WASP-139b", mass: 1.0, radius: 1.12, color: 0x00cc00 },


];

const planets = [];
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const infoDiv = document.createElement('div'); // Create a div to show planet details
infoDiv.style.position = 'absolute';
infoDiv.style.width = '200px';
infoDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
infoDiv.style.padding = '10px';
infoDiv.style.borderRadius = '5px';
infoDiv.style.pointerEvents = 'none'; // Prevent the div from capturing mouse events
infoDiv.style.transition = 'opacity 0.5s'; // Add a smooth transition
document.body.appendChild(infoDiv);

function loadExoplanetData() {
    exoplanets.forEach(planet => {
        const radius = (planet.radius || 0.1) * 1; // Increase multiplier to 1 or more
        const geometry = new THREE.SphereGeometry(radius, 32, 32);
        const textureLoader = new THREE.TextureLoader();
        
        // Load the texture
        const material = new THREE.MeshStandardMaterial({ 
            map: textureLoader.load(planet.texture), 
            roughness: 0.5, // Adjust roughness for surface texture
            metalness: 0.2  // Adjust metalness for shininess
        });
        
        const sphere = new THREE.Mesh(geometry, material);

        // Position the planet randomly
        sphere.position.set(Math.random() * 50 - 25, Math.random() * 50 - 25, Math.random() * 50 - 25);
        sphere.userData = { 
            name: planet.name, 
            mass: planet.mass, 
            radius: planet.radius 
        }; // Store details for interaction
        scene.add(sphere);
        planets.push(sphere);
    });
    camera.position.z = 100; // Set camera position
    render();
}

function onMouseMove(event) {
    // Calculate mouse position in normalized device coordinates (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(planets);

    if (intersects.length > 0) {
        const planet = intersects[0].object.userData; // Get the planet data
        infoDiv.innerHTML = `
            <strong>${planet.name}</strong><br>
            Mass: ${planet.mass} Earth masses<br>
            Radius: ${planet.radius} Earth radii
        `;
        infoDiv.style.left = `${event.clientX + 10}px`; // Position the info div
        infoDiv.style.top = `${event.clientY + 10}px`;
        infoDiv.style.display = 'block'; // Show the info div
    } else {
        infoDiv.style.display = 'none'; // Hide the info div
    }
}

function render() {
    requestAnimationFrame(render);
    stars.rotation.x += 0.001; // Rotate stars for better visual effect
    stars.rotation.y += 0.001;
    renderer.render(scene, camera);
}

// Call the function to load static data
loadExoplanetData();
window.addEventListener('mousemove', onMouseMove); // Add mouse move listener