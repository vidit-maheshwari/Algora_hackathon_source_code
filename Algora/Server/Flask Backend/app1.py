from flask import Flask, request, jsonify
from Youtube import Recommender
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins

# Set up logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/youtube', methods=['POST'])
def handle():
    data1 = request.get_json()

    if 'keywords' not in data1:
        return jsonify({'error': 'Keywords parameter is missing'}), 400
    
    keywords = data1['keywords']
    logging.debug(f"Received keywords: {keywords}")

    # Call Recommender function to get response
    response = Recommender(keywords)

    return jsonify({
        'keywords': keywords,
        'urls': response
    })

if __name__ == '__main__':
    app.run(debug=True, port=5002)
