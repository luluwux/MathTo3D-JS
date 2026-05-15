# MathTo3D-JS 📐✨

**MathTo3D-JS** is a minimalist, library-free 3D wireframe engine built with **Pure JavaScript** and **HTML5 Canvas**.

This project is a deep dive into the mathematical "engine room" of computer graphics. Instead of using high-level frameworks like Three.js, it implements the entire 3D rendering pipeline from scratch—from defining vertices in space to projecting them onto a 2D screen.

## 🚀 Project Overview

The goal of this repository is to demonstrate that complex 3D visuals can be achieved through simple trigonometric functions and linear algebra. It serves as an educational sandbox for anyone interested in how 3D space is simulated in a browser.

### 🧠 Core Principles

* **Vertex Manipulation:** Using arrays to store 3D coordinates $(x, y, z)$.
* **Rotation Matrices:** Applying $sin$ and $cos$ to rotate objects around the X, Y, and Z axes.
* **Perspective Projection:** Implementing the magic formula $x/z$ and $y/z$ to create depth.
* **Parametric Geometry:** Generating shapes like Spheres, Tori, and Wave Surfaces through mathematical loops.

## 🛠️ How it Works

The engine follows a linear **Rendering Pipeline** every 16.6ms (60 FPS):

1. **Clear:** Wipe the canvas.
2. **Transform:** Rotate and move the 3D vertices.
3. **Project:** Convert 3D points to 2D screen coordinates.
4. **Draw:** Connect the projected points with lines to form the wireframe.

## 📄 License

This project is open-source and available under the **MIT License**. Feel free to fork, experiment, and learn!

## ❤️ The Spark (Inspiration)

My journey into 3D graphics and the curiosity that led to this project began after watching a brilliant tutorial by **Tsoding**. This video demystified the complexity of 3D engines and showed me the beauty of building things from the ground up.

**Check out the video that started it all:**
[One Formula That Demystifies 3D Graphics- Tsoding](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DqjWkNZ0SXfo%26t%3D1066s)

