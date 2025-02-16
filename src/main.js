import "./style.css";
import * as THREE from "three";
import { loadModel } from "../src/Components/modelLoader";
import { createLights } from "../src/Components/lights";
import { setupCameraControls } from "../src/Components/cameraControls";
import { setupResizeHandler } from "../src/Components/resizeHandler";
import { setupKeyboardControls } from "../src/Components/keyboardControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animateControls);
document.body.appendChild(renderer.domElement);

// Lumières
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
createLights(scene, 0xffffff, 1, { x: 8, y: 15, z: 15 }, { x: 0, y: 5, z: 0 });

// Importation du modèle 3d
loadModel("../public/model/Maison_Musee.glb", scene, "Scene-Musee");

// APPel de la fonction pour les controles de la cameras
const controls = setupCameraControls(camera, renderer.domElement);

// Param de dépalcements
controls.movementSpeed = 5;
controls.lookSpeed = 0.12;
camera.position.set(-1.61, 5, 127.9);
console.log(camera.position);

// Appel de fonction pour les contrôles clavier
const updateKeyboardControls = setupKeyboardControls(camera, controls);

// Mise à jour de la scène
function animateControls() {
  updateKeyboardControls(); 
  renderer.render(scene, camera);
}

// Responsive
setupResizeHandler(renderer, camera);