import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * Low-poly "living cloud infrastructure" scene.
 * Nodes = infra components, edges = network links, spheres = data packets.
 * Kept intentionally cheap: no post-processing, no shadows, capped DPR.
 */

type NodeKind = "cluster" | "node" | "data" | "edge" | "observe";

interface SceneNode {
  id: string;
  position: [number, number, number];
  kind: NodeKind;
  scale?: number;
}

const COLORS: Record<NodeKind, string> = {
  cluster: "#5ee7f5",
  node: "#7dd3fc",
  data: "#a78bfa",
  edge: "#67e8f9",
  observe: "#5eead4",
};

const NODES: SceneNode[] = [
  { id: "cluster", position: [0, 0, 0], kind: "cluster", scale: 1 },
  { id: "n1", position: [-2.1, 0.9, 0.4], kind: "node" },
  { id: "n2", position: [-1.7, -1.1, -0.6], kind: "node" },
  { id: "n3", position: [2.0, 0.6, -0.5], kind: "node" },
  { id: "lb", position: [0.1, 2.0, 0.2], kind: "edge" },
  { id: "db", position: [1.6, -1.4, 0.5], kind: "data" },
  { id: "cicd", position: [-2.8, -0.2, -1.4], kind: "edge" },
  { id: "obs1", position: [2.6, -0.4, 1.2], kind: "observe" },
  { id: "obs2", position: [-0.9, -2.0, 1.0], kind: "observe" },
  { id: "cdn", position: [1.2, 1.8, 1.3], kind: "edge" },
];

const EDGES: [string, string][] = [
  ["cluster", "n1"],
  ["cluster", "n2"],
  ["cluster", "n3"],
  ["cluster", "lb"],
  ["cluster", "db"],
  ["cluster", "obs1"],
  ["cluster", "obs2"],
  ["cicd", "n1"],
  ["cicd", "cluster"],
  ["lb", "cdn"],
  ["n3", "db"],
];

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

function Edges() {
  const geometry = useMemo(() => {
    const points: number[] = [];
    EDGES.forEach(([a, b]) => {
      points.push(...nodeById(a).position, ...nodeById(b).position);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return geo;
  }, []);

  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: new THREE.Color("#3fb6cc"),
        transparent: true,
        opacity: 0.35,
      }),
    [],
  );

  const lines = useMemo(() => new THREE.LineSegments(geometry, material), [geometry, material]);

  return <primitive object={lines} />;
}

function Packets({ animate }: { animate: boolean }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const paths = useMemo(
    () =>
      EDGES.map(([a, b], i) => ({
        from: new THREE.Vector3(...nodeById(a).position),
        to: new THREE.Vector3(...nodeById(b).position),
        offset: (i * 0.37) % 1,
        speed: 0.18 + ((i * 7) % 5) * 0.035,
      })),
    [],
  );

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = animate ? clock.getElapsedTime() : 0;
    paths.forEach((p, i) => {
      const progress = (p.offset + t * p.speed) % 1;
      dummy.position.lerpVectors(p.from, p.to, progress);
      dummy.scale.setScalar(0.055);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, paths.length]} frustumCulled={false}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#a5f3fc" />
    </instancedMesh>
  );
}

function Node({ node, animate }: { node: SceneNode; animate: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  const seed = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ clock }) => {
    if (!ref.current || !animate) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = node.position[1] + Math.sin(t * 0.7 + seed) * 0.07;
    ref.current.rotation.y = t * 0.25 + seed;
  });

  const isCluster = node.kind === "cluster";

  return (
    <mesh ref={ref} position={node.position}>
      {isCluster ? (
        <icosahedronGeometry args={[0.78, 1]} />
      ) : node.kind === "data" ? (
        <cylinderGeometry args={[0.24, 0.24, 0.34, 12]} />
      ) : (
        <boxGeometry args={[0.34, 0.34, 0.34]} />
      )}
      <meshStandardMaterial
        color={COLORS[node.kind]}
        emissive={COLORS[node.kind]}
        emissiveIntensity={isCluster ? 0.5 : 0.35}
        roughness={0.45}
        metalness={0.15}
        wireframe={isCluster}
      />
    </mesh>
  );
}

function Rig({ animate, children }: { animate: boolean; children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    const targetY = animate ? pointer.x * 0.42 : 0;
    const targetX = animate ? -pointer.y * 0.26 : 0;
    g.rotation.y += (targetY - g.rotation.y) * Math.min(1, delta * 2.2);
    g.rotation.x += (targetX - g.rotation.x) * Math.min(1, delta * 2.2);
  });

  return <group ref={group}>{children}</group>;
}

export default function InfraScene({
  animate = true,
  quality = "high",
}: {
  animate?: boolean;
  quality?: "high" | "low";
}) {
  return (
    <Canvas
      dpr={[1, quality === "high" ? 1.75 : 1.2]}
      camera={{ position: [0, 0.4, 7.2], fov: 42 }}
      gl={{ antialias: quality === "high", powerPreference: "high-performance" }}
      frameloop={animate ? "always" : "demand"}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 5, 6]} intensity={45} color="#67e8f9" />
      <pointLight position={[-5, -3, 2]} intensity={28} color="#a78bfa" />
      <Rig animate={animate}>
        <Edges />
        <Packets animate={animate} />
        {NODES.map((node) => (
          <Node key={node.id} node={node} animate={animate} />
        ))}
      </Rig>
    </Canvas>
  );
}
