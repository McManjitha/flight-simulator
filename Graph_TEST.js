class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(nodeName) {
        if (!this.nodes.has(nodeName)) {
            this.nodes.set(nodeName, []);
        }
    }

    addEdge(source, destination) {
        this.addNode(source);
        this.addNode(destination);

        this.nodes.get(source).push(destination);
        this.nodes.get(destination).push(source); // If the graph is undirected
    }

    getNeighbors(nodeName) {
        return this.nodes.get(nodeName);
    }
}

function createGraph(waypointArray) {
    const graph = new Graph();

    for (const connection of waypointArray) {
        const [source, destination] = connection;
        graph.addEdge(source, destination);
    }

    return graph;
}

const waypointArray = [['WBGB', 'VBU'], ['VBU', 'VSI'], ['VSI', 'VKG'], ['VKG', 'WBGG'], ['VBU', 'VMI'], ['VMI', 'WBGR']];
const flightGraph = createGraph(waypointArray);

console.log(flightGraph.getNeighbors('VSI')); // Example: Get neighbors of 'VBU'
