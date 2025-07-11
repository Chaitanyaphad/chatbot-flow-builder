import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  Connection,
  Edge,
  Node,
  ReactFlowProvider,
  useNodesState,
  useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import  blueMessageIcon  from '../images/blueMessageIcon.png';
import { Container, BackArrow, Button, ErrorBanner, GraphWrapper, Label, MainContent, PanelTitle, SettingsContent, SettingsHeader, Sidebar, SidebarButton, SidebarButtonIcon, SidebarButtonTitle, TextInput, Toolbar } from './FlowBuilder.styles';

const nodeTypes = { custom: CustomNode };
let id = 0;
const getId = () => `node_${id++}`;



export default function FlowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = React.useState<Node | null>(null);
  const [error, setError] = React.useState<string | null>(null);


  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const handleSave = () => {
    if (nodes.length <= 1) {
      setError(null);
      alert("Flow saved successfully!");
      return;
    }

    const nodesWithNoIncomingEdges = nodes.filter((node) => {
      const hasIncoming = edges.some((edge) => edge.target === node.id);
      return !hasIncoming;
    });

    if (nodesWithNoIncomingEdges.length > 1) {
      setError("Cannot save Flow");
      return;
    }

    // Passed validation
    setError(null);
    alert("Flow saved successfully!");
    };


  return (
    <ReactFlowProvider>
      <Container>
        <Toolbar>
          {error && <ErrorBanner>{error}</ErrorBanner>}
          <Button onClick={handleSave}>Save Changes</Button>
        </Toolbar>

        <MainContent>
          <GraphWrapper
            onDrop={(event) => {
              event.preventDefault();

              const reactFlowBounds = event.currentTarget.getBoundingClientRect();
              const type = event.dataTransfer.getData('application/reactflow');

              // Do nothing if dropped outside or data is invalid
              if (!type) return;

              const position = {
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
              };

              const newId = getId();
              const newNode: Node = {
                id: newId,
                type,
                position,
                data: {
                  label: '',
                  onChange: (val: string) => {
                    setNodes((nds) =>
                      nds.map((n) =>
                        n.id === newId
                          ? { ...n, data: { ...n.data, label: val, onChange: n.data.onChange } }
                          : n
                      )
                    );
                  },
                },
              };

              setNodes((nds) => nds.concat(newNode));
            }}
            onDragOver={(event) => {
              event.preventDefault();
              event.dataTransfer.dropEffect = 'move';
            }}
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onNodeClick={(_, node) => setSelectedNode(node)}
              onConnect={onConnect}
              fitView
            >
              <MiniMap />
              <Controls />
              <Background />
            </ReactFlow>
          </GraphWrapper>

          <Sidebar>
            {selectedNode ? (
              <>
                <SettingsHeader>
                  <BackArrow onClick={() => setSelectedNode(null)}>←</BackArrow>
                  <PanelTitle>Message</PanelTitle>
                </SettingsHeader>
                <SettingsContent>
                  <Label>Text</Label>
                  <TextInput
                    value={selectedNode.data.label}
                    placeholder="Type message..."
                    onChange={(e) => {
                      const newLabel = e.target.value;
                      setNodes((nds) =>
                        nds.map((n) =>
                          n.id === selectedNode.id
                            ? {
                                ...n,
                                data: {
                                  ...n.data,
                                  label: newLabel,
                                  onChange: n.data.onChange,
                                },
                              }
                            : n
                        )
                      );
                      setSelectedNode((prev) =>
                        prev ? { ...prev, data: { ...prev.data, label: newLabel } } : null
                      );
                    }}
                  />
                </SettingsContent>
              </>
            ) : (
              <>
                <SidebarButton
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData('application/reactflow', 'custom');
                    e.dataTransfer.effectAllowed = 'move';
                  }}
                >
                  <SidebarButtonIcon src={blueMessageIcon} alt="" />
                  <SidebarButtonTitle>Message</SidebarButtonTitle>
                </SidebarButton>
              </>
            )}

          </Sidebar>
        </MainContent>
      </Container>
    </ReactFlowProvider>
  );
}