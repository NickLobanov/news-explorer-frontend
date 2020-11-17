export const BASE_URL = 'https://api.mynews.students.nomoreparties.co'

export const register = (email, password, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email, password, name)
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Произошла ошибка: ${res.status}`)
    })
    .catch((err) => console.log(err));
};