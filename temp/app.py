
import os
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index(name = None):
	#return render_template('index.html', name=name)
	return ('Hello world!')

if __name__ == '__main__':
	app.run()