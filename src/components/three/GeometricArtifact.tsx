"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GeometricArtifact() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Monochromatic Geometric Form: Pure white wireframe
    const outerGeo = new THREE.OctahedronGeometry(1.4, 0);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outerMesh);

    // Solid inner core with grayscale shader
    const innerGeo = new THREE.DodecahedronGeometry(0.85, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Floating Points in Pure White
    const ptCount = 60;
    const ptGeo = new THREE.BufferGeometry();
    const ptPos = new Float32Array(ptCount * 3);
    for (let i = 0; i < ptCount * 3; i += 3) {
      ptPos[i] = (Math.random() - 0.5) * 3.5;
      ptPos[i + 1] = (Math.random() - 0.5) * 3.5;
      ptPos[i + 2] = (Math.random() - 0.5) * 3.5;
    }
    ptGeo.setAttribute("position", new THREE.BufferAttribute(ptPos, 3));
    const ptMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
    });
    const ptMesh = new THREE.Points(ptGeo, ptMat);
    scene.add(ptMesh);

    // Mouse Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x;
      mouse.targetY = y;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let animId = 0;
    let isVisible = true;
    const clock = new THREE.Clock();

    const render = () => {
      if (!isVisible) {
        animId = 0;
        return;
      }
      animId = requestAnimationFrame(render);
      const t = clock.getElapsedTime();

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      outerMesh.rotation.x = t * 0.2 + mouse.y * 0.5;
      outerMesh.rotation.y = t * 0.25 + mouse.x * 0.5;

      innerMesh.rotation.x = -t * 0.3 - mouse.y * 0.3;
      innerMesh.rotation.y = -t * 0.35 + mouse.x * 0.3;

      ptMesh.rotation.y = t * 0.1;

      renderer.render(scene, camera);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animId) {
          render();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    render();

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);

      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ptGeo.dispose();
      ptMat.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[340px] relative pointer-events-none"
      style={{ position: "relative" }}
      aria-hidden="true"
    />
  );
}
