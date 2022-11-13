export function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split('v=')[1]}/hqdefault.jpg`
}

export function getVideoID(url) {
    return `${url.split('v=')[1]}`
}