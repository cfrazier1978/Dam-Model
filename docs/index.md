# Grand Ethiopian Renaissance Dam
Ethiopia is in the process of building a massive dam on the Nile river called the Grand Ethiopian Renaissance Dam (GERD). This dam will provide water and power for the people of Ethiopia, but there is concern by Egypt (who is down river of the Nile) that this dam will greatly affect the amount of water they receive from the Nile. There are many estimates of how long it would take to fill the reservoir, anywhere between 2 to 40 years, each with a big impact to the goals of Ethiopia and Egypt.

## Purpose / Goals
The purpose of this model is not to analyze the hydro politics between the two countries. Rather, the goal is to create a model that observes the effects of different number of years to fill the reservoir behind the dam and how each timeline affects how much water flows down the Nile into Egypt.

## Model Notes
### Assumptions
The water flow of the Blue Nile River can pass through the GERD at its normal flow levels. Otherwise the dam would always have uncontrolled spillover, using the Auxilary Spillway once the reservoir as at full capacity.

### Genesis State
``` python
genesis_states = {
    'Reservoir_Capacity': 73000,        #The total amount of water that the Grand Ethiopian Renaissance Dam's reservoir can hold.
    'Reservoir_Level': 0,               #The starting amount of water within the GERD's reservoir.
    'Reserve_Percent': .05,              #A variable that will be updated with each time step that keeps track of how much of the water flowing through the dam to hold back to fill the reservoir.
    'Current_Month': 0,                 #Tracks what month the model is in so that the proper river water level can be pulled.
    'Number_of_Years': 0                #Tracks how many years it takes to fill the reservoir.
}
```