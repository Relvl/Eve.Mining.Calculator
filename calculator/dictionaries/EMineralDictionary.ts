export class EMineralDictionary {
    static TRITANIUM = new EMineralDictionary("Tritanium");
    static PYERITE = new EMineralDictionary("Pyerite");
    static MEXALLON = new EMineralDictionary("Mexallon");
    static ISOGEN = new EMineralDictionary("Isogen");
    static NOCXIUM = new EMineralDictionary("Nocxium");
    static ZYDRINE = new EMineralDictionary("Zydrine");
    static MEGACYTE = new EMineralDictionary("Megacyte");
    static MORPHITE = new EMineralDictionary("Morphite");

    public readonly volume = 0.1;

    private constructor(public name: string) {}
}