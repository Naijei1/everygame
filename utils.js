async function loadAllGames() {
    // Centralized list of team member JSON files
    const jsonFiles = [
        "games.json",
        "metadata/grant_games.json",
        "metadata/naijei_games.json",
        "metadata/ziqi_games.json",
        "metadata/gene_games.json",
        "metadata/scraped_games.json"
        // Add new members' files here as needed
    ];

    const allGames = [];

    for (const file of jsonFiles) {
        try {
            const response = await fetch(file);
            if (response.ok) {
                const data = await response.json();
                allGames.push(...data);
            } else {
                console.error(`Error loading ${file}:`, response.statusText);
            }
        } catch (error) {
            console.error(`Error loading ${file}:`, error);
        }
    }

    return allGames;
}
