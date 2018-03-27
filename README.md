# Weather Command Line
A Node.js command line application for accessing the current weather

# Getting Started
### Clone the repository

```
$ git clone git@github.com:fwzmhmd/weather-command-line.git
```

### Prerequisites

Install Node.js from the Official [Website](https://nodejs.org)

Check if you have node installed
```
$ node -v
```

# API Key
### **Sign Up**

1. **Go to [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) to get an API Key**

2. **Create an Account**

![Imgur](https://i.imgur.com/jtKlUbI.png)

3. **Goto API keys tab**

![Imgur](https://i.imgur.com/Pqz6Fzn.png)

4. **Copy API Key**

![Imgur](https://i.imgur.com/f1lHqSi.png)


### **Connect API**

1. Create a file called `api.json`
2. Copy/Paste the following:
```
{
    "key": "<api-key>"
}
```
3. Replace `<api-key>` with your key from [OpenWeatherMap](https://home.openweathermap.org/api_keys)
4. Save the file

# How to Use
### Search a location by City
```
$ node app.js city-name
```
```
$ node app.js city-name,country-code
```
### Search a location by ZIP Code

```
$ node app.js zip-code,country-code
```
_If country code is not specified with zip code then the search works for USA as a default_
```
$ node app.js zip-code
```

# Examples
### Search a location by City
```
$ node app.js london
```
```
$ node app.js london,uk
```
```
$ node app.js paris
```
### Search a location by ZIP Code

```
$ node app.js 94040,us
```
_If country code is not specified with zip code then the search works for USA as a default_
```
$ node app.js 94040
```

# Authors
 **Fawaz Mohamed** - [Github](https://github.com/fwzmhmd)

# License
This project is licensed under the MIT License - see  [LICENSE](LICENSE.md) file for details

# Acknowledgments

* OpenWeatherMap for API