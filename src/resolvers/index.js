import { JSONResolver, DateTimeResolver } from 'graphql-scalars'

import getUser from './queries/getUser'
import queryUser from './queries/queryUser'

import addUser from './mutations/addUser'
import updateUser from './mutations/updateUser'
import deleteUser from './mutations/deleteUser'

import addCouple from './mutations/addCouple'
import updateCouple from './mutations/updateCouple'
import deleteCouple from './mutations/deleteCouple'

import addUserParent from './mutations/addUserParent'
import addUserChild from './mutations/addUserChild'
import addUserPartner from './mutations/addUserPartner'

import getUserParents from './queries/getUserParents'
import getUserChildren from './queries/getUserChildren'
import getUserPartner from './queries/getUserPartner'
import getUserSiblings from './queries/getUserSiblings'

import getCouple from './queries/getCouple'
import queryCouple from './queries/queryCouple'
import getCoupleUserOne from './queries/getCoupleUserOne'
import getCoupleUserTwo from './queries/getCoupleUserTwo'

export default {
  JSON: JSONResolver,
  DateTime: DateTimeResolver,

  User: {
    parents: getUserParents,
    children: getUserChildren,
    siblings: getUserSiblings,
    partner: getUserPartner
  },

  Couple: {
    userOne: getCoupleUserOne,
    userTwo: getCoupleUserTwo
  },

  Query: {
    getUser,
    queryUser,
    getCouple,
    queryCouple
  },

  Mutation: {
    addUser,
    updateUser,
    deleteUser,
    addUserParent,
    addUserChild,
    addUserPartner,
    addCouple,
    updateCouple,
    deleteCouple
  }
}
