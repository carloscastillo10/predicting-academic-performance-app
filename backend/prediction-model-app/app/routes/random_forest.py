from . import blueprint
from flask import jsonify, request


@blueprint.route('/predict', methods=['POST'])
def predict():
    print(request.json)
    response = {
        'status': 'aprobado',
        'rules': [
            {
                'name': 'apeb2_ponderado <= 30.2',
                'output': True,
                'value': 20.2
            }
        ]
    }
    return jsonify(response), 201
