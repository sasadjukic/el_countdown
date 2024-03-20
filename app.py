
import datetime
from flask import Flask, render_template

current_day = datetime.date.today()
elections = datetime.date(2024, 11, 5)

app = Flask(__name__)

@app.route('/', methods= ['POST', 'GET'])
def index():
    days: str = str((elections - current_day).days)
    return render_template('index.html', days=days)

if __name__ == '__main__':
    app.run()