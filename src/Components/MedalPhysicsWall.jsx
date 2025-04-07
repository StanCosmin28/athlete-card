// import React, { useEffect, useRef } from "react";
// import Matter from "matter-js";

// const MedalWall2D = () => {
//   const sceneRef = useRef(null);

//   useEffect(() => {
//     const engine = Matter.Engine.create();
//     const world = engine.world;

//     const render = Matter.Render.create({
//       element: sceneRef.current,
//       engine: engine,
//       options: {
//         width: 800,
//         height: 600,
//         wireframes: false,
//         background: "#f0f0f0",
//       },
//     });

//     const ground = Matter.Bodies.rectangle(400, 590, 810, 20, {
//       isStatic: true,
//     });
//     const leftWall = Matter.Bodies.rectangle(5, 300, 20, 600, {
//       isStatic: true,
//     });
//     const rightWall = Matter.Bodies.rectangle(795, 300, 20, 600, {
//       isStatic: true,
//     });

//     Matter.World.add(world, [ground, leftWall, rightWall]);

//     const createMedal = (x, y, color) => {
//       return Matter.Bodies.circle(x, y, 20, {
//         restitution: 0.8,
//         friction: 0.1,
//         render: { fillStyle: color },
//       });
//     };

//     const medals = [];

//     const colors = ["#FFD700", "#C0C0C0", "#CD7F32"];

//     colors.forEach((color, idx) => {
//       for (let i = 0; i < 10; i++) {
//         medals.push(createMedal(100 + ((i * 60) % 600), 50 + idx * 60, color));
//       }
//     });

//     Matter.World.add(world, medals);

//     const mouse = Matter.Mouse.create(render.canvas);
//     const mouseConstraint = Matter.MouseConstraint.create(engine, {
//       mouse: mouse,
//       constraint: {
//         stiffness: 0.2,
//         render: { visible: false },
//       },
//     });

//     Matter.World.add(world, mouseConstraint);
//     render.mouse = mouse;

//     Matter.Render.run(render);
//     Matter.Engine.run(engine);

//     return () => {
//       Matter.Render.stop(render);
//       Matter.World.clear(world);
//       Matter.Engine.clear(engine);
//       render.canvas.remove();
//       render.textures = {};
//     };
//   }, []);

//   return <div ref={sceneRef} />;
// };

// export default MedalWall2D;
