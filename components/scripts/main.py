# Name: Toan Do
# Date : 3/4/2023
# Description: The main script to run the functions

from usgspuller import get_Data, groom_data
from pathlib import Path

main_Path: str = "/workspaces/streamflow/components"
python_Program: str = "%s/scripts" % (main_Path)
work_Dir: str = "%s/work" % (main_Path)
data_Dir: str = "%s/data" % (main_Path)

station = "01646500"
file = Path("%s/final_%s.json" % (data_Dir, station))
if not file.is_file():
    get_Data(station)
    groom_data(station)