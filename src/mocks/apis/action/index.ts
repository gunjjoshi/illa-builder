import { rest } from "msw"
import { v4 as uuidV4 } from "uuid"
import { baseUrl } from "@/mocks/config"
import {
  ACTION_API_RUN_RESULT,
  ACTION_DATABASE_RUN_RESULT,
  ALL_ACTION,
} from "./data"

const ACTION_BASE_URL = `${baseUrl}/versions/:versionId`

export default [
  rest.get(`${ACTION_BASE_URL}/actions`, (_, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(ALL_ACTION))
  }),

  rest.post<{ actionType: string }>(
    `${ACTION_BASE_URL}/actions/:actionId/run`,
    (req, res, ctx) => {
      const { actionType } = req.body

      const successRes = res(
        ctx.delay(3000 * Math.random()),
        ctx.status(200),
        ctx.json(
          actionType === "mysql"
            ? ACTION_DATABASE_RUN_RESULT
            : ACTION_API_RUN_RESULT,
        ),
      )

      const failRes = res(
        ctx.delay(3000 * Math.random()),
        ctx.status(400),
        ctx.json({
          errorCode: 400,
          errorMessage: "Something wrong",
        }),
      )

      return Math.random() > 0.7 ? successRes : failRes
    },
  ),

  rest.post(`${ACTION_BASE_URL}/actions`, (req, res, ctx) => {
    const data = req.body

    return res(
      ctx.delay(Math.random() * 3000),
      ctx.status(200),
      ctx.json({
        actionId: uuidV4(),
        ...(data as Object),
      }),
    )
  }),

  rest.put(`${ACTION_BASE_URL}/actions/:actionId`, (req, res, ctx) => {
    const { actionId } = req.params
    const data = req.body

    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        actionId,
        ...(data as Object),
      }),
    )
  }),

  rest.delete(`${ACTION_BASE_URL}/actions/:actionId`, (req, res, ctx) => {
    const { actionId } = req.params
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        actionId,
      }),
    )
  }),
]
