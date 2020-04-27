# FS Challenge

## System Requirment
Node.js (v10.x)
NPM (v6+)
MongoDB

In mongoDB you need specify Schema in api/config/env.js

## Setup
```
git clone https://github.com/pratik-soni50/sms-fs-challenge.git && cd sms-fs-challenge
```

## Install Dependancy:
```
npm run install-all
```
Install dependancy for API and UI

## Dev Run:
### For UI:
```
npm run start-ui
```
By this UI will run on port 3000
### For API
```
npm run start-api
```
By this UI will run on port 8000

## Build:
```
npm run build
```
This will create package build for API and UI

## Run Build:
### For UI:
```
npm run start-build-ui
```
By this UI will run on port 3000
### For API
```
npm run start-build-api
```
By this UI will run on port 8000

## Seed Data
```
cd api
```
then
```
npm run seed -- <json file relative path>
```
File must be in same format that givan in Challenge

## Features
- Build with MERN stack
- RESTful API
- Sorteble List
- Create/Update Item form
- Delete Item functionality
- Notification

## Upcoming Features
- Configurable Port
- Updated Validation
- UI Changes
- Better Error Handling
