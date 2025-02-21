import * as THREE from "three";

export function CollisionAdder(width, height, depth, color, x, y, z, scene) {
    const object = new THREE.Mesh(
      new THREE.BoxGeometry(width, height, depth),
      new THREE.MeshBasicMaterial({ color: color, opacity: 1 })
    );
    object.position.set(x, y, z);
    scene.add(object);
  
    const collision = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
    collision.setFromObject(object);
  }