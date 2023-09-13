import pandas as pd
from flask import Flask, jsonify,request
from flask_cors import CORS
import pickle

app = Flask(__name__)
cors = CORS(app)


@app.route('/')
def home():
    return jsonify({'message': 'Welcome to the price prediction API'})


model = pickle.load(open('models/model.pkl', 'rb'))
@app.route('/predecir', methods=['POST'])
def predecir():
    data = request.get_json()

    surface = int(data['surface'])
    bedrooms = int(data['bedrooms'])
    restrooms = int(data['restrooms'])

    input_data = [[surface, bedrooms, restrooms]]
    prediction = model.predict(input_data)

    return jsonify({'prediction': float(prediction[0])})



if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
