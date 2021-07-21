export default async (parent, args, context, info) => {
  const users = await context.prisma.user.findMany({
    select: { id: true, shortName: true, fullName: true, currentLocation: true }
  })

  const usersMap = users.map(user => ({
    id: user.id,
    shortName: user.shortName,
    fullName: user.fullName,
    image: `https://${process.env.MINIO_ENDPOINT}/avatar/${user.id}.jpg`,
    brokenImage: `https://ui-avatars.com/api/?name=${user.fullName}&background=random&rounded=true&font-size=0.5&bold=true`,
    position: user.currentLocation ? user.currentLocation.parsed.geometry.location : null
  }))

  return {
    known: usersMap.filter(({ position }) => position),
    unknown: usersMap.filter(({ position }) => !position)
  }
}