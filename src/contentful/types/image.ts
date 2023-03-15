export type ImageType = {
    fields: {title: string, description: string, file:{
        contentType:string,
        details:{
            size:number,
            image:{
                width:number,
                height:number
            }
        },
        fileName:string,
        url:string
    }},
    metadata: {tags:[]},
    sys: {
        createdAt: string,
        environment: {sys:{type:string, linkType:string, id:string}},
        id: string,
        locale: string,
        revision: number,
        space: {sys:{type:string, linkType:string, id:string}},
        type: string,
        updatedAt: string
    }
}

export type Image = {
    url:string,
    height:number,
    width:number
}