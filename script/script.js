window.onload = init;
var scene, camera, render;

function init(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	var canvas = document.getElementById("canvas");
	
	canvas.setAttribute('width', width-500);
	canvas.setAttribute('height', height-500);
	
	render = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
	render.setClearColor(0x400440);
	
	scene = new THREE.Scene();
	
	camera = new THREE.PerspectiveCamera(76, width/height, 0.1, 10000);
	camera.position.set(0,0,350);
	

	
	var cube_geometry = new THREE.CubeGeometry(250,250,250,12,12,12);
	var cube_material = new THREE.MeshNormalMaterial({wireframe: true});
	var cube = new THREE.Mesh(cube_geometry, cube_material);
	
	cube.rotation.z = 0.8;
	cube.rotation.x = 0.8;
	
	
	scene.add(cube);
	
	var light = new THREE.AmbientLight(0x1f0000);
	scene.add(light);

	function loop(){
		requestAnimationFrame(loop);
		
		cube.rotation.x +=0.01;
		cube.rotation.z +=0.01;
		cube.rotation.y +=0.01;
		render.render(scene,camera);
	}
	loop();
}	
	
	
	
	