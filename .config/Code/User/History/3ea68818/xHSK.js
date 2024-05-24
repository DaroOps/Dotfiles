export const getMissionByRocket = async (rocketId = null) => {
    const url = "https://api.spacexdata.com/v4/launches/query";

    const payload = {
        query: {
            rocket: rocketId
        },
        options: {
            select:
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

        console.log(data);

        return data
    } catch (error) {
        console.error("Error fetching launches:", error.message);
    }
}
