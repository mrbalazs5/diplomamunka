import json

def testGenerateQuestions(client):
    headerInfo = {'content-type': 'application/json' }
    payload = {'context': 'Test.'}

    response = client.post("/api/generate-questions", headers=headerInfo, data=payload)

    assert response.status_code == 200
    assert len(response.data) > 0
    assert type(response.data[0]) == str