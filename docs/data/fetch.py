from blocksciencelabs import Client
import pandas as pd

labs = Client()

df = pd.DataFrame(labs.fetch_results(186))

df.to_csv('simulation.csv')