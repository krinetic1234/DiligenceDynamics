import spacy
from spacy.matcher import Matcher

# load the spaCy model
nlp = spacy.load("en_core_web_sm")

def parse_instruction_with_spacy(instruction):
    doc = nlp(instruction)
    
    matcher = Matcher(nlp.vocab)
    matcher.add("ADD_ROW", [[{"LOWER": "add"}, {"LOWER": "a"}, {"LOWER": "row"}]])
    matcher.add("CREATE_SHEET", [[{"LOWER": "create"}, {"LOWER": "a"}, {"LOWER": "new"}, {"LOWER": "sheet"}]])
    matcher.add("SUM_COLUMN", [[{"LOWER": "sum"}, {"LOWER": "column"}]])
    
    # find matches in document
    matches = matcher(doc)
    
    intent = None
    entities = {'values': [], 'columns': []}
    
    for match_id, start, end in matches:
        string_id = nlp.vocab.strings[match_id]
        span = doc[start:end]  
        if string_id == "ADD_ROW":
            intent = "add_row"
            entities['values'] = [token.text for token in doc[end:]]
        elif string_id == "CREATE_SHEET":
            intent = "create_sheet"
            entities['sheet_name'] = doc[end].text
        elif string_id == "SUM_COLUMN":
            intent = "sum_column"
            entities['column'] = doc[end].text.upper()
    
    return intent, entities

# test
instruction = "Add a row with data John, Doe, 30"
intent, entities = parse_instruction_with_spacy(instruction)
print(f"Intent: {intent}, Entities: {entities}")