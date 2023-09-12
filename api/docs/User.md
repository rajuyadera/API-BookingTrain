# User API Spec

## Register User API

Endpoint : POST /api/register

Request Body :

```json
{
  "username": "Raju Yadera",
  "email": "rajuyaderaa@gmail.com",
  "password": "123",
  "confirmPassword": "123"
}
```

Response Body Success :

```json
{
  "message": "Register Successfully"
}
```

Response Body Failed :

```json
{
  "message": "User Already Registered"
}
```

## Login User API

Endpoint : POST /api/login

Request Body :

```json
{
  "email": "rajuyaderaa@gmail.com",
  "password": "123"
}
```

Response Body Success :

```json
{
  "accessToken": "unique-token"
}
```

Response Body Failed :

```json
{
  "message": "Wrong Password"
}
```

## Logout User API

Endpoint : DELETE /api/logout

Request Body :

```json
{
  "email": "rajuyaderaa@gmail.com",
  "password": "123"
}
```

Response Body Success :

```json
{
  "message": ""
}
```

Response Body Failed :

```json
{
  "message": "Tidak Dapat Logout"
}
```

## Get User API

Endpoint : GET /api/user

Headers :

- Authorization : token

Response Body Success :

```json
{
  "users": [
    {
      "uuid": "unique-uuid",
      "username": "Raju Yadera",
      "email": "rajuyaderaa@gmail.com",
      "role": "user"
    }
  ]
}
```

Response Body Failed :

```json
{
  "message": "Unauthorized"
}
```

## Get User By uuid API

Endpoint : GET /api/user/uuid

Headers :

- Authorization : token

Response Body Success :

```json
{
  "users": {
    "uuid": "unique-uuid",
    "username": "Raju Yadera",
    "email": "rajuyaderaa@gmail.com",
    "role": "user"
  }
}
```

Response Body Failed :

```json
{
  "message": "Unauthorized"
}
```

## Create User API

Endpoint : POST /api/user

Headers :

- Authorization : token


Request Body :

```json
{
  "username": "Raju Yadera",
  "email": "rajuyaderaa@gmail.com",
  "password": "123",
  "confirmPassword": "123",
  "role": "admin"
}
```

Response Body Success :

```json
{
  "message": "User Created"
}
```

Response Body Failed :

```json
{
  "message": "Email Already Created"
}
```



## Update User API

Endpoint : PATCH /api/user/uuid

Headers :

- Authorization : token


Request Body :

```json
{
  "username": "Raju Yadera",
  "email": "rajuyaderaa@gmail.com",
  "password": "123",
  "confirmPassword": "123",
  "role": "admin"
}
```

Response Body Success :

```json
{
  "message": "User Updated"
}
```

Response Body Failed :

```json
{
  "message": "Email Already Created"
}
```


## Delete User API

Endpoint : DELETE /api/user/uuid

Headers :

- Authorization : token


Response Body Success :

```json
{
  "message": "User Deleted"
}
```

Response Body Failed :

```json
{
  "message": "Unathorized"
}
```