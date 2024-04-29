from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# This is just a temporary storage for feedback, in a real application, you'd use a database.
feedback_data = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    name = request.form['name']
    email = request.form['email']
    rating = request.form['rating']
    feedback = request.form['feedback']

    # Store the feedback data
    feedback_data.append({
        'name': name,
        'email': email,
        'rating': rating,
        'feedback': feedback
    })

    return redirect(url_for('thank_you'))

@app.route('/thank_you')
def thank_you():
    return render_template('thank_you.html')

if __name__ == '__main__':
    app.run(debug=True)
