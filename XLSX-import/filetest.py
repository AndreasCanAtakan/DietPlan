import pandas as pd

data = pd.read_excel (r'matvarer.xlsx')
df = pd.DataFrame(data, columns= ['Navn','Kcal','Kategori','Underkategori'])
print (df)
