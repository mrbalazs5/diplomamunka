from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import time
from transformers import T5ForConditionalGeneration, T5TokenizerFast


def runModel(input_string, **generator_args):
  tokenizer = T5TokenizerFast.from_pretrained("t5-base", model_max_length = 512)
  model = T5ForConditionalGeneration.from_pretrained("mrbalazs5/t5-simple-qg-eng")

  generator_args = {
      "max_length": 256,
      "num_beams": 10,
      "num_return_sequences": 10,
      "length_penalty": 1.5,
      "no_repeat_ngram_size": 3,
      "early_stopping": True
  }

  inputString = "generate questions: " + input_string + " </s>"
  inputIds = tokenizer.encode(inputString, return_tensors="pt")
  res = model.generate(inputIds, **generator_args)
  output = tokenizer.batch_decode(res, skip_special_tokens=True)
  d = "?"
  return [e+d for e in output[0].split(d) if e]


class QuestionGeneratorView(APIView):
    def post(self, request, *args, **kwargs):
        context = request.data['context']

        questions = runModel(context)

        return Response(questions, status=status.HTTP_200_OK)
