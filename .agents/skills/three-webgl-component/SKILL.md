---
name: three-webgl-component
description: Standard architecture, lifecycle patterns, and performance optimizations for creating or editing Three.js WebGL scenes in React 19 and Next.js.
---

# Three.js WebGL Component Development Skill

Use this skill when developing, refactoring, or optimizing Three.js 3D WebGL scenes within this Next.js 16 / React 19 project.

## 1. Core Principles & Constraints

1. **Vanilla Three.js in React Hooks:**
   - Do NOT use `@react-three/fiber` or `@react-three/drei` (they carry peer-dependency conflicts with React 19).
   - Mount Three.js onto an HTML container using `useRef<HTMLDivElement>(null)` inside `useEffect`.
2. **Viewport-Aware Rendering (`IntersectionObserver`):**
   - Background WebGL animations must not run while the user is viewing other sections.
   - Use an `IntersectionObserver` to set an `isVisible` flag. If `isVisible === false`, exit the `requestAnimationFrame` loop. Resume automatically when intersecting.
3. **Hardware & Battery Optimization:**
   - Cap pixel ratio: `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))`
   - Set `antialias: true` and `alpha: true` for clean transparent backgrounds.
   - Set container styling: `pointer-events-none` so 3D canvases do not intercept user clicks on UI buttons.

---

## 2. Standard WebGL Component Template

Follow this proven pattern for any new 3D scene (see [`HeroScene.tsx`](file:///c:/Users/micro/Documents/GitHub/Marketing-agency/src/components/three/HeroScene.tsx) for reference):

```tsx
"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MyScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Geometries & Materials (Monochromatic only: #FFFFFF, #888888, #222222)
    const geometry = new THREE.IcosahedronGeometry(1.5, 2);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 3. Animation Loop with Viewport Observation
    let animId = 0;
    let isVisible = true;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) {
        animId = 0;
        return;
      }
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mesh.rotation.x = elapsedTime * 0.15;
      mesh.rotation.y = elapsedTime * 0.2;

      renderer.render(scene, camera);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animId) {
          animate();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    animate();

    // 4. Resize Handling
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // 5. Mandatory Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ position: "absolute" }}
      aria-hidden="true"
    />
  );
}
```

## 3. Strict Color Palette for 3D Scenes
All 3D models, wireframes, and particle systems must use the monochromatic palette:
- White lines/particles: `0xffffff`
- Muted secondary wireframes: `0x777777` or `0x888888`
- Dark depth points: `0x222222` or `0x111111`
- **Never use colored lights or colored particles.**

