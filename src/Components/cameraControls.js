import { PointerLockControls } from "three-stdlib";

export function setupCameraControls(camera, domElement) {
  const controls = new PointerLockControls(camera, domElement);

  if (domElement) {
    domElement.addEventListener("click", () => {
      domElement.requestPointerLock();
    });

    domElement.addEventListener("click", () => {
      controls.lock();
    });
  } else {
    console.error("Le domElement n'est pas défini ou est nul !");
  }

  return controls;
}