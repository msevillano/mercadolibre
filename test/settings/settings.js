const envVars = {
};

async function setupFunction() {
  process.env = Object.assign(envVars, process.env);
}

export default setupFunction;
