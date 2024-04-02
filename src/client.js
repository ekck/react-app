import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'yi89pfyg',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skzzMXHUxuXTmuM71EetFoxKNsvdlVZBf293yx34vQOlAeNph0sZ5Ld6GSdB2ATkaCj2JFTxJU5WJG1cswQW0cW0O53qS5x9dQ5iRpJnEjv9GmT97ia2gKMBphaGtiCMhJ52fyzkTaP4WE9g953i9Fjo0nW2hDppac0NWTiTd5xvV8gLmY7k',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)