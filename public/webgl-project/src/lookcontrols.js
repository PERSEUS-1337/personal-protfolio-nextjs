const autoRotateButton = document.getElementById("autoRotate");
const resetCamButton = document.getElementById("resetCam");

const dragSens = 0.01;
const panSpeed = 0.1;
const zoomMult = 0.95;

let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let keysPressed = {};
let panInterval, rotateInterval;
let rotating = false;

let direction = vec3.subtract([], eyePoint, lookAtPoint);
vec3.normalize(direction, direction);
let yaw = Math.atan2(direction[0], direction[2]);   // Horizontal rotation
let pitch = Math.asin(direction[1]); // Vertical rotation
let zoom = 1.0;

// Zoom by scrolling up/down
canvas.addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
        zoom *= zoomMult;
    } else {
        zoom /= zoomMult;
    }

    updateCamera();
});

// Event listeners for clicking on canvas
canvas.addEventListener('mousedown', (event) => {
    isDragging = true;
    previousMousePosition.x = event.clientX;
    previousMousePosition.y = event.clientY;
});

canvas.addEventListener('mouseup', () => {
    isDragging = false;
});

// Rotating by dragging on canvas
canvas.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    let deltaX = -(event.clientX - previousMousePosition.x);
    let deltaY = event.clientY - previousMousePosition.y;
    previousMousePosition.x = event.clientX;
    previousMousePosition.y = event.clientY;

    // Update yaw and pitch based on mouse movement
    yaw += deltaX * dragSens;
    pitch += deltaY * dragSens;

    // Clamp pitch to avoid flipping
    pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch));

    // Update camera position
    let r = Math.sqrt(Math.pow(eyePoint[0]-lookAtPoint[0], 2) + Math.pow(eyePoint[1]-lookAtPoint[1], 2) + Math.pow(eyePoint[2]-lookAtPoint[2], 2))
    eyePoint = [
        r * Math.cos(pitch) * Math.sin(yaw) + lookAtPoint[0],
        r * Math.sin(pitch) + lookAtPoint[1],
        r * Math.cos(pitch) * Math.cos(yaw) + lookAtPoint[2]
    ]

    updateCamera();
});

// Keyboard event listeners for panning
window.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
    if (panInterval) return;
    panInterval = setInterval(panCamera, 16);
});

window.addEventListener('keyup', (event) => {
    keysPressed[event.key] = false;
    clearInterval(panInterval);
    panInterval = null;
});

// Pan Camera (WASD - forward/left/backward/right, QE - descend/ascend)
function panCamera() {
    // Move forward
    if (keysPressed['w']) {
        eyePoint[2] -= panSpeed * Math.cos(yaw);
        eyePoint[0] -= panSpeed * Math.sin(yaw);
        lookAtPoint[2] -= panSpeed * Math.cos(yaw);
        lookAtPoint[0] -= panSpeed * Math.sin(yaw);
    }
    // Move backward
    if (keysPressed['s']) {
        eyePoint[2] += panSpeed * Math.cos(yaw);
        eyePoint[0] += panSpeed * Math.sin(yaw);
        lookAtPoint[2] += panSpeed * Math.cos(yaw);
        lookAtPoint[0] += panSpeed * Math.sin(yaw);
    }
    // Move left
    if (keysPressed['a']) {
        eyePoint[2] += panSpeed * Math.sin(yaw);
        eyePoint[0] -= panSpeed * Math.cos(yaw);
        lookAtPoint[2] += panSpeed * Math.sin(yaw);
        lookAtPoint[0] -= panSpeed * Math.cos(yaw);
    }
    // Move right
    if (keysPressed['d']) {
        eyePoint[2] -= panSpeed * Math.sin(yaw);
        eyePoint[0] += panSpeed * Math.cos(yaw);
        lookAtPoint[2] -= panSpeed * Math.sin(yaw);
        lookAtPoint[0] += panSpeed * Math.cos(yaw);
    }
    // Move down
    if (keysPressed['q']) {
        eyePoint[1] -= panSpeed;
        lookAtPoint[1] -= panSpeed;
    }
    // Move up
    if (keysPressed['e']) {
        eyePoint[1] += panSpeed;
        lookAtPoint[1] += panSpeed;
    }

    updateCamera();
}

// Update the view and projection matrix
function updateCamera() {    
    viewMatrix = mat4.lookAt(mat4.create(), eyePoint, lookAtPoint, upVector);
    gl.uniformMatrix4fv(uViewMatrixPointer, false, viewMatrix);

    mat4.perspective(projectionMatrix, glMatrix.toRadian(30)*zoom, canvas.width / canvas.height, 1, 1000);
    gl.uniformMatrix4fv(uProjectionMatrixPointer, false, projectionMatrix);

    drawScene();
}

// Reset camera to default position
function resetCamera(){
    lookAtPoint = [-(numCubes*cubeSize)/2, 0.0, -(numCubes*cubeSize)/2, 1.0];
    eyePoint = [-(numCubes*cubeSize)*2, (numCubes*cubeSize), -(numCubes*cubeSize)*2, 1.0];
    direction = vec3.subtract([], eyePoint, lookAtPoint);
    vec3.normalize(direction, direction);
    yaw = Math.atan2(direction[0], direction[2]);
    pitch = Math.asin(direction[1]);
    zoom = 1.0;

    updateCamera();
}

// Rotate along y axis
function autoRotate(){
    // Increase yaw
    yaw += 0.01

    // Update camera position
    let r = Math.sqrt(Math.pow(eyePoint[0]-lookAtPoint[0], 2) + Math.pow(eyePoint[1]-lookAtPoint[1], 2) + Math.pow(eyePoint[2]-lookAtPoint[2], 2))
    eyePoint = [
        r * Math.cos(pitch) * Math.sin(yaw) + lookAtPoint[0],
        r * Math.sin(pitch) + lookAtPoint[1],
        r * Math.cos(pitch) * Math.cos(yaw) + lookAtPoint[2]
    ]

    updateCamera();
}

autoRotateButton.addEventListener('click', function() {
    rotating = !rotating;

    if (rotating){
        autoRotateButton.textContent = "Stop Auto Rotate"
        autoRotateButton.classList.remove("btn-primary");
        autoRotateButton.classList.add("btn-danger");
        resetCamera();
        if (rotateInterval) return;
        rotateInterval = setInterval(autoRotate, 16);
    } else {
        autoRotateButton.textContent = "Start Auto Rotate"
        autoRotateButton.classList.remove("btn-danger");
        autoRotateButton.classList.add("btn-primary");
        clearInterval(rotateInterval);
        rotateInterval = null;
    }
    
})

resetCamButton.addEventListener('click', resetCamera);