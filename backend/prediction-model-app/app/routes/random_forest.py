from . import blueprint
from flask import jsonify


@blueprint.route('/predict', methods=['GET'])
def predict():
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
