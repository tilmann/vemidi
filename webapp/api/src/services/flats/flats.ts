import { Prisma } from '@prisma/client'
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'
import { BeforeResolverSpecType } from '@redwoodjs/api'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const flats = () => {
  return db.flat.findMany()
}

export const flat = ({ id }: Prisma.FlatWhereUniqueInput) => {
  return db.flat.findUnique({
    where: { id },
  })
}

interface CreateFlatArgs {
  input: Prisma.FlatCreateInput
}

export const createFlat = ({ input }: CreateFlatArgs) => {
  return db.flat.create({
    data: input,
  })
}

interface UpdateFlatArgs extends Prisma.FlatWhereUniqueInput {
  input: Prisma.FlatUpdateInput
}

export const updateFlat = ({ id, input }: UpdateFlatArgs) => {
  return db.flat.update({
    data: input,
    where: { id },
  })
}

export const deleteFlat = ({ id }: Prisma.FlatWhereUniqueInput) => {
  return db.flat.delete({
    where: { id },
  })
}
