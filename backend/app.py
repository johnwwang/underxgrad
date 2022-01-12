from flask import Flask, redirect, url_for, request, flash
from flask.json import jsonify
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from bson import json_util
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


mongoClient = MongoClient('mongodb://127.0.0.1:27017')
db = mongoClient.get_database('db')
names_col = db.get_collection('collection')

@app.route('/test', methods=["GET"])
def test():
	print('hello')
	return jsonify({'hello': 'world'})

@app.route('/add-data', methods=['POST'])
def add_data():
		json = request.get_json()
		# print(type(json))
		# json = json_util.dumps(json)
		# print(type(json))

		names_col.insert_one(json)
		return json_util.dumps(json)

@app.route('/get-data/')
def get_data():
		names_json = []
		if names_col.find({}):
				for name in names_col.find({}).sort("name"):
						names_json.append({"name": name['name'], "id": str(name['_id'])})
		print(json.dumps(names_json))
		return json.dumps(names_json)

if __name__ == "__main__":
    app.run(debug=True, port=3001)
