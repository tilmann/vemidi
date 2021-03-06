import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FlatCreateArgs>({
  flat: { one: {}, two: {} },
})

export type StandardScenario = typeof standard
