# import openai
import os
from openai import OpenAI

# Set your OpenAI API key
os.environ["OPENAI_API_KEY"] = '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'
# openai.api_key = os.getenv("OPENAI_API_KEY")

# Specify the model and make the API call
client = OpenAI()

completion = client.chat.completions.create(
  model="gpt-4-0125-preview",
  messages=[
    {"role": "system", "content": "You are a poet."},
    {"role": "user", "content": "Compose a haiku."}
  ]
)

print(completion.choices[0].message)