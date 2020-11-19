export const getNews = (keyword, nowDay, prevDay) => {
    return fetch(`https://newsapi.org/v2/everything?q=${keyword}&from=${prevDay}&to=${nowDay}pageSize=100&apiKey=e1e2ee9b439246f69224227bdc496b7c`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then((res) => res.json())
}