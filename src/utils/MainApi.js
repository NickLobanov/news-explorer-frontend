export const BASE_URL = 'http://api.mynews.students.nomoreparties.co'

export const register = (email, password, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Произошла ошибка: ${res.status}`)
    })
    .catch((err) => console.log(err));
};

export const authorization = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then((data) => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            return data;
        }
    })
    .catch(err => console.log(err));
};

export const getUser = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then((res) => res.json())
};

export const post = (cardData, token, keyword) => {
    return fetch(`${BASE_URL}/articles`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            keyword: keyword,
            title: cardData.title,
            text: cardData.text,
            date: cardData.date,
            source: cardData.source,
            link: cardData.link,   
            image: cardData.image
        })
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    })
};

export const getCards = (token) => {
    return fetch(`${BASE_URL}/articles`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
};