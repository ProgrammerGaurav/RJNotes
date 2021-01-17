from flask import Flask, render_template, redirect
import json
app = Flask(__name__)

def viewsUpdate():
    dataFile = open("data.json", "r")
    data = json.load(dataFile)
    
    data["views"] = data["views"] + 1

    dataFile = open("data.json", "w+")
    json.dump(data, dataFile)
    dataFile.close()
    return 0
    


@app.route("/")
def index():
    # viewsUpdate()
    return render_template('index.html')

@app.route("/<string:sem>/<string:sub>")
def sub(sem, sub):
    if sem == "js" or sem == "css":
        return redirect('/')
    return render_template('sem/' + sem + '/' + sub + '/0.html', title = sub, sub=sub)

@app.route("/<string:sem>/<string:sub>/<int:prac>")
def prac(sem, sub, prac):
    return render_template('sem/' + sem + '/' + sub + '/'+ str(prac) +'.html', title = sub, sub=sub)

if __name__ == "__main__":
    app.run(debug=True) 