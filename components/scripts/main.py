# Name: Toan Do
# Date : 3/4/2023
# Description: The main script to run the functions

from usgspoller import get_Data, groom_data, get_State_Stations_List, process_Stations_List
from pathlib import Path
import sys
import ast
import json

process()

def process():
    main_Path: str = "/workspaces/streamflow/components"
    python_Program: str = "%s/scripts" % (main_Path)
    work_Dir: str = "%s/work" % (main_Path)
    data_Dir: str = "%s/data" % (main_Path)

    json_input: dict = ast.literal_eval(sys.argv[1]).json()
    state: str = json_input["STATE"]
    file = Path("%s/%s.json" % (work_Dir, state))
    if not file.is_file():
        get_State_Stations_List(state)
    process_Stations_List(state, json_input["DATA_TYPE"])

    sys.stdout.flush()