import {DicePresetBuilder} from './DicePresetBuilder.js';

/**
 * Registers the exposed settings for the various 3D dice options.
 */
Hooks.once('init', () => {
    console.log("World is Init");
});

/**
 * Foundry is ready, let's create a new Dice3D!
 */
Hooks.once('ready', () => {
    console.log("World is Ready");
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
