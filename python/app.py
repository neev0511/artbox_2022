appendString = "x"
while True:
    img_name = input("Img name:- ")
    img_price = input("Img price:- ")
    if img_name == "0" or img_price == 0:
        break
    appendString = appendString + '{ "img": ' + \
        img_name + ', "price": ' + '"'+img_price+'"' + ' },'

file1 = open("json/jsons.json", "a")  # append mode
file1.write("[ "+appendString[1:-1] + " ]")
file1.close()

print(appendString[1:-1])
