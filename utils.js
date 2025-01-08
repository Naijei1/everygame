async function loadAllGames() {
    // Centralized list of team member JSON files
    const jsonFiles = [
        "games.json",
        "grant_games.json",
        "naijei_games.json",
        "ziqi_games.json",
        "gene_games.json"
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
