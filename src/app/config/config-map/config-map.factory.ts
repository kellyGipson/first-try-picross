import { PicrossTile } from "../config-constants";
import { IPicrossConfigMap, PicrossConfigMap } from "./config-map.model";

export class PicrossConfigMapFactory extends PicrossConfigMap {
  static build(tileMap: PicrossTile[][]) {
    const configMap: IPicrossConfigMap = {};
    tileMap.forEach((row, idx) => {
      Object.assign(configMap, { [idx]: row })
    });

    return new PicrossConfigMap(configMap);
  }
}
