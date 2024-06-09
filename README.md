# Penguins - The Friendship App

## Overview

 **Penguins** is an app that enables users to store and share cherished memories with friends, including how they met, first impressions, and common interests. It also allows users to keep in touch by writing letters. This app is particularly useful for friends who no longer live in the same city.

### Problem

Current social media platforms are primarily focused on individual self-presentation, often portraying an idealized version of one's life rather than emphasizing the importance of relationships. **Penguins** addresses this gap by linking shared memories directly to friendships, making them visible only to the involved friend. The goal is to create a space where users can truly cherish and nurture their relationships with different friends.

### User Profile

- People who want to keep in contact with friends they don't see regularly, e.g., because they live in a different city or country.
- People who want to have a dedicated space for showing their cherished friendships.
- People who value privacy and prefer sharing personal memories in a more intimate setting.

### Features

#### MVP Features

- See friendship details
    - Display friend's current time
    - Display letters to each other
    - Display memories from when you spent time together
    - Display things in common with your friend
    - Display your first impression of the friend
    - Display how & where you and your friend met

#### Stretch Goals

- Edit friendship details
    - Edit how & where you and your friend met
    - Edit your first impression of the friend
    - Add new thing in common with your friend
    - Delete things in common with your friend
- Write a new letter
- Add a new memory


## Implementation

### Tech Stack

#### FrontEnd
- react
- react-router-dom
- axios
- sass
- moment-timezone
- react-toastify
- sweetalert2
- dotenv

#### BackEnd
- express
- axios
- knex
- cors
- dotenv
- nodemon
- multer
- uuid
- mySQL

### APIs

No external APIs will be used for the first sprint

### Sitemap

![Penguins sitemap](src/assets/images/penguins-sitemap-v3.png)

### Mockups

![Penguins mockup](src/assets/images/penguins-mockup-v2.png)

### Data

#### First Stage

- Store everything in the JSON file in the backend.

#### Second Stage

- Implement database to connect to the backend.

    ![Penguins database](src/assets/images/penguins-database-v2.png)

### Endpoints

#### MVP
##### GET /friendships/:id
- get timezones
- get letters
- get memories
- get things in common
- get first impression details
- get how we met details

Example Response:
```
[
  {
    "friendship-id": "1",
    "users": [
      {
        "id": "1",
        "first-name": "Sara",
        "profile": "http://localhost:8080/images/user-profiles/user-1.png",
        "timezone": "America/Vancouver",
        "location": "Vancouver, Canada"
      },
      {
        "id": "2",
        "first-name": "Amanda",
        "profile": "http://localhost:8080/images/user-profiles/user-2.png",
        "timezone": "America/Sao_Paulo",
        "location": "Brasilia, Brazil"
      }
    ],
    "friends-since": "Apr 2024",
    "letters": [
      {
        "id": "1",
        "friendship-id": "1",
        "created-by": "1",
        "subject": "Subject",
        "content": "content",
        "isRead": 1
      }, ...
    ],
    "memories": [
      {
        "id": "1",
        "friendship-id": "1",
        "created-by": "1",
        "date": "Aug 24 2024",
        "title": "Ride in Sara’s New Car",
        "image": "http://localhost:8080/images/memories/memories-15.png"
      }, ...
    ],
    "things-in-common": [
      {
        "id": "1",
        "friendship-id": "1",
        "description": "love beautiful stuff",
        "timestamp": "1714685301"
      }, ...
    ],
    "first-impressions": [
      {
        "id": "1",
        "friendship-id": "1",
        "created-by": "1",
        "description": "description",
        "image": "http://localhost:8080/images/first-impressions/first-impressions-1717958911758.png",
        "image-title": "image title"
      }, ...
    ],
    "how-where": {
      "id": "1",
      "friendship-id": "1",
      "image": "http://localhost:8080/images/how-where/how-where-1717958814425.png",
      "image-title": "image title",
      "description": "description"
    }
  }
]
```
#### Stretch Goals

##### **DONE** - PUT /how-where/:id
##### **DONE** - PUT /first-impression/:id
##### **DONE** - POST /things-in-common/
##### **DONE** - DELETE / things-in-common/:id
##### POST /letters
##### POST /memories
##### PUT /memories/:id

### Auth

No Auth will be implemented for the MVP.

## Roadmap

1. **DONE** - Build the backend for the GET /friendships/:id request, which returns hardcoded data.
2. **DONE** - Build the frontend with the hardcoded data fetched from the backend.
3. **DONE** - Create database structure for the backend, migration and seed files.
4. **DONE** - Link the backend to database and request data & rewrite GET friendship:id request
5. **DONE** - Make any fixes to the frontend to properly show dynamic data coming from the backend.
6. **DONE** - Research and display local time of user's friend.

### Stretch Goals
7. **DONE** - Build backend PUT /how-where/:id and implement "edit how & where users met" functionality in the frontend.
8. **DONE** - Build backend PUT /first-impression/:id and implement "edit first impression" functionality in the frontend.
9. **DONE** - Build backend PUT /things-in-common/:id and implement "edit things in common" functionality in the frontend.
10. Build backend POST /letters and implement "write a letter" functionality in the frontend.
11. Build backend POST /memories and implement "add a memory" functionality in the frontend.
12. Build backend PUT /memories/:id and implement "update a memory" functionality in the frontend.

## Nice-to-haves

### Future Features
- Add authorization & authentication.
- Create multiple friendships with exisiting users.
- Have multiple users so they can connect with each other.
- Friendship with yourself - write a letter to future self.
- Reminder to write a letter to a specific friend.
- Invite the friend to join the app to interact.
- Display random momeries of the friendships.