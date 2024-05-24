import axios from 'axios';

export const getMissionByRocket = async (rocketId = null) => {
    const url = "https://api.spacexdata.com/v4/launches/query";

    const payload = {
        "query": {
            "rocket": rocketId
        },
        "options": {}
    };

    try {
        const response = await axios.post(url, payload);

        if (response.status === 200) {
            const data = response.data;
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
        } else {
            console.error("Failed to fetch launches. Status code:", response.status);
        }
    } catch (error) {
        console.error("Error fetching launches:", error.message);
    }
}
