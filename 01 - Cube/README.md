# MathTo3D-JS: Cube Geometry

This folder contains the implementation of a **3D Cube (Hexahedron)**—the "Hello World" of 3D computer graphics.

## 🌟 Inspiration & Credits

This specific implementation is based on the logic presented in the **javidx9 (OneLoneCoder)** video:

* **Video:** [One Formula That Demystifies 3D Graphics](https://www.youtube.com/watch?v=qjWkNZ0SXfo)

Following the principles of that tutorial, this folder demonstrates how a simple set of 8 points can be transformed into a rotating 3D object using pure JavaScript.

## 🧱 The Data Structure

A cube is the simplest way to visualize the relationship between **Vertices** (points) and **Faces** (surfaces).

### 1. Vertices (`vs`)

We define **8 points** in space. Each point represents a corner of the cube:

* **Front Face:** Four points at $z = 0.25$
* **Back Face:** Four points at $z = -0.25$

### 2. Faces (`fs`)

Instead of just drawing random lines, we define **6 faces**. Each face is an array of indices pointing to the `vs` array. The renderer loops through these indices to draw the edges of the cube.


## 📐 Mathematical Pipeline

To bring this cube to life, we apply the following steps in every frame:

1. **Rotation:** Every vertex is updated using rotation matrices ($sin$ and $cos$) to spin the cube.
2. **Translation:** We move the cube away from the camera ($z + 1$) to ensure it is visible within the frustum.
3. **Perspective Projection:**

$$x_{2d} = \frac{x}{z}, \quad y_{2d} = \frac{y}{z}$$


4. **Scaling:** The results are mapped to the Canvas pixel dimensions.
5. 

## 🚀 How to Use

1. Ensure your `index.html` loads the core engine script.
2. Include the `cube.js` data file.
3. The cube will be rendered using the global `frame()` loop at **60 FPS**.
