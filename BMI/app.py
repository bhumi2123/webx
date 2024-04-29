from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    weight = float(request.form['weight'])
    height = float(request.form['height'])
    
    # Calculate BMI
    bmi = weight / (height ** 2)

    # Determine BMI category
    if bmi < 18.5:
        category = 'Underweight'
    elif bmi < 24.9:
        category = 'Normal Weight'
    elif bmi < 29.9:
        category = 'Overweight'
    else:
        category = 'Obese'

    return render_template('result.html', bmi=bmi, category=category)

if __name__ == '__main__':
    app.run(debug=True)


