import { GLTFLoader } from "./node_modules/three/examples/jsm/loaders/GLTFLoader.js";

export function loadModel(url, scene, name) {
  const loader = new GLTFLoader();
  loader.load(
    url,
    function (gltf) {
      const model = gltf.scene;
      model.name = name;
      scene.add(model);
      console.log(model);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
}
