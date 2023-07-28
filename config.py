import pymongo
import certifi

con_str = "mongodb+srv://bowmanmarquice:Test1234@cluster0.pcsducu.mongodb.net/?retryWrites=true&w=majority"

client = pymongo.MongoClient(con_str,tlsCAFile=certifi.where())
db = client.get_database("freedom")