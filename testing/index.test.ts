import {
    getPhotoOfTheDay,
    getPhotosByCount,
    getPhotoWithConceptTags,
} from '../index'

test('return error with bad key', () => {
    const key = 'badkey'
    return getPhotoOfTheDay(key).then((data) => {
        expect(data).toHaveProperty('error')
    })
})
