export type IEasing = (t: number) => number

export const
  smoothstep:   IEasing = t => t*t*(3 - 2*t),
  smootherstep: IEasing = t => t*t*t*(t*(t*6 - 15) + 10)

export const
  linear:       IEasing = t => t,
  in2:          IEasing = t => t*t,
  in3:          IEasing = t => t*t*t,
  in4:          IEasing = t => t*t*t*t,
  in5:          IEasing = t => t*t*t*t*t,
  out2:         IEasing = t => t*(2-t),
  out3:         IEasing = t => (--t)*t*t+1,
  out4:         IEasing = t => 1-(--t)*t*t*t,
  out5:         IEasing = t => 1+(--t)*t*t*t*t,
  inOut2:       IEasing = t => t<.5 ? 2*t*t : -1+(4-2*t)*t,
  inOut3:       IEasing = t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1,
  inOut4:       IEasing = t => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t,
  inOut5:       IEasing = t => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t
