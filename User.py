import streamlit as st


class user(object):
    def __init__(self):
        self.father = 0
        self.children = 1
        self.flag = 1
        self.time_deposit = 0
        self.demand_deposit = 0
        self.Investment = 0
        self.Loan = 0
        self.Insurance = 0
        self.Assets = 0
        self.Liabilities = 0
        self.personal_info = " "
        self.familypool = 0
    def verify(self):
        if(self.flag==1):
            return 1
        elif(self.flag == 0):
            return 0
        else:
            return -1



