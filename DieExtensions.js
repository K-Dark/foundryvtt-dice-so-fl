export class FBLDieBase extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "b";

    /** @override */
    get total() {
        return this.results.length;
    }

    /* -------------------------------------------- */

    /** @override */
    static getResultLabel(result) {
        return {
            1: '<img src="modules/dice-so-fl/textures/Bane.png" />',
            2: '',
            3: '',
            4: '',
            5: '',
            6: '<img src="modules/dice-so-fl/textures/Success.png" />',
        }[result];
    }
}

export class FBLDieSkill extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }
    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "s";

    /** @override */
    get total() {
        return this.results.length;
    }

    /* -------------------------------------------- */

    /** @override */
    static getResultLabel(result) {
        return {
            1: '<img src="modules/dice-so-fl/textures/Bane.png" />',
            2: '',
            3: '',
            4: '',
            5: '',
            6: '<img src="modules/dice-so-fl/textures/Success.png" />',
        }[result];
    }
}

export class FBLDieGear extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }
    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "g";

    /** @override */
    get total() {
        return this.results.length;
    }

    /* -------------------------------------------- */

    /** @override */
    static getResultLabel(result) {
        return {
            1: '<img src="modules/dice-so-fl/textures/Bane.png" />',
            2: '',
            3: '',
            4: '',
            5: '',
            6: '<img src="modules/dice-so-fl/textures/Success.png" />',
        }[result];
    }
}