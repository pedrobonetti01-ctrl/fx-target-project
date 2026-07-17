// api.js

export async function fetchExchangeRates() {
    try {
        const url = "https://economia.awesomeapi.com.br/json/last/USD-EUR,EUR-USD,BRL-USD";
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        // Returning a clean object with parsed float values
        return {
            usdEur: parseFloat(data.USDEUR.bid),
            eurUsd: parseFloat(data.EURUSD.bid),
            brlUsd: parseFloat(data.BRLUSD.bid)
        };

    } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
        // Fallback default rates in case the API is down, preventing app crashes
        return { usdEur: 0.92, eurUsd: 1.08, brlUsd: 0.18 }; 
    }
}