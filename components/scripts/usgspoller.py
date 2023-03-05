# Name: Toan Do
# Date : 3/4/2023
# Description: This script will pull data from USGS website and store it in XML file

import requests
import json

main_Path: str = "/workspaces/streamflow/components"
python_Program: str = "%s/scripts" % (main_Path)
work_Dir: str = "%s/working" % (main_Path)
data_Dir: str = "%s/data" % (main_Path)


def process_Stations_List(state: str, data_type_list: dict):
    with open("%s/%s.json" % (data_Dir, state), "r") as read_File:
        data: dict = json.load(read_File)
        for station in data:
            for data_type in station["DATA"]:
                if data_type in data_type_list:
                    station["SHOW"] = True
                else:
                    station["SHOW"] = False

def get_State_Stations_List(state: str):
    print("Getting station list for state: %s" % (state))
    print("----------------------------------")

    # Build URL Below
    url: str = "https://waterservices.usgs.gov/nwis/site/?format=json&stateCd=%s&parameterCd=00010,00060,00070,00400,00297&siteType=ST&siteStatus=active" % (
        state)
    r = requests.get(url)

    if r.status_code != 200:
        print("Error: %s" % (r.status_code))

    print("Stations pulled successfully, status code: %s" % (r.status_code))

    data: dict = r.json()["value"]["timeSeries"]
    station_Dict: dict = {}

    # write code to get the station name as the key and a dictionary of the station longtitude and latitude as the value
    for station in data:
        station_Name: str = station["sourceInfo"]["siteName"]
        if station_Name in station_Dict:
            station_Dict[station_Name]["DATA"].update({station["variable"]["variableName"]: { "DATA_VALUE": station["values"][0]["value"][0]["value"],
                                                        "DATA_UNIT": station["variable"]["unit"]["unitCode"],
                                                        "DATA_DESCRIPTION": station["variable"]["variableDescription"]}})
        else:
            station_Longitude: float = station["sourceInfo"]["geoLocation"]["geogLocation"]["longitude"]
            station_Latitude: float = station["sourceInfo"]["geoLocation"]["geogLocation"]["latitude"]
            station_Data: dict = {}
            station_Data.update({station["variable"]["variableName"]: { "DATA_VALUE": station["values"][0]["value"][0]["value"],
                                                        "DATA_UNIT": station["variable"]["unit"]["unitCode"],
                                                        "DATA_DESCRIPTION": station["variable"]["variableDescription"]}})
            station_Dict[station_Name] = {
                "LATITUDE": station_Latitude, "LONGITUDE": station_Longitude, "DATA": station_Data, "SHOW": False}

    with open("%s/%s.json" % (data_Dir, state), "w") as save_File:
        json.dump(station_Dict, save_File)

    print("Stations saved to file: %s/%s.txt" % (data_Dir, state))
    print("----------------------------------")


def get_Data(station_ID: str):
    print("Getting data from station ID: %s  " % (station_ID))
    print("----------------------------------")

    # Build URL Below
    url: str = "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=%s&parameterCd=00060&siteStatus=all" % (
        station_ID)
    r = requests.get(url)

    if r.status_code != 200:
        print("Error: %s" % (r.status_code))

    print("Data pulled successfully, status code: %s" % (r.status_code))

    data = r.json()

    with open("%s/%s.json" % (work_Dir, station_ID), "w") as save_File:
        json.dump(data, save_File)

    print("Data saved to file: %s/%s.txt" % (work_Dir, station_ID))
    print("----------------------------------")


def groom_data(station_ID: str):
    with open("%s/%s.json" % (work_Dir, station_ID), "r") as read_File:
        data: dict = json.load(read_File)
        latitude: float = data["value"]["timeSeries"][0]["sourceInfo"]["geoLocation"]["geogLocation"]["latitude"]
        longitude: float = data["value"]["timeSeries"][0]["sourceInfo"]["geoLocation"]["geogLocation"]["longitude"]
        station_Name: str = data["value"]["timeSeries"][0]["sourceInfo"]["siteName"]
        river_date_time: str = data["value"]["timeSeries"][0]["values"][0]["value"][0]["dateTime"]
        river_CFS: int = data["value"]["timeSeries"][0]["values"][0]["value"][0]["value"]
        data_Description: str = data["value"]["timeSeries"][0]["variable"]["variableDescription"]
        data_Unit: str = data["value"]["timeSeries"][0]["variable"]["unit"]["unitCode"]
        data_Value: float = data["value"]["timeSeries"][0]["values"][0]["value"][0]["value"]

        process_Data: dict = {"LATITUDE": latitude,
                              "LONGITUDE": longitude,
                              "STATION_NAME": station_Name,
                              "DATA_DESCRIPTION": data_Description,
                              "DATA_UNIT": data_Unit,
                              "DATA_VALUE": data_Value,
                              "DATE_TIME": river_date_time,
                              "CFS": river_CFS
                              }
        with open("%s/final_%s.json" % (data_Dir, station_ID), "w") as save_File:
            json.dump(process_Data, save_File)
