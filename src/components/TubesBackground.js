export async function initTubesCursor(canvas) {
  if (!canvas) return undefined;

  const { default: createCursor } = await import(
    "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
  );

  const app = createCursor(canvas, {
    tubes: {
      colors: ["#f967fb", "#53bc28", "#6958d5"],
      lights: {
        intensity: 200,
        colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
      },
    },
  });

  const handleClick = () => {
    const colors = randomColors(3);
    const lightsColors = randomColors(4);
    app.tubes.setColors(colors);
    app.tubes.setLightsColors(lightsColors);
  };

  document.body.addEventListener("click", handleClick);

  return () => {
    document.body.removeEventListener("click", handleClick);
    if (app?.dispose) app.dispose();
  };
}

function randomColors(count) {
  return new Array(count)
    .fill(0)
    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"));
}