// websiteShowcase


document.addEventListener('DOMContentLoaded', function () {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Adjusted aspect ratio
    camera.position.z = 5;
    var renderer = new THREE.WebGLRenderer();
    // Set the renderer size to fit the container
    renderer.setSize(document.getElementById('websiteShowcase').clientWidth, document.getElementById('websiteShowcase').clientHeight);
    document.getElementById('websiteShowcase').appendChild(renderer.domElement);

    var geometry = new THREE.SphereGeometry(3, 32, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0x1e1e1e, wireframe: true });
    var sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    var logos = [
      { src: 'images/logo1.png', position: new THREE.Vector3(2, 0, 0) },
      { src: 'images/logo2.png', position: new THREE.Vector3(-2, 0, 0) },
      // Add more logos as needed
    ];

    logos.forEach(function (logo) {
      var textureLoader = new THREE.TextureLoader();
      var logoTexture = textureLoader.load(logo.src);

      var logoMaterial = new THREE.MeshBasicMaterial({ map: logoTexture, side: THREE.DoubleSide }); // Double-sided logo
      var logoMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), logoMaterial);
      logoMesh.position.copy(logo.position);
      sphere.add(logoMesh);
    });

    var animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', function () {
      camera.aspect = document.getElementById('websiteShowcase').clientWidth / document.getElementById('websiteShowcase').clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(document.getElementById('websiteShowcase').clientWidth, document.getElementById('websiteShowcase').clientHeight);
    });

    animate();
  });