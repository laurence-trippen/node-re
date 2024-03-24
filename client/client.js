import { loadAddons } from "./core/addon.js";

const main = async () => {
  console.log(process.cwd());

  await loadAddons();
};

main();
