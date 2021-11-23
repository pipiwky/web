import pandas as pd
import numpy as np

from User import user
class DatabaseUser(object):
    def __init__(self):
        self.Userlist = list()
        self.tmp_dict = {}
        self.fmypoollst = list()
    def Append_user(self,params):
        A = user()
        A.father = params['father']
        A.Assets = params['Assets']
        A.Loan = params['Loan']
        A.personal_info = params['personal_info']
        A.Insurance = params['Insurance']
        A.Liabilities = params['Liabilities']
        A.demand_deposit = params['demand_deposit']
        A.time_deposit = params['time_deposit']
        A.children = params['children']
        A.familypool = params['familypool']
        A.Investment = params['Investment']
        self.Userlist.append(A)


    def Delete_user(self,user):
        for i in range(len(self.Userlist)):
            if(self.Userlist[i].personal_info == user.personal_info):
                self.Userlist.pop(i)
                break

    def find_user_by_name(self,name):
        for i in range(len(self.Userlist)):
            A = self.Userlist[i]
            if(A.personal_info == name):
                return i
        return -1

    def save_data(self):
        A = user()
        A.personal_info = 'Children'
        print(A.__dict__)
        d = pd.DataFrame([A.__dict__])
        d.to_csv("Userdata",index=0)

    def load_data(self):
        data = pd.read_csv("Userdata")
        val = data.values
        params = []
        for i in val:
            d = {}
            d.update(dict(zip(['father', 'children', 'time_deposit', 'demand_deposit', 'Investment', 'Loan', 'Insurance', 'Assets','Liabilities','familypool',
                               'personal_info'], i)))
            params.append(d)
        for i in range(len(params)):
            tmp = params[0]
            self.Append_user(tmp)
## info=["saving",1]
    def update(self,name,info):
        title = info[0]
        order = self.find_user_by_name(name)
        current = self.Userlist[order]
        tmp = current.__dict__
        tmp[title] = info[1]
        current.father = tmp['father']
        current.Assets = tmp['Assets']
        current.Loan = tmp['Loan']
        current.personal_info = tmp['personal_info']
        current.Insurance = tmp['Insurance']
        current.Liabilities = tmp['Liabilities']
        current.demand_deposit = tmp['demand_deposit']
        current.time_deposit = tmp['time_deposit']
        current.children = tmp['children']
        current.familypool = tmp['familypool']
        current.Investment = tmp['Investment']
        self.Userlist[order] = current
    def retrieve(self,order):
        return self.Userlist[order]







