function getNewsAndWeatherAll() {
  const newsURL = "http://localhost:5000/data/latestNews";
  const weatherURL = "http://localhost:5000/data/weather";
  return Promise.all([fetch(newsURL), fetch(weatherURL)])
    .then(([news, weather]) => {
      return Promise.all([news.json(), weather.json()]);
    })
    .then(([newsData, weatherData]) => {
      return {
        news: newsData.data,
        weather: weatherData,
      };
    });
}

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAll,
  };
}
