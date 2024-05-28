from flask import Flask
#from flask_pymongo import PyMongo
from app import create_app
from flask_cors import CORS, cross_origin

import os

app = create_app()


CORS(app)

# if __name__ == "__main__":
#     app.run(host = "localhost", port = 5000, debug = True)


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)


# if __name__ == 'app':
#     app.run()