export const getMissionByRocket = async (rocketId = null) => {
    const url = "https://api.spacexdata.com/v4/launches/query";

    const payload = {
        query: {
            rocket: rocketId
        },
        options: {}
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
        console.log("Total launches:", data.totalDocs);
        console.log("Page:", data.page);
        console.log("Total pages:", data.totalPages);
        console.log("Launches:");
        data.docs.forEach(launch => {
            console.log("-".repeat(50));
            console.log("Name:", launch.name);
            console.log("Launch Date (UTC):", launch.date_utc);
            console.log("Details:", launch.details);
        });
    } catch (error) {
        console.error("Error fetching launches:", error.message);
    }
}
