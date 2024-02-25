import together

together.api_key = "4d92792b22507a85012f994875f6394102674f77a50c4ee5c9a2f56b7a11e0e0"
resp = together.Files.upload(file="/Users/krish/Desktop/CS/Projects/DiligenceDynamics/ai/sentiment/data/finance.jsonl")
file_id = resp["id"]
files_list = together.Files.list()

resp = together.Finetune.create(
  training_file = file_id,
  model = 'mistralai/Mixtral-8x7B-v0.1',
  n_epochs = 20,
  n_checkpoints = 1,
  batch_size = 4,
  learning_rate = 1e-5,
  suffix = 'dildyn-ft',
  wandb_api_key = '9fb63618b93a5aaac93dc44cd5e79fa62eb32e7e',
)

fine_tune_id = resp['id']
print(resp)