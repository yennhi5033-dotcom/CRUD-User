# API Documentation - CRUD User

Tai lieu nay tong hop tat ca route hien co trong project de FE co the ket noi API nhanh chong.

## Tong quan

- Base URL mac dinh: `http://localhost:3001`
- Prefix API: `/api/users`
- Content-Type khi gui body: `application/json`
- Swagger UI: `/swagger`

## Model `User`

### Fields

| Field | Type | Required | Default | Mo ta |
| --- | --- | --- | --- | --- |
| `_id` | string | auto | - | MongoDB ObjectId |
| `name` | string | yes | - | Ten user |
| `email` | string | yes | - | Email duy nhat |
| `age` | number | no | `18` | Tuoi user |
| `createdAt` | string | auto | - | Thoi diem tao |
| `updatedAt` | string | auto | - | Thoi diem cap nhat |

## Danh sach route

| Method | Route | Muc dich |
| --- | --- | --- |
| `POST` | `/api/users` | Tao user moi |
| `GET` | `/api/users` | Lay danh sach user |
| `GET` | `/api/users/:id` | Lay chi tiet user |
| `PUT` | `/api/users/:id` | Cap nhat user |
| `DELETE` | `/api/users/:id` | Xoa user |
| `GET` | `/swagger` | Mo giao dien Swagger UI |

## Chi tiet API

### 1) Tao user

`POST /api/users`

#### Request body

```json
{
  "name": "User1",
  "email": "user1@example.com",
  "age": 18
}
```

#### Response 201

```json
{
  "message": "Thanh cong",
  "data": {
    "_id": "66a8f1c2d4e5f60789abc123",
    "name": "User1",
    "email": "user1@example.com",
    "age": 18,
    "createdAt": "2026-08-02T10:00:00.000Z",
    "updatedAt": "2026-08-02T10:00:00.000Z"
  }
}
```

#### Response 500

```json
{
  "error": "User validation failed: ..."
}
```

#### Ghi chu

- `name` va `email` bat buoc.
- `email` phai duy nhat trong collection.
- `age` la optional, neu bo qua se mac dinh la `18`.

### 2) Lay danh sach user

`GET /api/users`

#### Request

- Khong can body

#### Response 200

```json
[
  {
    "_id": "66a8f1c2d4e5f60789abc123",
    "name": "User1",
    "email": "user1@example.com",
    "age": 18,
    "createdAt": "2026-08-02T10:00:00.000Z",
    "updatedAt": "2026-08-02T10:00:00.000Z"
  },
  {
    "_id": "66a8f1c2d4e5f60789abc124",
    "name": "User2",
    "email": "user2@example.com",
    "age": 20,
    "createdAt": "2026-08-02T10:05:00.000Z",
    "updatedAt": "2026-08-02T10:05:00.000Z"
  }
]
```

#### Ghi chu

- API hien tai tra ve truc tiep mang user, khong boc them object `message`.

### 3) Lay chi tiet user

`GET /api/users/:id`

#### Path params

| Param | Type | Bat buoc | Mo ta |
| --- | --- | --- | --- |
| `id` | string | yes | MongoDB ObjectId |

#### Response 200

```json
{
  "_id": "66a8f1c2d4e5f60789abc123",
  "name": "User1",
  "email": "user1@example.com",
  "age": 18,
  "createdAt": "2026-08-02T10:00:00.000Z",
  "updatedAt": "2026-08-02T10:00:00.000Z"
}
```

#### Response 404

```json
{
  "message": "Khong tim thay"
}
```

#### Ghi chu

- Neu `id` khong ton tai, API tra 404.
- Neu `id` khong hop le voi Mongo ObjectId, Mongo/Mongoose co the tra loi 500.

### 4) Cap nhat user

`PUT /api/users/:id`

#### Path params

| Param | Type | Bat buoc | Mo ta |
| --- | --- | --- | --- |
| `id` | string | yes | MongoDB ObjectId |

#### Request body

Co the gui mot phan hoac toan bo field:

```json
{
  "name": "User1 Updated",
  "email": "user1.updated@example.com",
  "age": 19
}
```

#### Response 200

```json
{
  "_id": "66a8f1c2d4e5f60789abc123",
  "name": "User1 Updated",
  "email": "user1.updated@example.com",
  "age": 19,
  "createdAt": "2026-08-02T10:00:00.000Z",
  "updatedAt": "2026-08-02T10:10:00.000Z"
}
```

#### Ghi chu

- Code hien tai dung `findByIdAndUpdate(id, data, { new: true })`.
- Neu `id` khong tim thay, response thuc te co the la `200` voi gia tri `null`.
- FE nen tu xu ly truong hop `null` neu can hien thong bao `Khong tim thay user`.

### 5) Xoa user

`DELETE /api/users/:id`

#### Path params

| Param | Type | Bat buoc | Mo ta |
| --- | --- | --- | --- |
| `id` | string | yes | MongoDB ObjectId |

#### Response 200

```json
{
  "message": "Da xoa"
}
```

#### Ghi chu

- Code hien tai khong kiem tra user co ton tai hay khong.
- Neu `id` khong tim thay, API van co the tra `200` voi `message: "Da xoa"`.

### 6) Swagger UI

`GET /swagger`

#### Response

- Tra ve giao dien HTML Swagger UI de test API truc tiep tren browser.

## Common error shape

Mot so loi tra ve theo dang:

```json
{
  "message": "Khong tim thay"
}
```

hoac

```json
{
  "error": "..."
}
```

## Notes cho FE

- Nguon du lieu hien tai chi co entity `User`.
- `GET /api/users` tra ve mang, khong co wrapper.
- `POST /api/users` tra ve `{ message, data }`.
- `GET /api/users/:id` tra ve 1 object user.
- `PUT /api/users/:id` tra ve object da cap nhat, nhung co the la `null` neu id khong hop le/khong ton tai.
- `DELETE /api/users/:id` tra ve `{ message }`.
- Nen dong bo validate FE voi backend:
  - `name`: bat buoc
  - `email`: bat buoc, format email, duy nhat
  - `age`: so nguyen, khong am

