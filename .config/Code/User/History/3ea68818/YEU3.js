
payload = {
    "query": {
        "rocket": "5e9d0d95eda69973a809d1ec"
    },
    "options": {}
}

export const getAllRockets = async (rocketId=null)=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets", json=payload).json();

    console.log("rocket retrieve"+res)
}
