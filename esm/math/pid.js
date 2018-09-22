import { ε, clamp } from './extended';
export const pid = (Kp, Ki, Kd, M = Infinity) => {
    let tʹ;
    let eʹ;
    let Σe = 0;
    return (PV, SP, t) => {
        const e = SP - PV;
        const Δt = t - tʹ || ε;
        const Δe = e - eʹ || 0;
        tʹ = t;
        eʹ = e;
        Σe = clamp(-M, M, Σe + e * Δt);
        return Kp * e + Ki * Σe + Kd * Δe / Δt;
    };
};
