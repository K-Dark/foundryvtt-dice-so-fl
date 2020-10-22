export class DicePresetBuilder {
  static BuildPresets(dice3d) {
    dice3d.addSystem({id:"FBL", name: "Forbidden Lands"}, true);

    dice3d.addColorset({
        name: 'FBLb',
        description: "Forbidden Lands Red/Gold",
        category: "Forbidden Lands",
        foreground: '#000000',
        background: "#e0e0e0",
        edge: '#3b3b3b',
        outline: '#3b3b3b',
        material: 'plastic'
    },"default");

    dice3d.addColorset({
        name: 'FBLs',
        description: "Forbidden Lands Red/Gold",
        category: "Forbidden Lands",
        foreground: '#000000',
        background: "#00f51a",
        edge: '#3b3b3b',
        outline: '#3b3b3b',
        material: 'metal'
    },"default");

    dice3d.addColorset({
        name: 'FBLg',
        description: "Forbidden Lands Red/Gold",
        category: "Forbidden Lands",
        foreground: '#f2c731',
        background: "#912023",
        edge: '#692d18',
        outline: '#612727',
        material: 'wood'
    },"default");

    dice3d.addDicePreset({
      type: "db",
      labels: [
        "modules/dice-so-fl/textures/Bane.png",
        "2","3","4","5",
        "modules/dice-so-fl/textures/Success.png"
      ],
      bumpMaps: ["modules/dice-so-fl/textures/Bane-Bump.png",
        ,,,,
        "modules/dice-so-fl/textures/Success-Bump.png"
      ],
      colorset:"FBLb",
      system: "FBL"
    }, "d6");

    dice3d.addDicePreset({
      type: "ds",
      labels: [
        "modules/dice-so-fl/textures/Bane.png",
        "2","3","4","5",
        "modules/dice-so-fl/textures/Success.png"
      ],
      bumpMaps: ["modules/dice-so-fl/textures/Bane-Bump.png",
        ,,,,
        "modules/dice-so-fl/textures/Success-Bump.png"
      ],
      colorset:"FBLs",
      system: "FBL"
    }, "d6");

    dice3d.addDicePreset({
      type: "dg",
      labels: [
        "modules/dice-so-fl/textures/Bane.png",
        "2","3","4","5",
        "modules/dice-so-fl/textures/Success.png"
      ],
      bumpMaps: ["modules/dice-so-fl/textures/Bane-Bump.png",
        ,,,,
        "modules/dice-so-fl/textures/Success-Bump.png"
      ],
      colorset:"FBLg",
      system: "FBL"
    }, "d6");

  }
}