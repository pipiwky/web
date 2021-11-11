import streamlit as st
from User import user
from DataBase import DatabaseUser
import streamlit.components.v1 as components


class FamilyAssetManagement(object):
    def __init__(self):
        #self.test()
        self.Database = DatabaseUser()
        self.Database.load_data()
        self.webpageinit()
    def test(self):
        with st.form("my_form"):
            st.write("Inside the form")
            slider_val = st.slider("Form slider")
            checkbox_val = st.checkbox("Form checkbox")
            submitted = st.form_submit_button("Submit")
            if submitted:
                st.write("slider", slider_val, "checkbox", checkbox_val)
        st.write("Outside the form")
    def webpageinit(self):
        st.title("Family Asset Management System")
        with st.form("my_form"):
            username = st.text_input("username:")
            password = st.text_input("password:")
            submitted = st.form_submit_button("Submit")
            if submitted:
                k = self.Database.find_user_by_name(username)
                if(k==-1):
                    st.warning("Invalid Username")
                else:
                    st.success("Sucessfully Login")
                    st.balloons
    def login(self):
        with st.form("my_form"):
            username = st.text_input("username:")
            password = st.text_input("password:")
            submitted = st.form_submit_button("Submit")
            if submitted:
                k = self.Database.find_user_by_name(username)
                if(k==-1):
                    st.warning("Invalid Username")
                else:
                    st.success("Sucessfully Login")
                    st.balloons
    def select(self):
        add_selectbox = st.sidebar.selectbox("Services",("Login","Personal Account","Family Account"))
        if add_selectbox == "Login":
            self.login()
        elif add_selectbox == "Personal":
            return

if __name__ == "__main__":
    Demos = FamilyAssetManagement()