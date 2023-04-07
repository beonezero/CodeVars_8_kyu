function updateLight(current) {
  const lights = {
    green: "yellow",
    yellow: "red",
    red: "green"
  }
  return lights[current];
}
