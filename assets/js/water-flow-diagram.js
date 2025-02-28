document.addEventListener('DOMContentLoaded', function() {
  // Instead of using Mermaid, let's create a simple SVG directly
  const waterFlowSVG = `
    <svg width="100%" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
      <!-- Boxes -->
      <rect x="100" y="30" width="100" height="40" rx="5" fill="#e6e6fa" stroke="#6a5acd" stroke-width="2"/>
      <rect x="300" y="30" width="100" height="40" rx="5" fill="#e6e6fa" stroke="#6a5acd" stroke-width="2"/>
      <rect x="200" y="120" width="100" height="40" rx="5" fill="#e6e6fa" stroke="#6a5acd" stroke-width="2"/>
      <rect x="200" y="210" width="100" height="40" rx="5" fill="#e6e6fa" stroke="#6a5acd" stroke-width="2"/>
      <rect x="80" y="210" width="100" height="40" rx="5" fill="#e6e6fa" stroke="#6a5acd" stroke-width="2"/>
      <rect x="320" y="210" width="100" height="40" rx="5" fill="#e6e6fa" stroke="#6a5acd" stroke-width="2"/>
      
      <!-- Text labels -->
      <text x="150" y="55" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Fresh Water</text>
      <text x="350" y="55" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Feedstock</text>
      <text x="250" y="145" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Homogenizer</text>
      <text x="250" y="235" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Digester</text>
      <text x="130" y="235" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Blue Barrel</text>
      <text x="370" y="235" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Aeration Tank</text>
      
      <!-- Arrows -->
      <path d="M150 70 L215 120" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
      <path d="M350 70 L285 120" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
      <path d="M250 160 L250 210" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
      <path d="M200 235 L180 235" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
      <path d="M300 235 L320 235" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
      <path d="M370 210 L290 160" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
      
      <!-- Arrow definition -->
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
        </marker>
      </defs>
    </svg>
    <div style="text-align: center; margin-top: 10px; font-size: 12px; color: #555;">
      <p>Water flow through the Muncher system with significant recirculation for efficiency.</p>
    </div>
  `;
  
  // Insert the SVG into the container
  const container = document.getElementById('water-flow-diagram');
  if (container) {
    container.innerHTML = waterFlowSVG;
    container.className = "svg-container";
  }
});
