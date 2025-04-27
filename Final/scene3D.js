const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
const controls = new THREE.TrackballControls(camera, renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('threeContainer').appendChild(renderer.domElement);
camera.position.z = 5;
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);
function animate3D() {
  requestAnimationFrame(animate3D);
  controls.update();
  renderer.render(scene, camera);
}
animate3D();
