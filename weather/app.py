import requests
from flask import Flask, render_template, request

app = Flask(__name__)

def get_weather(city):
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid=0ecfd5110bbf55cc9399e1e4ccd15c7e&units=metric'
    response = requests.get(url)
    data = response.json()
    return data

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather', methods=['POST'])
def weather():
    city = request.form['city']
    weather_data = get_weather(city)
    if weather_data['cod'] == 200:
        weather_info = {
            'city': city,
            'temperature': weather_data['main']['temp'],
            'description': weather_data['weather'][0]['description']
        }
    else:
        weather_info = None
    return render_template('weather.html', weather_info=weather_info)

if __name__ == '__main__':
    app.run(debug=True)
