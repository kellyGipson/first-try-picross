import { PicrossConfigSize } from "./config-size.model";
import { PicrossConfigMap } from "./config-map/config-map.model";

export interface PicrossConfig {
  size: PicrossConfigSize;
  map: PicrossConfigMap;
}
