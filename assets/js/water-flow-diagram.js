document.addEventListener('DOMContentLoaded', function() {
  // Initialize Mermaid with enhanced configuration for better sizing
  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'loose',
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'basis'
    },
    themeVariables: {
      fontSize: '14px'
    }
  });
  
  // Define a simpler flowchart with explicit sizing
  const diagram = `graph TD
    classDef default fill:#f0f4ff,stroke:#9370db,stroke-width:1px;
    
    A[Fresh Water Input] --> B[Homogenizer]
    F[Feedstock] --> B
    B --> C[Digester]
    C --> D[Blue Barrel]
    D --> E[Tote Collection]
    D --> G[Solids Collection]
    C <--> H[Aeration Tank]
    H --> B
    C --> I[Water Loss]
    H --> I
    
    class A,B,C,D,E,F,G,H,I default;`;
  
  // Insert the diagram into the container
  document.getElementById('water-flow-diagram').innerHTML = diagram;
  
  // Create a wrapper function to handle rendering with proper sizing
  function renderMermaidWithSizing() {
    try {
      // Render the diagram
      mermaid.init(undefined, '.mermaid');
      
      // Get the SVG element created by Mermaid
      setTimeout(function() {
        const svg = document.querySelector('#water-flow-diagram svg');
        if (svg) {
          // Set explicit dimensions and viewBox
          svg.setAttribute('width', '100%');
          svg.setAttribute('height', '100%');
          svg.style.maxHeight = '300px';
          
          // Add responsive scaling
          if (!svg.getAttribute('viewBox')) {
            const bbox = svg.getBBox();
            svg.setAttribute('viewBox', `0 0 ${bbox.width} ${bbox.height}`);
          }
        }
      }, 100);
    } catch (e) {
      console.error('Mermaid rendering error:', e);
      document.getElementById('water-flow-diagram').innerHTML = 
        `<div style="color: #721c24; background: #f8d7da; padding: 10px; border-radius: 5px;">
          <p><strong>Note:</strong> The water flow diagram couldn't be rendered automatically.</p>
          <p>The system processes water and organic feedstock through homogenization, digestion, 
          and aeration, with significant water conservation through recirculation.</p>
        </div>`;
    }
  }
  
  // Call the rendering function
  renderMermaidWithSizing();
  
  // Re-render on window resize for better responsiveness
  window.addEventListener('resize', function() {
    const container = document.getElementById('water-flow-diagram');
    if (container) {
      container.innerHTML = diagram;
      renderMermaidWithSizing();
    }
  });
});
