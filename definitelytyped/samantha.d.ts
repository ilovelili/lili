// Type definitions for Samantha JS
// Definitions by: mj <route666@live.cn>

declare var samantha: Samantha.ISamanthaStatic;

declare module Samantha {
    interface ICoord {
        coord: number[];
    }

    interface IDuration {
        value: number;
        dots: number;
    }

    interface ISamanthaNote {
        duration: IDuration;
        coord: ICoord;
        octave(): number;
        name(): string;
        accidentalValue(): number;
        accidental(): string;
        key(): number;
        fq(): number;
        chroma(): number;
        scale(scale: ISamanthaScale): ISamanthaScale;

    }

    interface ISamanthaChord {
        
    }

    interface ISamanthaInterval {
        
    }

    interface ISamanthaScale {
        
    }

    interface ISamanthaStatic {
        note(note: any, duration: any): ISamanthaNote;



    }
}
