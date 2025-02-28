// Initialize Mermaid when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Mermaid with basic configuration
  mermaid.initialize({
    startOnLoad: false,  // We'll render manually
    theme: 'default',
    securityLevel: 'loose'
  });
  
  // Define a much simpler flowchart
  const diagram = `graph TD
    A[Fresh Water Input] --> B[Homogenizer]
    F[Feedstock] --> B
    B --> C[Digester]
    C --> D[Blue Barrel]
    D --> E[Tote Collection]
    D --> G[Solids Collection]
    C <--> H[Aeration Tank]
    H --> B
    C --> I[Water Loss]
    H --> I`;
  
  // Insert the diagram into the container
  document.getElementById('water-flow-diagram').innerHTML = diagram;
  
  // Try-catch block to help with debugging
  try {
    // Render the diagram
    mermaid.init(undefined, '.mermaid');
  } catch (e) {
    console.error('Mermaid rendering error:', e);
    document.getElementById('water-flow-diagram').innerHTML = 
      `<div style="color: #721c24; background: #f8d7da; padding: 10px; border-radius: 5px;">
        <p><strong>Note:</strong> The water flow diagram couldn't be rendered automatically.</p>
        <p>The system processes water and organic feedstock through homogenization, digestion, 
        and aeration, with significant water conservation through recirculation.</p>
      </div>`;
  }
});
