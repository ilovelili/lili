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
        dominant(additional: string): ISamanthaChord;
        subdominant(additional: string): ISamanthaChord;
        parallel(additional: string): ISamanthaChord;
        quality() : string;
        chordType() : string;
        get(interval: ISamanthaInterval): ISamanthaNote;
        interval(interval: ISamanthaInterval): SamanthaChord;
        transpose(interval: ISamanthaInterval): ISamanthaInterval;
        toString(): string;
    }

    interface ISamanthaInterval {
        name(): string;
        semitones(): number;
        number(): number;
        value(): number;
        type(): string;
        base(): string;
        direction(): string;
        simple(): string;
        compound(ignore: boolean): string;
        isCompound(): boolean;
        octaves(): number;
        invert(): ISamanthaInterval;
        quality(): string;
        qualityValue(): int;
        equal(): boolean;
        greater(): boolean;
        smaller(): boolean;
        toString(): string;
    }

    interface ISamanthaScale {
        notes(): ISamanthaNote[];
        simple() : string[];
        type(): string;
        get(i: number): ISamanthaNote;
        solfege(index: number, showOctaves: boolean): string;
        interval(interval: ISamanthaInterval): ISamanthaScale;
        transpose(interval: ISamthaInterval): ISamanthaScale;
    }

    interface ISamanthaStatic {
        note(note: any, duration: any): ISamanthaNote;
        chord(chord: string, symbol: any): ISamanthaChord;
        interval(from: any, to: any): ISamanthaInterval;
        scale(tonic: any, scale: scale): ISamanthaScale;
    }
}
