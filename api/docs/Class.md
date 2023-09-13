# Class API Spec

## Get All Class API

Endpoint : GET /api/class

Response Body Success :

```json
{
  "class": [
    {
      "id": 1,
      "className": "VVIP"
    },
    {
      "id": 2,
      "className": "Ekonomi"
    }
  ]
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```

## Get Class By Id API

Endpoint : GET /api/class/id

Response Body Success :

```json
{
  "class": {
    "id": 2,
    "className": "Ekonomi"
  }
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```

## Create Class API

Endpoint : POST /api/class

Headers :

- Authorization : token

Request Body :

```json
{
  "className": "VVIP"
}
```

Response Body Success :

```json
{
    "message": "Class Created Succesfully"
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```

## Update Class API

Endpoint : PATCH /api/class/id

Headers :

- Authorization : token

Request Body :

```json
{
  "className": "Bisnis"
}
```

Response Body Success :

```json
{
  "message": "Class Updated "
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```

## Delete Class API

Endpoint : DELETE /api/class/id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "message": "Class Deleted "
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```
