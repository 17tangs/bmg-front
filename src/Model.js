import React, { Component } from 'react';
import cytoscape from 'cytoscape';
import cydagre from 'cytoscape-dagre';
import coseBilkent from 'cytoscape-cose-bilkent';
import cola from 'cytoscape-cola';
import klay from 'cytoscape-klay';
import './Model.css';

cytoscape.use( klay );

cytoscape.use( cola );

cytoscape.use( coseBilkent );
// cydagre(cytoscape);

let cyStyle = {
    width: '100%',
    height: '40%',
};

let conf = {
    minZoom: 1,
    maxZoom: 1,
    boxSelectionEnabled: false,
    autounselectify: true,
    zoomingEnabled: true,
    style: [
        {
            selector: 'node',
            style: {
                'shape':'circle',
                'content': '',
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
                'line-color': '#777',
                'target-arrow-color': '#777',
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
          direction: 'RIGHT', // The aimed aspect ratio of the drawing, that is the quotient of width by height
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
                    { data: { id: 'A1', completed: "true"} },
                    { data: { id: 'A2', completed: "true" } },
                    { data: { id: 'A3', completed: "true" } },
                    { data: { id: 'B1', completed: "maybe" } },
                    { data: { id: 'B2' , completed: "maybe"} },
                    { data: { id: 'B3', completed: "maybe" } },
                    { data: { id: 'B4' , completed: "maybe"} },
                    { data: { id: 'B5', completed: "maybe" } },
                    { data: { id: 'C1' , completed: "maybe"} },
                    { data: { id: 'C2', completed:'maybe'}},
                    { data: { id: 'C3', completed:'maybe'}},
                    { data: { id: 'C4', completed:'maybe'}},
                    { data: { id: 'C5', completed:'maybe'}},
                    { data: { id: 'D1', completed:'false'}},
                    { data: { id: 'D2', completed:'false'}},
                ],
                edges: [
                    { data: { source: 'A1', target: 'B1', } },
                    { data: { source: 'A1', target: 'B2' } },
                    { data: { source: 'A1', target: 'B3' } },
                    { data: { source: 'A1', target: 'B4' } },
                    { data: { source: 'A1', target: 'B5' } },
                    { data: { source: 'A2', target: 'B1', } },
                    { data: { source: 'A2', target: 'B2' } },
                    { data: { source: 'A2', target: 'B3' } },
                    { data: { source: 'A2', target: 'B4' } },
                    { data: { source: 'A2', target: 'B5' } },
                    { data: { source: 'A3', target: 'B1', } },
                    { data: { source: 'A3', target: 'B2' } },
                    { data: { source: 'A3', target: 'B3' } },
                    { data: { source: 'A3', target: 'B4' } },
                    { data: { source: 'A3', target: 'B5' } },
                    { data: { source: 'B1', target: 'C1', } },
                    { data: { source: 'B1', target: 'C2' } },
                    { data: { source: 'B1', target: 'C3' } },
                    { data: { source: 'B1', target: 'C4' } },
                    { data: { source: 'B1', target: 'C5' } },
                    { data: { source: 'B2', target: 'C1', } },
                    { data: { source: 'B2', target: 'C2' } },
                    { data: { source: 'B2', target: 'C3' } },
                    { data: { source: 'B2', target: 'C4' } },
                    { data: { source: 'B2', target: 'C5' } },
                    { data: { source: 'B3', target: 'C1', } },
                    { data: { source: 'B3', target: 'C2' } },
                    { data: { source: 'B3', target: 'C3' } },
                    { data: { source: 'B3', target: 'C4' } },
                    { data: { source: 'B3', target: 'C5' } },
                    { data: { source: 'B4', target: 'C1', } },
                    { data: { source: 'B4', target: 'C2' } },
                    { data: { source: 'B4', target: 'C3' } },
                    { data: { source: 'B4', target: 'C4' } },
                    { data: { source: 'B4', target: 'C5' } },
                    { data: { source: 'B5', target: 'C1', } },
                    { data: { source: 'B5', target: 'C2' } },
                    { data: { source: 'B5', target: 'C3' } },
                    { data: { source: 'B5', target: 'C4' } },
                    { data: { source: 'B5', target: 'C5' } },
                    { data: { source: 'C1', target: 'D1', } },
                    { data: { source: 'C1', target: 'D2' } },
                    { data: { source: 'C2', target: 'D1', } },
                    { data: { source: 'C2', target: 'D2' } },
                    { data: { source: 'C3', target: 'D1', } },
                    { data: { source: 'C3', target: 'D2' } },
                    { data: { source: 'C4', target: 'D1', } },
                    { data: { source: 'C4', target: 'D2' } },
                    { data: { source: 'C5', target: 'D1', } },
                    { data: { source: 'C5', target: 'D2' } },


                ]
            };
        const cys = cytoscape(conf);
        var node = '';
        cys.on('mouseover', 'node', function(evt){
          node = evt.target.id();
          cys.elements(`edge[source = "${node}"]`).style({
              'width':1.7,
              'line-color': '#03A9F4',
          })
          console.log( 'tapped ' + node );
        });
        cys.on('mouseout', 'node', function(evt){
          node = evt.target.id();
          cys.elements(`edge[source = "${node}"]`).style({
              'width' :1,
              'line-color': '#777',
          })
          console.log( 'out ' + node );
        });

        this.setState({'cy': cys})

        // cy.json();
    }

    shouldComponentUpdate() {
        return false;
    }


    componentWillUnmount() {
        if (this.state.cy) {
            this.state.cy.destroy();
        }
    }

    render() {

        return <div className = "cy" style={cyStyle} ref={(cyRef) => {
            this.cyRef = cyRef;
        }}/>
    }
}

export default Model;
