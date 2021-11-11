import pandas as pd
import numpy as np

from User import user
class DatabaseUser(object):
    def __init__(self):
        self.Userlist = list()

    def Append_user(self,params):
        A = user(**params)
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
        A.loan = 2
        A.personal_info = "XiuMing"
        print(A.__dict__)
        d = pd.DataFrame([A.__dict__])
        d.to_csv("Userdata",index=0)

    def load_data(self):
        data = pd.read_csv("Userdata")
        val = data.values
        params = []
        for i in val:
            d = {}
            d.update(dict(zip(['father', 'children', 'saving', 'stock', 'mutual_fund', 'fex', 'loan', 'credit_card',
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
        current = user(**tmp)
        self.Userlist[order] = current
    def retrieve(self,order):
        return self.Userlist[order]

