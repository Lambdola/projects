import os
from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
import sqlite3
import time

from sqlalchemy.sql import func

app = Flask(__name__)

@app.route('/')
def home_page():
    return "HOME"


@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

if __name__ == '__main__':
    app.run(debug = True)