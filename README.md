# Газпром ЛК

## Полезные ссылки:

- https://rushjs.io/pages/developer/new_developer/ (+ сам весь раздел `Developer tutorials`)

- `rush update

## Требования для запуска

- Установить rush: `npm install -g @microsoft/rush`
- Установить зависимости: `rush update`
- Выполнить билд бэка и его зависимостей: `rush build`
- Нужно настроить докер! Запуск: `docker-compose -f frontend.docker-compose.yaml up`
- Если вам необходимо запустить frontend локально, запустите через `rushx start` в директории `packages/frontend`.

## Добавление новых зависимостей

- Добавить новую запись в необходимый package.json вручную
- Выполнить команду `rush update`


## Как запускать скрипты из package.json?

```bash
rushx [имя скрипта]
```

Для этого надо находиться в **корне того проекта**, у которого вы хотите вызвать скрипт.
