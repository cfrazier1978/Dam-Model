from blocksciencelabs import Client
import pandas as pd

labs = Client()

df = pd.DataFrame(labs.fetch_results(191))
df.to_csv('simulation.csv')