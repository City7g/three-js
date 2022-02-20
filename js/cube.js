import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcccccc);
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 'red' } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

window.addEventListener('mousemove', e => {
  mouse.x = e.clientX
  mouse.y = e.clientY
})

window.addEventListener('wheel', e => {
  if(e.deltaY > 0) {
    mouse.wheel += 0.3
  } else {
    mouse.wheel -= 0.3
  }
})


const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  wheel: 5
}

function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x = (mouse.y - window.innerWidth) / 100;
  cube.rotation.y = -(mouse.x - window.innerHeight) / 100;
  camera.position.z = mouse.wheel;

  renderer.render( scene, camera );
};

animate();