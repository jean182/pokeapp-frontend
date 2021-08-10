import { SPRITE_URL } from "../../utils/constants";

export function humanize(str: string) {
    return str
        .replace(/^[\s_]+|[\s_]+$/g, '')
        .replace(/[_\s]+/g, ' ')
        .replace(/^[a-z]/, (m) => m.toUpperCase());
}

export const imageUrlGenerator = (id: number) => `${SPRITE_URL.concat(id.toLocaleString())}.png`
