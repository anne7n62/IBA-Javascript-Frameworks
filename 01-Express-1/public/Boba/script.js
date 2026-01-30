



//two seperate things matter needs
//first thing: an engine - computation and math behind this
//second thing: a renderer - draws the engine
//we need to te where matter is getting depoyed

//alias is a shortcut to make script cleaner
// const Engine = Matter.Engine;
// const Render = Matter.Render;
const { Engine, Render, Bodies, World, MouseConstraint, Composites, Svg } = Matter;

//this is where we want our engine
const sectionTag = document.querySelector("section.shapes");

const w = window.innerWidth;
const h = window.innerHeight;

const engine = Engine.create();
const renderer = Render.create({
  element: sectionTag,
  engine: engine,
  options: {
    height: h,
    width: w,
    background: "transparent",
    wireframes: false,
    pixelRatio: window.devicePixelRatio,
  },
});

//have ability to create shape - run smth
//Matter.Bodies.circle(x, y, radius, [options], [maxSides]) → Body
const createShape = function (x, y) {
  return Bodies.rectangle(x, y, 38, 50, {
    render: {
      sprite: {
        texture: "bubble.png",
        xScale: 0.05,
        yScale: 0.05,
      },
    },
  });
};


//making center ball
// const bigBall = Bodies.circle(w / 2, h / 2, 250, {
//   isStatic: true,
//   render: {
//     fillStyle: "#fff",
//   },
// });

const wallOptions = {
  isStatic: true,
  render: {
    visible: false,
  },
};

//making ground and ceiling
const ground = Bodies.rectangle(w / 2, h + 50, w + 100, 100, wallOptions);
const ceiling = Bodies.rectangle(w / 2, -50, w + 100, 100, wallOptions);
const leftWall = Bodies.rectangle(-50, h / 2, 100, h + 100, wallOptions);
const rightWall = Bodies.rectangle(w + 50, h / 2, 100, h + 100, wallOptions);

const mouseControl = MouseConstraint.create(engine, {
  element: sectionTag,
  constraint: {
    render: {
      visible: false,
    },
  },
});

const initialShapes = Composites.stack(50, 50, 15, 5, 40, 40, function (x, y) {
  return createShape(x, y);
});

//add to world
World.add(engine.world, [ground, ceiling, leftWall, rightWall, mouseControl, initialShapes]);

//00 when we click the page, add new shape
document.addEventListener("click", function (event) {
  const shape = createShape(event.pageX, event.pageY);
  World.add(engine.world, shape);
});

//run both engine and renderer
Engine.run(engine);
Render.run(renderer);

let time = 0;
const changeGravity = function () {
  time = time + 0;

  // console.log(time);

  engine.world.gravity.y = 0.2;
  // engine.world.gravity.x = 0.5;
  // engine.world.gravity.scale = 0.5;

  requestAnimationFrame(changeGravity);
}

changeGravity();

/******************** */

const rootTag = document.querySelector(":root");

const gradientColors = [
  { bg1: "rgb(253, 125, 165)", bg2: "rgb(254, 171, 199)", dotcolor: "255, 92, 152" },
  { bg1: "rgb(149, 176, 221)", bg2: "rgb(139, 210, 244)", dotcolor: "127, 115, 179" },
  { bg1: "rgb(71, 202, 95)", bg2: "rgb(199, 232, 207)", dotcolor: "199, 232, 207" },
];

const buttons = document.querySelectorAll(".change-gradient");

const assignPalette = (index) => {
  rootTag.style.setProperty("--color-bg1", gradientColors[index].bg1);
  rootTag.style.setProperty("--color-bg2", gradientColors[index].bg2);
  rootTag.style.setProperty("--color1", gradientColors[index].dotcolor);
  rootTag.style.setProperty("--color2", gradientColors[index].dotcolor);
  rootTag.style.setProperty("--color3", gradientColors[index].dotcolor);
  rootTag.style.setProperty("--color4", gradientColors[index].dotcolor);
  rootTag.style.setProperty("--color5", gradientColors[index].dotcolor);
};

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    assignPalette(index);
  });
});

// Set initial palette
assignPalette(0);
