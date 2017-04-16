var layoutOptions = {
                name: 'cytoscape-ngraph.forcelayout',
                async: {
                    // tell layout that we want to compute all at once:
                    maxIterations: 5000,
                    stepsPerCycle: 30,

                    // Run it till the end:
                    waitForStep: true
                },
                physics: {
                    /**
                     * Ideal length for links (springs in physical model).
                     */
                    springLength: 6000,

                    /**
                     * Hook's law coefficient. 1 - solid spring.
                     */
                    springCoeff: 0.00000001,

                    /**
                     * Coulomb's law coefficient. It's used to repel nodes thus should be negative
                     * if you make it positive nodes start attract each other :).
                     */
                    gravity: -15.0,

                    /**
                     * Theta coefficient from Barnes Hut simulation. Ranged between (0, 1).
                     * The closer it's to 1 the more nodes algorithm will have to go through.
                     * Setting it to one makes Barnes Hut simulation no different from
                     * brute-force forces calculation (each node is considered).
                     */
                    theta: 0.8,

                    /**
                     * Drag force coefficient. Used to slow down system, thus should be less than 1.
                     * The closer it is to 0 the less tight system will be.
                     */
                    dragCoeff: 0.0001,

                    /**
                     * Default time step (dt) for forces integration
                     */
                    timeStep: 20,
                    iterations: 5000,
                    fit: false,

                    /**
                     * Maximum movement of the system which can be considered as stabilized
                     */
                    stableThreshold: 0.001
                },
                iterations: 5000,
                refreshInterval: 50, // in ms
                refreshIterations: 100, // iterations until thread sends an update
                stableThreshold: 5,
                animate: true,
                fit: false //True makes it always resize the entire graph in the window. This seems to free up memory for rendering and peform better
            };