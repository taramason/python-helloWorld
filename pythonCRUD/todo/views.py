from todoapp import app

@app.route('/')
def index():
    return '<h1>Hello World!</h1>'

    from flask import render_template, request
from models import Category, Todo, Priority, db

@app.route('/')
def list_all():
   return render_template(
       'list.html',
       categories=Category.query.all(),
       todos=Todo.query.join(Priority).order_by(Priority.value.desc())
