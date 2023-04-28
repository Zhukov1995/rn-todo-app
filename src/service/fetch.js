export class Fetch {
    static HEADERS = {
        'Content-Type': 'application/json'
    }
    static BASE_URL = 'https://rn-todo-app-db-default-rtdb.firebaseio.com/todos'

    static async get() {
        try {
            const response = await fetch(`${this.BASE_URL}.json`, config('GET'))
            const data = await response.json();
            const todos = data !== null ? Object.keys(data).map(key => ({
                ...data[key],
                id: key
            })) : []
            return todos;
        } catch (e) {
            console.log('Что-то пошло не так...')
        }
    }

    static async post(title) {
        try {
            const response = await fetch(`${this.BASE_URL}.json`, config('POST', title))
            return await response.json();
        } catch (e) {
            console.log('Что-то пошло не так...')
        }
    }

    static async delete(id) {
        try {
            const response = await fetch(`${this.BASE_URL}/${id}.json`, config('DELETE'))
        } catch (e) {
            console.log('Что-то пошло не так...')
        }
    }

    static async put(id, newTitle) {
        try {
            const response = await fetch(`${this.BASE_URL}/${id}.json`, config('PUT', newTitle))
        } catch (e) {
            console.log('Что-то пошло не так...')
        }
    }
}


function config(method = 'GET', data) {
    const config = {
        method,
        headers: Fetch.HEADERS
    }

    if (method === 'POST' || method === 'PUT') {
        config.body = JSON.stringify({
            title: data
        });
    }

    return config;
}