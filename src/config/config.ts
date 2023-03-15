const local = {
    contentful :{
        spaceId: 'fkyf6mhn3c05',
        accessTokens: '8ntZgWSseQSHSutEksH4DidXdK18hDPqMLMt-z2ZkRw',
    }
}

const dev = {
    contentful :{
        spaceId: 'fkyf6mhn3c05',
        accessTokens: '8ntZgWSseQSHSutEksH4DidXdK18hDPqMLMt-z2ZkRw',
    }
}

const prod = {
    contentful :{
        spaceId: 'fkyf6mhn3c05',
        accessTokens: '8ntZgWSseQSHSutEksH4DidXdK18hDPqMLMt-z2ZkRw',
    }
}

export const config = process.env.NODE_ENV === 'production' ? prod : process.env.NODE_ENV === 'development' ? dev : local
