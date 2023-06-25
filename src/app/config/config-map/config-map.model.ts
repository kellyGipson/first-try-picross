import { assign, get, keysIn } from "lodash";
import { PicrossTile } from "../config-constants";

export class PicrossConfigMap implements IPicrossConfigMap {
  [index: number]: PicrossTile[];

  protected constructor(tileMap: Partial<IPicrossConfigMap>) {
    assign(this, tileMap);
  }

  every(op: PicrossConfigTilePredicate): boolean {
    return this._buildArrFromThis().every(op);
  }

  forEach(op: PicrossConfigTilePredicate): void {
    this._buildArrFromThis().forEach(op);
  }

  getRow(rowNum: number): PicrossTile[] {
    return get(this, rowNum - 1);
  }

  getColumn(colNum: number): PicrossTile[] {
    let column: PicrossTile[] = [];

    this.every((row, idx) => {
      const columnItem = get(row, colNum - 1);
      if (columnItem === undefined) {
        column = undefined;
        return false;
      }
      column.push(columnItem);
      return true;
    });

    return column;
  }

  private _buildArrFromThis(): PicrossTile[][] {
    return keysIn(this).map((key) => get(this, key));
  }
}

type PicrossConfigTilePredicate = (item: PicrossTile[], idx: number, array: PicrossTile[][]) => void;

export interface IPicrossConfigMap {
  [index: number]: PicrossTile[];
}
