import fetch from 'node-fetch'

interface PhotoOfTheDay {
    copyright: string
    date: string
    explanation: string
    hdurl: string
    media_type: string
    service_version: string
    title: string
    url: string
}

interface WithCount extends PhotoOfTheDay {
    count: Number
}

interface WithConceptTags extends PhotoOfTheDay {
    concept_tags: Boolean
}
function getPhotoOfTheDay(key: string): Promise<PhotoOfTheDay[]> {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        .then((res: any) => res.json())
        .then((res: any) => {
            return res as PhotoOfTheDay[]
        })
}

function getPhotosByCount(key: string, count: Number): Promise<WithCount[]> {
    return fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${key}&count=${count}`
    )
        .then((res: any) => res.json())
        .then((res: any) => {
            return res as WithCount[]
        })
}

function getPhotoWithConceptTags(
    key: string,
    concept_tags: Boolean
): Promise<WithConceptTags[]> {
    return fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${key}&concept_tags=${concept_tags}`
    )
        .then((res: any) => res.json())
        .then((res: any) => {
            return res as WithConceptTags[]
        })
}

export { getPhotoOfTheDay, getPhotosByCount, getPhotoWithConceptTags }
