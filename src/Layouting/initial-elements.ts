import { Node, Edge, MarkerType, Position } from 'react-flow-renderer'

// const position: XYPosition = { x: 0, y: 0 };

const nodes: Node[] = [
  {
    id: '1',
    type: 'input',

    data: { label: 'input1' },
    style: {
      width: 200,
      height: 100,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    position: { x: 0, y: 100 },
  },
  {
    id: '1a',
    type: 'input',

    data: { label: 'input1' },
    style: {
      width: 200,
      height: 30,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    parentNode: '1',
    position: { x: 0, y: 80 },
    extent: 'parent',
  },
  {
    id: '2',
    type: 'input',
    data: {
      label: 'node 2',
    },
    position: { x: 300, y: 200 },
    style: {
      width: 200,
      height: 400,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    sourcePosition: Position.Right,
  },
  {
    id: '2a',
    type: 'input',
    data: {
      label: 'node 2a',
    },
    position: { x: 600, y: 100 },
    style: {
      width: 200,
      height: 350,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    sourcePosition: Position.Right,
  },
  {
    id: '2ah',
    type: 'output',
    data: { label: 'Header' },
    parentNode: '2a',
    style: {
      padding: '6, 18',
      backgroundColor: 'white',
      width: 200,
      borderColor: 'white',
    },
    position: { x: 0, y: 0 },
    sourcePosition: Position.Left,
    extent: 'parent',
  },
  {
    id: '2ab',
    type: 'input',
    data: {
      label: 'node 2ab',
    },
    position: { x: 5, y: 100 },
    style: {
      width: 190,
      height: 200,
      backgroundColor: '#fff',
      borderColor: 'yellow',
    },
    parentNode: '2a',
    sourcePosition: Position.Right,
    extent: 'parent',
  },
  {
    id: '2ac',
    type: 'input',
    data: { label: 'Multitude' },
    position: { x: 5, y: 300 },
    parentNode: '2a',
    style: {
      padding: '6, 18',
      backgroundColor: 'white',
      width: 190,
      borderColor: 'white',
    },
    targetPosition: Position.Left,
    extent: 'parent',
  },
  {
    id: '2ad',
    type: 'input',
    data: {
      label: 'node 2ad',
    },
    position: { x: 0, y: 130 },
    style: {
      width: 190,
      height: 50,
      backgroundColor: '#fff',
      borderColor: 'yellow',
      borderBottomColor: '#fff',
      borderTopColor: '#fff',
    },
    parentNode: '2ab',
    sourcePosition: Position.Right,
    extent: 'parent',
  },
  {
    id: '20',
    type: 'output',
    data: { label: 'Header' },

    parentNode: '2',
    style: {
      padding: '6, 18',
      backgroundColor: 'white',
      width: 200,
      borderColor: 'white',
    },
    position: { x: 0, y: 0 },
    sourcePosition: Position.Left,
    extent: 'parent',
  },
  {
    id: '21',
    type: 'input',
    data: { label: 'Multitude' },
    position: { x: 5, y: 190 },
    parentNode: '2',
    style: {
      padding: '6, 18',
      backgroundColor: 'white',
      width: 190,
      borderColor: 'yellow',
    },
    targetPosition: Position.Left,
    extent: 'parent',
  },
  {
    id: '22',
    type: 'input',
    data: { label: 'Multitude' },
    position: { x: 5, y: 240 },
    parentNode: '2',
    style: {
      padding: '6, 18',
      backgroundColor: 'white',
      width: 190,

      borderColor: 'yellow',
    },
    targetPosition: Position.Left,
    extent: 'parent',
  },
  {
    id: '23',
    type: 'input',
    data: { label: 'Multitude' },
    position: { x: 5, y: 310 },
    parentNode: '2',
    style: {
      padding: '6, 18',
      backgroundColor: 'white',
      width: 190,
      color: 'red',
      borderColor: 'white',
    },
    targetPosition: Position.Left,
    extent: 'parent',
  },
  {
    id: '24',
    type: 'input',
    data: { label: 'Multitude' },
    position: { x: 5, y: 350 },
    parentNode: '2',
    style: {
      padding: '6, 18',
      backgroundColor: 'white',
      width: 190,
      borderColor: 'white',
    },
    targetPosition: Position.Left,
    extent: 'parent',
  },

  {
    id: '2b',
    type: 'input',
    data: { label: 'node 2b' },
    style: {
      padding: '6, 18',
      backgroundColor: 'white',
      width: 200,
      height: 100,
      borderColor: 'white',
    },
    position: { x: 600, y: 500 },
  },
  {
    id: '2b1',
    type: 'output',

    data: { label: 'input1' },
    style: {
      width: 200,
      height: 30,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    parentNode: '2b',
    position: { x: 0, y: 0 },
    extent: 'parent',
  },
  {
    id: '2b2',
    type: 'input',

    data: { label: 'input1' },
    style: {
      width: 200,
      height: 30,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    parentNode: '2b',
    position: { x: 0, y: 80 },
    extent: 'parent',
  },
  {
    id: '2c',
    type: 'input',
    data: { label: 'node 2c' },
    style: {
      padding: '6, 18',
      backgroundColor: 'white',
      width: 200,
      height: 100,
      borderColor: 'white',
    },
    position: { x: 900, y: 450 },
  },
  {
    id: '2c1',
    type: 'output',

    data: { label: 'input1' },
    style: {
      width: 200,
      height: 30,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    parentNode: '2c',
    position: { x: 0, y: 0 },
    extent: 'parent',
  },
  {
    id: '2c2',
    type: 'input',

    data: { label: 'input1' },
    style: {
      width: 200,
      height: 30,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    parentNode: '2c',
    position: { x: 0, y: 80 },
    extent: 'parent',
  },
  {
    id: '2d',
    type: 'input',
    data: { label: 'node 2d' },
    style: {
      padding: '6, 18',
      backgroundColor: 'white',
      width: 200,
      height: 100,
      borderColor: 'white',
    },
    position: { x: 600, y: 700 },
  },
  {
    id: '2d1',
    type: 'output',

    data: { label: 'input1' },
    style: {
      width: 200,
      height: 30,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    parentNode: '2d',
    position: { x: 0, y: 0 },
    extent: 'parent',
  },
  {
    id: '2d2',
    type: 'input',

    data: { label: 'input1' },
    style: {
      width: 200,
      height: 30,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    parentNode: '2d',
    position: { x: 0, y: 80 },
    extent: 'parent',
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'node 3' },
    position: { x: 1100, y: 650 },
    style: {
      backgroundColor: '#00004d',
      borderColor: '#00004d',
      color: 'white',
    },
    sourcePosition: Position.Left,
  },
  {
    id: '4',
    type: 'input',
    data: { label: 'node 4' },
    style: {
      padding: '6, 18',
      backgroundColor: 'white',
      width: 200,
      height: 100,
      borderColor: 'white',
    },
    position: { x: 1200, y: 100 },
  },
  {
    id: '4a',
    type: 'output',

    data: { label: 'input1' },
    style: {
      width: 200,
      height: 30,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    parentNode: '4',
    position: { x: 0, y: 0 },
    extent: 'parent',
  },
  {
    id: '4b',
    type: 'input',

    data: { label: 'input1' },
    style: {
      width: 200,
      height: 30,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    parentNode: '4',
    position: { x: 0, y: 80 },
    extent: 'parent',
  },
  {
    id: '5',
    type: 'input',
    data: { label: 'node 5' },
    position: { x: 1300, y: 300 },
    style: {
      padding: '6, 18',
      backgroundColor: 'white',
      width: 200,
      height: 100,
      borderColor: 'white',
    },
  },
  {
    id: '5a',
    type: 'output',

    data: { label: 'input1' },
    style: {
      width: 200,
      height: 30,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    parentNode: '5',
    position: { x: 0, y: 0 },
    extent: 'parent',
  },
  {
    id: '5b',
    type: 'input',

    data: { label: 'input1' },
    style: {
      width: 200,
      height: 30,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    parentNode: '5',
    position: { x: 0, y: 80 },
    extent: 'parent',
  },
  {
    id: '8',
    type: 'input',
    data: { label: 'input2' },
    style: {
      backgroundColor: '#0066ff',
      borderColor: '#0066ff',
    },
    position: { x: 0, y: 400 },
  },
  {
    id: '2a1',
    type: 'default',
    data: { label: 'node 2a-1' },
    style: {
      padding: '6, 18',
      backgroundColor: 'white',
      width: 200,
      height: 100,
      borderColor: 'white',
    },
    position: { x: 900, y: 100 },
  },
  {
    id: '2a2',
    type: 'output',

    data: { label: 'input1' },
    style: {
      width: 200,
      height: 30,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    parentNode: '2a1',
    position: { x: 0, y: 0 },
    extent: 'parent',
  },
  {
    id: '2a3',
    type: 'input',

    data: { label: 'input1' },
    style: {
      width: 200,
      height: 30,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    parentNode: '2a1',
    position: { x: 0, y: 80 },
    extent: 'parent',
  },
]

// const handle = [
//   {
//     widht: '10px', // Does not work
//     height: '10px',
//     margin: 'auto',
//     background: '#ddd',
//     borderRadius: '15px',
//     border: '2px solid #ddd',
//   },
// ]

const edges: Edge[] = [
  {
    id: 'e1a20',
    source: '1a',
    target: '20',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e820',
    source: '8',
    target: '20',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e212ah',
    source: '21',
    target: '2ah',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e222b1',
    source: '22',
    target: '2b1',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e232c1',
    source: '23',
    target: '2c1',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e242d1',
    source: '24',
    target: '2d1',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e2ab2a1',
    source: '2ab',
    target: '2a2',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e2ad2a1',
    source: '2ad',
    target: '2a2',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e2ac2c1',
    source: '2ac',
    target: '2c1',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e2d220',
    source: '2d2',
    target: '20',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e2b23',
    source: '2b2',
    target: '3',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e2c23',
    source: '2c2',
    target: '3',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e2a34',
    source: '2a3',
    target: '4a',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e4b5a',
    source: '4b',
    target: '5a',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e5b3',
    source: '5b',
    target: '3',
    markerEnd: { type: MarkerType.Arrow },
  },
]

export const handlestyle = {
  handle: {
    widht: '10px', // Does not work
    height: '10px',
    margin: 'auto',
    background: '#ddd',
    borderRadius: '15px',
    border: '2px solid #ddd',
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px',
  },
}

const nodesAndEdges = { nodes, edges }

export default nodesAndEdges
