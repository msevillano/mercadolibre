const envVars = {
  PLANET_1_DISTANCE: 500,
  PLANET_1_SPEED: 1,
  PLANET_2_DISTANCE: 2000,
  PLANET_2_SPEED: 3,
  PLANET_3_DISTANCE: 1000,
  PLANET_3_SPEED: -5,
};

async function setupFunction() {
  process.env = Object.assign(envVars, process.env);
}

export default setupFunction;
