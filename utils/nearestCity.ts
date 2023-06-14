import { cityCoordinates } from "../assets/static/constants";

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const dx = lat2 - lat1;
    const dy = lon2 - lon1;
    return Math.sqrt(dx * dx + dy * dy);
}

const findNearestCity = (providedLatitude: number, providedLongitude: number): string | null => {
    let minDistance = Infinity;
    let nearestCity: string | null = null;

    for (const [city, coords] of Object.entries(cityCoordinates)) {
        const distance = calculateDistance(providedLatitude, providedLongitude, coords.latitude, coords.longitude);
        if (distance < minDistance) {
            minDistance = distance;
            nearestCity = city;
        }
    }

    return nearestCity;
}

export default findNearestCity;

// const providedLatitude = 27.035527;
// const providedLongitude = 82.216540;
