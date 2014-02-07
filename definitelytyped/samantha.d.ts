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
        interval(interval: ISamanthaInterval): ISamanthaInterval;
        transpose(interval: ISamanthaInterval): ISamanthaNote;
        chord(chord: ISamanthaChord): ISamanthaChord;
        helmholtz(): string;
        scientific(): string;
        enharmonics(): ISamanthaNote[];
        solfege(scale: ISamanthaScale, showOctaves: boolean): string;
        durationName(): string;
        durationInSeconds(bpm: number, beatUnit: number): number;
        scaleDegree(scale: ISamanthaScale): number;
        toString(displayOctave: boolean): string;
    }

    interface ISamanthaChord {
        notes(): ISamanthaNote[];
        voicing(voicing: ISamanthaInterval[]): ISamanthaInterval[];
        resetVoicing(): void;

    }

    interface ISamanthaInterval {

    }

    interface ISamanthaScale {

    }

    interface ISamanthaStatic {
        note(note: any, duration: any): ISamanthaNote;



    }
}
