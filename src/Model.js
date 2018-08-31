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
    width: '600px',
    height: '450px',
};

let conf = {
    minZoom: 1,
    maxZoom: 1,
    boxSelectionEnabled: false,
    autounselectify: true,
    zoomingEnabled: false,
    style: [
        {
            selector: 'node',
            style: {
                'shape':'ellipse',
                'text-valign': 'center',
                'text-halign': 'center',
                'font-size': '12px',
                'color': '#333',
                'background-color': function (ele) {
                    const nodeData = ele.data();
                    switch (nodeData.completed) {
                        case 'true':
                            return "#5ccbfd";
                        case 'maybe':
                            return "#03a9f4";
                        case 'false':
                            return "#014b6c";
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
                'line-color': '#777',
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
        let hover = (node) =>{
            this.props.handleHover(node);
        }
        let lc = "#AAA";
        let op = "#014b6c"
        let bg = "#1f2429"
        cys.on('mouseover', 'node', function(evt){
          node = evt.target.id();
          hover(node);
          if(node === 'A1'){
              cys.elements(`edge`).style({
                  'width' :0.7,
                  'line-color': '#444',
              })
              cys.elements(`edge[source = "${node}"]`).style({
                  'width':2.3,
                  'line-color': lc,
                  'z-index': 3,
              })
              let s=[['C2'], ['C4'],['C1', 'C4'],['C5'],['C4']]
              for(let i = 1; i<=5; i++){
                  for(let j = 0; j<s[i-1].length; j++){
                      cys.elements(`edge[source = "B${i}"][target="${s[i-1][j]}"]`).style({'width':2.3, 'line-color': lc,'z-index':3})
                  }
              }
              let t = [['D1'],['D1'],[],['D1'],['D1']]
              for(let k = 1; k<=5; k++){
                  for(let l = 0; l<t[k-1].length; l++){
                      cys.elements(`edge[source = "C${k}"][target="${t[k-1][l]}"]`).style({'width':2.3, 'line-color': lc,'z-index':3})
                  }
              }
              cys.$('#D2').style({
                  'background-color': bg,
              });
          }
          if(node === 'A2'){
              cys.elements(`edge`).style({
                  'width' :0.7,
                  'line-color': '#444',
              })
              cys.elements(`edge[source = "${node}"]`).style({
                  'width':2.3,
                  'line-color': lc,
                  'z-index': 3,
              })
              let s=[['C3'], ['C2'],['C1', 'C4'],['C3'],['C3','C5']]
              for(let i = 1; i<=5; i++){
                  for(let j = 0; j<s[i-1].length; j++){
                      cys.elements(`edge[source = "B${i}"][target="${s[i-1][j]}"]`).style({'width':2.3, 'line-color': lc,'z-index':3})
                  }
              }
              let t = [['D2'],['D2'],['D2'],['D2'],['D2']]
              for(let k = 1; k<=5; k++){
                  for(let l = 0; l<t[k-1].length; l++){
                      cys.elements(`edge[source = "C${k}"][target="${t[k-1][l]}"]`).style({'width':2.3, 'line-color': lc,'z-index':3})
                  }
              }
              cys.$('#D1').style({
                  'background-color': bg,
              });
          }
          if(node === 'A3'){
              cys.elements(`edge`).style({
                  'width' :0.7,
                  'line-color': '#444',
              })
              cys.elements(`edge[source = "${node}"]`).style({
                  'width':2.3,
                  'line-color': lc,
                  'z-index': 3,
              })
              let s=[['C5'], ['C3'],['C3', 'C2'],['C1'],['C4','C3']]
              for(let i = 1; i<=5; i++){
                  for(let j = 0; j<s[i-1].length; j++){
                      cys.elements(`edge[source = "B${i}"][target="${s[i-1][j]}"]`).style({'width':2.3, 'line-color': lc,'z-index':3})
                  }
              }
              let t = [['D2'],['D2'],['D2'],['D2'],['D2']]
              for(let k = 1; k<=5; k++){
                  for(let l = 0; l<t[k-1].length; l++){
                      cys.elements(`edge[source = "C${k}"][target="${t[k-1][l]}"]`).style({'width':2.3, 'line-color': lc,'z-index':3})
                  }
              }
              cys.$('#D1').style({
                  'background-color': bg,
              });
          }
      })
        cys.on('mouseout', 'node', function(evt){
            hover('none')
          node = evt.target.id();
          cys.elements(`edge`).style({
              'width' :1,
              'line-color': '#777',
          })
          cys.$('#D1').style({'background-color': op,});
          cys.$('#D2').style({'background-color': op,});

        });
        cys.center();
        cys.fit();
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
