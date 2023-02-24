import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { beforeAll, afterEach, afterAll } from "vitest";

const server = setupServer(rest.get('https://api.backend.dev/user', (req, res, ctx) => {
    return res(ctx.json({ firstName: 'John' }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
