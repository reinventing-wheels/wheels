import { MIN_VALUE, clamp } from './extended'

export const pid = (Kp: number, Ki: number, Kd: number, M = Infinity) => {
  let tʹ: number
  let eʹ: number
  let Σe = 0

  return (e: number, t: number) => {
    const Δt = t - tʹ || MIN_VALUE
    const Δe = e - eʹ || 0

    tʹ = t
    eʹ = e
    Σe = clamp(-M, M, Σe + e*Δt)

    return Kp*e + Ki*Σe + Kd*Δe/Δt
  }
}
