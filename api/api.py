from helpers import query_database
from flask import Flask, request
import sqlite3
import time


app = Flask(__name__, static_folder = '../build', static_url_path ='/' )
TABLE_1 = "user_details"

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api')
def home_page():
    result = query_database(f'SELECT * FROM {TABLE_1}')
    if result == "Try/Catch: ERROR":
        query_database(f'CREATE TABLE {TABLE_1}  (email TEXT UNIQUE, confirmEmail TEXT, user_password TEXT, confirmPassword TEXT, firstName TEXT, lastName TEXT, phoneNumber TEXT, user_address TEXT, city TEXT, country TEXT, loggedIn TEXT) ')
        app.logger.info(f"BFR =>     TABLE:{TABLE_1} created succesfully")
    app.logger.info("Before First Request")
    return "HOME PAGE"


@app.route('/api/time')
def get_current_time():
    app.logger.info("Time Page")
    return {'time': time.time()}


@app.route('/api/check')
def check():
    # query_database(f'DELETE FROM {TABLE_1} WHERE user_password = ? ', args = ['56789'])
    res = query_database(f'SELECT * FROM {TABLE_1}')
    return res


@app.route('/api/signUp', methods = ['POST', 'GET'])
def api_signup():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.get_json()
        values = list(json.values())
        res = query_database(f"SELECT * FROM {TABLE_1} WHERE email = ? AND confirmEmail = ? ", args = [values[0], values[0]])
        app.logger.info(res)
        if len(res) > 0:
            return { "message" : "Already Exists" }
        query_database(f'INSERT INTO {TABLE_1} (email, confirmEmail, user_password, confirmPassword, firstName, lastName, phoneNumber, user_address, city, country, loggedIn) VALUES (?,?,?,?,?,?,?,?,?,?,?)', args = values)
        app.logger.info(values)
        return { "message" : "Success" }
    else:
        app.logger.info("No JSON")
        return { "message" : "Content-Type not supported!" }


@app.route('/api/logIn', methods = ['GET', 'POST'])
def api_logIn():
    content_type = request.headers['Content-Type']
    if (content_type == 'application/json'):
        json = request.get_json()
        values = list(json.values())
        app.logger.info(values)
        res = query_database(f'SELECT * FROM {TABLE_1} WHERE email = ? AND user_password = ?', args=values)
        app.logger.info(res)
        app.logger.info("Query Successful: Data extracted from database")
        if len(res) > 0:
            return res[0]
        else:
            return "No Matching Data"
    else:
        app.logger.info("No JSON")
        return 'Content-Type not supported!'






if __name__ == '__main__':
    app.run(debug = True)