var three = THREE;

var scene = new three.Scene();
var camera = new three.PerspectiveCamera(45, document.querySelector('.georoll').offsetWidth/document.querySelector('.georoll').offsetHeight, 0.1, 5000);
camera.position.set (0, 0, 460);
scene.position.set (0, -185, 0);

var renderer = new three.WebGLRenderer();
var canvas = document.getElementById('georolls');
    canvas.setAttribute ('width', document.querySelector('.georoll').offsetWidth);
    canvas.setAttribute ('height', document.querySelector('.georoll').offsetHeight);
    var renderer = new THREE.WebGLRenderer ({canvas: canvas});
    renderer.setClearColor (0x111111);



// var geometry = new three.BoxGeometry(1, 1, 1);
// three.ImageUtils.crossOrigin = '';
// var texture = three.ImageUtils.loadTexture('http://i.imgur.com/CEGihbB.gif');
// texture.anisotropy = renderer.getMaxAnisotropy();
// var material = new three.MeshFaceMaterial([
//     new three.MeshBasicMaterial({
//         color: 0x00ff00
//     }),
//     new three.MeshBasicMaterial({
//         color: 0xff0000
//     }),
//     new three.MeshBasicMaterial({
//         //color: 0x0000ff,
//         map: texture
//     }),
//     new three.MeshBasicMaterial({
//         color: 0xffff00
//     }),
//     new three.MeshBasicMaterial({
//         color: 0x00ffff
//     }),
//     new three.MeshBasicMaterial({
//         color: 0xff00ff
//     })
// ]);
// var cube = new three.Mesh(geometry, material);
// cube.rotation.x = Math.PI/2;
// scene.add(cube);
// camera.position.z = 5;

// // OBJECT
// var objLoader = new THREE.OBJLoader();
// var roll = objLoader.load("models/nepal.obj",function(roll){ 
//     scene.add(roll);
// });

// // LIGHT
// var light= new THREE.AmbientLight(0xffffff);
// scene.add (light);


/////////////////////// OBGECT LOADING /////////////////////// 
var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load("models/nepal.mtl", function(materials){
		
		materials.preload();
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);
		
		objLoader.load("models/nepal.obj", function(mesh){
		
			mesh.traverse(function(node){
				if( node instanceof THREE.Mesh ){
					node.castShadow = true;
					node.receiveShadow = true;
				}
			});
		
			scene.add(mesh);
			// mesh.position.set(-5, 0, 4);
			mesh.rotation.y = -Math.PI/4;
		});
		
	});

    // LIGHT
    var light= new THREE.AmbientLight(0xffffff);
    scene.add (light);
/////////////////////// EO OBGECT LOADING /////////////////////// 


/////////////////////// MOUSE CONTROLL /////////////////////// 
/* */
var isDragging = false;
var previousMousePosition = {
    x: 0,
    y: 0
};
$(renderer.domElement).on('mousedown', function(e) {
    isDragging = true;
})
.on('mousemove', function(e) {
    //console.log(e);
    var deltaMove = {
        x: e.offsetX-previousMousePosition.x,
        y: e.offsetY-previousMousePosition.y
    };

    if(isDragging) {
            
        var deltaRotationQuaternion = new three.Quaternion()
            .setFromEuler(new three.Euler(
                toRadians(deltaMove.y * 0),
                toRadians(deltaMove.x * 1),
                0,
                'XYZ'
            ));
        
        mesh.quaternion.multiplyQuaternions(deltaRotationQuaternion, mesh.quaternion);
    }
    
    previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY
    };
});
/* */

$(document).on('mouseup', function(e) {
    isDragging = false;
});



// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();


// controls = new THREE.TrackballControls( camera );

// 	controls.rotateSpeed = 10;
// 	controls.zoomSpeed = 0.02;
// 	controls.panSpeed = 0.8;
/////////////////////// EO MOUSE CONTROLL /////////////////////// 

function render() {
    // controls.update(camera);
    renderer.render(scene, camera);
    requestAnimFrame(render);
}

render();















function toRadians(angle) {
	return angle * (Math.PI / 180);
}

function toDegrees(angle) {
	return angle * (180 / Math.PI);
}

