
# RDK Expert App

**RDK Expert App** is a GIF search application developed in React. It uses the Giphy API to search, fetch, and display animated GIFs in real-time based on categories entered by the user. The application features a component-based architecture with reusable components and a custom hook that handles data fetching and loading state, providing a fast and interactive user experience.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Main Components](#main-components)
- [CSS Styles](#css-styles)
- [Tests](#tests)
- [License](#license)

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/gif-expert-app.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd gif-expert-app
    ```
3. **Install the dependencies:**
    ```bash
    npm install
    ```
4. **Set up the environment variables:**  
   Create a `.env` file in the root of the project and define the following variable:
    ```plaintext
    VITE_GIPHY_API_KEY=<your-giphy-api-key>
    ```
5. **Start the development server:**
    ```bash
    npm run dev
    ```

## Usage

The application allows you to enter a search category, after which it queries the Giphy API and displays the related GIFs in a grid format. Each time the user adds a new category, it becomes a new section with a set of GIFs.

To test the application, simply enter a term in the search field. The loading state will indicate when data is being fetched and will update once the images are available.

## Project Structure

The project structure is organized as follows to facilitate modularity and maintenance:

```plaintext
project-root
│
├── components
│   ├── AddCategory.jsx      # Component to add a new category
│   ├── GifGrid.jsx          # Component to display the GIF grid
│   ├── GifItem.jsx          # Component to represent each individual GIF
│
├── helpers
│   ├── getGif.js            # Logic to make the API call to Giphy and process data
│
├── hooks
│   ├── useFetchGifs.js      # Custom hook to manage GIF fetching
│
├── styles.css               # General application styles
├── main.jsx                 # Application entry point
├── index.js                 # Exports components for easier import
├── tests
│   ├── useFetchGifs.test.js # Tests for the custom hook
│   ├── getGif.test.js       # Tests for the API data fetching function
│   └── ...                  # Other test files
└── README.md                # Project documentation
```

## Environment Variables

The application requires a Giphy API key to access GIF data:
- **VITE_GIPHY_API_KEY**: Define your API key in the `.env` file to authorize requests.

## Main Components

### AddCategory
This component allows the user to enter a new search category. Upon submitting the form, it adds the category to the list and updates the search results on the screen.

### GifGrid
Renders a grid of GIFs for a specific category. It uses the `useFetchGifs` hook to fetch data from the API and shows a loading indicator while the data is being fetched.

### GifItem
Represents each GIF in the grid, displaying both the GIF image and its title.

### useFetchGifs
Custom hook that makes the API call to Giphy to fetch GIFs for a specific category. Manages the loading state (`isLoading`) to indicate when data is being fetched from the API.

### getGifs
Asynchronous function that sends a request to the Giphy API with the provided category and returns an array of objects with the properties `id`, `title`, and `url` of each GIF.

## CSS Styles

The application has basic styles defined in `styles.css`:
- **Typography and colors**: Uses a modern typography and a clean design, with a neutral background and vibrant colors for headings.
- **GIF grid**: Responsive design that adapts to different screen sizes, maintaining a consistent visual experience on both mobile and desktop devices.
- **Visual effects**: GIFs have shadow and hover effects, enhancing interactivity.

## Tests

The application includes unit tests for the main components and functions:

- **useFetchGifs.test.js**: Tests for the `useFetchGifs` hook, verifying that it returns the initial state and updates correctly after images are loaded.
  
- **getGif.test.js**: Test for `getGifs`, verifying that the function returns an array of objects with the expected structure after a valid API query to Giphy.

Run the tests with the following command:
```bash
npm run test
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
