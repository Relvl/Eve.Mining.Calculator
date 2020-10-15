import {EMineralDictionary} from "./EMineralDictionary";

export enum EOreDictionary {
    VELDSPAR = "VELDSPAR",
    SPODUMAIN = "SPODUMAIN",
    SCORDITE = "SCORDITE",
    PYROXERES = "PYROXERES",
    PLAGIOCLASE = "PLAGIOCLASE",
    OMBER = "OMBER",
    MERCOXIT = "MERCOXIT",
    KERNITE = "KERNITE",
    JASPET = "JASPET",
    HEMORPHITE = "HEMORPHITE",
    HEDBERGITE = "HEDBERGITE",
    GNEISS = "GNEISS",
    OCHRE = "OCHRE",
    CROKITE = "CROKITE",
    BISTOT = "BISTOT",
    ARKONOR = "ARKONOR",
    RAKOVENE = "RAKOVENE",
    TALASSONITE = "TALASSONITE",
}

// noinspection MagicNumberJS
export class OreDictionaryElement {
    static ALL = {
        [EOreDictionary.VELDSPAR]: new OreDictionaryElement(0.1, 333).setProcessingVariants(
            {[EMineralDictionary.TRITANIUM]: 1000},
            {
                "Veldspar": 1.0,
                "Concentrated Veldspar": 1.05,
                "Dense Veldspar": 1.1,
            }
        ),
        [EOreDictionary.SPODUMAIN]: new OreDictionaryElement(16.0, 250).setProcessingVariants(
            {
                [EMineralDictionary.TRITANIUM]: 71000,
                [EMineralDictionary.PYERITE]: 9000,
                [EMineralDictionary.MEGACYTE]: 140,
            },
            {"Spodumain": 1.0, "Bright Spodumain": 1.05, "Gleaming Spodumain": 1.1}
        ),
        [EOreDictionary.SCORDITE]: new OreDictionaryElement(0.15, 333).setProcessingVariants(
            {[EMineralDictionary.TRITANIUM]: 833, [EMineralDictionary.PYERITE]: 416},
            {
                "Scordite": 1.0,
                "Condensed Scordite": 1.05,
                "Massive Scordite": 1.1,
            }
        ),
        [EOreDictionary.PYROXERES]: new OreDictionaryElement(0.3, 333).setProcessingVariants(
            {
                [EMineralDictionary.TRITANIUM]: 0,
                [EMineralDictionary.PYERITE]: 0,
                [EMineralDictionary.MEXALLON]: 0,
                [EMineralDictionary.NOCXIUM]: 0,
            },
            {"Pyroxeres": 1.0, "Solid Pyroxeres": 1.05, "Viscous Pyroxeres": 1.1}
        ),
        [EOreDictionary.PLAGIOCLASE]: new OreDictionaryElement(0.35, 333).setProcessingVariants(
            {
                [EMineralDictionary.TRITANIUM]: 256,
                [EMineralDictionary.PYERITE]: 512,
                [EMineralDictionary.MEXALLON]: 256,
            },
            {
                "Plagioclase": 1.0,
                "Azure Plagioclase": 1.05,
                "Rich Plagioclase": 1.1,
            }
        ),
        [EOreDictionary.OMBER]: new OreDictionaryElement(0.6, 500).setProcessingVariants(
            {
                [EMineralDictionary.TRITANIUM]: 307,
                [EMineralDictionary.PYERITE]: 123,
                [EMineralDictionary.ISOGEN]: 307,
            },
            {
                "Omber": 1.0,
                "Silvery Omber": 1.05,
                "Golden Omber": 1.1,
            }
        ),
        [EOreDictionary.MERCOXIT]: new OreDictionaryElement(40.0, 250).setProcessingVariants(
            {
                [EMineralDictionary.MORPHITE]: 530,
            },
            {
                "Mercoxit": 1.0,
                "Magma Mercoxit": 1.05,
                "Vitreous Mercoxit": 1.1,
            }
        ),
        [EOreDictionary.KERNITE]: new OreDictionaryElement(1.2, 400).setProcessingVariants(
            {
                [EMineralDictionary.TRITANIUM]: 386,
                [EMineralDictionary.MEXALLON]: 773,
                [EMineralDictionary.ISOGEN]: 386,
            },
            {
                "Kernite": 1.0,
                "Luminous Kernite": 1.05,
                "Fiery Kernite": 1.1,
            }
        ),
        [EOreDictionary.JASPET]: new OreDictionaryElement(2.0, 500).setProcessingVariants(
            {
                [EMineralDictionary.TRITANIUM]: 259,
                [EMineralDictionary.PYERITE]: 437,
                [EMineralDictionary.MEXALLON]: 518,
                [EMineralDictionary.NOCXIUM]: 259,
                [EMineralDictionary.ZYDRINE]: 8,
            },
            {
                "Jaspet": 1.0,
                "Pure Jaspet": 1.05,
                "Pristine Jaspet": 1.1,
            }
        ),
        [EOreDictionary.HEMORPHITE]: new OreDictionaryElement(3.0, 500).setProcessingVariants(
            {
                [EMineralDictionary.TRITANIUM]: 212,
                [EMineralDictionary.ISOGEN]: 212,
                [EMineralDictionary.NOCXIUM]: 424,
                [EMineralDictionary.ZYDRINE]: 28,
            },
            {
                "Hemorphite": 1.0,
                "Vivid Hemorphite": 1.05,
                "Radiant Hemorphite": 1.1,
            }
        ),
        [EOreDictionary.HEDBERGITE]: new OreDictionaryElement(3.0, 500).setProcessingVariants(
            {
                [EMineralDictionary.ISOGEN]: 708,
                [EMineralDictionary.NOCXIUM]: 354,
                [EMineralDictionary.ZYDRINE]: 32,
            },
            {
                "Hedbergite": 1.0,
                "Vitric Hedbergite": 1.05,
                "Glazed Hedbergite": 1.1,
            }
        ),
        [EOreDictionary.GNEISS]: new OreDictionaryElement(5.0, 400).setProcessingVariants(
            {
                [EMineralDictionary.TRITANIUM]: 171,
                [EMineralDictionary.MEXALLON]: 171,
                [EMineralDictionary.ISOGEN]: 343,
                [EMineralDictionary.ZYDRINE]: 171,
            },
            {
                "Gneiss": 1.0,
                "Iridescent Gneiss": 1.05,
                "Prismatic Gneiss": 1.1,
            }
        ),
        [EOreDictionary.OCHRE]: new OreDictionaryElement(8.0, 400).setProcessingVariants(
            {
                [EMineralDictionary.TRITANIUM]: 250,
                [EMineralDictionary.NOCXIUM]: 500,
                [EMineralDictionary.ZYDRINE]: 250,
            },
            {
                "Dark Ochre": 1.0,
                "Onyx Ochre": 1.05,
                "Obsidian Ochre": 1.1,
            }
        ),
        [EOreDictionary.CROKITE]: new OreDictionaryElement(16.0, 250).setProcessingVariants(
            {
                [EMineralDictionary.TRITANIUM]: 331,
                [EMineralDictionary.NOCXIUM]: 331,
                [EMineralDictionary.ZYDRINE]: 663,
            },
            {
                "Crokite": 1.0,
                "Sharp Crokite": 1.05,
                "Crystalline Crokite": 1.1,
            }
        ),
        [EOreDictionary.BISTOT]: new OreDictionaryElement(16.0, 200).setProcessingVariants(
            {
                [EMineralDictionary.PYERITE]: 170,
                [EMineralDictionary.ZYDRINE]: 341,
                [EMineralDictionary.MEGACYTE]: 170,
            },
            {
                "Bistot": 1.0,
                "Triclinic Bistot": 1.05,
                "Monoclinic Bistot": 1.1,
            }
        ),
        [EOreDictionary.ARKONOR]: new OreDictionaryElement(16.0, 200).setProcessingVariants(
            {
                [EMineralDictionary.TRITANIUM]: 300,
                [EMineralDictionary.ZYDRINE]: 166,
                [EMineralDictionary.MEGACYTE]: 333,
            },
            {
                "Arkonor": 1.0,
                "Crimson Arkonor": 1.05,
                "Prime Arkonor": 1.1,
            }
        ),
        [EOreDictionary.RAKOVENE]: new OreDictionaryElement(16.0, 200).setProcessingVariants(
            {
                [EMineralDictionary.TRITANIUM]: 0,
            },
            {
                "Rakovene": 1.0,
            }
        ),
        [EOreDictionary.TALASSONITE]: new OreDictionaryElement(16.0, 200).setProcessingVariants(
            {
                [EMineralDictionary.TRITANIUM]: 0,
            },
            {
                "Talassonite": 1.0,
            }
        ),
    };

    processing: {[mineal in EMineralDictionary]?: number} = {};
    variants: {[variant: string]: number} = {};

    private constructor(public readonly volume: number, public readonly unitPerProcessing: number) {}

    private setProcessingVariants(processing: {[mineal in EMineralDictionary]?: number}, variants: {[variant: string]: number}): OreDictionaryElement {
        this.processing = processing;
        this.variants = variants;
        return this;
    }
}