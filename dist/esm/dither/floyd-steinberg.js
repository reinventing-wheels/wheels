export const dither = (buffer, width, height) => {
    for (let y = 0, v = height; v--; y++) {
        const v1 = v > 0;
        for (let x = 0, u = width; u--; x++) {
            const x1 = x > 0, u1 = u > 0;
            let i = x + y * width;
            const input = buffer[i];
            const output = buffer[i] = +(input >= 0.5);
            const err1 = (input - output) / 16;
            const err3 = 3 * err1;
            const err5 = 5 * err1;
            const err7 = 7 * err1;
            if (u1)
                buffer[i + 1] += err7;
            if (v1) {
                i += width;
                if (x1)
                    buffer[i - 1] += err3;
                buffer[i] += err5;
                if (u1)
                    buffer[i + 1] += err1;
            }
        }
    }
};
