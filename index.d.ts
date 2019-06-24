/* Declaration file wrriten by ronthecookie <ronthecookie0101@gmail.com>
 * Need to finish!!!!
 */
import { Vec3 } from "vec3";
import { Chunk } from "prismarine-chunk";
import { Block } from "prismarine-block";

export default function setVersion(mcVersion: string): void;
interface iniFunc {
    (x: number, y: number, z: number): Chunk;
}
interface chunkGeneratorFunc {
    (chunkX: number, chunkZ: number): Chunk;
}
export class World {
    constructor(chunkGenerator: chunkGeneratorFunc, regionFolder: string, savingInterval?: number);

    initialize(
        iniFunc: iniFunc,
        length: number,
        width: number,
        height: number,
        iniPos: Vec3
    );
    getColumns(): Chunk[];
    getColumn(chunkX: number, chunkZ: number): Promise<Chunk>;

    setColumn(chunkX: number, chunkZ: number, chunk: Chunk, save: boolean): Promise<void>;

    startSaving(): void;

    waitSaving(): Promise<void>;

    stopSaving(): void;

    queueSaving(chunkX: number, chunkZ: number): void;

    saveAt(pos: Vec3): Promise<void>;

    getColumnAt(pos: Vec3): Promise<Chunk>

    setBlock(pos: Vec3, block: Block): Promise<void>;

    getBlock(pos: Vec3): Promise<Block>;

    getBlockType(pos: Vec3): Promise<number>;

    getBlockData(pos: Vec3): Promise<object>;

    getBlockLight(pos: Vec3): Promise<number>;

    getSkyLight(pos: Vec3): Promise<number>;

    getBiome(pos: Vec3): Promise<number>;

    setBlockType(pos: Vec3, blockType: number): Promise<void>;
    setBlockData(pos: Vec3, data: Object): Promise<void>;

    setBlockLight(pos: Vec3, light: number): Promise<void>;

    setSkyLight(pos: Vec3, light: number): Promise<void>;

    setBiome(pos: Vec3, biome: number): Promise<void>;
}
