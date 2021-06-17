// массив для зарегистрированных юзеров кладем в локал сторадж
let users = JSON.parse(localStorage.getItem('users')) || [{id: 0, username: 'admin', password: 'qwerty'}];

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // симулируем отправку на сервер таймаутом
            setTimeout(() => {

                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // получаем параметры из post запроса
                    let params = JSON.parse(opts.body);

                    // ищем соответствие логину-паролю
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            token: 'fake-jwt-token'
                        };
                        resolve({ok: true, text: () => Promise.resolve(JSON.stringify(responseJson))});
                    } else {
                        reject('Логин или пароль неверные!');
                    }
                    return;
                }

                // получить юзеров
                if (url.endsWith('/users') && opts.method === 'GET') {
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ok: true, text: () => Promise.resolve(JSON.stringify(users))});
                    } else {
                        reject('Неавторизовано');
                    }
                    return;
                }

                // получить юзера по id
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => {
                            return user.id === id;
                        });
                        let user = matchedUsers.length ? matchedUsers[0] : null;

                        resolve({ok: true, text: () => JSON.stringify(user)});
                    } else {
                        reject('Неавторизовано');
                    }
                    return;
                }

                // регистрация юзера
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // получаем нового юзера из тела post
                    let newUser = JSON.parse(opts.body);

                    let duplicateUser = users.filter(user => {
                        return user.username === newUser.username;
                    }).length;
                    if (duplicateUser) {
                        reject('Логин "' + newUser.username + '" уже существует');
                        return;
                    }

                    // сохраняем нового юзера в локалсторадж
                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));
                    resolve({ok: true, text: () => Promise.resolve()});
                    return;
                }

                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}