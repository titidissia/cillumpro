const padding = scaleComponent.get('padding');

// Example scenario:
const scaleComponent = {
    get(key) {
        return {
            padding: 10,
            // other properties...
        }[key];
    }
};

// Now, padding will hold the value 10
console.log(padding); // Output: 10
