import './style.css'
// Option 1: Import the entire three.js core library.
import * as THREE from 'three';

//Scene
const scene = new THREE.Scene()


//Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } )
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Sizes
const sizes = {
    width: 800,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75)
scene.add(camera)

//Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer( {
    canvas
} )