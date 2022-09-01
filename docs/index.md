# Grand Ethiopian Renaissance Dam
Ethiopia is in the process of building a massive dam on the Nile river called the Grand Ethiopian Renaissance Dam (GERD). This dam will provide water and power for the people of Ethiopia, but there is concern by Egypt (who is down river of the Nile) that this dam will greatly affect the amount of water they receive from the Nile. There are many estimates of how long it would take to fill the reservoir, anywhere between 2 to 40 years, each with a big impact to the goals of Ethiopia and Egypt.

## Purpose / Goals
The purpose of this model is not to analyze the hydro politics between the two countries. Rather, the goal is to create a model that observes the effects of different number of years to fill the reservoir behind the dam and how each timeline affects how much water flows down the Nile into Egypt.

## Model Notes
### Assumptions
The water flow of the Blue Nile River can pass through the GERD at its normal flow levels. Otherwise the dam would always have uncontrolled spillover, using the Auxilary Spillway once the reservoir as at full capacity.

### Genesis State
```py
genesis_states = {
    # The total amount of water that the reservoir can hold
    'Reservoir_Capacity': 73000,
    # The starting amount of water in the reservoir
    'Reservoir_Level': 0,
    # Percentage of water flowing through the dam that should be held back in order to fill the reservoir
    'Reserve_Percent': .05,
    # The current month (initialized to January)
    'Current_Month': 0,
    # How many years to completely fill the reservoir (initialized to 0)
    'Number_of_Years': 0               
}
```

 ```py
--8<-- "models/state_variables.py"
```