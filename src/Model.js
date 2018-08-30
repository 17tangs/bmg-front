import React, { Component } from 'react';
import cytoscape from 'cytoscape';
import cydagre from 'cytoscape-dagre';
import coseBilkent from 'cytoscape-cose-bilkent';
import cola from 'cytoscape-cola';
import klay from 'cytoscape-klay';

cytoscape.use( klay );

cytoscape.use( cola );

cytoscape.use( coseBilkent );
// cydagre(cytoscape);

let cyStyle = {
    width: '1000px',
    height: '600px',
    border: '1px solid white',
    display: 'block'
};

let conf = {
    minZoom: 0.9,
    maxZoom: 3,
    boxSelectionEnabled: false,
    autounselectify: true,
    zoomingEnabled: true,
    style: [
        {
            selector: 'node',
            style: {
                'label': 'hi',
                'width': '50px',
                'shape':'rectangle',
                'content': (ele) => {
                    return ele.data().id;
                },
                'text-valign': 'center',
                'text-halign': 'center',
                'font-size': '12px',
                'color': '#333',
                'background-color': function (ele) {
                    const nodeData = ele.data();
                    switch (nodeData.completed) {
                        case 'true':
                            return "#4CAF50";
                        case 'maybe':
                            return "#FFEB3B";
                        case 'false':
                            return "#F44336";
                        default:
                            return "green";
                    }
                }
            }
        },
        {
            selector: 'edge',
            style: {
                'width': 1,
                "curve-style": "bezier",
                'target-arrow-shape': 'triangle-backcurve',
                'line-color': '#AAA',
                'target-arrow-color': '#AAA',
                'arrow-scale': '0.8',
            }
        }
    ],
    layout: {
        name: 'klay',
        animate: 'true',
        klay: {
          // Following descriptions taken from http://layout.rtsys.informatik.uni-kiel.de:9444/Providedlayout.html?algorithm=de.cau.cs.kieler.klay.layered
          addUnnecessaryBendpoints: false, // Adds bend points even if an edge does not change direction.
          aspectRatio: 0.8,
          direction: 'UP', // The aimed aspect ratio of the drawing, that is the quotient of width by height
          borderSpacing: 20, // Minimal amount of space to be left to the border
          compactComponents: true,
      },
    }
};

class Model extends Component {
    constructor(props) {
        super(props);
        this.state = { cy: {} }
    }

    componentDidMount() {
        conf.container = this.cyRef;
        conf.elements = {
                nodes: [
                    { data: { id: '31', completed: "true"} },
                    { data: { id: '32', completed: "true" } },
                    { data: { id: '33', completed: "true" } },
                    { data: { id: '35L', completed: "maybe" } },
                    { data: { id: '111' , completed: "maybe"} },
                    { data: { id: '130', completed: "false" } },
                    { data: { id: '131', completed: "false" } },
                    { data: { id: '168' , completed: "maybe"} },
                    { data: { id: '172' , completed: "maybe"} },
                    { data: { id: '174A' , completed: "maybe"} },
                    { data: { id: '174B', completed: "false" } },
                    { data: { id: '174C' , completed: "false"} },
                    { data: { id: '180' , completed: "maybe"} },
                    { data: { id: '145' , completed: "false"} },
                    { data: { id: '181' , completed: "false"} },
                    { data: { id: '161', completed: "false" } },
                    { data: { id: '170A' , completed: "false"} },
                    { data: { id: '121' , completed: "maybe"} },
                    { data: { id: '122' , completed: "maybe"} },
                    { data: { id: '124' , completed: "maybe"} },
                    { data: { id: '112' , completed: "false"} },
                    { data: { id: '136', completed: "false" } },
                    { data: { id: '118' , completed: "false"} },
                    { data: { id: '119' , completed: "false"} },
                    { data: { id: '143' , completed: "false"} },
                    { data: { id: '144' , completed: "false"} },
                    { data: { id: '132' , completed: "false"} },
                    { data: { id: '137A' , completed: "false"} },
                    { data: { id: '137B' , completed: "false"} },

                ],
                edges: [
                    { data: { source: '31', target: '32', } },
                    { data: { source: '32', target: '33' } },
                    { data: { source: '31', target: '35L' } },
                    { data: { source: '35L', target: '111' } },
                    { data: { source: '33', target: '111' } },
                    { data: { source: '32', target: '111' } },
                    { data: { source: '35L', target: '131' } },
                    { data: { source: '33', target: '131' } },
                    { data: { source: '131', target: '130' } },
                    { data: { source: '111', target: '130' } },
                    { data: { source: '32', target: '168' } },
                    { data: { source: '32', target: '172' } },
                    { data: { source: '32', target: '174A' } },
                    { data: { source: '174A', target: '174B' } },
                    { data: { source: '174A', target: '174C' } },
                    { data: { source: '32', target: '180' } },
                    { data: { source: '180', target: '145' } },
                    { data: { source: '180', target: '181' } },
                    { data: { source: '180', target: '161' } },
                    { data: { source: '180', target: '170A' } },
                    { data: { source: '32', target: '121' } },
                    { data: { source: '32', target: '122' } },
                    { data: { source: '32', target: '124' } },
                    { data: { source: '111', target: '112' } },
                    { data: { source: '111', target: '118' } },
                    { data: { source: '111', target: '143' } },
                    { data: { source: '112', target: '136' } },
                    { data: { source: '118', target: '119' } },
                    { data: { source: '143', target: '144' } },
                    { data: { source: '131', target: '132' } },
                    { data: { source: '131', target: '137A' } },
                    { data: { source: '137A', target: '137B' } },


                ]
            };
        const cys = cytoscape(conf);
        var node = '';
        cys.on('mouseover', 'node', function(evt){
          node = evt.target.id();
          cys.elements(`edge[source = "${node}"]`).style({
              'line-color': 'blue',
          })
          console.log( 'tapped ' + node );
        });

        this.setState({'cy': cys})

        // cy.json();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillReceiveProps(nextProps) {
        conf.container = this.cyRef;
        conf.elements = {
                nodes: [
                    { data: { id: '31', completed: "true"} },
                    { data: { id: '32', completed: "true" } },
                    { data: { id: '33', completed: "true" } },
                    { data: { id: '35L', completed: "maybe" } },
                    { data: { id: '111' , completed: "maybe"} },
                    { data: { id: '130', completed: "false" } },
                    { data: { id: '131', completed: "false" } },
                    { data: { id: '168' , completed: "maybe"} },
                    { data: { id: '172' , completed: "maybe"} },
                    { data: { id: '174A' , completed: "maybe"} },
                    { data: { id: '174B', completed: "false" } },
                    { data: { id: '174C' , completed: "false"} },
                    { data: { id: '180' , completed: "maybe"} },
                    { data: { id: '145' , completed: "false"} },
                    { data: { id: '181' , completed: "false"} },
                    { data: { id: '161', completed: "false" } },
                    { data: { id: '170A' , completed: "false"} },
                    { data: { id: '121' , completed: "maybe"} },
                    { data: { id: '122' , completed: "maybe"} },
                    { data: { id: '124' , completed: "maybe"} },
                    { data: { id: '112' , completed: "false"} },
                    { data: { id: '136', completed: "false" } },
                    { data: { id: '118' , completed: "false"} },
                    { data: { id: '119' , completed: "false"} },
                    { data: { id: '143' , completed: "false"} },
                    { data: { id: '144' , completed: "false"} },
                    { data: { id: '132' , completed: "false"} },
                    { data: { id: '137A' , completed: "false"} },
                    { data: { id: '137B' , completed: "false"} },

                ],
                edges: [
                    { data: { source: '31', target: '32', } },
                    { data: { source: '32', target: '33' } },
                    { data: { source: '31', target: '35L' } },
                    { data: { source: '35L', target: '111' } },
                    { data: { source: '33', target: '111' } },
                    { data: { source: '32', target: '111' } },
                    { data: { source: '35L', target: '131' } },
                    { data: { source: '33', target: '131' } },
                    { data: { source: '131', target: '130' } },
                    { data: { source: '111', target: '130' } },
                    { data: { source: '32', target: '168' } },
                    { data: { source: '32', target: '172' } },
                    { data: { source: '32', target: '174A' } },
                    { data: { source: '174A', target: '174B' } },
                    { data: { source: '174A', target: '174C' } },
                    { data: { source: '32', target: '180' } },
                    { data: { source: '180', target: '145' } },
                    { data: { source: '180', target: '181' } },
                    { data: { source: '180', target: '161' } },
                    { data: { source: '180', target: '170A' } },
                    { data: { source: '32', target: '121' } },
                    { data: { source: '32', target: '122' } },
                    { data: { source: '32', target: '124' } },
                    { data: { source: '111', target: '112' } },
                    { data: { source: '111', target: '118' } },
                    { data: { source: '111', target: '143' } },
                    { data: { source: '112', target: '136' } },
                    { data: { source: '118', target: '119' } },
                    { data: { source: '143', target: '144' } },
                    { data: { source: '131', target: '132' } },
                    { data: { source: '131', target: '137A' } },
                    { data: { source: '137A', target: '137B' } },


                ]
            };
        const cys = cytoscape(conf);
        cys.on('mouseover', 'node', function(evt){
          var node = evt.target;
          console.log( 'tapped ' + node.id() );
        });

        this.setState({'cy': cys})

        // cy.json();
    }

    componentWillUnmount() {
        if (this.state.cy) {
            this.state.cy.destroy();
        }
    }

    render() {

        return <div style={cyStyle} ref={(cyRef) => {
            this.cyRef = cyRef;
        }}/>
    }
}

export default Model;
