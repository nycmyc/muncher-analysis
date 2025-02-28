document.addEventListener('DOMContentLoaded', function() {
  // Initialize Mermaid with configuration
  mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    securityLevel: 'loose',
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true
    }
  });
  
  // Define the flow diagram with simpler syntax
  const diagram = `
  flowchart TD
    A["Fresh Water Input"] -->|"Initial Fill & Additions"| B["Homogenizer"]
    F["Feedstock"] -->|"Contributes Moisture"| B
    B -->|"Send to Digester"| C["Digester"]
    C -->|"Drain to Barrel"| D["Blue Barrel"]
    D -->|"Liquid"| E["Tote Collection"]
    D -->|"Solids"| G["Solids Collection"]
    C <-->|"Recirculation"| H["Aeration Tank"]
    H -->|"Transfer"| B
    C -->|"Evaporation"| I["Water Loss"]
    H -->|"Evaporation"| I
  `;
  
  // Insert the diagram into the container
  document.getElementById('water-flow-diagram').innerHTML = diagram;
  
  // Render the diagram
  mermaid.init(undefined, '.mermaid');
});
