from DataBase import DatabaseUser
from User import user
from flask import Flask,url_for,redirect,render_template,request
app = Flask(__name__,template_folder='templates',static_folder='static',static_url_path='/static')
@app.route('/selectpool',methods=['POST','GET'])
def select():

    print(Database.tmp_dict)
    return render_template("test-home.html",tmp_dict=Database.tmp_dict)

@app.route('/',methods=['POST','GET'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    else:
        username = request.form.get('username')
        password = request.form.get('password')
        k = Database.find_user_by_name(username)
        current_user = Database.Userlist[k]
        tmp_dict = current_user.__dict__
        Database.tmp_dict = tmp_dict

        return redirect(url_for('select'))

@app.route('/info',methods=['GET','POST'])
def info():
    return tmp_dict
if __name__ == '__main__':
    Database = DatabaseUser()
    Database.load_data()
    tmp_dict = {}
    app.run(debug=True)