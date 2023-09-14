# Train API Spec

## Get All Train API

Endpoint : GET /api/train

Response Body Success :

```json
{
  "train": [
    {
      "id": "1",
      "train_code": "PHY",
      "name": "PARAHYANGAN",
      "carriage": "9",
      "seat": 70,
      "class": {
        "id": "5",
        "className": "Ekonomi"
      }
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

## Get Train By Id API

Endpoint : GET /api/train/id

Response Body Success :

```json
{
  "train": {
    "id": "1",
    "train_code": "PHY",
    "name": "PARAHYANGAN",
    "carriage": "9",
    "seat": 70,
    "class": {
      "id": "5",
      "className": "Ekonomi"
    }
  }
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```

## Create Train API

Endpoint : POST /api/train

Headers :

- Authorization : token

Request Body :

```json
{
  "id_class": 5,
  "train_code": "PHY",
  "name": "PARAHYANGAN",
  "carriage": "9",
  "seat": 70
}
```

Response Body Success :

```json
{
    "message": "Train Created Succesfully
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```

## Update Train API

Endpoint : PATCH /api/train/id

Headers :

- Authorization : token

Request Body :

```json
{
  "id_class": 5,
  "train_code": "PHY",
  "name": "PARAHYANGAN",
  "carriage": "9",
  "seat": 70
}
```

Response Body Success :

```json
{
  "message": "Train Updated "
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```

## Delete Train API

Endpoint : DELETE /api/train/id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "message": "Train Deleted "
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```
