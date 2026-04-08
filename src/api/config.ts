// API Configuration

export const API_CONFIG = {
    BASE_URL: "https://api.openweathermap.org/data/2.5",
    GEO: "https://api.openweathermap.org/geo/1.0",
    API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY,
    DEFAULT_PARAMS: {
        units: "metric",
        appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    }
}

// Helpful runtime warning when API key is not provided during development
if (!API_CONFIG.API_KEY) {
    // eslint-disable-next-line no-console
    console.warn(
        "VITE_OPENWEATHER_API_KEY is not set. OpenWeather requests will be unauthorized (401)."
    );
}