from flask import Flask, request
import json
from config import db
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Warning: disable CORS check

#annotatition
@app.get('/')
def home():
    return "Hello Python"

@app.get('/test')
def test():
    return "This is a test page"


#################################
##### API Products###############
######### JSON ##################
#################################


catalog = []

def fix_id(record):
    record["_id"] = str(record["_id"])
    return record

@app.get('/api/products')
def get_products():
    #TODO: read products from DB and return them
    results = []
    cursor = db.products.find({})
    for prod in cursor:
        results.append(fix_id(prod))
    return json.dumps(results)


@app.post('/api/products')
def save_product():
    product = request.get_json()
    db.products.insert_one(product)

    return json.dumps(fix_id(product))

products=[]

@app.get('/api/products/count')
def get_products_count():

    cursor = db.products.find({})
    count = 0 
    for prod in cursor:
        count +=1

    return json.dumps(count)


# get /api/categories
# return the list of categories
# create an empty list
# get the products into a cursor
# travel cursor and get the category of the prod
# append the category to your list
# at the end, return the list
# sort

@app.get("/api/categories")
def get_categories():
    cursor= db.products.find({})
    results = []
    for prod in cursor: 
        category = prod["category"]
        if category not in results:
            results.append(category)

    results.sort()
    return json.dumps(results)

@app.get("/api/products/category/<category>")
def get_products_by_category(category):
    results = []
    cursor = db.products.find({})
    for prod in cursor:
        if prod["category"] == category:
            results.append(fix_id(prod))
    return json.dumps(results)

#create an results list
# read products into cursor
# travel the cursor
#if the product category is equal to the category variable
# append product to results
# at the end return results 

# SJC=124388
# Create an endpoint that return the number of products in the catalog
# the endpoint should respond to a get request on /api/products/count
# google - python count elements on a list


#######################
#### APU Coupons ######
#### Json  ##########
#######################

@app.get("/api/coupons")
def get_coupons():
    cursor= db.coupons.find({})
    results = []
    for coupon in cursor: 
        results.append(fix_id(coupon))

    return json.dumps(results)

@app.post('/api/coupons')
def save_coupon():
    coupon = request.get_json()
    db.coupons.insert_one(coupon)

    return json.dumps(fix_id(coupon))

coupons =[];


#start the server manually
app.run(debug=True)