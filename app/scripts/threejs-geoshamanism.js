window.onload = function() {

    // CANVAS RENDER
    var canvas = document.getElementById('georolls');
    canvas.setAttribute ('width', document.querySelector('.georoll').offsetWidth);
    canvas.setAttribute ('height', document.querySelector('.georoll').offsetHeight);
    var renderer = new THREE.WebGLRenderer ({canvas: canvas});
    renderer.setClearColor (0x111111);

    // WORLD
    var scene = new THREE.Scene();
    var camera= new THREE.PerspectiveCamera(45, document.querySelector('.georoll').offsetWidth/document.querySelector('.georoll').offsetHeight, 0.1, 5000);
    camera.position.set (0, 0, 1000);

    var controls = new THREE.TrackballControls( camera );
        controls.rotateSpeed = 10;
        controls.noZoom = true;
        controls.noPan = true;
        controls.dynamicDampingFactor = 0.08;
        controls.addEventListener ('change', render);

    // OBJECT
    var objLoader = new THREE.OBJLoader();
    var mesh = objLoader.load("models/Nepal_Google_paralell.obj",
    function(mesh){ 
        scene.add(mesh);
    });

    // LIGHT
    var light= new THREE.AmbientLight(0xffffff);
    scene.add (light);

    loop();
    function loop() {
        requestAnimationFrame(function(){loop()});
        renderer.render(scene, camera);
    };

    // ANIMATION
    animate();
    function animate () {
        requestAnimationFrame(animate);
        controls.update();
    };

    // RENDER
    var render = function () {
        controls.update();
        requestAnimationFrame(render);
    };
    
    renderer.render(scene, camera);
}