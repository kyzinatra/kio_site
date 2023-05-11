## Полезные ссылки

- <https://rushjs.io/pages/developer/new_developer/> (+ сам весь раздел `Developer tutorials`)

# ребования для запуска

- Установить rush: `npm install -g @microsoft/rush`
- Установить зависимости: `rush update`
- Нужно настроить докер! Запуск: `docker-compose -f frontend.docker-compose.yaml up`
- Если вам необходимо запустить frontend локально, запустите через `rushx start` в директории `packages/frontend`.

## Дизайн-проект

[Посмотреть в figma](https://www.figma.com/file/l2QZZop4N5GKGqo9LFDma1/KIO-DESIGN?type=design&node-id=0%3A1&t=Qj9FyH6h9AFzRgz6-1)

## Notion table

[Notion table](https://www.notion.so/3932769cf83843d3858e08da7397f1b4)

## Добавление новых зависимостей

- Добавить новую запись в необходимый package.json вручную
- Выполнить команду `rush update`

## Как запускать скрипты из package.json?

```sh
rushx [имя скрипта]
```

Для этого надо находиться в **корне того проекта**, у которого вы хотите вызвать скрипт.
