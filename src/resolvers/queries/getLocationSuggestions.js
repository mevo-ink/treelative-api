import { Client } from '@googlemaps/google-maps-services-js'

export default async (parent, args, context, info) => {
  const client = new Client({})

  if (!args.search) return []

  const result = await client
    .placeAutocomplete({
      params: {
        input: args.search,
        key: process.env.GOOGLE_LOCATION_API_KEY
      },
      timeout: 1000 // milliseconds
    })

  return result.data ? result.data.predictions : []
}