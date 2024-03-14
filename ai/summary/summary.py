from openai import OpenAI
import os

# openai.api_key = os.getenv("OPENAI_API_KEY")


def naive_summary(companySymbol):
    try:
        client = OpenAI()

        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a knowledgeable assistant providing a summary of companies."},
                {"role": "user", "content": f"Write a professional, concise summary about the company with the symbol {companySymbol}, including its industry, main products or services, key markets, and recent developments. The summary should be informative and suitable for a business audience and should not be longer than 4-5 sentences."}
            ]
        )

        # Extracting the generated text from the response
        summary_text = completion.choices[0].message.content
        print(summary_text)
        return summary_text

    except Exception as e:
        print(f"Error generating summary: {e}")
        return "An error occurred while generating the company summary."

if __name__ == '__main__':
    naive_summary('AAPL')