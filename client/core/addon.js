import fs from "fs/promises";
import path from "path";

const loadAddons = async () => {
  try {
    const addonPath = path.join(import.meta.dirname, "..", "addons");
    const addonFiles = await fs.readdir(addonPath);

    console.log(addonFiles);

    for (const addonFile of addonFiles) {
      const addonModule = await import(`../addons/${addonFile}`);
      console.log(addonModule);

      // TODO: Validate if loadPlugin func is existent.

      const loadedAddon = addonModule.loadAddon();
      console.log(loadedAddon);
    }

  } catch (e) {
    console.error(e);
  }
};

export {
  loadAddons,
};
