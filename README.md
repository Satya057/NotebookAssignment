# Note App
FrontendLink : https://silver-pavlova-24629b.netlify.app/
BackendLink:  https://backend-note-hqmy0e0l0-satya057s-projects.vercel.app/fetchAllTasks

A real-time note-taking application built with React, MQTT, and a backend API. This application allows users to create and manage notes with real-time updates.

## Features

- Create and manage notes in real-time
- Real-time updates using MQTT protocol
- Secure WebSocket connections
- Modern UI with Tailwind CSS
- Responsive design

## Tech Stack

- React.js
- MQTT (HiveMQ Broker)
- Axios for API calls
- Tailwind CSS for styling
- Vercel for backend deployment
- Netlify for frontend deployment

## Prerequisites

Before running this project, make sure you have:

- Node.js installed (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
  ├── components/
  │   ├── NoteList.js
  │   └── NoteInput.js
  ├── App.js
  ├── index.js
  └── index.css
```

## API Endpoints

The application uses the following backend API:
- `https://backend-note-hqmy0e0l0-satya057s-projects.vercel.app/fetchAllTasks` - Fetch all notes

## MQTT Configuration

The application uses HiveMQ's public MQTT broker with secure WebSocket connection:
- Broker: `wss://broker.hivemq.com:8884/mqtt`
- Topic: `/add` for adding new notes

## Deployment

The application is deployed on:
- Frontend: Netlify
- Backend: Vercel

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

