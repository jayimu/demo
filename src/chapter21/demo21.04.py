# Response与Cookie
from flask import Flask
from flask import request
from flask import make_response

app = Flask(__name__)
@app.route('/')
def index():
    response = make_response('<h1>This document is response text</h1>')
    print(type(response))
    return response
@app.route('/writecookie/<cv>')
def writeCookie(cv):
    response = make_response('<h1>Cookie已经写入</h1>')
    response.set_cookie('cv', cv,max_age=20);
    return response
@app.route('/readcookie')
def readCookie():
    value = request.cookies.get('cv');
    print(value)
    if value == None:
        value = 'Cookie失效';
    return value
if __name__ == '__main__':
    app.run()

