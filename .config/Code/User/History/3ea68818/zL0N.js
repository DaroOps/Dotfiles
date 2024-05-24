let payload = {
    "query": {
        "rocket": "5e9d0d95eda69973a809d1ec"
    },
    "options": {}
}

export const getMissionByRocket = async (rocketId=null)=>{
    url = "https://api.spacexdata.com/v4/launches/query"

    payload = {
        "query": {
            "rocket": "5e9d0d95eda69973a809d1ec"  # Replace this with the desired rocket ID
        },
        "options": {}
    }
    
    response = requests.post(url, json=payload)
    
    if response.status_code == 200:
        data = response.json()
        print("Total launches:", data["totalDocs"])
        print("Page:", data["page"])
        print("Total pages:", data["totalPages"])
        print("Launches:")
        for launch in data["docs"]:
            print("-" * 50)
            print("Name:", launch["name"])
            print("Launch Date (UTC):", launch["date_utc"])
            print("Details:", launch["details"])
    else:
        print("Failed to fetch launches. Status code:", response.status_code)
}

