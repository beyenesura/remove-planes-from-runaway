const Runway = require('./Runway');

describe('Runway', () => {
    let runway;

    beforeEach(() => {
        runway = new Runway('Runway 1');
    });

    test('should add a plane to the runway', () => {
        const plane = {};
        runway.add(plane);
        expect(Runway.planes).toContain(plane);
    });

    test('should remove a plane from the runway', () => {
        const plane1 = {};
        const plane2 = {};
        runway.add(plane1);
        runway.add(plane2);
        runway.remove(plane1);
        expect(Runway.planes).not.toContain(plane1);
        expect(Runway.planes).toContain(plane2);
    });

    test('should throw an error when adding a plane to a full runway', () => {
        for (let i = 0; i < Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS; i++) {
            const plane = {};
            runway.add(plane);
        }
        const plane = {};
        expect(() => runway.add(plane)).toThrow('runways at full capacity!');
    });

    test('should throw an error when removing a plane that is not on the runway', () => {
        const plane = {};
        expect(() => runway.remove(plane)).toThrow('plane not found on this runway!');
    });
    
    test('should have a maximum of 100 planes allowed on the runway', () => {
    expect(Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS).toBe(100);
});

test('should initialize a runway with a name', () => {
    const runwayName = 'Runway 1';
    const runway = new Runway(runwayName);
    expect(runway.name).toBe(runwayName);
});

test('should add planes to the runway', () => {
    const plane1 = {};
    const plane2 = {};
    runway.add(plane1);
    runway.add(plane2);
    expect(Runway.planes).toContain(plane1);
    expect(Runway.planes).toContain(plane2);
});

test('should throw an error when adding planes to a full runway', () => {
    const plane1 = {};
    for (let i = 0; i < Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS; i++) {
        runway.add(plane1);
    }
    expect(() => runway.add(plane1)).toThrow('runways at full capacity!');
});
test('should throw an error when adding planes to a full runway', () => {
    const plane1 = {};
    for (let i = 0; i < Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS; i++) {
        runway.add(plane1);
    }
    expect(() => runway.add(plane1)).toThrow('runways at full capacity!');
});

test('should remove planes from the runway', () => {
    const plane1 = {};
    const plane2 = {};
    runway.add(plane1);
    runway.add(plane2);
    runway.remove(plane1);
    expect(Runway.planes).not.toContain(plane1);
    expect(Runway.planes).toContain(plane2);
});

test('should throw an error when removing planes from an empty runway', () => {
    const plane1 = {};
    expect(() => runway.remove(plane1)).toThrow('runway is currently empty!');
});
});
