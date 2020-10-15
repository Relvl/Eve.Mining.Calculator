import {EMineralDictionary} from "./EMineralDictionary";

// noinspection MagicNumberJS
export class EOreDictionary {
    static VELDSPAR = new EOreDictionary(0.1, 333).setProcessingVariants({[EMineralDictionary.TRITANIUM]: 1000},
        {"Veldspar": 1.00, "Concentrated Veldspar": 1.05, "Dense Veldspar": 1.1});
    static SPODUMAIN = new EOreDictionary(16.0, 250).setProcessingVariants({[EMineralDictionary.TRITANIUM]: 71000, [EMineralDictionary.PYERITE]: 9000, [EMineralDictionary.MEGACYTE]: 140},
        {"Spodumain": 1.00, "Bright Spodumain": 1.05, "Gleaming Spodumain": 1.1});
    static SCORDITE = new EOreDictionary(0.15, 333).setProcessingVariants({[EMineralDictionary.TRITANIUM]: 833, [EMineralDictionary.PYERITE]: 416},
        {"Scordite": 1.00, "Condensed Scordite": 1.05, "Massive Scordite": 1.1});
    static PYROXERES = new EOreDictionary(0.3, 333).setProcessingVariants({[EMineralDictionary.TRITANIUM]: 0, [EMineralDictionary.PYERITE]: 0, [EMineralDictionary.MEXALLON]: 0, [EMineralDictionary.NOCXIUM]: 0},
        {"Pyroxeres": 1.00, "Solid Pyroxeres": 1.05, "Viscous Pyroxeres": 1.1});
    static PLAGIOCLASE = new EOreDictionary(0.35, 333).setProcessingVariants({
        [EMineralDictionary.TRITANIUM]: 256,
        [EMineralDictionary.PYERITE]: 512,
        [EMineralDictionary.MEXALLON]: 256,
    }, {"Plagioclase": 1.00, "Azure Plagioclase": 1.05, "Rich Plagioclase": 1.1});
    static OMBER = new EOreDictionary(0.6, 500).setProcessingVariants({
        [EMineralDictionary.TRITANIUM]: 307,
        [EMineralDictionary.PYERITE]: 123,
        [EMineralDictionary.ISOGEN]: 307,
    }, {"Omber": 1.00, "Silvery Omber": 1.05, "Golden Omber": 1.1});
    static MERCOXIT = new EOreDictionary(40.0, 250).setProcessingVariants({
        [EMineralDictionary.MORPHITE]: 530,
    }, {"Mercoxit": 1.00, "Magma Mercoxit": 1.05, "Vitreous Mercoxit": 1.1});
    static KERNITE = new EOreDictionary(1.2, 400).setProcessingVariants({
        [EMineralDictionary.TRITANIUM]: 386,
        [EMineralDictionary.MEXALLON]: 773,
        [EMineralDictionary.ISOGEN]: 386,
    }, {"Kernite": 1.00, "Luminous Kernite": 1.05, "Fiery Kernite": 1.1});
    static JASPET = new EOreDictionary(2.0, 500).setProcessingVariants({
        [EMineralDictionary.TRITANIUM]: 259,
        [EMineralDictionary.PYERITE]: 437,
        [EMineralDictionary.MEXALLON]: 518,
        [EMineralDictionary.NOCXIUM]: 259,
        [EMineralDictionary.ZYDRINE]: 8,
    }, {"Jaspet": 1.00, "Pure Jaspet": 1.05, "Pristine Jaspet": 1.1});
    static HEMORPHITE = new EOreDictionary(3.0, 500).setProcessingVariants({
        [EMineralDictionary.TRITANIUM]: 212,
        [EMineralDictionary.ISOGEN]: 212,
        [EMineralDictionary.NOCXIUM]: 424,
        [EMineralDictionary.ZYDRINE]: 28,
    }, {"Hemorphite": 1.00, "Vivid Hemorphite": 1.05, "Radiant Hemorphite": 1.1});
    static HEDBERGITE = new EOreDictionary(3.0, 500).setProcessingVariants({
        [EMineralDictionary.ISOGEN]: 708,
        [EMineralDictionary.NOCXIUM]: 354,
        [EMineralDictionary]: 32,
    }, {"Hedbergite": 1.00, "Vitric Hedbergite": 1.05, "Glazed Hedbergite": 1.1});
    static GNEISS = new EOreDictionary(5.0, 400).setProcessingVariants({
        [EMineralDictionary.TRITANIUM]: 171,
        [EMineralDictionary.MEXALLON]: 171,
        [EMineralDictionary.ISOGEN]: 343,
        [EMineralDictionary.ZYDRINE]: 171,
    }, {"Gneiss": 1.00, "Iridescent Gneiss": 1.05, "Prismatic Gneiss": 1.1});
    static OCHRE = new EOreDictionary(8.0, 400).setProcessingVariants({
        [EMineralDictionary.TRITANIUM]: 250,
        [EMineralDictionary.NOCXIUM]: 500,
        [EMineralDictionary.ZYDRINE]: 250,
    }, {"Dark Ochre": 1.00, "Onyx Ochre": 1.05, "Obsidian Ochre": 1.1});
    static CROKITE = new EOreDictionary(16.0, 250).setProcessingVariants({
        [EMineralDictionary.TRITANIUM]: 331,
        [EMineralDictionary.NOCXIUM]: 331,
        [EMineralDictionary.ZYDRINE]: 663,
    }, {"Crokite": 1.00, "Sharp Crokite": 1.05, "Crystalline Crokite": 1.1});
    static BISTOT = new EOreDictionary(16.0, 200).setProcessingVariants({
        [EMineralDictionary.PYERITE]: 170,
        [EMineralDictionary.ZYDRINE]: 341,
        [EMineralDictionary.MEGACYTE]: 170,
    }, {"Bistot": 1.00, "Triclinic Bistot": 1.05, "Monoclinic Bistot": 1.1});
    // todo! уточнить, в разных местах разные цифры. проще в игре прямо глянуть.
    static ARKONOR = new EOreDictionary(16.0, 200).setProcessingVariants({
        [EMineralDictionary.TRITANIUM]: 300,
        [EMineralDictionary.ZYDRINE]: 166,
        [EMineralDictionary.MEGACYTE]: 333,
    }, {"Arkonor": 1.00, "Crimson Arkonor": 1.05, "Prime Arkonor": 1.1});
    static RAKOVENE = new EOreDictionary(16.0, 200).setProcessingVariants({
        []: 0,
        []: 0,
        []: 0,
    }, {"": 1.00});
    static TALASSONITE = new EOreDictionary(16.0, 200).setProcessingVariants({
        []: 0,
        []: 0,
        []: 0,
    }, {"": 1.00});

    static VALUES = [EOreDictionary.VELDSPAR, EOreDictionary.SPODUMAIN, EOreDictionary.SCORDITE, EOreDictionary.PYROXERES, EOreDictionary.PLAGIOCLASE, EOreDictionary.OMBER, EOreDictionary.MERCOXIT, EOreDictionary.KERNITE, EOreDictionary.JASPET, EOreDictionary.HEMORPHITE, EOreDictionary.HEDBERGITE, EOreDictionary.GNEISS, EOreDictionary.OCHRE, EOreDictionary.CROKITE, EOreDictionary.BISTOT, EOreDictionary.ARKONOR, EOreDictionary.RAKOVENE, EOreDictionary.TALASSONITE];

    processing: { [mineal in Partial<EMineralDictionary>]: number } = {};
    variants: {[variant: string]: number} = {};

    private constructor(public readonly volume: number, public readonly unitPerProcessing: number) {}

    private setProcessingVariants(processing: { [mineal in Partial<EMineralDictionary>]: number }, variants: {[variant: string]: number}): EOreDictionary {
        this.processing = processing;
        this.variants = variants;
        return this;
    }
}