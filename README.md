# ShopNest

A full-stack e-commerce starter built with React, Express, Supabase PostgreSQL, bcrypt password hashing, and JWT sessions. It includes a responsive storefront, searchable product catalogue, authenticated cart/wishlist, safe demo checkout, and order history.

## Setup

1. Create a Supabase project and run [backend-todo/database/schema.sql](backend-todo/database/schema.sql) in its SQL editor. This API uses a service-role key server-side, so do not enable public client writes.
2. Copy `backend-todo/.env.example` to `backend-todo/.env`, adding `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, and a long `JWT_SECRET`.
3. Copy `frontend-todo/.env.example` to `frontend-todo/.env`.

```bash
cd backend-todo
npm install
npm run dev
```

```bash
cd frontend-todo
npm install
npm run dev
```

## API

`/api/auth` provides registration, login, and session lookup. `/api/products` and `/api/categories` are public reads; product/category writes require an admin JWT. `/api/cart`, `/api/wishlist`, `/api/addresses`, and `/api/orders` require `Authorization: Bearer <token>`.

Users are created with bcrypt hashes only. Checkout is a demo flow: it stores method, transaction identifier, amount, and status, and never stores sensitive payment credentials. Set a user's `role` to `admin` in Supabase to use administration endpoints.
