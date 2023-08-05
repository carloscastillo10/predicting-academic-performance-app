from . import blueprint
from app.services.random_forest import RandomForestService
from flask import jsonify, request


@blueprint.route('/predict', methods=['POST'])
def predict():
    try:
<<<<<<< HEAD
=======

>>>>>>> 14e8e61 (feat(classify-student): Add prediction service)
        random_forest_service = RandomForestService(request.json)
        response = random_forest_service.predict()
        return jsonify(response), 201
    except Exception as e:
        return jsonify({"message": e.__str__(), "statusCode": 400}), 400
<<<<<<< HEAD
        
=======
>>>>>>> 14e8e61 (feat(classify-student): Add prediction service)
