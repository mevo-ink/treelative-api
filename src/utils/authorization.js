import { ApolloError } from 'apollo-server'

export const isAuthenticated = (context) => {
  if (!context.user) {
    throw new ApolloError('You must be authenticated to perform this action', 'UNAUTHENTICATED')
  }
  return context.user
}

export const isAdmin = (context) => {
  return isAuthenticated(context) && context.user.isAdmin
}

export const isOwner = (context, userID) => {
  return isAdmin(context) || context.user._id === userID
}
