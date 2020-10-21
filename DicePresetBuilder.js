export class DicePresetBuilder {
  static BuildPresets() {
    game.dice3d.addSystem({id:"FBL", name: "Forbidden Lands"}, true);

        game.dice3d.addColorset({
            name: 'FBLe',
            description: "Forbidden Lands Red/Gold",
            category: "Forbidden Lands",
            foreground: '#f2c731',
            background: "#912023",
            edge: '#692d18',
            outline: '#612727',
            material: 'metal'
        },"default");

        game.dice3d.addDicePreset({
          type: "d6",
          labels: [
            "modules/dice-so-fl/textures/Bane.png",
            "2","3","4","5",
            "modules/dice-so-fl/textures/Success.png"
          ],
          bumpMaps: ["modules/dice-so-fl/textures/Bane-Bump.png",
            "2","3","4","5",
            "modules/dice-so-fl/textures/Success-Bump.png"
          ],
          colorset:"FBLe",
          system: "FBL"
        });

  }
}