import os
import flask
import gspread

from flask import render_template
from google.oauth2.service_account import Credentials

# scopes = [
#     "https://www.googleapis.com/auth/spreadsheets",
# ]

# client = gspread.authorize(
#     Credentials.from_service_account_file(
#         "creds.json", scopes=scopes
#     )
# )

app = flask.Flask(__name__, static_url_path='/static')


@app.route('/')
def index():
    return render_template('index.html')


# @app.route('/contact', methods=['POST'])
# def contact():

#     try:
#         sheet_id = "1Y8bkFFz2Y3gRoZGaYWhdgtjVwJjogHkRFI2uPjT3ugM"
#         workbook = client.open_by_key(sheet_id)
#         sheet = workbook.worksheet("Help Queries")

#         formData = flask.request.json

#         data = [formData['name'], formData['email'],
#                 formData['subject'], formData['message']]

#         sheet.append_row(data)

#         return "Response <200>"

#     except Exception as e:
#         return f"Response <500>", 500


@app.route("/queries")
def queries():
    return flask.redirect("https://docs.google.com/spreadsheets/d/1Y8bkFFz2Y3gRoZGaYWhdgtjVwJjogHkRFI2uPjT3ugM/edit?usp=sharing")


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=os.getenv('PORT'))
