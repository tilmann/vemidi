import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: { one: {}, two: {} },
})

export type StandardScenario = typeof standard
