import { DicePresetBuilder } from './DicePresetBuilder.js';
import { FBLDieBase, FBLDieSkill, FBLDieGear } from "./DieExtensions.js";
import { FBLDieConsumable6, FBLDieConsumable8, FBLDieConsumable10, FBLDieConsumable12 } from "./DieExtensions.js";

/**
 * Registers the exposed settings for the various 3D dice options.
 */
Hooks.once('init', () => {
    console.log("World is Init");
    
    CONFIG.is07x = Number(`${game.data.version.split(".")[0]}.${game.data.version.split(".")[1]}`) > 0.6;

    if (CONFIG.is07x) {
        CONFIG.Dice.terms["b"] = FBLDieBase;
        CONFIG.Dice.terms["s"] = FBLDieSkill;
        CONFIG.Dice.terms["g"] = FBLDieGear;
        CONFIG.Dice.terms["u"] = FBLDieConsumable6;
        CONFIG.Dice.terms["i"] = FBLDieConsumable8;
        CONFIG.Dice.terms["o"] = FBLDieConsumable10;
        CONFIG.Dice.terms["p"] = FBLDieConsumable12;
    }
});

/**
 * Foundry is ready, let's create a new Dice3D!
 */
Hooks.once('diceSoNiceReady', (dice3d) => {
    DicePresetBuilder.BuildPresets(dice3d);
});

/**
 * Intercepts all roll-type messages hiding the content until the animation is finished
 */
Hooks.on('createChatMessage', (chatMessage) => {
    console.log("Chat message created ${chatMessage}");
    /*if (!chatMessage.isRoll || !chatMessage.isContentVisible || (game.dice3d && game.dice3d.messageHookDisabled)) {
        return;
    }

    if(Dice3D.CONFIG.sounds) {
        mergeObject(chatMessage.data, { "-=sound": null });
    }

    chatMessage._dice3danimating = true;
    Hooks.callAll("diceSoNiceRollStart", chatMessage.id);
    game.dice3d.showForRoll(chatMessage.roll, chatMessage.user).then(displayed => {
        delete chatMessage._dice3danimating;
        $(`#chat-log .message[data-message-id="${chatMessage.id}"]`).show();
        Hooks.callAll("diceSoNiceRollComplete", chatMessage.id);
        ui.chat.scrollBottom();
    });*/
});

/**
 * Hide messages which are animating rolls.
 */
Hooks.on("renderChatMessage", (message, html, data) => {
    console.log("Chat message rendered ${message}, ${html}, ${data}");
    /*if (game.dice3d && game.dice3d.messageHookDisabled) {
        return;
    }
    if (message._dice3danimating ) html.hide();*/
});
