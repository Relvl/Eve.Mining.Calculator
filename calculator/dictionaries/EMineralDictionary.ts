export enum EMineralDictionary {
    TRITANIUM = "TRITANIUM",
    PYERITE = "PYERITE",
    MEXALLON = "MEXALLON",
    ISOGEN = "ISOGEN",
    NOCXIUM = "NOCXIUM",
    ZYDRINE = "ZYDRINE",
    MEGACYTE = "MEGACYTE",
    MORPHITE = "MORPHITE",
}

export class MineralDictionaryElement {
    static ALL = {
        [EMineralDictionary.TRITANIUM]: new MineralDictionaryElement("Tritanium"),
        [EMineralDictionary.PYERITE]: new MineralDictionaryElement("Pyerite"),
        [EMineralDictionary.MEXALLON]: new MineralDictionaryElement("Mexallon"),
        [EMineralDictionary.ISOGEN]: new MineralDictionaryElement("Isogen"),
        [EMineralDictionary.NOCXIUM]: new MineralDictionaryElement("Nocxium"),
        [EMineralDictionary.ZYDRINE]: new MineralDictionaryElement("Zydrine"),
        [EMineralDictionary.MEGACYTE]: new MineralDictionaryElement("Megacyte"),
        [EMineralDictionary.MORPHITE]: new MineralDictionaryElement("Morphite"),
    };

    public readonly volume = 0.1;

    private constructor(public name: string) {}
}