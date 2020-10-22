export class DicePresetBuilder {
  static BuildPresets(dice3d) {
    dice3d.addSystem({id:"FBL", name: "Forbidden Lands"}, true);

    dice3d.addColorset({
        name: 'FBLb',
        description: "Forbidden Lands Blue/Black",
        category: "Forbidden Lands",
        foreground: '#000000',
        background: "#6e8bff",
        edge: '#3b3b3b',
        outline: '#3b3b3b',
        material: 'wood'
    },"default");

    dice3d.addColorset({
        name: 'FBLs',
        description: "Forbidden Lands White/Black",
        category: "Forbidden Lands",
        foreground: '#000000',
        background: "#e0e0e0",
        edge: '#3b3b3b',
        outline: '#3b3b3b',
        material: 'wood'
    },"default");

    dice3d.addColorset({
        name: 'FBLg',
        description: "Forbidden Lands Gold/Black",
        category: "Forbidden Lands",
        foreground: '#000000',
        background: "#917320",
        edge: '#692d18',
        outline: '#612727',
        material: 'wood'
    },"default");

    dice3d.addColorset({
        name: 'FBLc',
        description: "Forbidden Lands Yellow/Black",
        category: "Forbidden Lands",
        foreground: '#000000',
        background: "#f5ea8c",
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
      bumpMaps: [
        "modules/dice-so-fl/textures/Bane-Bump.png",
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
      bumpMaps: [
        "modules/dice-so-fl/textures/Bane-Bump.png",
        ,,,,
        "modules/dice-so-fl/textures/Success-Bump.png"
      ],
      colorset:"FBLg",
      system: "FBL"
    }, "d6");

    dice3d.addDicePreset({
      type: "du",
      labels: [
        "modules/dice-so-fl/textures/Bane.png",
        "modules/dice-so-fl/textures/Bane.png",
        "3","4","5","6"
      ],
      bumpMaps: [
        "modules/dice-so-fl/textures/Bane-Bump.png",
        "modules/dice-so-fl/textures/Bane-Bump.png",
        ,,,,
      ],
      colorset:"FBLc",
      system: "FBL"
    }, "d6");

    dice3d.addDicePreset({
      type: "di",
      labels: [
        "modules/dice-so-fl/textures/Bane.png",
        "modules/dice-so-fl/textures/Bane.png",
        "3","4","5","6","7","8"
      ],
      bumpMaps: [
        "modules/dice-so-fl/textures/Bane-Bump.png",
        "modules/dice-so-fl/textures/Bane-Bump.png",
        ,,,,,
      ],
      colorset:"FBLc",
      system: "FBL"
    }, "d8");

    dice3d.addDicePreset({
      type: "do",
      labels: [
        "modules/dice-so-fl/textures/Bane.png",
        "modules/dice-so-fl/textures/Bane.png",
        "3","4","5","6","7","8","9","10"
      ],
      bumpMaps: [
        "modules/dice-so-fl/textures/Bane-Bump.png",
        "modules/dice-so-fl/textures/Bane-Bump.png",
        ,,,,,,,
      ],
      colorset:"FBLc",
      system: "FBL"
    }, "d10");

    dice3d.addDicePreset({
      type: "dp",
      labels: [
        "modules/dice-so-fl/textures/Bane.png",
        "modules/dice-so-fl/textures/Bane.png",
        "3","4","5","6","7","8","9","10","11","12"
      ],
      bumpMaps: [
        "modules/dice-so-fl/textures/Bane-Bump.png",
        "modules/dice-so-fl/textures/Bane-Bump.png",
        ,,,,,,,,,
      ],
      colorset:"FBLc",
      system: "FBL"
    }, "d12");

  }
}