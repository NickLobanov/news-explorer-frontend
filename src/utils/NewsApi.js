export const getNews = (keyword) => {
    return fetch(`https://newsapi.org/v2/everything?q=${keyword}&pageSize=100&apiKey=e1e2ee9b439246f69224227bdc496b7c`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then((res) => res.json())
}