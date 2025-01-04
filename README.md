# Blog app

## Requirements

- User can post post and publish blog content
- User can see post
- Authentication system
- User can their own profile

## Table

- post

  - id
  - title
  - content
  - authorId
  - createdAt
  - updatedAt
  - published

- user

  - id
  - name
  - email
  - password
  - createdAt
  - updatedAt
  - profile

- profile

  - id
  - bio
  - createdAt
  - updatedAt
  - userId

## Technology Stack

- graphql
- typescript
- postgresql
- prisma
