# MERN Vercel Demo

A very small MERN-style project for testing deployment on Vercel.

## Stack

- React + Vite frontend
- Node.js-style serverless API endpoint
- MongoDB is not connected because this project is only for deployment testing

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Push this folder to GitHub and import the repository into Vercel.

The `/api/health` endpoint should return:

```json
{
  "message": "Backend API is working!"
}
```
