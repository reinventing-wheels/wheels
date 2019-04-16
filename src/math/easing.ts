export type fn = (t: number) => number

export const
  smoothstep: fn = t => t*t*(3 - t*2),
  smootherstep: fn = t => t*t*t*(t*(t*6 - 15) + 10),
  smootheststep: fn = t => t*t*t*t*(t*(t*(70 - t*20) - 84) + 35)

export const
  linear: fn = t => t,
  in2: fn = t => t*t,
  in3: fn = t => t*t*t,
  in4: fn = t => t*t*t*t,
  in5: fn = t => t*t*t*t*t,
  out2: fn = t => t*(2-t),
  out3: fn = t => (--t)*t*t+1,
  out4: fn = t => 1-(--t)*t*t*t,
  out5: fn = t => 1+(--t)*t*t*t*t,
  inOut2: fn = t => t<.5 ? 2*t*t : -1+(4-2*t)*t,
  inOut3: fn = t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1,
  inOut4: fn = t => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t,
  inOut5: fn = t => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t
