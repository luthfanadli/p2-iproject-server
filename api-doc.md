# Organize App API Documentation

## Endpoints :

List of available endpoints :

- `POST /register`
- `POST /login`
- `GET /categories`
- `GET /tasks`
- `POST /tasks`
- `GET /tasks/voice`
- `GET /tasks/:id`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

&nbsp;

## 1. POST /register
Request:
- body :
```json
{
  "name": "string",
  "email": "email",
  "password": "string",
  "address": "string",
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Error Validation"
}

```

&nbsp;

## 2.POST /login

Request:

- body:
```json
{
  "email": "string",
  "password": "password"
}
```
_Response (200 - OK)_

```json
{
  "access_token": "string",
  "payload": {
    "id": "integer",
    "username": "string"
  }
}
```
_Response (400 - Bad Request)_
```json
{
  "message": "Error Validation"
}

```
_Response (401 - Unauthorized)_
```json
{
  "message": "Error Invalid email/pasword"
}
```
&nbsp;

## 3. POST /tasks

Request:

- body:

```json
{
    "title": "string",
    "description": "string",
    "imgUrl": "string",
    "CategoryId": "integer",
    "UserId": "integer"
}
```

_Response (201 - Created)_

```json
{
    "id": "integer",
    "title": "string",
    "description": "string",
    "imgUrl": "string",
    "CategoryId": "integer",
    "UserId": "integer",
    "createdAt": "date",
    "updatedAt": "date"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Error Validation"
}

```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 4. GET /tasks

Description:
- Get all Tasks from database

Request:

- body:

```json

```

_Response (200 - OK)_

```json
[
    {
    "id": "integer",
    "title": "string",
    "description": "string",
    "imgUrl": "string",
    "CategoryId": "integer",
    "UserId": "integer",
    "createdAt": "date",
    "updatedAt": "date"
    },
]
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 5. GET /tasks/:id

Description:
- Get Task from database based on id.

Request:

- params: 

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
        "id": "integer",
        "title": "string",
        "description": "string",
        "imgUrl": "string",
        "CategoryId": "integer",
        "UserId": "integer",
        "createdAt": "date",
        "updatedAt": "date"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Not Found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;

## 6. PUT /tasks/:id

Description:
- Update Task by id

Request:

- params:

```json
{
  "id": "integer (required)"
}
```

- body:

```json
{
        "title": "string",
        "description": "string",
        "imgUrl": "string",
        "CategoryId": "integer",
        "UserId": "integer",
        "createdAt": "date",
        "updatedAt": "date"
}
```

_Response (200 - OK)_

```json
{
        "title": "string",
        "description": "string",
        "imgUrl": "string",
        "CategoryId": "integer",
        "UserId": "integer",
        "createdAt": "date",
        "updatedAt": "date"
```

_Response (400 - Bad Request)_

```json
{
  "message": "Error Validation"
}

```

_Response (404 - Not Found)_

```json
{
  "message": "Error Not Found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```


&nbsp;

## 8. DELETE /tasks/:id

Description:
- Delete Task by id

Request:

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
        "id": "integer",
        "title": "string",
        "description": "string",
        "imgUrl": "string",
        "CategoryId": "integer",
        "UserId": "integer",
        "createdAt": "date",
        "updatedAt": "date"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Not Found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;

## 9. GET /tasks/voice

Description:
- Get Voice RSS API

Request:

- params:

```json
{
  "text": "string"
}
```

_Response (200 - OK)_

```json
{
        "data/audio": "string",  
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

&nbsp;