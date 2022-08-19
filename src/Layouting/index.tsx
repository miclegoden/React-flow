// import React, { memo, FC, CSSProperties } from 'react';
import { useCallback } from 'react'
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Connection,
  CoordinateExtent,
  Position,
  useNodesState,
  useEdgesState,
  MarkerType,
  EdgeMarker,
  Handle,
} from 'react-flow-renderer'
import dagre from 'dagre'

import initialItems, { handlestyle as style } from './initial-elements'

import './layouting.css'
import { handlestyle } from './initial-elements'

const dagreGraph = new dagre.graphlib.Graph()

dagreGraph.setDefaultEdgeLabel(() => ({}))
const nodeExtent: CoordinateExtent = [
  [0, 0],
  [2000, 1000],
]
// const handle: Handle = [
//   widht: "10px", // Does not work
//     height: "10px",
//     margin: "auto",
//     background: "#ddd",
//     borderRadius: "15px",
//     border: "2px solid #ddd",
//     boxShadow:
//       "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px"
// ]

const LayoutFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialItems.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialItems.edges)
  // const [handle, Handle] = Handle(initialItems.handle)

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds))
    },
    [setEdges],
  )

  const onLayout = (direction: string) => {
    const isHorizontal = direction === 'LR'
    dagreGraph.setGraph({ rankdir: direction })

    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: 150, height: 50 })
    })

    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target)
    })

    dagre.layout(dagreGraph)

    const layoutedNodes = nodes.map((node) => {
      // const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? Position.Left : Position.Top
      node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom
      // we need to pass a slightly different position in order to notify react flow about the change
      // @TODO how can we change the position handling so that we dont need this hack?
      // node.position = { x: nodeWithPosition.x + Math.random() / 1000, y: nodeWithPosition.y };
      // node.position = { x: Math.random() * 400, y: Math.random() * 400 };

      return node
    })

    setNodes(layoutedNodes)
  }

  const unselect = () => {
    setNodes((nds) => nds.map((n) => ({ ...n, selected: false })))
  }

  const changeMarker = () => {
    setEdges((eds) =>
      eds.map((e) => ({
        ...e,
        markerEnd: {
          type:
            (e.markerEnd as EdgeMarker)?.type === MarkerType.Arrow
              ? MarkerType.ArrowClosed
              : MarkerType.Arrow,
        },
      })),
    )
  }

  return (
    <div className="layoutflow" style={{ height: 1000, width: 2000 }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          nodeExtent={nodeExtent}
          style={{ background: '#f5f5ef' }}
          onInit={() => onLayout('LR')}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
        >
          <Handle
            style={{
              width: 10, // Does not work
              height: 10,
              margin: 'auto',
              background: '#ddd',
              borderRadius: '15px',
              border: '2px solid #ddd',
            }}
          ></Handle>

          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  )
}

export default LayoutFlow
