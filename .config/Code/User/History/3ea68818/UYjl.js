export const getMissionByRocket = async (rocketId = null) => {
    const url = "https://api.spacexdata.com/v4/launches/query";

    const payload = {
        "query": {
            "rocket": {
                "$in": ["5e9d0d95eda69955f709d1eb", "otro_id_de_cohete"]
              }
        },
        "options": {
          "select": {
            "links.patch": 1
          }
        }
      };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error("Failed to fetch launches. Status code: " + response.status);
        }

        const data = await response.json();

        return data
    } catch (error) {
        console.error("Error fetching launches:", error.message);
    }
}
