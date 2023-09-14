# Rute API Spec

## Get Rute berdasarkan from dan to API

Endpoint : GET /api/rute?from={value}&to={value}

Response Body Success :

```json
{
  "rute": [
    {
      "id": 1,
      "deppart_at": "2023-09-13",
      "arrive_at": "2023-09-13",
      "deppart_time": "14:00:00",
      "arrive_time": "19:00:00",
      "price": 100000,
      "train": {
        "id": 2,
        "id_class": 5,
        "train_code": "PHY",
        "name": "PARAHYANGANN",
        "carriage": "9",
        "seat": 70
      },
      "from": {
        "id": 1,
        "code": "PSE",
        "name": "PASAR SENEN",
        "city": "JAKARTA"
      },
      "to": {
        "id": 2,
        "code": "BDG",
        "name": "CILUENYI",
        "city": "BANDUNG"
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

## Create Rute API

Endpoint : POST /api/rute

Headers :

- Authorization : token

Request Body :

```json
{
  "deppart_at": "2023-09-13",
  "arrive_at": "2023-09-13",
  "deppart_time": "17:00:00",
  "arrive_time": "17:00:00",
  "train": 2,
  "from": 2,
  "to": 1,
  "price": 100000
}
```

Response Body Success :

```json
{
  "message": "Rute Berhasil Dibuat"
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```

## Update Rute API

Endpoint : PATCH /api/rute/id

Headers :

- Authorization : token

Request Body :

```json
{
  "deppart_at": "2023-09-13",
  "arrive_at": "2023-09-13",
  "deppart_time": "17:00:00",
  "arrive_time": "17:00:00",
  "train": 2,
  "from": 2,
  "to": 1,
  "price": 100000
}
```

Response Body Success :

```json
{
  "message": "Rute Berhasil Di Update "
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```

## Delete Rute API

Endpoint : DELETE /api/rute/id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "message": "Rute Berhasil Dihapus "
}
```

Response Body Failed :

```json
{
  "message": "any error"
}
```
