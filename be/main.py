from flask import Flask, jsonify, request, Response
from flask_pymongo import PyMongo
from bson.json_util import dumps
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

USER = "roei848"
PASSWORD = "roei848"
connection_string_cookit = f"mongodb+srv://{USER}:{PASSWORD}@nba-guesser-e7ccd.mongodb.net/cookit"

mongo_cookit = PyMongo(app, uri=connection_string_cookit)
base_url = "/api"


@app.route(base_url + "/categories", methods=['GET'])
def get_categories():
    """
    GET all categories of food, help us setting home page
    """
    categories = mongo_cookit.db.categories.find()
    res = dumps(categories)
    return res


@app.route(base_url + "/recipes", methods=['GET'])
def get_recipes():
    """
    GET all recipes from database
    """
    recipes = mongo_cookit.db.recipes.find()
    res = dumps(recipes)
    return res


@app.route(base_url + "/recipes/<category>/<sub_category>", methods=['GET'])
def get_recipes_by_category_and_sub_category(category, sub_category):
    """
    GET all recipes that in asked category and in asked sub_category
    """
    query = {"category": category, "sub_categories": sub_category}
    recipes = mongo_cookit.db.recipes.find(query)
    res = dumps(recipes)
    return res


@app.route(base_url + "/recipes/favorite", methods=['GET'])
def get_favored_recipes():
    """
    GET all recipes that are mark as favorite
    """
    query = {"favorite": True}
    recipes = mongo_cookit.db.recipes.find(query)
    res = dumps(recipes)
    return res


@app.route(base_url + "/recipes/favorite/<recipe_name>", methods=['PUT'])
def patch_favorite_change(recipe_name):
    """
    Put the favorite prop in recipe
    """
    try:
        body = request.get_json()
        favorite = body["favorite"]

        my_query = {"name": recipe_name}
        new_values = {"$set": {"favorite": favorite}}

        mongo_cookit.db.recipes.update_one(my_query, new_values)

        res = jsonify(f"Recipe named {recipe_name} updated successfully")
        res.status_code = 200
        return res

    except Exception as err:
        not_found()


@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found ' + request.url
    }
    resp = jsonify(message)

    resp.status_code = 404

    return resp


if __name__ == '__main__':
    app.run(debug=True)
