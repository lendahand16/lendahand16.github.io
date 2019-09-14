
namespace lendahand16 {

    export function sleep(ms: number): Promise<number> {
        return new Promise(r=>setTimeout(r,ms,ms))
    };
    
    export function input(prompt: string): Promise<string> {
        return new Promise(async resolve=>{
            let inputDataBuffer = new Uint8Array(2048);
            await Deno.stdout.write(new TextEncoder().encode(prompt));
            await Deno.stdin.read(inputDataBuffer);
            resolve((new TextDecoder().decode(inputDataBuffer)).match(/[^\0]/g).join("").trim());
        });
    }

}
export default lendahand16;
