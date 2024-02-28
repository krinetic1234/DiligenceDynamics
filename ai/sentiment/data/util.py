import pandas as pd
import json

# load dataframe
df = pd.read_csv("ai/sentiment/data/finance.csv")

# conversion row
def convert_row(row):
    sentiment = row.iloc[0]  # first column
    statement = row.iloc[1]  # second column
    return {"text": f'{sentiment} statement-{statement}'}

# write jsonl file
with open('ai/sentiment/data/finance.jsonl', 'w') as outfile:
    for _, row in df.iterrows():
        json_record = json.dumps(convert_row(row))
        outfile.write(json_record + '\n')
