import type { NextApiRequest, NextApiResponse } from 'next'

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }

  const { userId } = req.body

  // https://www.prisma.io/docs/concepts/components/prisma-client/crud#cascading-deletes-deleting-related-records
  const deleteAccounts = prisma.account.deleteMany({
    where: {
      userId: userId,
    },
  })
  
  const deleteSessions = prisma.session.deleteMany({
    where: {
      userId: userId,
    },
  })

  const deleteUser = prisma.user.delete({
    where: {
      id: userId,
    },
  })
  
  const transaction = await prisma.$transaction([
    deleteAccounts,
    deleteSessions,
    deleteUser
  ])

  res.status(200).json({ message: 'success' })
}