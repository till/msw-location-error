import { expect, test } from "vitest";

test('request', async () => {
    const resp = await fetch('https://api.backend.dev/user')
    expect(resp).not().toBe(false)
})
