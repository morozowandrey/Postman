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
    camera.position.set (0, 0, 460);
    scene.position.set (0, -185, 0);

    // OBJECT
    var objLoader = new THREE.OBJLoader();
    var roll = objLoader.load("models/Nepal_Google_paralell.obj",function(roll){ 
        scene.add(roll);
    });

    // LIGHT
    var light= new THREE.AmbientLight(0xffffff);
    scene.add (light);

    controls = new THREE.TrackballControls( camera );

	controls.rotateSpeed = 10;
	controls.zoomSpeed = 0.02;
	controls.panSpeed = 0.8;

    // RENDER
    var render = function () {

        controls.update(camera);
        renderer.render(scene, camera);

        requestAnimationFrame(function (){
            render();
        });
    };
    render(); 

}