import { ExecFnPipe } from "./pipes/execFn/execFn.pipe";
import { IsDefinedPipe } from "./pipes/isDefined/is-defined.pipe";
import { IsEqualPipe } from "./pipes/isEqual/is-equal.pipe";

export const PIPES = [
  ExecFnPipe,
  IsEqualPipe,
  IsDefinedPipe,
];
