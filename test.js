
/**
 * test
 */

import { sin, saw, ramp, tri, sqr, noise } from './index';

export function dsp(t){
  //return (sqr(t, .1) + sin(t, .1)) / 3;
  return [sin, saw, ramp, tri, sqr, noise][2*t%6|0](t, 300) * 0.4;
}
