from flask import Flask,render_template,jsonify,request
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS

app = Flask(__name__)

client=MongoClient('mongodb://localhost:27017')

db=client['psych'] #database er naam dicchi

CORS(app) #prevent cors error

@app.route('/')
# you need to define all templates inside the templates folder if you want to render it , this is built in 
def index():
    return render_template('index.html')

# mention the endpoint and rpute method  , post or get
@app.route('/users',methods=['POST','GET'])
def data():
    if request.method == 'POST':
        body=request.json
        firstName = body['nickname']
        lastName = body['name']
        emailId = body['email']

        db['users'].insert_one({
            "nickname":firstName,
            "name":lastName,
            "email":emailId
        })
        return jsonify({
            'status':'Data posted on mongo',
            'nickname':firstName,
            'name':lastName,
            'email':emailId
            })

    if request.method == 'GET':
            allData = db['users'].find()
            dataJson = []
            for data in allData:
                id = data['_id']
                firstName = data['nickname']
                lastName = data['name']
                emailId = data['email']

                dataDict={
                    "id":str(id),
                    "nickname":firstName,
                    "name":lastName,
                    "email":emailId
                }
                dataJson.append(dataDict)
            return jsonify(dataJson)

                      
     

if __name__ == '__main__':
    app.debug=True
    app.run()