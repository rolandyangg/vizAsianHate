import json
import pandas as pd

file = ''
json_name = ''

# read csv
df = pd.read_csv(file)
df.to_json(r'{}'.format(json_name), orient="index")
with open(json_name) as file:
    parsed = json.load(file)

# remove row numbers and put into array
res = []
for entry in parsed:
    res.append(parsed[entry])

# write
with open(json_name, 'w', encoding='utf-8') as out:
    json.dump(res, out, ensure_ascii=False, indent=4)