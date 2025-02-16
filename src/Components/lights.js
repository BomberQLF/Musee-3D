import * as THREE from 'three';

export function createLights(scene, color = 0xFFFFFFFF, intensity, position, target) {
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(position.x, position.y, position.z);
  light.target.position.set(target.x, target.y, target.z);
  scene.add(light);
  scene.add(light.target);
}   