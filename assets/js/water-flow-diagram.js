// Initialize Mermaid when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Mermaid with configuration
  mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'cardinal',
    }
  });
  
  // Define the flow diagram
  const diagram = `
  flowchart TD
    A[Fresh Water Input] -->|Initial Fill & Regular Additions| B[Homogenizer]
    F[Feedstock] -->|Contributes Moisture| B
    B -->|Send to Digester ~50 gal| C[Digester]
    C -->|Drain to Barrel| D[Blue Barrel]
    D -->|Liquid| E[Tote Collection]
    D -->|Solids| G[Solids Collection]
    C <-->|Recirculation| H[Aeration Tank]
    H -->|Transfer to Balance| B
    C -->|Evaporation| I[Water Loss]
    H -->|Evaporation| I
    
    subgraph System Water Balance
    J[Total Input: 800-1350 gal/ton] --> K[Output: ~250 gal/ton]
    J --> L[Evaporation Loss: 550-1100 gal/ton]
    end
  `;
  
  // Insert the diagram into the container
  document.getElementById('water-flow-diagram').innerHTML = diagram;
  
  // Render the diagram
  mermaid.init(undefined, '.mermaid');
});
