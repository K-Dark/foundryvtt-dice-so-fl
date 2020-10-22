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

export class FBLDieConsumable6 extends Die {
    constructor(termData) {
        termData.faces = 6;
        super(termData);
    }
    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "u";

    /** @override */
    get total() {
        return this.results.length;
    }

    /* -------------------------------------------- */

    /** @override */
    static getResultLabel(result) {
        return {
            1: '<img src="modules/dice-so-fl/textures/Bane.png" />',
            2: '<img src="modules/dice-so-fl/textures/Bane.png" />',
            3: '',
            4: '',
            5: '',
            6: '',
        }[result];
    }
}

export class FBLDieConsumable8 extends Die {
    constructor(termData) {
        termData.faces = 8;
        super(termData);
    }
    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "i";

    /** @override */
    get total() {
        return this.results.length;
    }

    /* -------------------------------------------- */

    /** @override */
    static getResultLabel(result) {
        return {
            1: '<img src="modules/dice-so-fl/textures/Bane.png" />',
            2: '<img src="modules/dice-so-fl/textures/Bane.png" />',
            3: '',
            4: '',
            5: '',
            6: '',
            7: '',
            8: '',
        }[result];
    }
}

export class FBLDieConsumable10 extends Die {
    constructor(termData) {
        termData.faces = 10;
        super(termData);
    }
    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "o";

    /** @override */
    get total() {
        return this.results.length;
    }

    /* -------------------------------------------- */

    /** @override */
    static getResultLabel(result) {
        return {
            1: '<img src="modules/dice-so-fl/textures/Bane.png" />',
            2: '<img src="modules/dice-so-fl/textures/Bane.png" />',
            3: '',
            4: '',
            5: '',
            6: '',
            7: '',
            8: '',
            9: '',
            10: '',
        }[result];
    }
}

export class FBLDieConsumable12 extends Die {
    constructor(termData) {
        termData.faces = 12;
        super(termData);
    }
    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "p";

    /** @override */
    get total() {
        return this.results.length;
    }

    /* -------------------------------------------- */

    /** @override */
    static getResultLabel(result) {
        return {
            1: '<img src="modules/dice-so-fl/textures/Bane.png" />',
            2: '<img src="modules/dice-so-fl/textures/Bane.png" />',
            3: '',
            4: '',
            5: '',
            6: '',
            7: '',
            8: '',
            9: '',
            10: '',
            11: '',
            12: '',
        }[result];
    }
}