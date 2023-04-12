from flask import Flask, render_template, request, url_for, redirect
import joblib
import pandas as pd


# load our model file
model = joblib.load('model.svc')
scale = joblib.load('Scalized.scl')

# Object for Flask
app = Flask(__name__)


@app.route('/')
def home():
    return render_template("index.html")


#1.  GET ALL DATA AND SCALIZED

@app.route('/predict', methods=['POST'])
def result():
    if request.method == 'POST':
        age = request.form['age']
        sex = int(request.form['sex'])
        sick = int(request.form['sick'])
        pregnant = int(request.form['pregnant'])
        thyroid_surgery = int(request.form['thyroid_surgery'])
        goitre = int(request.form['goitre'])
        tumor = int(request.form['tumor'])

        TSH_measured = int(request.form['TSH_measured'])

        if TSH_measured == 0:
            TSH = 0
        else:
            TSH = request.form['TSH']

        T3_measured = int(request.form['T3_measured'])

        if T3_measured == 0:
            T3 = 0
        else:
            T3 = request.form['T3']

        TT4_measured = int(request.form['TT4_measured'])

        if TT4_measured == 0:
            TT4 = 0
        else:
            TT4 = request.form['TT4']

        T4U_measured = int(request.form['T4U_measured'])

        if T4U_measured == 0:
            T4U = 0
        else:   
            T4U = request.form['T4U']

        FTI = request.form['FTI']

                            

        # 2. create DataFrame
        data = [[age, sex, sick, pregnant, thyroid_surgery, goitre, tumor, TSH_measured,
                TSH, T3_measured, T3, TT4_measured, TT4, T4U_measured, T4U, FTI]]

        column_name = ['age', 'sex', 'sick', 'pregnant', 'thyroid_surgery', 'goitre', 'tumor',
                       'TSH_measured', 'TSH', 'T3_measured', 'T3', 'TT4_measured', 'TT4',
                       'T4U_measured', 'T4U', 'FTI']

        data_model = pd.DataFrame(data, columns=column_name)

        # scalized
        num_col = ['age','TSH',  'T3','TT4', 'T4U', 'FTI']                 

        data_model[num_col] = scale.transform(data_model[num_col])

        # Prediction
        result = model.predict(data_model)[0]

            

        #3. Display
        if result == 0:
            return render_template('result.html', Thyroid_Text='Hyperthyroidism',result_no = result)
        elif result == 1:
            return render_template('result.html', Thyroid_Text='Hypothyroidism',result_no = result)
        elif result==2 :
            return render_template('result.html', Thyroid_Text='Thyroid Negative',result_no = result)


        # column_name2 = ['age', 'sex', 'TSH_measured', 'TSH', 'T3_measured', 'T3', 'TT4_measured', 'TT4', 'T4U_measured',
                                         #             'T4U', 'FTI']
                                          # if FTI_measured == 0:
                                     #     FTI = 0
                                 # else:
             # ['age', 'TSH', 'T3', 'TT4', 'T4U', 'FTI']
                 # FTI_measured = int(request.form['FTI_measured'])

if __name__ == "__main__":
    app.run(debug = True)
