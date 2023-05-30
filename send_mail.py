import os
import smtplib
import ssl

from dotenv import load_dotenv

load_dotenv()
username = os.getenv('USER_NAME')
password = os.getenv('PASSWORD')
print(username, "username")
print(password, "password")


def sendmail(message):
    host = "smtp.gmail.com"
    port = 465
    receiver = username
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(host, port, context=context) as server:
        server.login(username, password)
        server.sendmail(username, receiver, message)
