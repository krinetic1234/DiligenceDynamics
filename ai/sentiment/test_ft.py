import together

def ai_output(model_name, content):
    together.api_key = "4d92792b22507a85012f994875f6394102674f77a50c4ee5c9a2f56b7a11e0e0"
    output = together.Complete.create(
        prompt = """
            Discuss the overall market sentiment of below. {content}
        """, 
        model = model_name, 
    )
    return output['output']['choices'][0]['text']