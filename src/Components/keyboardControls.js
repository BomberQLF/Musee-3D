import * as THREE from "three";

export function setupKeyboardControls(camera, controls) {
    let velocity = new THREE.Vector3();
    let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;
  
    const speed = 0.1;
  
    function onKeyDown(event) {
      switch (event.code) {
        case "KeyW":
          moveForward = true;
          break;
        case "KeyS":
          moveBackward = true;
          break;
        case "KeyA":
          moveLeft = true;
          break;
        case "KeyD":
          moveRight = true;
          break;
      }
    }
  
    function onKeyUp(event) {
      switch (event.code) {
        case "KeyW":
          moveForward = false;
          break;
        case "KeyS":
          moveBackward = false;
          break;
        case "KeyA":
          moveLeft = false;
          break;
        case "KeyD":
          moveRight = false;
          break;
      }
    }
  
    document.addEventListener("keydown", onKeyDown, false);
    document.addEventListener("keyup", onKeyUp, false);
  
    return function updateControls() {
      velocity.set(0, 0, 0);
      if (moveBackward) velocity.z -= speed;
      if (moveForward) velocity.z += speed;
      if (moveLeft) velocity.x -= speed;
      if (moveRight) velocity.x += speed;

      controls.moveRight(velocity.x);
      controls.moveForward(velocity.z);
    };
  }