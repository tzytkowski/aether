import * as Magneto from "https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.module.js";
      // Create a scene


      const scene = new Magneto.Scene();
      const container = document.getElementById('container');
      // Create a camera
      const camera = new Magneto.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      // Create a renderer
      const renderer = new Magneto.WebGLRenderer();
      renderer.setSize(window.innerWidth/2, window.innerHeight/2);
      container.appendChild(renderer.domElement);

      // Create a cube
      const geometry = new Magneto.BoxGeometry();
      const material = new Magneto.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new Magneto.Mesh(geometry, material);
      scene.add(cube);

      // Set the initial camera position
      camera.position.z = 5;

      // Create an animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the cube
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        // Render the scene
        renderer.render(scene, camera);
      };

      // Start the animation loop
      animate();