const BACKGROUND_COLOR = "#101010";
const FOREGROUND_COLOR = "#7050ff";
const CANVAS_SIZE = 800;

// Canvas setup
const canvas = document.getElementById("cube");
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
const ctx = canvas.getContext("2d");

/**
 * Clears the canvas with the background color.
 */
function clearCanvas() {
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * Draws a 2D line between two points.
 */
function drawLine(p1, p2) {
    ctx.lineWidth = 3;
    ctx.strokeStyle = FOREGROUND_COLOR;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}

/**
 * Converts normalized coordinates (-1 to 1) to screen pixels.
 */
function convertToScreenCoords(p) {
    return {
        x: (p.x + 1) / 2 * canvas.width,
        y: (1 - (p.y + 1) / 2) * canvas.height,
    };
}

/**
 * Projects a 3D point onto a 2D plane (Perspective projection).
 */
function project3DTo2D({ x, y, z }) {
    // Avoid division by zero
    const viewDistance = z === 0 ? 0.1 : z;
    return {
        x: x / viewDistance,
        y: y / viewDistance,
    };
}

/**
 * Translates a point along the Z axis.
 */
function translateZ({ x, y, z }, distance) {
    return { x, y, z: z + distance };
}

/**
 * Rotates a point around the Y axis (XZ plane).
 */
function rotateY({ x, y, z }, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: x * cos - z * sin,
        y,
        z: x * sin + z * cos,
    };
}

// State
let cameraZOffset = 1;
let rotationAngle = 0;
let lastTime = 0;

/**
 * Main animation loop.
 */
function animate(currentTime) {
    // Calculate delta time for smooth animation regardless of frame rate
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    if (!isNaN(deltaTime)) {
        rotationAngle += Math.PI * deltaTime; // Rotate 180 degrees per second
    }

    clearCanvas();

    // Render edges
    for (const edge of CUBE_EDGES) {
        for (let i = 0; i < edge.length; ++i) {
            const startVertex = CUBE_VERTICES[edge[i]];
            const endVertex = CUBE_VERTICES[edge[(i + 1) % edge.length]];

            // Apply transformations
            const processPoint = (v) => {
                const rotated = rotateY(v, rotationAngle);
                const translated = translateZ(rotated, cameraZOffset);
                const projected = project3DTo2D(translated);
                return convertToScreenCoords(projected);
            };

            drawLine(processPoint(startVertex), processPoint(endVertex));
        }
    }

    requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);
