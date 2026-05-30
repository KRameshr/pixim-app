# PIXIM — Photo Search App

A professional image search application built with React + Vite + Tailwind CSS,
powered by the Unsplash API.

![PIXIM Preview](./preview.png)

## Live Demo
🌐 [pixim-app.vercel.app](https://pixim-app.vercel.app)

## Features

- 🔍 Real-time image search powered by Unsplash API
- 🏠 Beautiful landing page with featured photos
- 📱 Fully responsive mobile design
- 🖼️ Image modal with photographer details
- ❤️ Like/favorite images
- 🔗 Direct link to high-resolution images
- ⚡ Loading states and error handling
- 🗂️ Category-based quick search
- 🧪 Unit tested with Vitest

## Tech Stack

| Category | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| HTTP | Axios |
| Icons | Lucide React |
| API | Unsplash API |
| Testing | Vitest + React Testing Library |

## Folder Structure

```
src/
├── features/
│   ├── search/
│   │   ├── components/
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchSuggestions.jsx
│   │   └── hooks/
│   │       └── useSearch.js
│   └── gallery/
│       ├── components/
│       │   ├── ImageCard.jsx
│       │   ├── ImageGrid.jsx
│       │   ├── ImageModal.jsx
│       │   └── NoImages.jsx
│       └── hooks/
│           └── useGallery.js
├── shared/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Loader.jsx
│   └── context/
│       └── PhotoContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Search.jsx
│   └── NotFound.jsx
├── data/
│   └── homeData.js
├── api/
│   └── unsplash.js
└── test/
    ├── setup.js
    ├── SearchBar.test.jsx
    ├── NoImages.test.jsx
    ├── Loader.test.jsx
    ├── Footer.test.jsx
    └── PhotoContext.test.jsx
```

## Getting Started

### Prerequisites
- Node.js 18+
- Unsplash Developer Account

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pixim-app.git

# Navigate to project
cd pixim-app

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### Environment Variables

Create `.env` in root folder:
```
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

Get your free API key at: [unsplash.com/developers](https://unsplash.com/developers)

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Run Tests
```bash
npm test
```

### Build for Production
```bash
npm run build
```

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with hero, stats, featured photos |
| `/search` | Search | Full image search results |
| `*` | NotFound | 404 page |

## API Usage

This app uses the [Unsplash API](https://unsplash.com/developers):

- `GET /photos/random` — Load random featured photos
- `GET /search/photos` — Search photos by keyword

Free tier: 50 requests/hour

## Screenshots

### Home Page
![Home](./screenshots/home.png)

### Search Results
![Search](./screenshots/search.png)

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

Set environment variable in Vercel dashboard:
```
VITE_UNSPLASH_ACCESS_KEY = your_key
```

## License
MIT License — free to use for personal and commercial projects.

## Author
**K Ramesh**
- LinkedIn: [linkedin.com/in/kramesh](https://linkedin.com/in/kramesh)
- GitHub: [github.com/KRameshr](https://github.com/KRameshr)
