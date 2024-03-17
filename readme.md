# Vowsuite

Vowsuite is a proof of concept for a video delivery platform designed to organize and deliver branded video galleries to clients. It serves as an initial draft, showcasing the potential for such a platform using a variety of technologies.

## Table of Contents
- [About Vowsuite](#about-vowsuite)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Using Vowsuite](#using-vowsuite)
- [Screenshots](#screenshots)
- [Future Development](#future-development)
- [License](#license)
- [Contact](#contact)

## About Vowsuite

Vowsuite was built using Node.js with Express and TypeScript on the backend, MongoDB for database management, Firebase for video storage, and React with styled components and the context API on the frontend. This project was created to explore the feasibility and challenges of developing a video delivery platform.

## Features

- Video uploading to Firebase with preview images.
- Organization of videos into branded galleries.
- Public link generation for gallery delivery.
- Demo version lacks authentication for simplicity.

## Prerequisites

- Node.js v18 or higher.
- A MongoDB account with a user and a database setup.
- A Firebase account with Storage enabled.

## Installation

1. Clone both `vs-server` and `vs-client` repositories.
2. In the root of each repository, copy the `.env.sample` file to a new file named `.env`.
3. Fill in the `.env` file with your environment variables:
   - `vs-server`: Requires `PORT` and `MONGODB_URI`.
   - `vs-client`: Requires `REACT_APP_BASE_API_URL` and Firebase configuration variables.

## Using Vowsuite

- **Dashboard**: Automatically loads a demo user's first gallery in the Gallery Editor.
- **Gallery Editor**: Manage videos and galleries; upload, edit, and delete videos; edit and create new galleries.
- **Public Gallery Access**: Generated through the context menu for each gallery.

## Screenshots

Vowsuite Studio:

![Vowsuite Studio](/src/assets/screens/vowsuite-studio.png)

Vowsuite Gallery:

![Vowsuite Gallery](/src/assets/screens/vowsuite-gallery.png)

## Future Development

The development of Vowsuite v2 is underway using Next.js. This version is a proof of concept and will not be further developed. For insights and progress on Vowsuite, visit [thaldorfhuelsbeck.dev/blog](https://thaldorfhuelsbeck.dev/blog).

## License

This project is licensed under the MIT License.

## Contact

For inquiries, please open an issue on GitHub, or contact me directly via LinkedIn or email. My contact information is available on my [GitHub page](https://github.com/austinthaldorfhuelsbeck).
