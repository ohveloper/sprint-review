async function getNewsAndWeatherAsync() {
  var newsURL = "http://localhost:5000/data/latestNews";
  var weatherURL = "http://localhost:5000/data/weather";
  // TODO: async/await 키워드를 이용해 작성합니다
  const newsData = await fetch(newsURL).then((data) => data.json());

  const weatherData = await fetch(weatherURL).then((data) => data.json());

  return {
    weather: weatherData,
    news: newsData.data,
  };
}

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAsync,
  };
}
