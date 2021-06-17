## Простое vue приложение со страницами:

- Авторизация
- Регистрация
- Приветствие пользователя
### Описание функционала
Данные одного пользователя уже есть хардкодом, который может авторизоваться. При помощи страницы "регистрация" юзер пополняет список пользователей.

### Описание страниц
#### Авторизация
Форма с валидацией полей, авторизует по email и паролю, сохраняет сессию пользователя. Ссылкой перехода на регистрацию.

#### Регистрация
Форма с валидацией полей, регистрирует по имени, email, password с подтверждением. Ссылкой перехода на авторизацию. После успешной регистрации редиректит на страницу авторизации

#### Приветствие пользователя
Страница с сообщением об успешной авторизации, к которой имеет доступ только авторизованный пользователь, и кнопкой "Выход". При нажатии на кнопку "выход", происходит редирект на авторизацию, c уведомлением о том, что пользователь покинул аккаунт и очисткой сессии. При попытке попасть на нее без авторизации - происходит редирект на авторизацию.
