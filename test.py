import pandas as pd 
import os
import pickle 
import sys
import numpy as np
from sklearn.linear_model import LogisticRegression


# load the model from disk
filename = 'Model.h5'
loaded_model = pickle.load(open(filename, 'rb'))


new_value  = [30,2,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1]
new_value = np.array(new_value)
new_value = np.expand_dims(new_value, 0)
prediction = loaded_model.predict(new_value)


print(prediction)

