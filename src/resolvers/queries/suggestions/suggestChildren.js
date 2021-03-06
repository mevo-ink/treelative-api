import { ApolloError } from 'apollo-server'

import fuzzySearch from '../../../utils/fuzzySearch'

export default async (parent, args, context, info) => {
  // only authenticated users can list a user's available partners
  if (!context.user) {
    throw new ApolloError('You must be authenticated to perform this action', 'UNAUTHENTICATED')
  }

  const { userID, query } = args

  const usersNotParentsOrPartnerWithCurrentUser = await context.models.User.find(
    {
      $or: fuzzySearch(query),
      parents: { $eq: [] },
      partner: { $ne: userID }
    }
  ).limit(5).lean()

  return usersNotParentsOrPartnerWithCurrentUser.filter(({ _id }) => _id.toString() !== userID)
}
