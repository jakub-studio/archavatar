@ECHO OFF

where /q node
IF ERRORLEVEL 1 (
    ECHO Node is missing. It is recommended to use Node 8.
    PAUSE
    EXIT /B
) ELSE (
    REM Node found, good to go.
)

npm i
echo The installation has now finished, make sure to create a cfg.json file from cfg.json.example and fill it in.
pause