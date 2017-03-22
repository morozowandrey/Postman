window.onload = function() {

    var width = document.querySelector('.georoll').offsetWidth;
    var height = document.querySelector('.georoll').offsetHeight;
    var canvas = document.getElementById('georolls');

    canvas.setAttribute ('width', width);
    canvas.setAttribute ('height', height);

     var renderer = new THREE.WebGLRenderer ({canvas: canvas});
    renderer.setClearColor (0x111111);

    // GEOROLL OBGECT
    var georoll = {
        rotationY: 0,
    };

    // MODEL LOADER
    var objLoader = new THREE.OBJLoader();

    objLoader.load("models/Nepal_Google_paralell.obj",
    function(mesh){ 
        scene.add(mesh);
    });
    
    // WORLD
    var scene = new THREE.Scene();
    var camera= new THREE.PerspectiveCamera(45, width/height, 0.1, 5000);
    camera.position.set (0, 0, 1000);

    // LIGHT
    var light= new THREE.AmbientLight(0xffffff);
    scene.add (light);


    var geometry = new THREE.SphereGeometry( 200, 12, 12 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );


    var controls = new THREE.TrackballControls( camera );
        controls.rotateSpeed = 10;
        controls.noZoom = true;
        controls.noPan = true;
        controls.dynamicDampingFactor = 0.08;
        controls.addEventListener ('change', render);

    loop();
    function loop() {
        mesh.rotation.y += georoll.rotationY;
        requestAnimationFrame(function(){loop();});

        renderer.render(scene, camera);
    };
    
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