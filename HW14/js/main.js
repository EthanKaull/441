var scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 90, -10);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var controls = new THREE.TrackballControls(camera, renderer.domElement);
controls.zoomSpeed = 0.4;
controls.panSpeed = 0.4;
var mainLight = new THREE.PointLight(0xffffff, 1, 0);
mainLight.position.set(20, 50, 20);
scene.add(mainLight);

var ambient = new THREE.AmbientLight(0x111111);
scene.add(ambient);

var boxGeom = new THREE.BoxGeometry();
var boxMat = new THREE.MeshBasicMaterial({ color: 0x324ca8 });
var bigBox = new THREE.Mesh(boxGeom, boxMat);
bigBox.position.set(50, 0, 0);
bigBox.scale.set(15, 15, 15);
scene.add(bigBox);
var smallGeom = new THREE.BoxGeometry();
var smallMat = new THREE.MeshBasicMaterial({ color: 0x1234ee });
var miniBox = new THREE.Mesh(smallGeom, smallMat);
miniBox.position.set(2, 0, 0);
miniBox.scale.set(0.5, 0.5, 0.5);
bigBox.add(miniBox);

var objLoader = new THREE.OBJLoader();
var model = null;
objLoader.load('models/Plant.obj', function (loadedObj) {
  loadedObj.rotation.z = Math.PI;
  loadedObj.position.set(-50, 0, 0);
  scene.add(loadedObj);
  model = loadedObj;
});

function spinCubes() {
  bigBox.rotation.x += 0.01;
  bigBox.rotation.y += 0.01;

  miniBox.rotation.x += 0.05;
  miniBox.rotation.y += 0.05;
}

function spinModel() {
  if (model) {
    model.rotation.x += 0.01;
    model.rotation.y += 0.01;
  }
}
function loop() {
  requestAnimationFrame(loop);
  spinCubes();
  spinModel();
  controls.update();
  renderer.render(scene, camera);
}
loop();
