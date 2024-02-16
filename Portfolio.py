import streamlit as st
import pandas as pd

st.set_page_config(layout='wide')
col1, col2 = st.columns([1,2.5])
with col1:
    st.image("images/photo.png", width=350)

with col2:
    st.title("Shriram Venkatasubramanian Iyer")
    st.info(""" Hello, I’m Shriram
I graduated in 2022 with a Master's degree in Computer Application from the Sastra University in TamilNadu, India &
graduated in 2019 with a Bachelor's degree in Commerce from the Mumbai University in Maharashtra, India. 
Currently I work as Software Engineer in Unifo Pvt Ltd.
    """)

st.write("Below you can find some apps I have build in Python. Feel free to Contact me.")

df = pd.read_csv("data.csv", sep=";")

col3, empty_col, col4 = st.columns([1.5, 0.25, 1.75])
with col3:
    for index, row in df[:9].iterrows():
        st.header(row["title"])
        st.write(row['description'])
        st.image("images/" + row['image'])
        st.write(f"[Source Code]({row['url']})")

with col4:
    for index, row in df[9:].iterrows():
        st.header(row["title"])
        st.write(row['description'])
        st.image("images/" + row['image'])
        st.write(f"[Source Code]({row['url']})")
