//Авторизация пользователей
export const BASE_URL = 'https://auth.nomoreparties.co';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Произошла ошибка ${res.status}`);
};

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(checkResponse)
    .then((res) => {
        return res;
    })
    .catch((err) => console.log(err));
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(checkResponse)
    .then((res) => {
        //По факту проверяем зарегистрирован ли такой пользователь
        if (res.token){
            localStorage.setItem('token', res.token);
            return res;
        }
    })
    .catch((err) => console.log(err));
};

export const getContentFromToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(checkResponse)
    .catch((err) => console.log(err));
};