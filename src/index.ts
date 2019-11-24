import {TextEncoder, TextDecoder} from "text-coder";

export class Utf8 {
    
    static encode(str: string): Uint8Array {
        return new TextEncoder().encode(str);
    }
    
    static decode(data: Uint8Array): string {
        return new TextDecoder().decode(data);
    }
}