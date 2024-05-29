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
    - Edit how & where you and your friends met
    - Edit your first impression of the friend 
    - Edit things in common with your friend
    - Edit memory details
- Write a new letter
- Add photos when you spend time together


## Implementation

### Tech Stack

#### FrontEnd
- react
- react-router-dom
- axios
- sass

#### BackEnd
- express
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

![Penguins sitemap](src/assets/readme/penguins-sitemap.png)

### Mockups

![Penguins mockup](src/assets/readme/penguins-mockup.png)

### Data

#### First Stage
- Store everything in the JSON file in the backend.

#### Second Stage
- Implement database to connect to the backend.

![Penguins database](src/assets/readme/penguins-database.png)
<!-- Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.  -->

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
        "friendship-id": 1,
        "user-1-first-name": "Sara",
        "user-1-profile": "Sara-profile.png",
        "user-2-first-name": "Amanda",
        "user-1-profile": "Amanda-profile.png",
        "friends-since": "date",
        "letters": [ 
            {
                "id": 1,
                "content": "..."
                "timestamp": 
            }, ...
        ],
        "memories": [ 
            {
                "id": 1,
                "created-by": "Sara",
                "date": "date",
                "title": "...",
                "image": "memories-image1"
            }, ...
        ]
        "things-in-common": [
            {
                "id": 1,
                "description": "..."
            }, ...
        ]
        "first-impression": [
            {
                "id": 1,
                "created-by": "Sara", 
                "description": "..."
            }, ...
        ]
        "how-where": {
            "id": 1,
            "image": "image2"
            "description": "..."
        }
    }
]
```
#### Stretch Goals

##### PUT /how-where/:id

##### PUT /first-impression/:id

##### PUT /things-in-common/:id

##### PUT /memories/:id

##### POST /letters

##### POST /memories

### Auth

<!-- Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented. -->

No Auth will be implemented for the MVP.

## Roadmap

<!-- Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build. -->

## Nice-to-haves

### Future Features
- Friendship with yourself - write a letter to future self
- Have multiple users so they can connect with each other
- Create multiple friendships with exisiting users
- Reminder to write a letter to a specific friend
- Invite the friend to join the app to interact
- Display random momeries of the friendships