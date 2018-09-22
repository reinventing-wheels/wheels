import { ε, clamp } from './extended'

export const pid = (Kp: number, Ki: number, Kd: number, M = Infinity) => {
  let tʹ: number
  let eʹ: number
  let Σe = 0

  return (PV: number, SP: number, t: number) => {
    const e = SP - PV
    const Δt = t - tʹ || ε
    const Δe = e - eʹ || 0

    tʹ = t
    eʹ = e
    Σe = clamp(-M, M, Σe + e*Δt)

    return Kp*e + Ki*Σe + Kd*Δe/Δt
  }
}
