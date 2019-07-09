import { N, Fn } from '../types'

export const
  smoothstep: Fn<N, N> = t => t*t*(3 - t*2),
  smootherstep: Fn<N, N> = t => t*t*t*(t*(t*6 - 15) + 10),
  smootheststep: Fn<N, N> = t => t*t*t*t*(t*(t*(70 - t*20) - 84) + 35)

export const
  linear: Fn<N, N> = t => t,
  in2: Fn<N, N> = t => t*t,
  in3: Fn<N, N> = t => t*t*t,
  in4: Fn<N, N> = t => t*t*t*t,
  in5: Fn<N, N> = t => t*t*t*t*t,
  out2: Fn<N, N> = t => t*(2-t),
  out3: Fn<N, N> = t => (--t)*t*t+1,
  out4: Fn<N, N> = t => 1-(--t)*t*t*t,
  out5: Fn<N, N> = t => 1+(--t)*t*t*t*t,
  inOut2: Fn<N, N> = t => t<.5 ? 2*t*t : -1+(4-2*t)*t,
  inOut3: Fn<N, N> = t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1,
  inOut4: Fn<N, N> = t => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t,
  inOut5: Fn<N, N> = t => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t
