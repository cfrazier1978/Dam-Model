from blocksciencelabs import Client

labs = Client()

df = labs.fetch_results(178)

print(df)