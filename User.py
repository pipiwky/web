import streamlit as st

class user(object):
    def __int__(self):
        self.father = 0
        self.children = 0
        self.saving = 0
        self.stock = 0
        self.mutual_fund = 0
        self.fex = 0
        self.loan = 0
        self.credit_card = 0
        self.personal_info = " "

    def __init__(self,**kwargs):
        super().__init__()
        for key, value in kwargs.items():
            setattr(self, key, value)
