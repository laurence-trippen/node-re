const loadAddon = () => {
  console.log('Init blender plugin');

  return {
    name: 'Blender',
    description: 'Blender Plugin',
    version: [1, 0, 0],
    unload: () => {
      console.log("Unload Blender Plugin");
    }
  };
};

export {
  loadAddon,
};
