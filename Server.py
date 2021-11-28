from DataBase import DatabaseUser
from User import user
from flask import Flask,url_for,redirect,render_template,request
app = Flask(__name__,template_folder='templates',static_folder='static',static_url_path='/static')

@app.route('/family_pool_overview',methods=['GET','POST'])
def family_pool_overview():
    print(Database.tmp_dict)
    return render_template('family-pool-overview.html',tmp_dict=Database.fa_dict,id_dict = Database.tmp_dict)
@app.route('/',methods=['POST','GET'])
def login():
    if request.method == 'GET':
        return render_template('login.html',tmp_dict = Database.tmp_dict)
    else:
        username = request.form.get('username')
        password = request.form.get('password')
        k = Database.find_user_by_name(username)
        current_user = Database.Userlist[k]
        Database.currentuser = current_user
        if(current_user.verify()==1):

            tmp_dict = current_user.__dict__
            family = Database.Userlist[current_user.familypool]
            fa_dict = family.__dict__
            Database.fa_dict = fa_dict
            Database.tmp_dict = tmp_dict
            return redirect(url_for('family_pool_overview'))
        else:
            tmp_dict = current_user.__dict__
            family = Database.Userlist[current_user.familypool]
            fa_dict = family.__dict__
            Database.fa_dict = fa_dict
            Database.tmp_dict = tmp_dict
            return redirect(url_for('children_pool'))
#children
@app.route('/children_pool',methods=['GET','POST'])
def children_pool():
    print(Database.tmp_dict)
    return render_template('children-pool.html',tmp_dict = Database.tmp_dict)
@app.route('/children_pool_sr',methods=['GET','POST'])
def children_pool_sr():
    print(Database.tmp_dict)
    return render_template('children-pool-sr.html',tmp_dict = Database.tmp_dict)
@app.route('/children_pool_mb',methods=['GET','POST'])
def children_pool_mb():
    print(Database.tmp_dict)
    return render_template('children-pool-mb.html',tmp_dict = Database.tmp_dict)
#family
@app.route('/family_pool_manage')
def family_pool_manage():
    return render_template('family-pool-manage.html',tmp_dict=Database.fa_dict,id_dict = Database.tmp_dict)
@app.route('/family_pool_manage_st')
def family_pool_manage_st():
    return render_template('family-pool-manage-st.html',tmp_dict=Database.fa_dict,id_dict = Database.tmp_dict)

@app.route('/family_pool_manage_fu')
def family_pool_manage_fu():
    return render_template('family-pool-manage-fu.html',tmp_dict=Database.fa_dict,id_dict = Database.tmp_dict)
@app.route('/family_pool_manage_lo')
def family_pool_manage_lo():
    return render_template('family-pool-manage-lo.html',tmp_dict=Database.fa_dict,id_dict = Database.tmp_dict)
@app.route('/family_pool_manage_in')
def family_pool_manage_in():
    return render_template('family-pool-manage-in.html',tmp_dict = Database.fa_dict,id_dict = Database.tmp_dict)

@app.route('/family_pool_manage_sw')
def family_pool_manage_sw():
    return render_template('family-pool-manage-sw.html',tmp_dict = Database.fa_dict,id_dict = Database.tmp_dict)
@app.route('/family_pool_manage_su')
def family_pool_manage_su():
    return render_template('family-pool-manage-su.html',tmp_dict = Database.fa_dict,id_dict = Database.tmp_dict)
@app.route('/family_pool_manage_mp')
def family_pool_manage_mp():
    return render_template('family-pool-manage-mp.html',tmp_dict = Database.fa_dict,id_dict = Database.tmp_dict)
@app.route('/family_pool_goal')
def family_pool_goal():
    return render_template('family-pool-goals.html',tmp_dict = Database.fa_dict,id_dict = Database.tmp_dict)
#parent

@app.route('/parent_pool_manage')
def parent_pool_manage():
    if(Database.currentuser.flag==1):
        return render_template('parent-pool-manage.html',tmp_dict=Database.tmp_dict)
@app.route('/parent_pool_manage_st')
def parent_pool_manage_st():
    return render_template('parent-pool-manage-st.html',tmp_dict=Database.tmp_dict)
@app.route('/parent_pool_manage_fu')
def parent_pool_manage_fu():
    return render_template('parent-pool-manage-fu.html',tmp_dict=Database.tmp_dict)
@app.route('/parent_pool_manage_in')
def parent_pool_manage_in():
    return render_template('parent-pool-manage-in.html',tmp_dict=Database.tmp_dict)
@app.route('/parent_pool_manage_lo')
def parent_pool_manage_lo():
    return render_template('parent-pool-manage-lo.html',tmp_dict=Database.tmp_dict)
@app.route('/parent_pool_manage_mp')
def parent_pool_manage_mp():
    return render_template('parent-pool-manage-mp.html',tmp_dict=Database.tmp_dict)
@app.route('/parent_pool_manage_su')
def parent_pool_manage_su():
    return render_template('parent-pool-manage-su.html',tmp_dict=Database.tmp_dict)
@app.route('/parent_pool_manage_sw')
def parent_pool_manage_sw():
    return render_template('parent-pool-manage-sw.html',tmp_dict=Database.tmp_dict)
@app.route('/parent_pool_goals')
def parent_pool_goal():
    return render_template('parent-pool-goals.html',tmp_dict=Database.tmp_dict)
@app.route('/parent_pool_overview')
def parent_pool_overview():
    return render_template('parent-pool-overview.html',tmp_dict=Database.tmp_dict)









if __name__ == '__main__':
    Database = DatabaseUser()
    Database.load_data()
    tmp_dict = {}
    app.run(debug=True)