# Station API Spec

## Get All Station API

Endpoint : GET /api/station

Response Body Success :

```json
{
  "Station": [
    {
      "id": "1",
      "code": "PSE",
      "name": "PASAR SENEN",
      "city": "JAKARTA"
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

## Get Station By Id API

Endpoint : GET /api/station/id

Response Body Success :

```json
{
  "Station": {
    "id": "1",
    "code": "PSE",
    "name": "PASAR SENEN",
    "city": "JAKARTA"
  }
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```

## Create Station API

Endpoint : POST /api/station

Headers :

- Authorization : token

Request Body :

```json
{
    {
        "name": "PASAR SENEN",
        "code": "PSE",
        "city": "JAKARTA"
    }
}
```

Response Body Success :

```json
{
    "message": "Station Created Succesfully
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```

## Update Station API

Endpoint : PATCH /api/station/id

Headers :

- Authorization : token

Request Body :

```json
{
    {
        "name": "PASAR SENEN",
        "code": "PSE",
        "city": "JAKARTA"
    }
}
```

Response Body Success :

```json
{
  "message": "Station Updated "
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```

## Delete Station API

Endpoint : DELETE /api/station/id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "message": "Station Deleted "
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```
