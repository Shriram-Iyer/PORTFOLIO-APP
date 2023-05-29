import streamlit as st
from send_mail import sendMail

st.set_page_config(layout='wide')
st.header("Contact Me")

with st.form(key="mail"):
    user_email = st.text_input("Your Email Address", key='text')
    message = st.text_area("Your Message")
    fullMessage = f"""\
Subject: Message from {user_email}

From: {user_email}
{message}
"""
    button = st.form_submit_button("Submit")
    if button:
        sendMail(fullMessage)
        st.info("Your mail was sent successfully")
