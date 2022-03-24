from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import time

class QuestionGeneratorView(APIView):
    # 1. List all
    def post(self, request, *args, **kwargs):
        questions = ["Question 1 test content?", "Question 2 test content?"]

        time.sleep(5)

        return Response(questions, status=status.HTTP_200_OK)