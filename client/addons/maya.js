const loadAddon = () => {
  console.log('Init Maya plugin');

  return {
    name: 'Maya',
    description: 'Maya Plugin',
    version: [1, 0, 0],
    unload: () => {
      console.log("Unload Maya Plugin");
    }
  };
};

export {
  loadAddon,
};
