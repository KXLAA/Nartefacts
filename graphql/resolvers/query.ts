import { PrismaClient } from '@prisma/client'
import { QueryResolvers } from '../generated/graphql'
const prisma = new PrismaClient()
import { paginate } from './utils'

const Query: QueryResolvers = {
  allAlbums: async (_, { first, after }) => {
    //Get all the album data from the database
    const albums = await prisma.album.findMany({
      include: {
        artist: true,
      },
    })

    const paginated = paginate(first!, after!, albums)

    return paginated
  },

  oneAlbum: async (_, { id }) => {
    const album = prisma.album.findUnique({
      where: {
        id: id,
      },
    })
    return album
  },

  albumsByType: async (_, { first, after, type }) => {
    const albums = await prisma.album.findMany({
      where: {
        type: type!,
      },
    })

    const paginated = paginate(first!, after!, albums)

    return paginated
  },

  albumsByTitle: async (_, { first, after, title }) => {
    const albums = await prisma.album.findMany({
      where: {
        title: title!,
      },
    })

    const paginated = paginate(first!, after!, albums)

    return paginated
  },

  albumsByArtist: async (_, { first, after, artist }) => {
    const albums = await prisma.album.findMany({
      where: {
        artist: {
          name: artist!,
        },
      },
    })
    const paginated = paginate(first!, after!, albums)

    return paginated
  },
}

export default Query
