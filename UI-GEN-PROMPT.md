# Prompt AI Generate UI - CRUD User API

Ban la mot AI designer / UI generator. Hay tao giao dien frontend cho du an API CRUD User nay theo huong hien dai, dep, de dung, va phu hop cho product demo.

## Muc tieu

Xay dung mot giao dien quan ly user co the:

- Xem danh sach user
- Tao user moi
- Xem chi tiet user
- Cap nhat user
- Xoa user
- Hien thi trang thai loading, empty state, success state, error state ro rang
- De FE de ket noi truc tiep voi API backend hien co

## Boi canh du an

Backend hien co chi quan ly 1 entity la `User`.

### API base

- Base URL: `http://localhost:3001`
- Prefix: `/api/users`

### API endpoints

- `GET /api/users` - lay danh sach user
- `GET /api/users/:id` - lay chi tiet user
- `POST /api/users` - tao user moi
- `PUT /api/users/:id` - cap nhat user
- `DELETE /api/users/:id` - xoa user

### Data model `User`

- `_id`: string
- `name`: string, required
- `email`: string, required, unique, email format
- `age`: number, optional, default 18
- `createdAt`: string
- `updatedAt`: string

## Yeu cau ve giao dien

Hay thiet ke mot app co cam giac:

- Hien dai
- Sang trong
- Giong dashboard san pham thuc te
- Khong generic, khong template nhat tri
- Co tinh cach nhan dien ro

### Huong phong cach

Hay chon mot trong cac huong sau, uu tien huong tao cam giac premium:

1. Neo-minimal dashboard
2. Editorial + data table style
3. Soft glass / gradient business UI

Khong dung layout mac dinh qua nha trong. Hay co:

- Typography ro rang, dam tinh he thong
- Mau nhan dien manh
- Khoang trang thong minh
- Shadow, border, gradient tinh te
- Iconography don gian va nhat quan

## Cau truc UI de de xuat

Hay tao mot giao dien gom cac khu vuc sau:

### 1) Header / Top bar

- Ten ung dung
- Mo ta ngan
- Search input
- Nut `Add User`
- Avatar hoac menu tai khoan gia lap

### 2) Summary cards

Hien thi nhanh cac chi so:

- Tong so user
- So user moi
- So user co email hop le
- Tuoi trung binh

Neu API khong co du lieu cho mot chi so nao, co the tinh tu danh sach user.

### 3) User table / list

Bang hoac card list phai co:

- Name
- Email
- Age
- Created at
- Actions: View, Edit, Delete

### 4) Create / Edit form

Form can:

- Name
- Email
- Age
- Validate input before submit
- Show inline errors
- Hien thi nut submit ro rang

### 5) Detail panel / modal

Khi click mot user, mo modal hoac side panel hien:

- Thong tin day du
- _id
- Name
- Email
- Age
- Created at
- Updated at
- Nut Edit
- Nut Delete

## State design

Hay thiet ke day du cac trang thai sau:

- Loading state
- Empty state khi khong co user
- Error state khi API loi
- Success toast hoac success banner sau khi tao / cap nhat / xoa
- Delete confirmation modal

## UX yeu cau

- Khong de nguoi dung bi loay hoay khi CRUD
- Nut xoa phai co confirm
- Form tao/cap nhat phai de hieu
- Neu co loi validate, hien message ro rang ngay tai field
- Neu list dai, support search va filter co ban
- Neu can, them sort theo name / age / createdAt

## Thanh phan quan trong

### Form validation

- `name` khong duoc rong
- `email` phai dung format email
- `age` phai la so nguyen duong, neu bo trong mac dinh 18

### Delete flow

- Hien confirm dialog truoc khi xoa
- Sau khi xoa thanh cong, cap nhat list ngay

### Search / filter

- Tim theo name hoac email
- Co the them filter theo age range neu hop ly

## Cach doan API response

Hay gia dinh cac response sau:

- `GET /api/users` tra ve array user
- `GET /api/users/:id` tra ve 1 user object
- `POST /api/users` tra ve `{ message, data }`
- `PUT /api/users/:id` tra ve user object da cap nhat
- `DELETE /api/users/:id` tra ve `{ message }`

## Layout goi y

Hay tao giao dien desktop-first nhung van responsive tren mobile:

- Desktop: sidebar nho + main content hoac full-width dashboard
- Mobile: header gon, cards stack doc, table chuyen sang card list

## Output mong muon

Hay tra ve:

- Mot mockup UI hoan chinh cho dashboard CRUD User
- Mot bo component coherent
- Co spacing, color palette, typography, va states ro rang
- Neu can, kem goi y animation nhe nhang

## Rang buoc

- Hay chuyen UI thanh san pham thuc su, khong phai wireframe loe loet
- Khong dung style qua mac dinh, qua nhat, hoac qua dung chung
- Khong them tinh nang ngoai scope neu khong can
- Tap trung vao trai nghiem quan ly user

## Prompt final

Hay thiet ke giao dien frontend cho ung dung CRUD User dua tren API o tren. Tao mot dashboard quan ly user dep, hien dai, co table/card list, search, summary cards, modal tao/cap nhat user, modal chi tiet user, confirm xoa, loading/empty/error states, responsive tren mobile va desktop, va co visual identity ro rang de phu hop demo san pham.

