const t="2724fd2efd8c6737f6fa704fbf5da52d67375497",e="https://github.com/cathrynlavery/diagram-design",n=`MIT License

Copyright (c) 2025 Cathryn Lavery

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,i=[{id:"architecture",name:"系统架构",category:"架构",svg:`<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="architecture-title architecture-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="architecture-title">Content site in production</title>
      <desc id="architecture-desc">Architecture diagram showing reader requests moving through Cloudflare to an Astro origin, MDX bundle, and content CMS.</desc>
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
          </pattern>
          <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
          <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
          <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#2e5aa8"/></marker>
        </defs>

        <rect width="100%" height="100%" fill="#f5f5f5"/>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

        <!-- Zone: Content services (drawn before arrows and nodes) -->
        <rect x="616" y="128" width="164" height="272" rx="8"
              fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <rect x="672" y="132" width="52" height="12" rx="2" fill="#f5f5f5"/>
        <text x="698" y="141" fill="rgba(45,49,66,0.40)" font-size="7" font-family="monospace, monospace"
              text-anchor="middle" letter-spacing="0.14em">CONTENT</text>

        <!-- Arrows first (behind boxes) -->
        <line x1="168" y1="272" x2="220" y2="272" stroke="#2e5aa8" stroke-width="1.2" marker-end="url(#arrow-link)"/>
        <line x1="364" y1="272" x2="416" y2="272" stroke="#eb6c36" stroke-width="1.4" marker-end="url(#arrow-accent)"/>
        <!-- Exit Astro top→enter MDX bottom; exit Astro bottom→enter CMS top -->
        <path d="M 496,240 H 692 Q 700,240 700,232 V 224"
              fill="none" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <path d="M 496,304 H 692 Q 700,304 700,312 V 320"
              fill="none" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>

        <!-- Dashed return: Cloudflare→Reader (cached HTML — same orthogonal rules as solid) -->
        <path d="M 220,288 H 168" fill="none" stroke="#4f5d75" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arrow)"/>

        <!-- Arrow labels -->
        <rect x="172" y="252" width="48" height="12" rx="2" fill="#f5f5f5"/>
        <text x="196" y="262" fill="#2e5aa8" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">HTTPS</text>

        <rect x="172" y="278" width="32" height="12" rx="2" fill="#f5f5f5"/>
        <text x="188" y="287" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">RESP</text>

        <rect x="368" y="252" width="48" height="12" rx="2" fill="#f5f5f5"/>
        <text x="392" y="262" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">SSR</text>

        <rect x="632" y="246" width="60" height="12" rx="2" fill="#f5f5f5"/>
        <text x="662" y="255" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">READ MDX</text>

        <rect x="632" y="286" width="44" height="12" rx="2" fill="#f5f5f5"/>
        <text x="654" y="295" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">QUERY</text>

        <!-- Node: Reader -->
        <rect x="40" y="240" width="128" height="64" rx="6" fill="#f5f5f5"/>
        <rect x="40" y="240" width="128" height="64" rx="6" fill="rgba(79,93,117,0.10)" stroke="#7a8399" stroke-width="1"/>
        <rect x="48" y="248" width="28" height="12" rx="2" fill="transparent" stroke="rgba(122,131,153,0.40)" stroke-width="0.8"/>
        <text x="62" y="257" fill="#7a8399" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">EXT</text>
        <text x="104" y="276" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Reader</text>
        <text x="104" y="292" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">Browser</text>

        <!-- Node: Cloudflare -->
        <rect x="220" y="240" width="144" height="64" rx="6" fill="#f5f5f5"/>
        <rect x="220" y="240" width="144" height="64" rx="6" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
        <rect x="228" y="248" width="32" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.22)" stroke-width="0.8"/>
        <text x="244" y="257" fill="#7a8399" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">EDGE</text>
        <text x="356" y="300" fill="rgba(45,49,66,0.06)" font-size="32" font-weight="600" font-family="monospace, monospace" text-anchor="end">01</text>
        <text x="292" y="276" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Cloudflare</text>
        <text x="292" y="292" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">Pages · cache</text>

        <!-- Node: Astro (focal coral) -->
        <rect x="416" y="240" width="160" height="64" rx="6" fill="#f5f5f5"/>
        <rect x="416" y="240" width="160" height="64" rx="6" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
        <rect x="424" y="248" width="32" height="12" rx="2" fill="transparent" stroke="rgba(235,108,54,0.50)" stroke-width="0.8"/>
        <text x="440" y="257" fill="#eb6c36" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">ORIG</text>
        <text x="568" y="300" fill="rgba(235,108,54,0.10)" font-size="32" font-weight="600" font-family="monospace, monospace" text-anchor="end">02</text>
        <text x="496" y="276" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Astro Origin</text>
        <text x="496" y="292" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">SSR + MDX</text>

        <!-- Node: MDX Bundle -->
        <rect x="628" y="160" width="144" height="64" rx="6" fill="#f5f5f5"/>
        <rect x="628" y="160" width="144" height="64" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <rect x="636" y="168" width="32" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
        <text x="652" y="177" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">BUN</text>
        <text x="700" y="196" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">MDX Bundle</text>
        <text x="700" y="212" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">src/content/*.mdx</text>

        <!-- Node: Content CMS -->
        <rect x="628" y="320" width="144" height="64" rx="6" fill="#f5f5f5"/>
        <rect x="628" y="320" width="144" height="64" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="1"/>
        <rect x="636" y="328" width="28" height="12" rx="2" fill="transparent" stroke="rgba(79,93,117,0.50)" stroke-width="0.8"/>
        <text x="650" y="337" fill="#4f5d75" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">CMS</text>
        <text x="700" y="356" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Content CMS</text>
        <text x="700" y="372" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">assets · og images</text>

        <!-- Legend strip -->
        <line x1="40" y1="404" x2="960" y2="404" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <text x="40" y="420" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

        <rect x="40" y="436" width="14" height="10" rx="2" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
        <text x="60" y="444" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Focal / origin</text>

        <rect x="180" y="436" width="14" height="10" rx="2" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="200" y="444" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Backend / bundle</text>

        <rect x="340" y="436" width="14" height="10" rx="2" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="1"/>
        <text x="360" y="444" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Store</text>

        <rect x="436" y="436" width="14" height="10" rx="2" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
        <text x="456" y="444" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Cloud</text>

        <rect x="528" y="436" width="14" height="10" rx="2" fill="rgba(79,93,117,0.10)" stroke="#7a8399" stroke-width="1"/>
        <text x="548" y="444" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">External</text>

        <line x1="636" y1="442" x2="664" y2="442" stroke="#2e5aa8" stroke-width="1.2" marker-end="url(#arrow-link)"/>
        <text x="672" y="444" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">HTTP request</text>

        <line x1="784" y1="442" x2="812" y2="442" stroke="#eb6c36" stroke-width="1.4" marker-end="url(#arrow-accent)"/>
        <text x="820" y="444" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Primary flow</text>

        <line x1="900" y1="442" x2="928" y2="442" stroke="#4f5d75" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
        <text x="936" y="444" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Return / async</text>
      </svg>`},{id:"it-state",name:"现状与目标",category:"架构",svg:`<svg viewBox="0 0 960 500" role="img" aria-labelledby="it-state-title it-state-desc" xmlns="http://www.w3.org/2000/svg"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --paper: #f5f5f5; --paper-2: #ececec; --ink: #2d3142;
      --muted: #4f5d75; --soft: #7a8399; --rule: rgba(45,49,66,0.12);
      --accent: #eb6c36; --link: #2e5aa8;
      --sans: Arial, system-ui, sans-serif;
      --serif: Georgia, serif;
      --mono: monospace, ui-monospace, monospace;
    }
    body { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 3rem 2rem; background: var(--paper); color: var(--ink); font-family: var(--sans); }
    .frame { width: 100%; max-width: 1200px; }
    .eyebrow { margin-bottom: 0.5rem; color: var(--muted); font: 500 0.66rem/1 var(--mono); letter-spacing: 0.18em; text-transform: uppercase; }
    h1 { margin-bottom: 0.35rem; color: var(--ink); font: 400 clamp(1.5rem, 2.4vw + 0.75rem, 2rem)/1.15 var(--serif); letter-spacing: -0.02em; }
    .subtitle { margin-bottom: 1.5rem; color: var(--muted); font-size: 0.9rem; line-height: 1.5; }
    .diagram { overflow-x: auto; }
    svg .zone { fill: rgba(45,49,66,0.02); stroke: rgba(45,49,66,0.10); stroke-width: 0.8; }
    svg .zone-mask, svg .node-mask, svg .label-mask { fill: #f5f5f5; }
    svg .zone-label, svg .arrow-label, svg .legend-label { font-family: monospace, monospace; }
    svg .zone-label { fill: rgba(45,49,66,0.40); font-size: 8px; letter-spacing: 0.14em; }
    svg .node { fill: #fff; stroke: #2d3142; stroke-width: 1; }
    svg .node.external { stroke: #4f5d75; stroke-dasharray: 4 3; }
    svg .node.focal { fill: rgba(235,108,54,0.07); stroke: #eb6c36; stroke-width: 1.4; }
    svg .node.survivor { fill: rgba(124,143,111,0.06); stroke: rgba(124,143,111,0.45); }
    svg .node-name { fill: #2d3142; font: 600 12px Arial, sans-serif; }
    svg .node-name.survivor { fill: #7c8f6f; }
    svg .sub { fill: #4f5d75; font: 400 10px monospace, monospace; }
    svg .sub.focal { fill: #eb6c36; }
    svg .arrow-label { font-size: 8px; font-weight: 600; letter-spacing: 0.08em; }
    svg .legend-label { fill: #4f5d75; font-size: 8px; }
  </style>
        <title id="it-state-title">Northwind Retail current IT landscape</title>
        <desc id="it-state-desc">Three zones show collection, processing, and dissemination through manual file handoffs.</desc>
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
          <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#2e5aa8"/></marker>
          <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
          <symbol id="icon-file" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2"/></symbol>
          <symbol id="icon-screen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M7 20h10M9 16v4M15 16v4"/></symbol>
          <symbol id="icon-db" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></symbol>
          <symbol id="icon-users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="9" cy="8" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 4.5a4 4 0 0 1 0 7M18 15a4 4 0 0 1 3 4v2"/></symbol>
        </defs>

        <rect width="960" height="500" fill="#f5f5f5"/>

        <!-- Phase zones -->
        <rect class="zone" x="16" y="52" width="256" height="360" rx="8"/>
        <rect class="zone-mask" x="36" y="44" width="92" height="16"/>
        <text class="zone-label" x="40" y="56">COLLECTION</text>
        <rect class="zone" x="292" y="52" width="360" height="360" rx="8"/>
        <rect class="zone-mask" x="312" y="44" width="92" height="16"/>
        <text class="zone-label" x="316" y="56">PROCESSING</text>
        <rect class="zone" x="672" y="52" width="272" height="360" rx="8"/>
        <rect class="zone-mask" x="692" y="44" width="116" height="16"/>
        <text class="zone-label" x="696" y="56">DISSEMINATION</text>

        <!-- Connectors first; Shared Drive entries fan to y=108,124,140 -->
        <path d="M 252,108 H 340" fill="none" stroke="#2e5aa8" stroke-width="1.2" marker-end="url(#arrow-link)"/>
        <path d="M 252,196 H 308 Q 316,196 316,188 V 132 Q 316,124 324,124 H 340" fill="none" stroke="#2e5aa8" stroke-width="1.2" marker-end="url(#arrow-link)"/>
        <path d="M 252,284 H 324 Q 332,284 332,276 V 148 Q 332,140 340,140" fill="none" stroke="#2e5aa8" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrow-link)"/>
        <line x1="472" y1="148" x2="472" y2="232" stroke="#eb6c36" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#arrow-accent)"/>
        <line x1="472" y1="304" x2="472" y2="344" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
        <path d="M 604,268 H 654 Q 662,268 662,260 V 72 Q 662,64 670,64 H 800 Q 808,64 808,72 V 80" fill="none" stroke="#eb6c36" stroke-width="1.4" marker-end="url(#arrow-accent)"/>
        <line x1="808" y1="140" x2="808" y2="216" stroke="#2e5aa8" stroke-width="1.2" marker-end="url(#arrow-link)"/>
        <line x1="808" y1="272" x2="808" y2="344" stroke="#2e5aa8" stroke-width="1.2" stroke-dasharray="4 3" marker-end="url(#arrow-link)"/>

        <!-- Collection -->
        <rect class="node-mask" x="36" y="80" width="216" height="56" rx="6"/><rect class="node" x="36" y="80" width="216" height="56" rx="6"/>
        <use href="#icon-file" x="48" y="96" width="24" height="24" color="#2d3142"/><text class="node-name" x="80" y="106">Point-of-Sale Exports</text><text class="sub" x="80" y="122">nightly · CSV</text>
        <rect class="node-mask" x="36" y="168" width="216" height="56" rx="6"/><rect class="node" x="36" y="168" width="216" height="56" rx="6"/>
        <use href="#icon-file" x="48" y="184" width="24" height="24" color="#2d3142"/><text class="node-name" x="80" y="194">Online Store Export</text><text class="sub" x="80" y="210">orders · flat file</text>
        <rect class="node-mask" x="36" y="256" width="216" height="56" rx="6"/><rect class="node external" x="36" y="256" width="216" height="56" rx="6"/>
        <use href="#icon-file" x="48" y="272" width="24" height="24" color="#4f5d75"/><text class="node-name" x="80" y="282">Supplier Price Lists</text><text class="sub" x="80" y="298">external · XLSX</text>

        <!-- Processing -->
        <rect class="node-mask" x="340" y="80" width="264" height="68" rx="6"/><rect class="node focal" x="340" y="80" width="264" height="68" rx="6"/>
        <use href="#icon-file" x="352" y="100" width="24" height="24" color="#eb6c36"/><text class="node-name" x="384" y="108">Shared Drive</text><text class="sub focal" x="384" y="124">no version control</text><text class="sub" x="384" y="140">department folders</text>
        <rect class="node-mask" x="340" y="232" width="264" height="72" rx="6"/><rect class="node" x="340" y="232" width="264" height="72" rx="6"/>
        <use href="#icon-screen" x="352" y="256" width="24" height="24" color="#2d3142"/><text class="node-name" x="384" y="262">Spreadsheet Handoffs</text><text class="sub" x="384" y="278">local workbooks · macros</text><text class="sub" x="384" y="292">manual reconciliation</text>
        <rect class="node-mask" x="340" y="344" width="264" height="56" rx="6"/><rect class="node survivor" x="340" y="344" width="264" height="56" rx="6"/>
        <use href="#icon-db" x="352" y="360" width="24" height="24" color="#7c8f6f"/><text class="node-name survivor" x="384" y="370">On-prem RDBMS</text><text class="sub" x="384" y="386">inventory · finance</text>

        <!-- Dissemination -->
        <rect class="node-mask" x="704" y="80" width="208" height="60" rx="6"/><rect class="node focal" x="704" y="80" width="208" height="60" rx="6"/>
        <use href="#icon-screen" x="716" y="100" width="24" height="24" color="#eb6c36"/><text class="node-name" x="748" y="108">Reporting Portal</text><text class="sub focal" x="748" y="124">manual refresh</text>
        <rect class="node-mask" x="704" y="216" width="208" height="56" rx="6"/><rect class="node" x="704" y="216" width="208" height="56" rx="6"/>
        <use href="#icon-file" x="716" y="232" width="24" height="24" color="#2d3142"/><text class="node-name" x="748" y="242">Email Report Packs</text><text class="sub" x="748" y="258">weekly · PDF</text>
        <rect class="node-mask" x="704" y="344" width="208" height="56" rx="6"/><rect class="node external" x="704" y="344" width="208" height="56" rx="6"/>
        <use href="#icon-users" x="716" y="360" width="24" height="24" color="#4f5d75"/><text class="node-name" x="748" y="370">Regional Managers</text><text class="sub" x="748" y="386">12 store regions</text>

        <!-- Labels are source-bound with a 6px perpendicular gap -->
        <rect class="label-mask" x="260" y="86" width="40" height="16" rx="2"/><text class="arrow-label" x="280" y="98" text-anchor="middle" fill="#2e5aa8">CSV</text>
        <rect class="label-mask" x="260" y="174" width="52" height="16" rx="2"/><text class="arrow-label" x="286" y="186" text-anchor="middle" fill="#2e5aa8">EXPORT</text>
        <rect class="label-mask" x="260" y="262" width="44" height="16" rx="2"/><text class="arrow-label" x="282" y="274" text-anchor="middle" fill="#2e5aa8">XLSX</text>
        <rect class="label-mask" x="478" y="156" width="40" height="16" rx="2"/><text class="arrow-label" x="498" y="168" text-anchor="middle" fill="#eb6c36">COPY</text>
        <rect class="label-mask" x="478" y="312" width="40" height="16" rx="2"/><text class="arrow-label" x="498" y="324" text-anchor="middle" fill="#4f5d75">LOAD</text>
        <rect class="label-mask" x="612" y="246" width="44" height="16" rx="2"/><text class="arrow-label" x="634" y="258" text-anchor="middle" fill="#eb6c36">XLSX</text>
        <rect class="label-mask" x="814" y="148" width="36" height="16" rx="2"/><text class="arrow-label" x="832" y="160" text-anchor="middle" fill="#2e5aa8">PDF</text>
        <rect class="label-mask" x="814" y="280" width="48" height="16" rx="2"/><text class="arrow-label" x="838" y="292" text-anchor="middle" fill="#2e5aa8">EMAIL</text>

        <!-- Legend strip -->
        <line x1="16" y1="440" x2="944" y2="440" stroke="rgba(45,49,66,0.12)" stroke-width="0.8"/>
        <text class="legend-label" x="16" y="460" letter-spacing="0.14em">LEGEND</text>
        <line x1="80" y1="456" x2="104" y2="456" stroke="#2e5aa8" stroke-width="1.2"/><text class="legend-label" x="112" y="460">data flow</text>
        <line x1="208" y1="456" x2="232" y2="456" stroke="#eb6c36" stroke-width="1.4"/><text class="legend-label" x="240" y="460">pain-point</text>
        <rect x="372" y="450" width="16" height="12" rx="2" fill="#fff" stroke="#4f5d75" stroke-width="0.8" stroke-dasharray="4 3"/><text class="legend-label" x="396" y="460">external</text>
        <rect x="492" y="450" width="16" height="12" rx="2" fill="rgba(235,108,54,0.07)" stroke="#eb6c36"/><text class="legend-label" x="516" y="460">bottleneck</text>
      </svg>`},{id:"flowchart",name:"决策流程",category:"流程",svg:`<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="flowchart-title flowchart-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="flowchart-title">Should you write this as a skill?</title>
      <desc id="flowchart-desc">Flowchart showing when a new workflow should stay manual, become a project note, or be written as a reusable skill.</desc>
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
          </pattern>
          <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
          <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
        </defs>

        <rect width="100%" height="100%" fill="#f5f5f5"/>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

        <!-- Arrows (drawn first, behind nodes) -->
        <!-- Start → Step -->
        <line x1="500" y1="88" x2="500" y2="120" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <!-- Step → Diamond 1 -->
        <line x1="500" y1="168" x2="500" y2="192" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <!-- Diamond 1 "NO" right -->
        <line x1="600" y1="240" x2="720" y2="240" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <!-- Diamond 1 "YES" down -->
        <line x1="500" y1="288" x2="500" y2="328" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <!-- Diamond 2 "NO" right -->
        <line x1="600" y1="376" x2="720" y2="376" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <!-- Diamond 2 "YES" down (coral — happy path) -->
        <line x1="500" y1="424" x2="500" y2="464" stroke="#eb6c36" stroke-width="1.4" marker-end="url(#arrow-accent)"/>

        <!-- Arrow labels -->
        <rect x="644" y="230" width="24" height="12" rx="2" fill="#f5f5f5"/>
        <text x="656" y="239" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.12em">NO</text>

        <rect x="484" y="298" width="32" height="12" rx="2" fill="#f5f5f5"/>
        <text x="500" y="307" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.12em">YES</text>

        <rect x="644" y="366" width="24" height="12" rx="2" fill="#f5f5f5"/>
        <text x="656" y="375" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.12em">NO</text>

        <rect x="484" y="434" width="32" height="12" rx="2" fill="#f5f5f5"/>
        <text x="500" y="443" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.12em">YES</text>

        <!-- Start oval -->
        <rect x="420" y="40" width="160" height="48" rx="24" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
        <text x="500" y="68" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">New workflow</text>

        <!-- Rectangle: Step -->
        <rect x="420" y="120" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="500" y="148" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Do it manually once</text>

        <!-- Diamond 1: Repeated >3 times? -->
        <polygon points="500,192 600,240 500,288 400,240" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="500" y="238" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Will you repeat</text>
        <text x="500" y="252" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">it >3 times?</text>

        <!-- End oval: One-off -->
        <rect x="720" y="216" width="160" height="48" rx="24" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
        <text x="800" y="240" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">One-off</text>
        <text x="800" y="254" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">keep manual</text>

        <!-- Diamond 2: Reusable across projects? -->
        <polygon points="500,328 600,376 500,424 400,376" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="500" y="374" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Reusable across</text>
        <text x="500" y="388" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">projects?</text>

        <!-- End oval: CLAUDE.md note -->
        <rect x="720" y="352" width="160" height="48" rx="24" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
        <text x="800" y="376" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">CLAUDE.md note</text>
        <text x="800" y="390" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">project-scoped</text>

        <!-- End oval: Write a skill (coral focal) -->
        <rect x="420" y="464" width="160" height="56" rx="28" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
        <text x="500" y="492" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Write a skill</text>
        <text x="500" y="508" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">reusable + assets</text>

        <!-- Legend -->
        <line x1="40" y1="540" x2="960" y2="540" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <text x="40" y="556" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND · SHAPE CARRIES TYPE</text>

        <rect x="40" y="572" width="24" height="12" rx="6" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
        <text x="72" y="582" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Start / end (oval)</text>

        <rect x="220" y="572" width="24" height="12" rx="2" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="252" y="582" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Step (rectangle)</text>

        <polygon points="412,578 424,572 436,578 424,584" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="448" y="582" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Decision (diamond)</text>

        <line x1="604" y1="580" x2="632" y2="580" stroke="#eb6c36" stroke-width="1.4" marker-end="url(#arrow-accent)"/>
        <text x="640" y="582" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Happy path</text>

        <line x1="768" y1="580" x2="796" y2="580" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <text x="804" y="582" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Branch</text>
      </svg>`},{id:"sequence",name:"交互时序",category:"流程",svg:`<svg viewBox="0 0 1000 584" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sequence-title sequence-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="sequence-title">Article request, cold cache</title>
      <desc id="sequence-desc">Sequence diagram showing a cold-cache article request moving from reader and browser through Cloudflare to an Astro origin and analytics beacon.</desc>
        <defs>
          <!-- Dot grid background -->
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
          </pattern>

          <!-- Arrow markers -->
          <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/>
          </marker>
          <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/>
          </marker>
          <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#2e5aa8"/>
          </marker>
        </defs>

        <!-- Background: paper + dot grid -->
        <rect width="100%" height="100%" fill="#f5f5f5"/>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

        <!-- =================================================================
             LIFELINES — dashed vertical lines from each actor, behind everything.
             Actor lifeline x-coords: 128, 352, 584, 800
             ================================================================= -->
        <line x1="128" y1="128" x2="128" y2="488" stroke="rgba(45,49,66,0.22)" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="352" y1="128" x2="352" y2="488" stroke="rgba(45,49,66,0.22)" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="584" y1="128" x2="584" y2="488" stroke="rgba(45,49,66,0.22)" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="800" y1="128" x2="800" y2="488" stroke="rgba(45,49,66,0.22)" stroke-width="1" stroke-dasharray="3,3"/>

        <!-- =================================================================
             ACTIVATION BARS — w=8 rects on lifelines showing control duration.
             Drawn before message arrows so arrows land on their edges.
             ================================================================= -->
        <!-- Cloudflare activation: receives at y=176, responds at y=408 -->
        <rect x="348" y="180" width="8" height="232" fill="rgba(45,49,66,0.06)" stroke="#4f5d75" stroke-width="0.8"/>
        <!-- Astro activation: called at y=232, returns at y=352 -->
        <rect x="580" y="236" width="8" height="120" fill="rgba(45,49,66,0.06)" stroke="#4f5d75" stroke-width="0.8"/>

        <!-- =================================================================
             MESSAGE ARROWS — time flows top→down.
             Draw before labels so label masks cover the line.
             ================================================================= -->

        <!-- M1: Reader → Cloudflare  (HTTPS request · link-blue) -->
        <line x1="128" y1="176" x2="352" y2="176" stroke="#2e5aa8" stroke-width="1.2" marker-end="url(#arrow-link)"/>

        <!-- M2: Cloudflare → Astro  (cache miss · muted) -->
        <line x1="352" y1="232" x2="580" y2="232" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>

        <!-- M3: Astro self-message  (render MDX · muted U-loop) -->
        <path d="M 588 284 L 624 284 L 624 316 L 588 316" fill="none" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>

        <!-- M4: Astro → Cloudflare  (return HTML · muted dashed) -->
        <line x1="580" y1="352" x2="356" y2="352" stroke="#4f5d75" stroke-width="1.2" stroke-dasharray="5,4" marker-end="url(#arrow)"/>

        <!-- M5: Cloudflare → Reader  (primary success · coral) -->
        <line x1="348" y1="408" x2="128" y2="408" stroke="#eb6c36" stroke-width="1.4" marker-end="url(#arrow-accent)"/>

        <!-- M6: Reader → Analytics  (async beacon · muted dashed) -->
        <line x1="128" y1="464" x2="800" y2="464" stroke="#4f5d75" stroke-width="1.2" stroke-dasharray="5,4" marker-end="url(#arrow)"/>

        <!-- =================================================================
             MESSAGE LABELS — each with an opaque paper-colored mask.
             ================================================================= -->

        <!-- M1 label -->
        <rect x="188" y="160" width="104" height="12" rx="2" fill="#f5f5f5"/>
        <text x="240" y="170" fill="#2e5aa8" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">GET /ARTICLES/SLUG</text>

        <!-- M2 label -->
        <rect x="416" y="216" width="100" height="12" rx="2" fill="#f5f5f5"/>
        <text x="466" y="226" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">CACHE MISS · ORIGIN</text>

        <!-- M3 label (to the right of the self-loop) -->
        <rect x="632" y="292" width="72" height="12" rx="2" fill="#f5f5f5"/>
        <text x="668" y="302" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">RENDER MDX</text>

        <!-- M4 label -->
        <rect x="420" y="336" width="96" height="12" rx="2" fill="#f5f5f5"/>
        <text x="468" y="346" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">200 · HTML + MAX-AGE</text>

        <!-- M5 label (coral · primary response) -->
        <rect x="192" y="392" width="96" height="12" rx="2" fill="#f5f5f5"/>
        <text x="240" y="402" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">200 · EDGE-CACHED</text>

        <!-- M6 label (placed between Astro and Analytics lifelines, a clear gap) -->
        <rect x="648" y="448" width="96" height="12" rx="2" fill="#f5f5f5"/>
        <text x="696" y="458" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">PAGEVIEW BEACON</text>

        <!-- =================================================================
             ACTOR BOXES — drawn after arrows/labels.
             Each actor: 144–160 wide × 56 tall. Centers: 128, 352, 584, 800.
             ================================================================= -->

        <!-- Actor 1: Reader (external / soft) -->
        <rect x="56" y="72" width="144" height="56" rx="6" fill="#f5f5f5"/>
        <rect x="56" y="72" width="144" height="56" rx="6" fill="rgba(79,93,117,0.10)" stroke="#7a8399" stroke-width="1"/>
        <rect x="64" y="80" width="28" height="12" rx="2" fill="transparent" stroke="rgba(122,131,153,0.40)" stroke-width="0.8"/>
        <text x="78" y="89" fill="#7a8399" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">EXT</text>
        <text x="128" y="104" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Reader</text>
        <text x="128" y="119" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">Browser</text>

        <!-- Actor 2: Cloudflare (cloud / muted) -->
        <rect x="280" y="72" width="144" height="56" rx="6" fill="#f5f5f5"/>
        <rect x="280" y="72" width="144" height="56" rx="6" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
        <rect x="288" y="80" width="32" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.22)" stroke-width="0.8"/>
        <text x="304" y="89" fill="#7a8399" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">EDGE</text>
        <text x="352" y="104" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Cloudflare</text>
        <text x="352" y="119" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">Pages · cache</text>

        <!-- Actor 3: Astro Origin (focal / coral) -->
        <rect x="504" y="72" width="160" height="56" rx="6" fill="#f5f5f5"/>
        <rect x="504" y="72" width="160" height="56" rx="6" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
        <rect x="512" y="80" width="32" height="12" rx="2" fill="transparent" stroke="rgba(235,108,54,0.50)" stroke-width="0.8"/>
        <text x="528" y="89" fill="#eb6c36" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">ORIG</text>
        <text x="584" y="104" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Astro Origin</text>
        <text x="584" y="119" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">SSR + MDX</text>

        <!-- Actor 4: Analytics (optional / dashed) -->
        <rect x="728" y="72" width="144" height="56" rx="6" fill="#f5f5f5"/>
        <rect x="728" y="72" width="144" height="56" rx="6" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.22)" stroke-width="1" stroke-dasharray="4,3"/>
        <rect x="736" y="80" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.22)" stroke-width="0.8"/>
        <text x="750" y="89" fill="#7a8399" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">ASY</text>
        <text x="800" y="104" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Analytics</text>
        <text x="800" y="119" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">Beacon · async</text>

        <!-- =================================================================
             LEGEND — horizontal strip at the bottom.
             Separator at y=504, eyebrow at y=520, items at y=540–548.
             ================================================================= -->
        <line x1="56" y1="504" x2="944" y2="504" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <text x="56" y="520" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

        <!-- Item 1: Actor swatch (coral focal) -->
        <rect x="56" y="540" width="14" height="10" rx="2" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
        <text x="76" y="548" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Focal actor</text>

        <!-- Item 2: Activation bar swatch -->
        <rect x="188" y="536" width="4" height="18" fill="rgba(45,49,66,0.06)" stroke="#4f5d75" stroke-width="0.8"/>
        <text x="200" y="548" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Activation</text>

        <!-- Item 3: Request arrow (link-blue) -->
        <line x1="308" y1="546" x2="336" y2="546" stroke="#2e5aa8" stroke-width="1.2" marker-end="url(#arrow-link)"/>
        <text x="344" y="548" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">HTTP request</text>

        <!-- Item 4: Return / async (muted dashed) -->
        <line x1="476" y1="546" x2="504" y2="546" stroke="#4f5d75" stroke-width="1.2" stroke-dasharray="5,4" marker-end="url(#arrow)"/>
        <text x="512" y="548" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Return / async</text>

        <!-- Item 5: Primary response (coral) -->
        <line x1="652" y1="546" x2="680" y2="546" stroke="#eb6c36" stroke-width="1.4" marker-end="url(#arrow-accent)"/>
        <text x="688" y="548" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Primary response</text>

      </svg>`},{id:"state",name:"状态流转",category:"流程",svg:`<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="state-title state-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="state-title">Article lifecycle</title>
      <desc id="state-desc">State machine showing an article moving from Draft through In Review and Published to Archived, including rejection and revision.</desc>
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
          </pattern>
          <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
          <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
        </defs>

        <rect width="100%" height="100%" fill="#f5f5f5"/>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

        <!-- Transitions (drawn first) -->
        <!-- Start → Draft -->
        <line x1="68" y1="200" x2="120" y2="200" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <!-- Draft → In Review -->
        <line x1="280" y1="200" x2="340" y2="200" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <!-- In Review → Published (coral — happy path) -->
        <line x1="500" y1="200" x2="560" y2="200" stroke="#eb6c36" stroke-width="1.4" marker-end="url(#arrow-accent)"/>
        <!-- Published → Archived (down) -->
        <line x1="640" y1="240" x2="640" y2="300" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <!-- Archived → End (down) -->
        <line x1="640" y1="400" x2="640" y2="432" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <!-- In Review → Draft (curved back up-and-left) -->
        <path d="M 420 160 C 420 96, 200 96, 200 160" fill="none" stroke="#4f5d75" stroke-width="1.2" stroke-dasharray="5,4" marker-end="url(#arrow)"/>

        <!-- Transition labels -->
        <rect x="172" y="184" width="48" height="12" rx="2" fill="#f5f5f5"/>
        <text x="196" y="194" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">CREATE</text>

        <rect x="288" y="184" width="48" height="12" rx="2" fill="#f5f5f5"/>
        <text x="312" y="194" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">SUBMIT</text>

        <rect x="500" y="184" width="60" height="12" rx="2" fill="#f5f5f5"/>
        <text x="530" y="194" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">APPROVE</text>

        <rect x="612" y="264" width="56" height="12" rx="2" fill="#f5f5f5"/>
        <text x="640" y="274" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">EXPIRE</text>

        <rect x="620" y="416" width="40" height="12" rx="2" fill="#f5f5f5"/>
        <text x="640" y="426" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">PURGE</text>

        <!-- Reject label on curved path -->
        <rect x="276" y="92" width="80" height="12" rx="2" fill="#f5f5f5"/>
        <text x="316" y="102" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">REJECT · REVISE</text>

        <!-- Start dot (filled ink) -->
        <circle cx="60" cy="200" r="6" fill="#2d3142"/>

        <!-- State: Draft -->
        <rect x="120" y="160" width="160" height="80" rx="8" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <rect x="128" y="168" width="40" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
        <text x="148" y="177" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">STATE</text>
        <text x="200" y="208" fill="#2d3142" font-size="14" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Draft</text>
        <text x="200" y="224" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">unpublished</text>

        <!-- State: In Review -->
        <rect x="340" y="160" width="160" height="80" rx="8" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <rect x="348" y="168" width="40" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
        <text x="368" y="177" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">STATE</text>
        <text x="420" y="208" fill="#2d3142" font-size="14" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">In Review</text>
        <text x="420" y="224" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">awaiting approval</text>

        <!-- State: Published (focal coral) -->
        <rect x="560" y="160" width="160" height="80" rx="8" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
        <rect x="568" y="168" width="40" height="12" rx="2" fill="transparent" stroke="rgba(235,108,54,0.50)" stroke-width="0.8"/>
        <text x="588" y="177" fill="#eb6c36" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">STATE</text>
        <text x="640" y="208" fill="#2d3142" font-size="14" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Published</text>
        <text x="640" y="224" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">live on site</text>

        <!-- State: Archived -->
        <rect x="560" y="300" width="160" height="100" rx="8" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="1"/>
        <rect x="568" y="308" width="40" height="12" rx="2" fill="transparent" stroke="rgba(79,93,117,0.50)" stroke-width="0.8"/>
        <text x="588" y="317" fill="#4f5d75" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">STATE</text>
        <text x="640" y="348" fill="#2d3142" font-size="14" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Archived</text>
        <text x="640" y="364" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">noindex · hidden</text>
        <text x="640" y="382" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">redirect retained</text>

        <!-- End ring dot -->
        <circle cx="640" cy="440" r="8" fill="none" stroke="#2d3142" stroke-width="1"/>
        <circle cx="640" cy="440" r="5" fill="#2d3142"/>
      </svg>`},{id:"er",name:"实体关系",category:"数据",svg:`<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="er-title er-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="er-title">Content platform · data model</title>
      <desc id="er-desc">Entity-relationship diagram showing authors writing articles and articles connecting to tags and categories.</desc>
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
          </pattern>
          <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
        </defs>

        <rect width="100%" height="100%" fill="#f5f5f5"/>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

        <!-- Relationship lines (drawn first) -->
        <!-- 1. Author — Article (1:N "writes") -->
        <line x1="260" y1="240" x2="400" y2="240" stroke="#4f5d75" stroke-width="1" />
        <!-- 2. Article — ArticleTag (1:N) -->
        <path d="M 640,320 H 702 Q 710,320 710,328 H 780" fill="none" stroke="#4f5d75" stroke-width="1"/>
        <!-- 3. Tag — ArticleTag (1:N, vertical) -->
        <line x1="880" y1="248" x2="880" y2="280" stroke="#4f5d75" stroke-width="1" />

        <!-- Cardinality labels -->
        <rect x="266" y="232" width="12" height="12" rx="2" fill="#f5f5f5"/>
        <text x="272" y="242" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="middle" font-weight="600">1</text>

        <rect x="378" y="232" width="16" height="12" rx="2" fill="#f5f5f5"/>
        <text x="386" y="242" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="middle" font-weight="600">N</text>

        <rect x="646" y="316" width="12" height="12" rx="2" fill="#f5f5f5"/>
        <text x="652" y="326" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="middle" font-weight="600">1</text>

        <rect x="760" y="324" width="16" height="12" rx="2" fill="#f5f5f5"/>
        <text x="768" y="334" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="middle" font-weight="600">N</text>

        <rect x="872" y="252" width="16" height="12" rx="2" fill="#f5f5f5"/>
        <text x="880" y="262" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="middle" font-weight="600">1</text>

        <rect x="872" y="268" width="16" height="12" rx="2" fill="#f5f5f5"/>
        <text x="880" y="278" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="middle" font-weight="600">N</text>

        <!-- Relationship labels -->
        <rect x="304" y="220" width="56" height="14" rx="2" fill="#f5f5f5"/>
        <text x="332" y="230" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.12em">WRITES</text>

        <rect x="688" y="300" width="56" height="14" rx="2" fill="#f5f5f5"/>
        <text x="716" y="310" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.12em">TAGGED</text>

        <!-- Entity: Author -->
        <rect x="60" y="160" width="200" height="160" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <rect x="60" y="160" width="200" height="40" rx="6" fill="rgba(45,49,66,0.04)" stroke="none"/>
        <rect x="60" y="192" width="200" height="8" fill="rgba(45,49,66,0.04)"/>
        <line x1="60" y1="200" x2="260" y2="200" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
        <text x="76" y="176" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">ENTITY</text>
        <text x="76" y="192" fill="#2d3142" font-size="14" font-weight="600" font-family="Arial, sans-serif">Author</text>
        <text x="76" y="220" fill="#2d3142" font-size="10" font-family="monospace, monospace"># id</text>
        <text x="220" y="220" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">uuid</text>
        <text x="76" y="240" fill="#2d3142" font-size="10" font-family="monospace, monospace">handle</text>
        <text x="220" y="240" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">text</text>
        <text x="76" y="260" fill="#2d3142" font-size="10" font-family="monospace, monospace">name</text>
        <text x="220" y="260" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">text</text>
        <text x="76" y="280" fill="#2d3142" font-size="10" font-family="monospace, monospace">bio</text>
        <text x="220" y="280" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">text</text>
        <text x="76" y="300" fill="#2d3142" font-size="10" font-family="monospace, monospace">site_url</text>
        <text x="220" y="300" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">text</text>

        <!-- Entity: Article (focal coral) -->
        <rect x="400" y="120" width="240" height="240" rx="6" fill="rgba(235,108,54,0.04)" stroke="#eb6c36" stroke-width="1"/>
        <rect x="400" y="120" width="240" height="40" rx="6" fill="rgba(235,108,54,0.10)" stroke="none"/>
        <rect x="400" y="152" width="240" height="8" fill="rgba(235,108,54,0.10)"/>
        <line x1="400" y1="160" x2="640" y2="160" stroke="rgba(235,108,54,0.40)" stroke-width="1"/>
        <text x="416" y="136" fill="#eb6c36" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">ENTITY · AGGREGATE ROOT</text>
        <text x="416" y="152" fill="#2d3142" font-size="14" font-weight="600" font-family="Arial, sans-serif">Article</text>
        <text x="416" y="180" fill="#2d3142" font-size="10" font-family="monospace, monospace"># id</text>
        <text x="600" y="180" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">uuid</text>
        <text x="416" y="200" fill="#2d3142" font-size="10" font-family="monospace, monospace">title</text>
        <text x="600" y="200" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">text</text>
        <text x="416" y="220" fill="#2d3142" font-size="10" font-family="monospace, monospace">slug</text>
        <text x="600" y="220" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">text · unique</text>
        <text x="416" y="240" fill="#2d3142" font-size="10" font-family="monospace, monospace">body_mdx</text>
        <text x="600" y="240" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">text</text>
        <text x="416" y="260" fill="#2d3142" font-size="10" font-family="monospace, monospace">published_at</text>
        <text x="600" y="260" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">timestamp</text>
        <text x="416" y="280" fill="#2d3142" font-size="10" font-family="monospace, monospace">→ author_id</text>
        <text x="600" y="280" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">uuid</text>
        <text x="416" y="300" fill="#2d3142" font-size="10" font-family="monospace, monospace">status</text>
        <text x="600" y="300" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">enum</text>
        <text x="416" y="320" fill="#2d3142" font-size="10" font-family="monospace, monospace">og_image</text>
        <text x="600" y="320" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">text · url</text>

        <!-- Entity: Tag -->
        <rect x="780" y="120" width="200" height="128" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <rect x="780" y="120" width="200" height="40" rx="6" fill="rgba(45,49,66,0.04)" stroke="none"/>
        <rect x="780" y="152" width="200" height="8" fill="rgba(45,49,66,0.04)"/>
        <line x1="780" y1="160" x2="980" y2="160" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
        <text x="796" y="136" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">ENTITY</text>
        <text x="796" y="152" fill="#2d3142" font-size="14" font-weight="600" font-family="Arial, sans-serif">Tag</text>
        <text x="796" y="180" fill="#2d3142" font-size="10" font-family="monospace, monospace"># id</text>
        <text x="940" y="180" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">uuid</text>
        <text x="796" y="200" fill="#2d3142" font-size="10" font-family="monospace, monospace">slug</text>
        <text x="940" y="200" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">text · unique</text>
        <text x="796" y="220" fill="#2d3142" font-size="10" font-family="monospace, monospace">name</text>
        <text x="940" y="220" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">text</text>
        <text x="796" y="240" fill="#2d3142" font-size="10" font-family="monospace, monospace">description</text>
        <text x="940" y="240" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">text</text>

        <!-- Entity: ArticleTag (join) -->
        <rect x="780" y="280" width="200" height="96" rx="6" fill="rgba(45,49,66,0.04)" stroke="#4f5d75" stroke-width="1" stroke-dasharray="4,3"/>
        <rect x="780" y="280" width="200" height="40" rx="6" fill="rgba(45,49,66,0.06)" stroke="none"/>
        <rect x="780" y="312" width="200" height="8" fill="rgba(45,49,66,0.06)"/>
        <line x1="780" y1="320" x2="980" y2="320" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
        <text x="796" y="296" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">JOIN</text>
        <text x="796" y="312" fill="#2d3142" font-size="14" font-weight="600" font-family="Arial, sans-serif">ArticleTag</text>
        <text x="796" y="340" fill="#2d3142" font-size="10" font-family="monospace, monospace">→ article_id</text>
        <text x="940" y="340" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">uuid</text>
        <text x="796" y="360" fill="#2d3142" font-size="10" font-family="monospace, monospace">→ tag_id</text>
        <text x="940" y="360" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end">uuid</text>

        <!-- Legend -->
        <line x1="40" y1="404" x2="960" y2="404" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <text x="40" y="420" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

        <rect x="40" y="436" width="14" height="10" rx="2" fill="rgba(235,108,54,0.04)" stroke="#eb6c36" stroke-width="1"/>
        <text x="60" y="444" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Aggregate root</text>

        <rect x="180" y="436" width="14" height="10" rx="2" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="200" y="444" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Entity</text>

        <rect x="268" y="436" width="14" height="10" rx="2" fill="rgba(45,49,66,0.04)" stroke="#4f5d75" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="288" y="444" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Join table</text>

        <text x="372" y="444" fill="#2d3142" font-size="10" font-family="monospace, monospace" font-weight="600">#</text>
        <text x="388" y="444" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Primary key</text>

        <text x="476" y="444" fill="#2d3142" font-size="10" font-family="monospace, monospace" font-weight="600">→</text>
        <text x="492" y="444" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Foreign key</text>

        <text x="584" y="444" fill="#4f5d75" font-size="10" font-family="monospace, monospace" font-weight="600">1 / N</text>
        <text x="616" y="444" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Cardinality</text>
      </svg>`},{id:"timeline",name:"项目时间线",category:"规划",svg:`<svg viewBox="0 0 1000 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="timeline-title timeline-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="timeline-title">Product launch · fourteen months</title>
      <desc id="timeline-desc">Timeline showing product milestones from the first post in February 2025 through three design versions and the schematic skill in April 2026.</desc>
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="#f5f5f5"/>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

        <!-- Year markers (background) -->
        <text x="60" y="340" fill="rgba(45,49,66,0.06)" font-size="72" font-weight="600" font-family="monospace, monospace">2025</text>
        <text x="700" y="340" fill="rgba(45,49,66,0.06)" font-size="72" font-weight="600" font-family="monospace, monospace">2026</text>

        <!-- Baseline -->
        <line x1="80" y1="240" x2="920" y2="240" stroke="rgba(79,93,117,0.45)" stroke-width="1"/>

        <!-- Year boundary tick (between 2025 and 2026) -->
        <line x1="680" y1="232" x2="680" y2="248" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>
        <text x="680" y="260" fill="#7a8399" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">JAN '26</text>

        <!-- Start / end caps -->
        <line x1="80" y1="232" x2="80" y2="248" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>
        <line x1="920" y1="232" x2="920" y2="248" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>

        <!-- Event 1: FEB 2025 · First post (below) -->
        <line x1="100" y1="240" x2="100" y2="296" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
        <circle cx="100" cy="240" r="4" fill="#2d3142"/>
        <text x="100" y="312" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">FEB 2025</text>
        <text x="100" y="328" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">First post</text>

        <!-- Event 2: APR 2025 · Design v1 (above) -->
        <line x1="240" y1="184" x2="240" y2="240" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
        <circle cx="240" cy="240" r="4" fill="#2d3142"/>
        <text x="240" y="156" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">APR 2025</text>
        <text x="240" y="172" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Design v1</text>

        <!-- Event 3: SEP 2025 · Design v2 (below) -->
        <line x1="500" y1="240" x2="500" y2="296" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
        <circle cx="500" cy="240" r="4" fill="#2d3142"/>
        <text x="500" y="312" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">SEP 2025</text>
        <text x="500" y="328" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Design v2</text>
        <text x="500" y="344" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">typography pass</text>

        <!-- Event 4: JAN 2026 · Design v3 (above, coral major) -->
        <line x1="740" y1="160" x2="740" y2="240" stroke="#eb6c36" stroke-width="1"/>
        <circle cx="740" cy="240" r="6" fill="#eb6c36"/>
        <text x="740" y="128" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">JAN 2026</text>
        <text x="740" y="148" fill="#2d3142" font-size="14" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Design v3</text>
        <text x="740" y="164" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">complexity budget</text>

        <!-- Event 5: APR 2026 · now · Diagram Design skill (below, coral) -->
        <line x1="900" y1="240" x2="900" y2="296" stroke="#eb6c36" stroke-width="1"/>
        <circle cx="900" cy="240" r="6" fill="#eb6c36"/>
        <text x="900" y="312" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">APR 2026 · NOW</text>
        <text x="900" y="328" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Schematic skill</text>
        <text x="900" y="344" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">eight diagram types</text>

        <!-- Legend -->
        <line x1="40" y1="376" x2="960" y2="376" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <text x="40" y="392" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

        <circle cx="52" cy="408" r="4" fill="#2d3142"/>
        <text x="68" y="412" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Event</text>

        <circle cx="148" cy="408" r="6" fill="#eb6c36"/>
        <text x="164" y="412" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Major milestone</text>

        <text x="296" y="412" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif" font-style="italic">Spacing is proportional to real elapsed time.</text>
      </svg>`},{id:"swimlane",name:"跨部门泳道",category:"流程",svg:`<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="swimlane-title swimlane-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="swimlane-title">Publishing an article</title>
      <desc id="swimlane-desc">Swimlane diagram showing an article moving from MDX draft through review, editing, approval, build, and Cloudflare Pages deployment.</desc>
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
          </pattern>
          <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
          <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
        </defs>

        <rect width="100%" height="100%" fill="#f5f5f5"/>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

        <!-- Lane dividers -->
        <line x1="40" y1="80" x2="960" y2="80" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
        <line x1="40" y1="160" x2="960" y2="160" stroke="rgba(45,49,66,0.10)" stroke-width="1"/>
        <line x1="40" y1="240" x2="960" y2="240" stroke="rgba(45,49,66,0.10)" stroke-width="1"/>
        <line x1="40" y1="320" x2="960" y2="320" stroke="rgba(45,49,66,0.10)" stroke-width="1"/>
        <line x1="40" y1="400" x2="960" y2="400" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>

        <!-- Actor column divider -->
        <line x1="160" y1="80" x2="160" y2="400" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>

        <!-- Lane labels -->
        <text x="60" y="124" fill="#4f5d75" font-size="9" font-family="monospace, monospace" letter-spacing="0.18em">AUTHOR</text>
        <text x="60" y="204" fill="#4f5d75" font-size="9" font-family="monospace, monospace" letter-spacing="0.18em">REVIEWER</text>
        <text x="60" y="284" fill="#4f5d75" font-size="9" font-family="monospace, monospace" letter-spacing="0.18em">EDITOR</text>
        <text x="60" y="364" fill="#4f5d75" font-size="9" font-family="monospace, monospace" letter-spacing="0.18em">CI / CD</text>

        <!-- Arrows (drawn first) -->
        <!-- 1. Draft → Open PR (within Author) -->
        <line x1="300" y1="120" x2="340" y2="120" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <!-- 2. Open PR → Review (Author → Reviewer handoff, diagonal down-right) -->
        <line x1="460" y1="144" x2="500" y2="176" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <!-- 3. Review → Polish (Reviewer → Editor, vertical down) -->
        <line x1="570" y1="224" x2="570" y2="256" stroke="#4f5d75" stroke-width="1.2" stroke-dasharray="5,4" marker-end="url(#arrow)"/>
        <!-- 4. Polish → Approve (within Editor) -->
        <line x1="640" y1="280" x2="680" y2="280" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <!-- 5. Approve → Build (Editor → CI/CD, coral handoff) -->
        <line x1="750" y1="304" x2="720" y2="336" stroke="#eb6c36" stroke-width="1.4" marker-end="url(#arrow-accent)"/>
        <!-- 6. Build → Deploy (within CI/CD) -->
        <line x1="760" y1="360" x2="800" y2="360" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>

        <!-- Arrow labels -->
        <rect x="478" y="140" width="60" height="12" rx="2" fill="#f5f5f5"/>
        <text x="508" y="150" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.12em">HANDOFF</text>

        <rect x="548" y="228" width="52" height="12" rx="2" fill="#ececec"/>
        <text x="574" y="238" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.12em">REVISE</text>

        <rect x="712" y="308" width="80" height="12" rx="2" fill="#f5f5f5"/>
        <text x="752" y="318" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.12em">DEPLOY TRIGGER</text>

        <!-- Steps -->
        <!-- Author: Draft MDX -->
        <rect x="180" y="96" width="120" height="48" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="240" y="118" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Draft MDX</text>
        <text x="240" y="132" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">src/content/…</text>

        <!-- Author: Open PR -->
        <rect x="340" y="96" width="120" height="48" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="400" y="118" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Open PR</text>
        <text x="400" y="132" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">gh pr create</text>

        <!-- Reviewer: Review content -->
        <rect x="500" y="176" width="140" height="48" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="570" y="198" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Review content</text>
        <text x="570" y="212" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">fact-check · voice</text>

        <!-- Editor: Polish copy -->
        <rect x="500" y="256" width="140" height="48" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="570" y="278" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Polish copy</text>
        <text x="570" y="292" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">style · line edits</text>

        <!-- Editor: Approve merge -->
        <rect x="680" y="256" width="140" height="48" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="750" y="278" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Approve merge</text>
        <text x="750" y="292" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">squash · main</text>

        <!-- CI/CD: Build -->
        <rect x="680" y="336" width="80" height="48" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="720" y="358" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Build</text>
        <text x="720" y="372" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">astro build</text>

        <!-- CI/CD: Deploy (coral focal) -->
        <rect x="800" y="336" width="120" height="48" rx="6" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
        <text x="860" y="358" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Deploy</text>
        <text x="860" y="372" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">cloudflare pages</text>

        <!-- Legend -->
        <line x1="40" y1="428" x2="960" y2="428" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <text x="40" y="444" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

        <rect x="40" y="460" width="14" height="10" rx="2" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="60" y="468" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Step</text>

        <rect x="132" y="460" width="14" height="10" rx="2" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
        <text x="152" y="468" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Focal outcome</text>

        <line x1="268" y1="466" x2="296" y2="466" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
        <text x="304" y="468" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Within-lane step</text>

        <line x1="444" y1="466" x2="472" y2="466" stroke="#4f5d75" stroke-width="1.2" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
        <text x="480" y="468" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Revision loop</text>

        <line x1="608" y1="466" x2="636" y2="466" stroke="#eb6c36" stroke-width="1.4" marker-end="url(#arrow-accent)"/>
        <text x="644" y="468" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Critical handoff</text>
      </svg>`},{id:"quadrant",name:"优先级象限",category:"分析",svg:`<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="quadrant-title quadrant-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="quadrant-title">Content ideas · Impact × Effort</title>
      <desc id="quadrant-desc">Impact-effort matrix showing eight content projects across do first, major projects, quick wins, and avoid quadrants.</desc>
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="#f5f5f5"/>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

        <!-- Quadrant backgrounds (very subtle, only coral on DO FIRST) -->
        <rect x="120" y="80" width="380" height="170" fill="rgba(235,108,54,0.03)"/>

        <!-- Axis cross -->
        <line x1="120" y1="250" x2="880" y2="250" stroke="rgba(45,49,66,0.45)" stroke-width="1"/>
        <line x1="500" y1="80" x2="500" y2="420" stroke="rgba(45,49,66,0.45)" stroke-width="1"/>

        <!-- Axis end labels -->
        <text x="880" y="266" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.14em">HIGH EFFORT →</text>
        <text x="120" y="266" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">← LOW EFFORT</text>
        <text x="512" y="80" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">↑ HIGH IMPACT</text>
        <text x="512" y="432" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">↓ LOW IMPACT</text>

        <!-- Quadrant corner labels -->
        <text x="140" y="104" fill="#eb6c36" font-size="9" font-family="monospace, monospace" letter-spacing="0.18em" font-weight="600">DO FIRST</text>
        <text x="860" y="104" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.18em">MAJOR PROJECTS</text>
        <text x="140" y="412" fill="#4f5d75" font-size="9" font-family="monospace, monospace" letter-spacing="0.18em">QUICK WINS</text>
        <text x="860" y="412" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.18em">AVOID</text>

        <!-- Items: TL (Do First) -->
        <!-- coral focal -->
        <circle cx="220" cy="140" r="6" fill="#eb6c36"/>
        <text x="232" y="144" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif">Schematic skill v4</text>

        <circle cx="320" cy="200" r="4" fill="#2d3142"/>
        <text x="332" y="204" fill="#4f5d75" font-size="11" font-family="Arial, sans-serif">Update changelog</text>

        <!-- Items: TR (Major Projects) -->
        <circle cx="620" cy="140" r="4" fill="#2d3142"/>
        <text x="632" y="144" fill="#4f5d75" font-size="11" font-family="Arial, sans-serif">Design v4 refresh</text>

        <circle cx="760" cy="180" r="4" fill="#2d3142"/>
        <text x="772" y="184" fill="#4f5d75" font-size="11" font-family="Arial, sans-serif">New publication</text>

        <!-- Items: BL (Quick Wins) -->
        <circle cx="260" cy="320" r="4" fill="#2d3142"/>
        <text x="272" y="324" fill="#4f5d75" font-size="11" font-family="Arial, sans-serif">Fix footer link</text>

        <circle cx="360" cy="380" r="4" fill="#2d3142"/>
        <text x="372" y="384" fill="#4f5d75" font-size="11" font-family="Arial, sans-serif">Update OG tags</text>

        <!-- Items: BR (Avoid) -->
        <circle cx="640" cy="380" r="4" fill="#2d3142"/>
        <text x="652" y="384" fill="#4f5d75" font-size="11" font-family="Arial, sans-serif">Rewrite build pipeline</text>

        <circle cx="780" cy="320" r="4" fill="#2d3142"/>
        <text x="792" y="324" fill="#4f5d75" font-size="11" font-family="Arial, sans-serif">Port to Nuxt</text>

        <!-- Legend -->
        <line x1="40" y1="456" x2="960" y2="456" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <text x="40" y="472" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

        <circle cx="52" cy="488" r="6" fill="#eb6c36"/>
        <text x="68" y="492" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Start tomorrow</text>

        <circle cx="192" cy="488" r="4" fill="#2d3142"/>
        <text x="208" y="492" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Candidate project</text>

        <text x="336" y="492" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif" font-style="italic">Position is the signal. Colour is reserved for the single action item.</text>
      </svg>`},{id:"radar",name:"能力雷达",category:"分析",svg:`<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="radar-title radar-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="radar-title">Storage backends · Capability radar</title>
      <desc id="radar-desc">Radar chart comparing MinIO, Amazon S3, Ceph, and Google Cloud Storage across five storage capabilities.</desc>
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="#f5f5f5"/>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

        <!-- Concentric grid rings (f = 0.2, 0.4, 0.6, 0.8, 1.0) -->
        <polygon points="500,208 530,230 519,266 481,266 470,230" fill="none" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <polygon points="500,176 561,220 538,292 462,292 439,220" fill="none" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <polygon points="500,144 591,211 556,317 444,317 409,211" fill="none" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <polygon points="500,112 622,201 575,343 425,343 378,201" fill="none" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <polygon points="500,80 652,191 594,369 406,369 348,191" fill="none" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>

        <!-- Axis spokes (center to outer vertex) -->
        <line x1="500" y1="240" x2="500" y2="80" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>
        <line x1="500" y1="240" x2="652" y2="191" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>
        <line x1="500" y1="240" x2="594" y2="369" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>
        <line x1="500" y1="240" x2="406" y2="369" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>
        <line x1="500" y1="240" x2="348" y2="191" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>

        <!-- Axis labels (one word per spoke, Geist sans 11px 600) -->
        <text x="500" y="62" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Small-file handling</text>
        <text x="669" y="189" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="start">Large-object reads</text>
        <text x="605" y="400" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="start">Write throughput</text>
        <text x="395" y="400" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="end">Operational simplicity</text>
        <text x="331" y="189" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="end">Iceberg integration</text>

        <!-- Scale ticks on first (top) axis only -->
        <text x="494" y="82" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">10</text>
        <text x="494" y="114" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">8</text>
        <text x="494" y="146" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">6</text>
        <text x="494" y="178" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">4</text>
        <text x="494" y="210" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">2</text>

        <!-- Non-focal series (smallest to largest, back to front) -->
        <!-- Ceph · series-2 dusty-blue · [7,7,7,4,6] -->
        <polygon points="500,128 606,206 566,330 462,292 409,211" fill="rgba(94,122,155,0.18)" stroke="#5e7a9b" stroke-width="1.5"/>
        <!-- GCS · series-3 mustard · [6,9,8,6,7] -->
        <polygon points="500,144 637,196 575,343 444,317 394,206" fill="rgba(184,145,90,0.18)" stroke="#b8915a" stroke-width="1.5"/>
        <!-- Amazon S3 · series-1 sage · [6,10,9,5,8] -->
        <polygon points="500,144 652,191 585,356 453,305 378,201" fill="rgba(124,143,111,0.18)" stroke="#7c8f6f" stroke-width="1.5"/>

        <!-- Focal series · MinIO · accent · [9,8,9,9,9] -->
        <polygon points="500,96 622,201 585,356 415,356 363,196" fill="rgba(235,108,54,0.18)" stroke="#eb6c36" stroke-width="1.8"/>

        <!-- Focal vertex dots (only on focal series) -->
        <circle cx="500" cy="96"  r="4" fill="#eb6c36"/>
        <circle cx="622" cy="201" r="4" fill="#eb6c36"/>
        <circle cx="585" cy="356" r="4" fill="#eb6c36"/>
        <circle cx="415" cy="356" r="4" fill="#eb6c36"/>
        <circle cx="363" cy="196" r="4" fill="#eb6c36"/>

        <!-- Legend -->
        <line x1="40" y1="456" x2="960" y2="456" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <text x="40" y="472" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

        <rect x="40"  y="484" width="16" height="8" fill="rgba(235,108,54,0.18)" stroke="#eb6c36" stroke-width="1.5"/>
        <text x="64"  y="492" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">MinIO · recommended</text>

        <rect x="220" y="484" width="16" height="8" fill="rgba(124,143,111,0.18)" stroke="#7c8f6f" stroke-width="1.5"/>
        <text x="244" y="492" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Amazon S3</text>

        <rect x="344" y="484" width="16" height="8" fill="rgba(94,122,155,0.18)" stroke="#5e7a9b" stroke-width="1.5"/>
        <text x="368" y="492" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Ceph</text>

        <rect x="424" y="484" width="16" height="8" fill="rgba(184,145,90,0.18)" stroke="#b8915a" stroke-width="1.5"/>
        <text x="448" y="492" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Google Cloud Storage</text>

        <text x="608" y="492" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif" font-style="italic">One coral. Position is the signal — color reserved for the recommended option.</text>
      </svg>`},{id:"loop",name:"反馈循环",category:"流程",svg:`<svg viewBox="0 0 1040 680" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="loop-title loop-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --paper: #f5f5f5; --ink: #2d3142; --muted: #4f5d75; --soft: #7a8399;
      --accent: #eb6c36; --accent-tint: rgba(235,108,54,0.08); --link: #2e5aa8;
      --sans: Arial, system-ui, sans-serif; --serif: Georgia, serif;
      --mono: monospace, ui-monospace, monospace;
    }
    body { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 3rem 2rem; background: var(--paper); color: var(--ink); font-family: var(--sans); }
    .frame { width: 100%; max-width: 1200px; }
    .eyebrow { margin-bottom: 0.5rem; color: var(--muted); font: 500 0.66rem var(--mono); letter-spacing: 0.18em; text-transform: uppercase; }
    h1 { margin-bottom: 1.5rem; color: var(--ink); font: 400 clamp(1.5rem, 2.4vw + 0.75rem, 2rem)/1.15 var(--serif); letter-spacing: -0.02em; }
    .ring { fill: none; stroke: var(--muted); stroke-width: 1.2; }
    .spoke { fill: none; stroke: var(--soft); stroke-width: 1; stroke-dasharray: 5 4; }
    .station { fill: var(--paper); stroke: var(--ink); stroke-width: 1; }
    .station.focal { fill: var(--accent-tint); stroke: var(--accent); stroke-width: 1.2; }
    .hub { fill: var(--ink); }
    .node-name { fill: var(--ink); font: 600 12px var(--sans); text-anchor: middle; }
    .focal-name { fill: var(--accent); }
    .sublabel { fill: var(--soft); font: 400 8px var(--mono); text-anchor: middle; }
    .hub-name { fill: var(--paper); font: 600 16px var(--sans); text-anchor: middle; }
    .hub-sub { fill: var(--paper); opacity: 0.72; font: 400 8px var(--mono); text-anchor: middle; }
    .arrow-label { fill: var(--soft); font: 400 8px var(--mono); letter-spacing: 0.06em; text-anchor: middle; }
  </style>
      <title id="loop-title">The self-improving loop</title>
      <desc id="loop-desc">Six stations flow clockwise from Capture through Learn and back to Capture. Each station writes shared state into one central memory hub, with Decide highlighted as the human approval gate.</desc>
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/></pattern>
        <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
        <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
        <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#2e5aa8"/></marker>
        <marker id="arrow-soft" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#7a8399"/></marker>
      </defs>
      <rect width="1040" height="680" fill="#f5f5f5"/>
      <rect width="1040" height="680" fill="url(#dots)" opacity="0.55"/>

      <!-- Solid clockwise ring: six arcs on the same r=240 station circle. -->
      <path class="ring" d="M600 113.726 A240 240 0 0 1 704.969 187.073" marker-end="url(#arrow)"/>
      <path class="ring" d="M743.285 252 A240 240 0 0 1 743.722 426.882" marker-end="url(#arrow)"/>
      <path class="ring" d="M705.731 492 A240 240 0 0 1 601.130 565.871" marker-end="url(#arrow)"/>
      <path class="ring" d="M440 566.274 A240 240 0 0 1 335.031 492.927" marker-end="url(#arrow)"/>
      <path class="ring" d="M296.715 428 A240 240 0 0 1 296.278 253.118" marker-end="url(#arrow)"/>
      <path class="ring" d="M334.269 188 A240 240 0 0 1 438.870 114.129" marker-end="url(#arrow)"/>

      <!-- Dashed write-backs: station inner edge to 6px before the hub stroke. -->
      <path class="spoke" d="M520 132 V280" marker-end="url(#arrow-soft)"/>
      <path class="spoke" d="M672 252 L616 284" marker-end="url(#arrow-soft)"/>
      <path class="spoke" d="M672 428 L616 396" marker-end="url(#arrow-soft)"/>
      <path class="spoke" d="M520 548 V400" marker-end="url(#arrow-soft)"/>
      <path class="spoke" d="M368 428 L424 396" marker-end="url(#arrow-soft)"/>
      <path class="spoke" d="M368 252 L424 284" marker-end="url(#arrow-soft)"/>

      <!-- Curated spoke labels sit beside the line with an 8px visible gap. -->
      <rect x="532" y="200" width="48" height="16" rx="4" fill="#f5f5f5"/>
      <text x="556" y="212" class="arrow-label">SIGNALS</text>
      <rect x="460" y="464" width="52" height="16" rx="4" fill="#f5f5f5"/>
      <text x="486" y="476" class="arrow-label">OUTCOMES</text>

      <!-- Stations -->
      <rect class="station" x="440" y="68" width="160" height="64" rx="6"/>
      <text x="520" y="96" class="node-name">Capture</text><text x="520" y="116" class="sublabel">signals in / intake</text>

      <rect class="station" x="648" y="188" width="160" height="64" rx="6"/>
      <text x="728" y="216" class="node-name">Research</text><text x="728" y="236" class="sublabel">evidence pulled</text>

      <rect class="station focal" x="648" y="428" width="160" height="64" rx="6"/>
      <text x="728" y="456" class="node-name focal-name">Decide</text><text x="728" y="476" class="sublabel">human approves</text>

      <rect class="station" x="440" y="548" width="160" height="64" rx="6"/>
      <text x="520" y="576" class="node-name">Act</text><text x="520" y="596" class="sublabel">work ships</text>

      <rect class="station" x="232" y="428" width="160" height="64" rx="6"/>
      <text x="312" y="456" class="node-name">Measure</text><text x="312" y="476" class="sublabel">outcomes logged</text>

      <rect class="station" x="232" y="188" width="160" height="64" rx="6"/>
      <text x="312" y="216" class="node-name">Learn</text><text x="312" y="236" class="sublabel">playbook updated</text>

      <!-- The one shared-state hub. -->
      <rect class="hub" x="420" y="288" width="200" height="104" rx="8"/>
      <text x="520" y="336" class="hub-name">Shared memory</text>
      <text x="520" y="360" class="hub-sub">one record, every loop</text>
    </svg>`},{id:"nested",name:"嵌套关系",category:"结构",svg:`<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="nested-title nested-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="nested-title">The CLAUDE.md Hierarchy</title>
      <desc id="nested-desc">Nested diagram showing how project CLAUDE.md instructions inherit broader scopes from the global, vault, business, and marketing levels.</desc>
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="#f5f5f5"/>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

        <!-- Level 1: ~/.claude/ (global) — outermost -->
        <rect x="40" y="60" width="920" height="380" rx="8" fill="rgba(45,49,66,0.015)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
        <!-- Level 2: ~/vault/ -->
        <rect x="72" y="96" width="856" height="308" rx="8" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.35)" stroke-width="1"/>
        <!-- Level 3: /business -->
        <rect x="104" y="132" width="792" height="236" rx="8" fill="rgba(45,49,66,0.025)" stroke="rgba(45,49,66,0.45)" stroke-width="1"/>
        <!-- Level 4: /marketing -->
        <rect x="136" y="168" width="728" height="164" rx="8" fill="rgba(45,49,66,0.03)" stroke="#4f5d75" stroke-width="1"/>
        <!-- Level 5: /project — innermost, coral focal -->
        <rect x="168" y="204" width="664" height="92" rx="8" fill="rgba(235,108,54,0.06)" stroke="#eb6c36" stroke-width="1"/>

        <!-- Level labels on paper-colored masks -->
        <rect x="56" y="52" width="188" height="16" fill="#f5f5f5"/>
        <text x="64" y="64" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">~/.claude/ (global)</text>

        <rect x="88" y="88" width="148" height="16" fill="#f5f5f5"/>
        <text x="96" y="100" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">~/vault/ (notes)</text>

        <rect x="120" y="124" width="96" height="16" fill="#f5f5f5"/>
        <text x="128" y="136" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">/business</text>

        <rect x="152" y="160" width="108" height="16" fill="#f5f5f5"/>
        <text x="160" y="172" fill="#2d3142" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">/marketing</text>

        <rect x="184" y="196" width="88" height="16" fill="#f5f5f5"/>
        <text x="192" y="208" fill="#eb6c36" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em" font-weight="600">/project</text>

        <!-- File-icon glyphs (simple rect with folded corner) inside each level -->
        <!-- Glyph in level 1 (bottom-right area of outer ring) -->
        <g transform="translate(908, 408)">
          <path d="M0 0 L16 0 L20 4 L20 20 L0 20 Z" fill="#f5f5f5" stroke="rgba(45,49,66,0.35)" stroke-width="1"/>
          <path d="M16 0 L16 4 L20 4" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="1"/>
        </g>
        <!-- Glyph in level 2 ring -->
        <g transform="translate(876, 372)">
          <path d="M0 0 L16 0 L20 4 L20 20 L0 20 Z" fill="#f5f5f5" stroke="rgba(45,49,66,0.40)" stroke-width="1"/>
          <path d="M16 0 L16 4 L20 4" fill="none" stroke="rgba(45,49,66,0.40)" stroke-width="1"/>
        </g>
        <!-- Glyph in level 3 ring -->
        <g transform="translate(844, 336)">
          <path d="M0 0 L16 0 L20 4 L20 20 L0 20 Z" fill="#f5f5f5" stroke="rgba(45,49,66,0.50)" stroke-width="1"/>
          <path d="M16 0 L16 4 L20 4" fill="none" stroke="rgba(45,49,66,0.50)" stroke-width="1"/>
        </g>
        <!-- Glyph in level 4 ring -->
        <g transform="translate(812, 300)">
          <path d="M0 0 L16 0 L20 4 L20 20 L0 20 Z" fill="#f5f5f5" stroke="#4f5d75" stroke-width="1"/>
          <path d="M16 0 L16 4 L20 4" fill="none" stroke="#4f5d75" stroke-width="1"/>
        </g>

        <!-- Innermost label — human readable -->
        <text x="500" y="248" fill="#2d3142" font-size="16" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">CLAUDE.md</text>
        <text x="500" y="272" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">inherits every level above</text>

        <!-- Annotation top-right: italic callout with curved arrow -->
        <text x="904" y="36" fill="#2d3142" font-size="14" font-style="italic" font-family="Georgia, serif" text-anchor="end">no imports, no configuration</text>
        <path d="M 820 44 Q 700 84 520 216" fill="none" stroke="rgba(45,49,66,0.40)" stroke-width="1" stroke-dasharray="4,3"/>
        <circle cx="520" cy="216" r="2" fill="#2d3142"/>

        <!-- Annotation bottom-left: italic callout -->
        <text x="40" y="484" fill="#4f5d75" font-size="14" font-style="italic" font-family="Georgia, serif">structure IS the index</text>
      </svg>`},{id:"tree",name:"层级树",category:"结构",svg:`<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tree-title tree-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="tree-title">Claude Code skill taxonomy</title>
      <desc id="tree-desc">Tree diagram showing a Skills root branching into Design, Engineering, and Research categories and their leaf skills.</desc>
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="#f5f5f5"/>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

        <!-- Tier tags (left margin) -->
        <text x="40" y="108" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">TIER 0 · ROOT</text>
        <text x="40" y="224" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em" text-anchor="start">TIER 1</text>
        <text x="40" y="324" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em" text-anchor="start">TIER 2</text>

        <!-- Connectors drawn first (behind nodes) -->
        <!-- Root → Tier 1 bus -->
        <path d="M 500 128 L 500 168 L 220 168 L 220 208" fill="none" stroke="#4f5d75" stroke-width="1"/>
        <path d="M 500 168 L 500 208" fill="none" stroke="#4f5d75" stroke-width="1"/>
        <path d="M 500 168 L 780 168 L 780 208" fill="none" stroke="#4f5d75" stroke-width="1"/>

        <!-- Design → leaves -->
        <path d="M 220 256 L 220 296 L 140 296 L 140 336" fill="none" stroke="#4f5d75" stroke-width="1"/>
        <path d="M 220 296 L 300 296 L 300 336" fill="none" stroke="#4f5d75" stroke-width="1"/>

        <!-- Engineering → leaves -->
        <path d="M 500 256 L 500 296 L 480 296 L 480 336" fill="none" stroke="#4f5d75" stroke-width="1"/>
        <path d="M 500 296 L 660 296 L 660 336" fill="none" stroke="#4f5d75" stroke-width="1"/>

        <!-- Research → single leaf -->
        <path d="M 780 256 L 780 296 L 840 296 L 840 336" fill="none" stroke="#4f5d75" stroke-width="1"/>

        <!-- Root node: Skills (coral focal) -->
        <rect x="420" y="80" width="160" height="48" rx="6" fill="#f5f5f5"/>
        <rect x="420" y="80" width="160" height="48" rx="6" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
        <rect x="428" y="88" width="32" height="12" rx="2" fill="transparent" stroke="rgba(235,108,54,0.50)" stroke-width="0.8"/>
        <text x="444" y="97" fill="#eb6c36" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">ROOT</text>
        <text x="500" y="118" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Skills</text>

        <!-- Tier 1: Design -->
        <rect x="140" y="208" width="160" height="48" rx="6" fill="#f5f5f5"/>
        <rect x="140" y="208" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <rect x="148" y="216" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
        <text x="162" y="225" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">CAT</text>
        <text x="220" y="240" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Design</text>
        <text x="220" y="252" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">ui · visual · ux</text>

        <!-- Tier 1: Engineering -->
        <rect x="420" y="208" width="160" height="48" rx="6" fill="#f5f5f5"/>
        <rect x="420" y="208" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <rect x="428" y="216" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
        <text x="442" y="225" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">CAT</text>
        <text x="500" y="240" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Engineering</text>
        <text x="500" y="252" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">ship · review · test</text>

        <!-- Tier 1: Research -->
        <rect x="700" y="208" width="160" height="48" rx="6" fill="#f5f5f5"/>
        <rect x="700" y="208" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <rect x="708" y="216" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
        <text x="722" y="225" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">CAT</text>
        <text x="780" y="240" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Research</text>
        <text x="780" y="252" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">investigate · analyze</text>

        <!-- Tier 2: polish -->
        <rect x="60" y="336" width="160" height="48" rx="6" fill="#f5f5f5"/>
        <rect x="60" y="336" width="160" height="48" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="0.8"/>
        <text x="140" y="360" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">polish</text>
        <text x="140" y="372" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">align · space · rhythm</text>

        <!-- Tier 2: critique -->
        <rect x="220" y="336" width="160" height="48" rx="6" fill="#f5f5f5"/>
        <rect x="220" y="336" width="160" height="48" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="0.8"/>
        <text x="300" y="360" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">critique</text>
        <text x="300" y="372" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">hierarchy · density</text>

        <!-- Tier 2: review -->
        <rect x="400" y="336" width="160" height="48" rx="6" fill="#f5f5f5"/>
        <rect x="400" y="336" width="160" height="48" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="0.8"/>
        <text x="480" y="360" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">review</text>
        <text x="480" y="372" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">pre-land diff · sql</text>

        <!-- Tier 2: ship -->
        <rect x="580" y="336" width="160" height="48" rx="6" fill="#f5f5f5"/>
        <rect x="580" y="336" width="160" height="48" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="0.8"/>
        <text x="660" y="360" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">ship</text>
        <text x="660" y="372" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">merge · deploy · verify</text>

        <!-- Tier 2: investigate -->
        <rect x="760" y="336" width="160" height="48" rx="6" fill="#f5f5f5"/>
        <rect x="760" y="336" width="160" height="48" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="0.8"/>
        <text x="840" y="360" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">investigate</text>
        <text x="840" y="372" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">root cause · evidence</text>

        <!-- Legend strip -->
        <line x1="40" y1="412" x2="960" y2="412" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <text x="40" y="428" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

        <rect x="40" y="444" width="14" height="10" rx="2" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
        <text x="60" y="452" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Root · focal</text>

        <rect x="180" y="444" width="14" height="10" rx="2" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="200" y="452" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Category branch</text>

        <rect x="340" y="444" width="14" height="10" rx="2" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="0.8"/>
        <text x="360" y="452" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Leaf skill</text>

        <text x="500" y="452" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif" font-style="italic">Orthogonal connectors only. Coral marks the root — every branch descends from one idea.</text>
      </svg>`},{id:"org-chart",name:"组织架构",category:"结构",svg:`<svg viewBox="0 0 1040 620" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="org-chart-title org-chart-desc"><style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--paper:#f5f5f5;--paper-2:#fff;--ink:#2d3142;--muted:#4f5d75;--soft:#7a8399;--rule:rgba(45,49,66,.12);--accent:#eb6c36;--accent-tint:rgba(235,108,54,.08);--link:#2e5aa8;--sans:Arial,system-ui,sans-serif;--serif:Georgia,serif;--mono:monospace,ui-monospace,monospace}
body{font-family:var(--sans);background:var(--paper);color:var(--ink);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:48px 32px}.frame{max-width:1180px;width:100%}.eyebrow{font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:8px}h1{font-family:var(--serif);font-size:32px;font-weight:400;line-height:1.08;letter-spacing:-.02em;margin-bottom:20px}.subtitle{color:var(--muted);font-size:14px;line-height:1.5;max-width:720px;margin-bottom:24px}.cards{display:grid;grid-template-columns:1.1fr 1fr .9fr;gap:16px;margin-top:20px}.card{background:#fff;border:1px solid var(--rule);border-radius:6px;padding:16px}.card h2{font-size:14px;margin-bottom:8px}.card p{font-size:12px;line-height:1.45;color:var(--muted)}@media(max-width:860px){body{display:block;padding:32px 20px}.cards{grid-template-columns:1fr;overflow:visible}.frame{overflow-x:auto}}
</style>
<title id="org-chart-title">Agent team org chart</title><desc id="org-chart-desc">Org chart showing a command center routing work to specialist agents and escalation owners.</desc>
<rect width="1040" height="620" fill="#f5f5f5"/>
<defs><marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#4f5d75"/></marker></defs>
<text x="40" y="64" fill="#4f5d75" font-family="monospace,monospace" font-size="9" letter-spacing=".16em">COMMAND CENTER</text>
<text x="40" y="196" fill="#4f5d75" font-family="monospace,monospace" font-size="9" letter-spacing=".16em">WORKSTREAMS</text>
<text x="40" y="348" fill="#4f5d75" font-family="monospace,monospace" font-size="9" letter-spacing=".16em">SPECIALISTS</text>
<line x1="36" y1="148" x2="1004" y2="148" stroke="rgba(45,49,66,.12)"/><line x1="36" y1="300" x2="1004" y2="300" stroke="rgba(45,49,66,.12)"/>
<!-- connectors -->
<path d="M 520 120 L 520 172 L 200 172 L 200 220" fill="none" stroke="#4f5d75" stroke-width="1"/>
<path d="M 520 172 L 412 172 L 412 220" fill="none" stroke="#4f5d75" stroke-width="1"/>
<path d="M 520 172 L 628 172 L 628 220" fill="none" stroke="#4f5d75" stroke-width="1"/>
<path d="M 520 172 L 840 172 L 840 220" fill="none" stroke="#4f5d75" stroke-width="1"/>
<path d="M 200 268 L 200 324 L 120 324 L 120 372" fill="none" stroke="#4f5d75" stroke-width="1"/>
<path d="M 200 324 L 280 324 L 280 372" fill="none" stroke="#4f5d75" stroke-width="1"/>
<path d="M 412 268 L 412 324 L 440 324 L 440 372" fill="none" stroke="#4f5d75" stroke-width="1"/>
<path d="M 628 268 L 628 324 L 600 324 L 600 372" fill="none" stroke="#4f5d75" stroke-width="1"/>
<path d="M 628 324 L 760 324 L 760 372" fill="none" stroke="#4f5d75" stroke-width="1"/>
<path d="M 840 268 L 840 324 L 920 324 L 920 372" fill="none" stroke="#4f5d75" stroke-width="1"/>
<!-- root -->
<rect x="420" y="72" width="200" height="48" rx="6" fill="#f5f5f5"/><rect x="420" y="72" width="200" height="48" rx="6" fill="rgba(235,108,54,.08)" stroke="#eb6c36"/>
<rect x="428" y="80" width="48" height="12" rx="2" fill="transparent" stroke="#eb6c36" opacity=".55"/><text x="452" y="89" fill="#eb6c36" font-family="monospace,monospace" font-size="9" text-anchor="middle" letter-spacing=".08em">FRONT</text>
<text x="520" y="104" fill="#2d3142" font-family="Arial,sans-serif" font-size="12" font-weight="600" text-anchor="middle">Athena</text><text x="520" y="116" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle">@athena · route ambiguous work</text>
<!-- tier1 nodes -->
<rect x="120" y="220" width="160" height="48" rx="6" fill="#f5f5f5"/><rect x="120" y="220" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142"/><rect x="128" y="228" width="32" height="12" rx="2" fill="transparent" stroke="#4f5d75" opacity=".45"/><text x="144" y="237" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle" letter-spacing=".08em">POD</text><text x="200" y="252" fill="#2d3142" font-family="Arial,sans-serif" font-size="12" font-weight="600" text-anchor="middle">Growth</text><text x="200" y="264" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle">ads · analytics</text>
<rect x="332" y="220" width="160" height="48" rx="6" fill="#f5f5f5"/><rect x="332" y="220" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142"/><rect x="340" y="228" width="32" height="12" rx="2" fill="transparent" stroke="#4f5d75" opacity=".45"/><text x="356" y="237" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle" letter-spacing=".08em">POD</text><text x="412" y="252" fill="#2d3142" font-family="Arial,sans-serif" font-size="12" font-weight="600" text-anchor="middle">Content</text><text x="412" y="264" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle">email · blog · SEO</text>
<rect x="548" y="220" width="160" height="48" rx="6" fill="#f5f5f5"/><rect x="548" y="220" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142"/><rect x="556" y="228" width="32" height="12" rx="2" fill="transparent" stroke="#4f5d75" opacity=".45"/><text x="572" y="237" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle" letter-spacing=".08em">POD</text><text x="628" y="252" fill="#2d3142" font-family="Arial,sans-serif" font-size="12" font-weight="600" text-anchor="middle">Commerce</text><text x="628" y="264" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle">shopify · CRO</text>
<rect x="760" y="220" width="160" height="48" rx="6" fill="#f5f5f5"/><rect x="760" y="220" width="160" height="48" rx="6" fill="#ffffff" stroke="#2d3142"/><rect x="768" y="228" width="32" height="12" rx="2" fill="transparent" stroke="#4f5d75" opacity=".45"/><text x="784" y="237" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle" letter-spacing=".08em">POD</text><text x="840" y="252" fill="#2d3142" font-family="Arial,sans-serif" font-size="12" font-weight="600" text-anchor="middle">Systems</text><text x="840" y="264" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle">agents · runtime</text>
<!-- specialists -->
<rect x="40" y="372" width="136" height="56" rx="6" fill="#f5f5f5"/><rect x="40" y="372" width="136" height="56" rx="6" fill="rgba(45,49,66,.05)" stroke="#4f5d75" stroke-width=".8"/><text x="108" y="400" fill="#2d3142" font-family="Arial,sans-serif" font-size="12" font-weight="600" text-anchor="middle">Media Buyer</text><text x="108" y="416" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle">Google · Meta</text>
<rect x="200" y="372" width="136" height="56" rx="6" fill="#f5f5f5"/><rect x="200" y="372" width="136" height="56" rx="6" fill="rgba(45,49,66,.05)" stroke="#4f5d75" stroke-width=".8"/><text x="268" y="400" fill="#2d3142" font-family="Arial,sans-serif" font-size="12" font-weight="600" text-anchor="middle">Maximo</text><text x="268" y="416" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle">offers · strategy</text>
<rect x="360" y="372" width="136" height="56" rx="6" fill="#f5f5f5"/><rect x="360" y="372" width="136" height="56" rx="6" fill="rgba(45,49,66,.05)" stroke="#4f5d75" stroke-width=".8"/><text x="428" y="400" fill="#2d3142" font-family="Arial,sans-serif" font-size="12" font-weight="600" text-anchor="middle">Rory</text><text x="428" y="416" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle">copy · newsletter</text>
<rect x="520" y="372" width="136" height="56" rx="6" fill="#f5f5f5"/><rect x="520" y="372" width="136" height="56" rx="6" fill="rgba(45,49,66,.05)" stroke="#4f5d75" stroke-width=".8"/><text x="588" y="400" fill="#2d3142" font-family="Arial,sans-serif" font-size="12" font-weight="600" text-anchor="middle">Porter</text><text x="588" y="416" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle">Shopify admin</text>
<rect x="680" y="372" width="136" height="56" rx="6" fill="#f5f5f5"/><rect x="680" y="372" width="136" height="56" rx="6" fill="rgba(45,49,66,.05)" stroke="#4f5d75" stroke-width=".8"/><text x="748" y="400" fill="#2d3142" font-family="Arial,sans-serif" font-size="12" font-weight="600" text-anchor="middle">Atlas</text><text x="748" y="416" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle">theme · APIs</text>
<rect x="840" y="372" width="136" height="56" rx="6" fill="#f5f5f5"/><rect x="840" y="372" width="136" height="56" rx="6" fill="rgba(45,49,66,.05)" stroke="#4f5d75" stroke-width=".8"/><text x="908" y="400" fill="#2d3142" font-family="Arial,sans-serif" font-size="12" font-weight="600" text-anchor="middle">Hermes</text><text x="908" y="416" fill="#4f5d75" font-family="monospace,monospace" font-size="9" text-anchor="middle">Paperclip health</text>
<!-- optional gaps -->
<rect x="72" y="480" width="896" height="48" rx="6" fill="#f5f5f5"/><rect x="72" y="480" width="896" height="48" rx="6" fill="rgba(45,49,66,.02)" stroke="#7a8399" stroke-dasharray="4,4"/>
<text x="96" y="508" fill="#2d3142" font-family="Arial,sans-serif" font-size="12" font-weight="600">Setup gaps stay visible:</text><text x="244" y="508" fill="#4f5d75" font-family="monospace,monospace" font-size="9">specialists without Slack bots · approval gates · backend name mismatches</text>
<line x1="40" y1="560" x2="1000" y2="560" stroke="rgba(45,49,66,.12)"/><text x="40" y="584" fill="#4f5d75" font-family="monospace,monospace" font-size="9" letter-spacing=".14em">LEGEND</text><rect x="132" y="572" width="16" height="12" rx="2" fill="rgba(235,108,54,.08)" stroke="#eb6c36"/><text x="156" y="582" fill="#4f5d75" font-family="monospace,monospace" font-size="9">front door</text><rect x="288" y="572" width="16" height="12" rx="2" fill="#ffffff" stroke="#2d3142"/><text x="312" y="582" fill="#4f5d75" font-family="monospace,monospace" font-size="9">pod / owner</text><rect x="452" y="572" width="16" height="12" rx="2" fill="rgba(45,49,66,.02)" stroke="#7a8399" stroke-dasharray="4,4"/><text x="476" y="582" fill="#4f5d75" font-family="monospace,monospace" font-size="9">needs setup / gap</text>
</svg>`},{id:"layers",name:"分层架构",category:"架构",svg:`<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="layers-title layers-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="layers-title">AI app stack · Where the work actually happens</title>
      <desc id="layers-desc">Layer stack showing model weights, SDK, prompts, agent harness, and UI surface, with the agent harness highlighted as the focal layer.</desc>
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="#f5f5f5"/>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

        <!-- Direction column (left margin) -->
        <text x="60" y="68" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">ABSTRACTION</text>
        <line x1="80" y1="80" x2="80" y2="400" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
        <polygon points="76,80 84,80 80,72" fill="#4f5d75"/>
        <text x="60" y="416" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">SILICON</text>

        <!-- Stack container hairlines (top + bottom edges) -->
        <line x1="120" y1="80" x2="960" y2="80" stroke="rgba(45,49,66,0.12)" stroke-width="1"/>
        <line x1="120" y1="400" x2="960" y2="400" stroke="rgba(45,49,66,0.12)" stroke-width="1"/>

        <!-- L5 — UI (top layer, near-white fill) -->
        <rect x="120" y="80" width="840" height="64" fill="#ffffff"/>
        <line x1="120" y1="144" x2="960" y2="144" stroke="rgba(45,49,66,0.12)" stroke-width="1"/>
        <text x="140" y="116" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">L5</text>
        <text x="260" y="118" fill="#2d3142" font-size="16" font-weight="600" font-family="Arial, sans-serif">UI surface</text>
        <text x="940" y="118" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.08em">chat, editor, canvas</text>

        <!-- L4 — Agent harness (FOCAL, coral tint + coral stroke) -->
        <rect x="120" y="144" width="840" height="64" fill="rgba(235,108,54,0.08)"/>
        <rect x="120" y="144" width="840" height="64" fill="none" stroke="#eb6c36" stroke-width="1"/>
        <text x="140" y="180" fill="#eb6c36" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em" font-weight="600">L4</text>
        <text x="260" y="182" fill="#2d3142" font-size="16" font-weight="600" font-family="Arial, sans-serif">Agent harness</text>
        <text x="940" y="182" fill="#eb6c36" font-size="10" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.08em">tools, memory, loop</text>

        <!-- L3 — Prompt layer -->
        <rect x="120" y="208" width="840" height="64" fill="#f5f5f5"/>
        <line x1="120" y1="272" x2="960" y2="272" stroke="rgba(45,49,66,0.12)" stroke-width="1"/>
        <text x="140" y="244" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">L3</text>
        <text x="260" y="246" fill="#2d3142" font-size="16" font-weight="600" font-family="Arial, sans-serif">Prompt layer</text>
        <text x="940" y="246" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.08em">system, few-shot, caching</text>

        <!-- L2 — SDK -->
        <rect x="120" y="272" width="840" height="64" fill="#ececec"/>
        <line x1="120" y1="336" x2="960" y2="336" stroke="rgba(45,49,66,0.12)" stroke-width="1"/>
        <text x="140" y="308" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">L2</text>
        <text x="260" y="310" fill="#2d3142" font-size="16" font-weight="600" font-family="Arial, sans-serif">SDK / client</text>
        <text x="940" y="310" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.08em">auth, retries, streaming</text>

        <!-- L1 — Model -->
        <rect x="120" y="336" width="840" height="64" fill="#ececec"/>
        <text x="140" y="372" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">L1</text>
        <text x="260" y="374" fill="#2d3142" font-size="16" font-weight="600" font-family="Arial, sans-serif">Model weights</text>
        <text x="940" y="374" fill="#4f5d75" font-size="10" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.08em">opus, sonnet, haiku</text>

        <!-- Caption -->
        <text x="120" y="456" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">FOCAL LAYER</text>
        <text x="240" y="456" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif" font-style="italic">The harness is where most product differentiation actually lives — tools, memory, and the loop that stitches model calls into useful work.</text>
      </svg>`},{id:"venn",name:"集合关系",category:"分析",svg:`<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="venn-title venn-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="venn-title">Good design · Desirable × Feasible × Viable</title>
      <desc id="venn-desc">Venn diagram showing desirable, feasible, and viable product qualities intersecting at shippable.</desc>
        <defs>
          <!-- Chained clips isolate the all-three intersection: clip to Desirable, then to Feasible, then fill via the third circle. -->
          <clipPath id="clip-desirable">
            <circle cx="500" cy="180" r="140"/>
          </clipPath>
          <clipPath id="clip-feasible">
            <circle cx="428" cy="320" r="140"/>
          </clipPath>
        </defs>

        <rect width="100%" height="100%" fill="#f5f5f5"/>

        <!-- Three set circles (stroke + very-low-opacity tint; tints compound in overlaps) -->
        <!-- Desirable — top, ink -->
        <circle cx="500" cy="180" r="140" fill="rgba(45,49,66,0.04)" stroke="#2d3142" stroke-width="1"/>
        <!-- Feasible — bottom-left, muted -->
        <circle cx="428" cy="320" r="140" fill="rgba(79,93,117,0.05)" stroke="#4f5d75" stroke-width="1"/>
        <!-- Viable — bottom-right, soft -->
        <circle cx="572" cy="320" r="140" fill="rgba(122,131,153,0.05)" stroke="#7a8399" stroke-width="1"/>

        <!-- Focal: solid-ink triple intersection (dark fill for white text to read against) -->
        <g clip-path="url(#clip-desirable)">
          <g clip-path="url(#clip-feasible)">
            <circle cx="572" cy="320" r="140" fill="#2d3142"/>
          </g>
        </g>

        <!-- Set labels — positioned INSIDE each circle's non-overlapping lobe, so the diagram reads like a classic Venn -->
        <!-- Desirable — top lobe (centered inside top of Desirable circle) -->
        <text x="500" y="96" fill="#2d3142" font-size="14" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Desirable</text>
        <text x="500" y="112" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">PEOPLE WANT IT</text>

        <!-- Feasible — bottom-left lobe -->
        <text x="340" y="386" fill="#2d3142" font-size="14" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Feasible</text>
        <text x="340" y="402" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">WE CAN BUILD IT</text>

        <!-- Viable — bottom-right lobe -->
        <text x="660" y="386" fill="#2d3142" font-size="14" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Viable</text>
        <text x="660" y="402" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">BUSINESS SUSTAINS</text>

        <!-- Focal label: white text on the dark intersection -->
        <text x="500" y="268" fill="#ffffff" font-size="14" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Shippable</text>
        <text x="500" y="284" fill="rgba(245,245,245,0.75)" font-size="9" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">THE SWEET SPOT</text>
      </svg>`},{id:"pyramid",name:"层级金字塔",category:"结构",svg:`<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pyramid-title pyramid-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="pyramid-title">Content pyramid · what compounds</title>
      <desc id="pyramid-desc">Content pyramid showing short posts, essays, long-form guides, and a flagship book ordered by shipping cadence and leverage.</desc>
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="#f5f5f5"/>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

        <!-- Left axis: direction of rarity -->
        <line x1="100" y1="40" x2="100" y2="320" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
        <polygon points="96,40 104,40 100,28" fill="rgba(45,49,66,0.45)"/>
        <text x="80" y="216" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em" text-anchor="middle" transform="rotate(-90 80 216)">RARER · FEWER · COMPOUNDS ↑</text>

        <!-- Base layer: Short posts -->
        <polygon points="244,280 756,280 820,344 180,344" fill="#ececec" stroke="rgba(45,49,66,0.12)" stroke-width="1"/>
        <text x="500" y="308" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Short posts</text>
        <text x="500" y="324" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">daily · ~200 words</text>
        <text x="836" y="316" fill="#7a8399" font-size="9" font-family="monospace, monospace" letter-spacing="0.08em">~240/yr</text>

        <!-- L3: Essays -->
        <polygon points="308,216 692,216 756,280 244,280" fill="#ececec" stroke="rgba(45,49,66,0.12)" stroke-width="1"/>
        <text x="500" y="244" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Essays</text>
        <text x="500" y="260" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">weekly · 800–1,500 words</text>
        <text x="776" y="252" fill="#7a8399" font-size="9" font-family="monospace, monospace" letter-spacing="0.08em">~48/yr</text>

        <!-- L2: Long-form guides -->
        <polygon points="372,152 628,152 692,216 308,216" fill="#ececec" stroke="rgba(45,49,66,0.12)" stroke-width="1"/>
        <text x="500" y="180" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Long-form guides</text>
        <text x="500" y="196" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">quarterly · 4,000+ words</text>
        <text x="716" y="188" fill="#7a8399" font-size="9" font-family="monospace, monospace" letter-spacing="0.08em">~4/yr</text>

        <!-- Apex: Flagship book — CORAL FOCAL (true pyramid peak — single triangle, consistent slope with layers below) -->
        <polygon points="500,24 628,152 372,152" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
        <text x="500" y="120" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Flagship book</text>
        <text x="500" y="136" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">every 3–5 years</text>
        <text x="656" y="112" fill="#eb6c36" font-size="9" font-family="monospace, monospace" letter-spacing="0.08em">the apex</text>

        <!-- Footnote under pyramid -->
        <text x="500" y="384" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif" text-anchor="middle" font-style="italic">The base funds the apex. The apex defines the base.</text>

        <!-- Legend -->
        <line x1="40" y1="436" x2="960" y2="436" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <text x="40" y="452" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

        <rect x="40" y="464" width="16" height="12" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
        <text x="64" y="474" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Apex — rarest, highest leverage</text>

        <rect x="280" y="464" width="16" height="12" fill="#ececec" stroke="rgba(45,49,66,0.25)" stroke-width="1"/>
        <text x="304" y="474" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Supporting layer — the volume work</text>

        <text x="560" y="474" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif" font-style="italic">Layer width is honest: narrower = rarer shipping cadence.</text>
      </svg>`},{id:"bar",name:"柱状对比",category:"数据",svg:`<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="bar-title bar-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:  #f5f5f5;
      --color-ink:    #2d3142;
      --color-muted:  #4f5d75;
      --color-accent: #eb6c36;
      --font-sans:    Arial, system-ui, sans-serif;
      --font-serif:   Georgia, serif;
      --font-mono:    monospace, ui-monospace, monospace;
    }
    body { font-family: var(--font-sans); background: var(--color-paper); color: var(--color-ink); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 3rem 2rem; }
    .frame { max-width: 1200px; width: 100%; }
    .eyebrow { font-family: var(--font-mono); font-size: 0.66rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--color-muted); margin-bottom: 0.5rem; }
    h1 { font-family: var(--font-serif); font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem); font-weight: 400; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 1.5rem; }
  </style>
      <title id="bar-title">Sprint velocity · 8-sprint view</title>
      <desc id="bar-desc">Bar chart showing story points delivered across sprints S1 through S8, with Sprint 5 as the record high.</desc>
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="#f5f5f5"/>
      <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

      <!-- Y-axis rotated label -->
      <text transform="rotate(-90 24 230)" x="24" y="230" fill="#4f5d75" font-size="7" font-family="monospace, monospace" letter-spacing="0.14em" text-anchor="middle">STORY POINTS</text>

      <!-- Horizontal gridlines (drawn before bars) -->
      <line x1="80" y1="357" x2="960" y2="357" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="80" y1="293" x2="960" y2="293" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="80" y1="230" x2="960" y2="230" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="80" y1="167" x2="960" y2="167" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="80" y1="103" x2="960" y2="103" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="80" y1="40"  x2="960" y2="40"  stroke="rgba(45,49,66,0.06)" stroke-width="0.8"/>

      <!-- Y-axis line and X-axis baseline -->
      <line x1="80" y1="40" x2="80" y2="420" stroke="rgba(45,49,66,0.25)" stroke-width="1"/>
      <line x1="80" y1="420" x2="960" y2="420" stroke="rgba(45,49,66,0.25)" stroke-width="1"/>

      <!-- Y-axis tick labels -->
      <text x="72" y="361" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">20</text>
      <text x="72" y="297" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">40</text>
      <text x="72" y="234" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">60</text>
      <text x="72" y="171" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">80</text>
      <text x="72" y="107" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">100</text>
      <text x="72" y="44"  fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">120</text>

      <!-- ─── BARS (pitch=110, width=72, pad=19) ─── -->
      <!-- S1: v=72, h=228, y=192 -->
      <rect x="99" y="192" width="72" height="228" fill="#f5f5f5"/>
      <rect x="99" y="192" width="72" height="228" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>
      <text x="135" y="184" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">72</text>

      <!-- S2: v=88, h=280, y=140 -->
      <rect x="209" y="140" width="72" height="280" fill="#f5f5f5"/>
      <rect x="209" y="140" width="72" height="280" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>
      <text x="245" y="132" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">88</text>

      <!-- S3: v=95, h=300, y=120 -->
      <rect x="319" y="120" width="72" height="300" fill="#f5f5f5"/>
      <rect x="319" y="120" width="72" height="300" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>
      <text x="355" y="112" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">95</text>

      <!-- S4: v=78, h=248, y=172 -->
      <rect x="429" y="172" width="72" height="248" fill="#f5f5f5"/>
      <rect x="429" y="172" width="72" height="248" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>
      <text x="465" y="164" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">78</text>

      <!-- S5 FOCAL: v=110, h=348, y=72 -->
      <rect x="539" y="72" width="72" height="348" fill="#f5f5f5"/>
      <rect x="539" y="72" width="72" height="348" fill="rgba(235,108,54,0.12)" stroke="#eb6c36" stroke-width="1"/>
      <text x="575" y="64" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" font-weight="600">110</text>

      <!-- S6: v=102, h=324, y=96 -->
      <rect x="649" y="96" width="72" height="324" fill="#f5f5f5"/>
      <rect x="649" y="96" width="72" height="324" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>
      <text x="685" y="88" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">102</text>

      <!-- S7: v=85, h=268, y=152 -->
      <rect x="759" y="152" width="72" height="268" fill="#f5f5f5"/>
      <rect x="759" y="152" width="72" height="268" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>
      <text x="795" y="144" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">85</text>

      <!-- S8: v=93, h=296, y=124 -->
      <rect x="869" y="124" width="72" height="296" fill="#f5f5f5"/>
      <rect x="869" y="124" width="72" height="296" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>
      <text x="905" y="116" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">93</text>

      <!-- X-axis category labels -->
      <text x="135" y="440" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">S1</text>
      <text x="245" y="440" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">S2</text>
      <text x="355" y="440" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">S3</text>
      <text x="465" y="440" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">S4</text>
      <text x="575" y="440" fill="#eb6c36" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">S5</text>
      <text x="685" y="440" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">S6</text>
      <text x="795" y="440" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">S7</text>
      <text x="905" y="440" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">S8</text>

      <!-- Legend -->
      <line x1="40" y1="462" x2="960" y2="462" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="40" y="478" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

      <rect x="40" y="488" width="16" height="10" rx="2" fill="rgba(235,108,54,0.12)" stroke="#eb6c36" stroke-width="1"/>
      <text x="64" y="497" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Sprint 5 · record high</text>

      <rect x="220" y="488" width="16" height="10" rx="2" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>
      <text x="244" y="497" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Other sprints</text>
    </svg>`},{id:"treemap",name:"矩形树图",category:"数据",svg:`<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="treemap-title treemap-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:  #f5f5f5;
      --color-ink:    #2d3142;
      --color-muted:  #4f5d75;
      --color-accent: #eb6c36;
      --font-sans:    Arial, system-ui, sans-serif;
      --font-serif:   Georgia, serif;
      --font-mono:    monospace, ui-monospace, monospace;
    }
    body { font-family: var(--font-sans); background: var(--color-paper); color: var(--color-ink); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 3rem 2rem; }
    .frame { max-width: 1200px; width: 100%; }
    .eyebrow { font-family: var(--font-mono); font-size: 0.66rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--color-muted); margin-bottom: 0.5rem; }
    h1 { font-family: var(--font-serif); font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem); font-weight: 400; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 1.5rem; }
  </style>
      <title id="treemap-title">World population · six continents</title>
      <desc id="treemap-desc">Treemap of world population by continent in mid-2023, where cell area is population; Asia holds about 59 percent of the world total and Oceania, at under one percent, is too small to label.</desc>
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="#f5f5f5"/>
      <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

      <!-- ─── CELLS ─── Squarified layout on a 4px grid. Area is the only
           encoding: every cell is within 2.7% of its true share, measured as
           RELATIVE error, because a 0.1pp slip is nothing on Asia and a third
           of Oceania. Verified by scripts/verify-treemap.py. The non-focal
           cells run a rank-ordered ink ramp, so their order survives greyscale;
           the focal cell is marked by its accent stroke, not by tone. ─── -->

      <!-- Asia FOCAL: 532×380 -->
      <rect x="40" y="40" width="532" height="380" rx="2" fill="#f5f5f5"/>
      <rect x="40" y="40" width="532" height="380" rx="2" data-share="59.04" fill="rgba(235,108,54,0.16)" stroke="#eb6c36" stroke-width="1.5"/>
      <text x="56" y="68" fill="#2d3142" font-size="14" font-weight="600" font-family="Arial, sans-serif">Asia</text>
      <text x="56" y="88" fill="#4f5d75" font-size="9" font-family="monospace, monospace">4.78B · 59% of world</text>

      <!-- Africa: 252×252 -->
      <rect x="576" y="40" width="252" height="252" rx="2" fill="#f5f5f5"/>
      <rect x="576" y="40" width="252" height="252" rx="2" data-share="18.29" fill="rgba(45,49,66,0.16)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
      <text x="592" y="68" fill="#2d3142" font-size="13" font-weight="600" font-family="Arial, sans-serif">Africa</text>
      <text x="592" y="88" fill="#4f5d75" font-size="9" font-family="monospace, monospace">1.48B · 18%</text>

      <!-- Europe: 124×252 -->
      <rect x="832" y="40" width="124" height="252" rx="2" fill="#f5f5f5"/>
      <rect x="832" y="40" width="124" height="252" rx="2" data-share="9.23" fill="rgba(45,49,66,0.13)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
      <text x="848" y="68" fill="#2d3142" font-size="13" font-weight="600" font-family="Arial, sans-serif">Europe</text>
      <text x="848" y="88" fill="#4f5d75" font-size="9" font-family="monospace, monospace">0.75B · 9%</text>

      <!-- North America: 208×124 -->
      <rect x="576" y="296" width="208" height="124" rx="2" fill="#f5f5f5"/>
      <rect x="576" y="296" width="208" height="124" rx="2" data-share="7.52" fill="rgba(45,49,66,0.10)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
      <text x="592" y="324" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">North America</text>
      <text x="592" y="344" fill="#4f5d75" font-size="9" font-family="monospace, monospace">0.61B · 8%</text>

      <!-- South America: 148×124 -->
      <rect x="788" y="296" width="148" height="124" rx="2" fill="#f5f5f5"/>
      <rect x="788" y="296" width="148" height="124" rx="2" data-share="5.35" fill="rgba(45,49,66,0.07)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
      <text x="804" y="324" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">South America</text>
      <text x="804" y="344" fill="#4f5d75" font-size="9" font-family="monospace, monospace">0.43B · 5%</text>

      <!-- Oceania: 16×124. Too narrow for a label, so it carries the info mark
           rather than sideways text — the only rotated glyph in the figure would
           read as a mistake. The cell keeps its honest area and is named in the
           legend: a treemap must not silently omit a part of the whole it claims
           to show, but it need not label what it cannot label well. -->
      <rect x="940" y="296" width="16" height="124" rx="2" fill="#f5f5f5"/>
      <rect x="940" y="296" width="16" height="124" rx="2" data-share="0.56" fill="rgba(45,49,66,0.04)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
      <circle cx="948" cy="320" r="5" fill="#2d3142"/>
      <text x="948" y="323" fill="#f5f5f5" font-size="7" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">i</text>

      <!-- Legend -->
      <line x1="40" y1="462" x2="960" y2="462" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="40" y="478" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>
      <text x="960" y="478" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.06em" text-anchor="end">AREA = POPULATION · OUR WORLD IN DATA CONTINENTS (UN WPP) · MID-2023 · 8.09B TOTAL · PARTS ROUNDED, MAY NOT SUM</text>

      <rect x="40" y="488" width="16" height="10" rx="2" fill="rgba(235,108,54,0.16)" stroke="#eb6c36" stroke-width="1"/>
      <text x="64" y="497" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Asia · the focal share</text>

      <rect x="240" y="488" width="16" height="10" rx="2" fill="rgba(45,49,66,0.16)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
      <text x="264" y="497" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Other continents · stronger contrast is larger</text>

      <circle cx="516" cy="493" r="5" fill="#2d3142"/>
      <text x="516" y="496" fill="#f5f5f5" font-size="7" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">i</text>
      <text x="532" y="497" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Oceania · 0.05B, 0.6% — too small to label</text>
    </svg>`},{id:"line",name:"趋势折线",category:"数据",svg:`<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="line-title line-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root { --color-paper:#f5f5f5; --color-ink:#2d3142; --color-muted:#4f5d75; --color-accent:#eb6c36; --font-sans:Arial,system-ui,sans-serif; --font-serif:Georgia,serif; --font-mono:monospace,ui-monospace,monospace; }
    body { font-family: var(--font-sans); background: var(--color-paper); color: var(--color-ink); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 3rem 2rem; }
    .frame { max-width: 1200px; width: 100%; }
    .eyebrow { font-family: var(--font-mono); font-size: 0.66rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--color-muted); margin-bottom: 0.5rem; }
    h1 { font-family: var(--font-serif); font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem); font-weight: 400; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 1.5rem; }
  </style>
      <title id="line-title">Weekly signups · Organic leads the growth</title>
      <desc id="line-desc">Line chart showing weekly signups from organic, direct, and referral channels across weeks W1 through W8.</desc>
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="#f5f5f5"/>
      <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

      <!-- Y-axis rotated label -->
      <text transform="rotate(-90 24 230)" x="24" y="230" fill="#4f5d75" font-size="7" font-family="monospace, monospace" letter-spacing="0.14em" text-anchor="middle">SIGNUPS / WEEK</text>

      <!-- Gridlines -->
      <line x1="80" y1="357" x2="960" y2="357" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="80" y1="293" x2="960" y2="293" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="80" y1="230" x2="960" y2="230" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="80" y1="167" x2="960" y2="167" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="80" y1="103" x2="960" y2="103" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="80" y1="40"  x2="960" y2="40"  stroke="rgba(45,49,66,0.06)" stroke-width="0.8"/>

      <!-- Axes -->
      <line x1="80" y1="40" x2="80" y2="420" stroke="rgba(45,49,66,0.25)" stroke-width="1"/>
      <line x1="80" y1="420" x2="960" y2="420" stroke="rgba(45,49,66,0.25)" stroke-width="1"/>

      <!-- Y-axis labels -->
      <text x="72" y="361" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">40</text>
      <text x="72" y="297" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">80</text>
      <text x="72" y="234" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">120</text>
      <text x="72" y="171" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">160</text>
      <text x="72" y="107" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">200</text>
      <text x="72" y="44"  fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">240</text>

      <!-- ─── SERIES (non-focal drawn first) ─── -->
      <!-- Referral: [45,52,48,60,55,68,62,75] series-2 dusty-blue -->
      <polyline points="80,349 200,338 320,344 440,325 560,333 680,312 800,322 920,301"
                fill="none" stroke="#5e7a9b" stroke-width="1.2" stroke-linejoin="round"/>

      <!-- Direct: [80,82,88,90,86,92,95,98] series-1 sage -->
      <polyline points="80,293 200,290 320,281 440,278 560,284 680,274 800,270 920,265"
                fill="none" stroke="#7c8f6f" stroke-width="1.2" stroke-linejoin="round"/>

      <!-- Organic FOCAL area fill (subtle) -->
      <polygon points="80,230 200,206 320,186 440,164 560,175 680,138 800,111 920,88 920,420 80,420"
               fill="rgba(235,108,54,0.06)"/>

      <!-- Organic FOCAL line: [120,135,148,162,155,178,195,210] accent -->
      <polyline points="80,230 200,206 320,186 440,164 560,175 680,138 800,111 920,88"
                fill="none" stroke="#eb6c36" stroke-width="1.8" stroke-linejoin="round"/>

      <!-- Focal vertex dots -->
      <circle cx="80"  cy="230" r="4" fill="#eb6c36"/>
      <circle cx="200" cy="206" r="4" fill="#eb6c36"/>
      <circle cx="320" cy="186" r="4" fill="#eb6c36"/>
      <circle cx="440" cy="164" r="4" fill="#eb6c36"/>
      <circle cx="560" cy="175" r="4" fill="#eb6c36"/>
      <circle cx="680" cy="138" r="4" fill="#eb6c36"/>
      <circle cx="800" cy="111" r="4" fill="#eb6c36"/>
      <circle cx="920" cy="88"  r="4" fill="#eb6c36"/>

      <!-- X-axis labels -->
      <text x="80"  y="440" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">W1</text>
      <text x="200" y="440" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">W2</text>
      <text x="320" y="440" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">W3</text>
      <text x="440" y="440" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">W4</text>
      <text x="560" y="440" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">W5</text>
      <text x="680" y="440" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">W6</text>
      <text x="800" y="440" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">W7</text>
      <text x="920" y="440" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">W8</text>

      <!-- Legend -->
      <line x1="40" y1="462" x2="960" y2="462" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="40" y="478" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

      <line x1="40" y1="492" x2="64" y2="492" stroke="#eb6c36" stroke-width="1.8"/>
      <circle cx="52" cy="492" r="4" fill="#eb6c36"/>
      <text x="72" y="496" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Organic · focal</text>

      <line x1="200" y1="492" x2="224" y2="492" stroke="#7c8f6f" stroke-width="1.2"/>
      <text x="232" y="496" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Direct</text>

      <line x1="316" y1="492" x2="340" y2="492" stroke="#5e7a9b" stroke-width="1.2"/>
      <text x="348" y="496" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Referral</text>
    </svg>`},{id:"gantt",name:"项目甘特图",category:"规划",svg:`<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="gantt-title gantt-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root { --color-paper:#f5f5f5; --color-ink:#2d3142; --color-muted:#4f5d75; --color-accent:#eb6c36; --font-sans:Arial,system-ui,sans-serif; --font-serif:Georgia,serif; --font-mono:monospace,ui-monospace,monospace; }
    body { font-family: var(--font-sans); background: var(--color-paper); color: var(--color-ink); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 3rem 2rem; }
    .frame { max-width: 1200px; width: 100%; }
    .eyebrow { font-family: var(--font-mono); font-size: 0.66rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--color-muted); margin-bottom: 0.5rem; }
    h1 { font-family: var(--font-serif); font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem); font-weight: 400; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 1.5rem; }
  </style>
      <title id="gantt-title">Q2 product launch · 12-week plan</title>
      <desc id="gantt-desc">Gantt chart showing a twelve-week product launch from market research and interviews through design review, development, beta testing, and launch.</desc>
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="#f5f5f5"/>
      <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

      <!-- Phase zones (drawn before everything) -->
      <!-- Phase 1 DISCOVERY: rows y=84,124 → zone y=72, h=84 -->
      <rect x="12" y="72" width="976" height="84" rx="6" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <!-- Phase 2 DESIGN: rows y=184,224,264 → zone y=172, h=120 -->
      <rect x="12" y="172" width="976" height="120" rx="6" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <!-- Phase 3 LAUNCH: rows y=324,364 → zone y=312, h=88 -->
      <rect x="12" y="312" width="976" height="88" rx="6" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>

      <!-- Month headers at y=40-56 -->
      <text x="326" y="52" fill="#2d3142" font-size="9" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">April</text>
      <text x="578" y="52" fill="#2d3142" font-size="9" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">May</text>
      <text x="830" y="52" fill="#2d3142" font-size="9" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">June</text>

      <!-- Month separator lines -->
      <line x1="452" y1="36" x2="452" y2="416" stroke="rgba(45,49,66,0.08)" stroke-width="0.8" stroke-dasharray="3,3"/>
      <line x1="704" y1="36" x2="704" y2="416" stroke="rgba(45,49,66,0.08)" stroke-width="0.8" stroke-dasharray="3,3"/>

      <!-- Week gridlines (vertical, hairline) -->
      <line x1="263" y1="60" x2="263" y2="416" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
      <line x1="326" y1="60" x2="326" y2="416" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
      <line x1="389" y1="60" x2="389" y2="416" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
      <line x1="515" y1="60" x2="515" y2="416" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
      <line x1="578" y1="60" x2="578" y2="416" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
      <line x1="641" y1="60" x2="641" y2="416" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
      <line x1="767" y1="60" x2="767" y2="416" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
      <line x1="830" y1="60" x2="830" y2="416" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>
      <line x1="893" y1="60" x2="893" y2="416" stroke="rgba(45,49,66,0.05)" stroke-width="0.6"/>

      <!-- Timeline header line -->
      <line x1="200" y1="60" x2="956" y2="60" stroke="rgba(45,49,66,0.20)" stroke-width="0.8"/>
      <!-- Left divider -->
      <line x1="200" y1="36" x2="200" y2="416" stroke="rgba(45,49,66,0.20)" stroke-width="0.8"/>

      <!-- Phase labels (eyebrow style) -->
      <text x="20" y="85" fill="rgba(45,49,66,0.40)" font-size="7" font-family="monospace, monospace" letter-spacing="0.14em">DISCOVERY</text>
      <text x="20" y="185" fill="rgba(45,49,66,0.40)" font-size="7" font-family="monospace, monospace" letter-spacing="0.14em">DESIGN</text>
      <text x="20" y="325" fill="rgba(45,49,66,0.40)" font-size="7" font-family="monospace, monospace" letter-spacing="0.14em">LAUNCH</text>

      <!-- ─── TASK BARS ─── -->
      <!-- W_x = 200 + week_index * 63 -->
      <!-- Row 1 y=84: Market research W1-W3 (i=0..2, x=200, dur=2*63=126) -->
      <rect x="20"  y="92" width="176" height="24" fill="#f5f5f5"/>
      <text x="20"  y="108" fill="#2d3142" font-size="10" font-weight="600" font-family="Arial, sans-serif">Market research</text>
      <rect x="200" y="92" width="126" height="24" rx="4" fill="#f5f5f5"/>
      <rect x="200" y="92" width="126" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>

      <!-- Row 2 y=124: User interviews W2-W4 (i=1..3, x=263, dur=2*63=126) -->
      <rect x="20"  y="132" width="176" height="24" fill="#f5f5f5"/>
      <text x="20"  y="148" fill="#2d3142" font-size="10" font-weight="600" font-family="Arial, sans-serif">User interviews</text>
      <rect x="263" y="132" width="126" height="24" rx="4" fill="#f5f5f5"/>
      <rect x="263" y="132" width="126" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>

      <!-- Row 3 y=184: Wireframes W4-W6 (i=3..5, x=389, dur=2*63=126) -->
      <rect x="20"  y="192" width="176" height="24" fill="#f5f5f5"/>
      <text x="20"  y="208" fill="#2d3142" font-size="10" font-weight="600" font-family="Arial, sans-serif">Wireframes</text>
      <rect x="389" y="192" width="126" height="24" rx="4" fill="#f5f5f5"/>
      <rect x="389" y="192" width="126" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>

      <!-- Row 4 y=224: Prototype W5-W8 (i=4..7, x=452, dur=3*63=189) -->
      <rect x="20"  y="232" width="176" height="24" fill="#f5f5f5"/>
      <text x="20"  y="248" fill="#2d3142" font-size="10" font-weight="600" font-family="Arial, sans-serif">Prototype</text>
      <rect x="452" y="232" width="189" height="24" rx="4" fill="#f5f5f5"/>
      <rect x="452" y="232" width="189" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>

      <!-- Row 5 y=264 FOCAL: Design review W8-W9 (i=7..8, x=641, dur=63) -->
      <rect x="20"  y="272" width="176" height="24" fill="#f5f5f5"/>
      <text x="20"  y="288" fill="#eb6c36" font-size="10" font-weight="600" font-family="Arial, sans-serif">Design review</text>
      <rect x="641" y="272" width="63" height="24" rx="4" fill="#f5f5f5"/>
      <rect x="641" y="272" width="63" height="24" rx="4" fill="rgba(235,108,54,0.12)" stroke="#eb6c36" stroke-width="1"/>
      <text x="672" y="289" fill="#eb6c36" font-size="9" font-family="monospace, monospace" text-anchor="middle">GATE</text>

      <!-- Row 6 y=324: Development W7-W11 (i=6..10, x=578, dur=4*63=252) -->
      <rect x="20"  y="332" width="176" height="24" fill="#f5f5f5"/>
      <text x="20"  y="348" fill="#2d3142" font-size="10" font-weight="600" font-family="Arial, sans-serif">Development</text>
      <rect x="578" y="332" width="252" height="24" rx="4" fill="#f5f5f5"/>
      <rect x="578" y="332" width="252" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>

      <!-- Row 7 y=364: Beta testing W10-W12 (i=9..11, x=767, dur=2*63=126) -->
      <rect x="20"  y="372" width="176" height="24" fill="#f5f5f5"/>
      <text x="20"  y="388" fill="#2d3142" font-size="10" font-weight="600" font-family="Arial, sans-serif">Beta testing</text>
      <rect x="767" y="372" width="126" height="24" rx="4" fill="#f5f5f5"/>
      <rect x="767" y="372" width="126" height="24" rx="4" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>

      <!-- Legend -->
      <line x1="40" y1="430" x2="960" y2="430" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="40" y="446" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

      <rect x="40" y="456" width="20" height="12" rx="3" fill="rgba(235,108,54,0.12)" stroke="#eb6c36" stroke-width="1"/>
      <text x="68" y="466" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Design review · critical gate</text>

      <rect x="280" y="456" width="20" height="12" rx="3" fill="rgba(79,93,117,0.15)" stroke="#4f5d75" stroke-width="1"/>
      <text x="308" y="466" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Task</text>

      <rect x="368" y="456" width="20" height="12" rx="3" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="396" y="466" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Phase</text>
    </svg>`},{id:"scatter",name:"分布散点",category:"数据",svg:`<svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="scatter-title scatter-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root { --color-paper:#f5f5f5; --color-ink:#2d3142; --color-muted:#4f5d75; --color-accent:#eb6c36; --font-sans:Arial,system-ui,sans-serif; --font-serif:Georgia,serif; --font-mono:monospace,ui-monospace,monospace; }
    body { font-family: var(--font-sans); background: var(--color-paper); color: var(--color-ink); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 3rem 2rem; }
    .frame { max-width: 1200px; width: 100%; }
    .eyebrow { font-family: var(--font-mono); font-size: 0.66rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--color-muted); margin-bottom: 0.5rem; }
    h1 { font-family: var(--font-serif); font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem); font-weight: 400; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 1.5rem; }
  </style>
      <title id="scatter-title">Deploy frequency vs. lead time · 12 teams</title>
      <desc id="scatter-desc">Scatter plot showing twelve engineering teams by deploy frequency and lead time, with Platform in the best-performing quadrant.</desc>
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="#f5f5f5"/>
      <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

      <!-- Axis labels -->
      <text transform="rotate(-90 24 230)" x="24" y="230" fill="#4f5d75" font-size="7" font-family="monospace, monospace" letter-spacing="0.14em" text-anchor="middle">LEAD TIME (DAYS)</text>
      <text x="520" y="492" fill="#4f5d75" font-size="7" font-family="monospace, monospace" letter-spacing="0.14em" text-anchor="middle">DEPLOYS PER WEEK</text>

      <!-- Gridlines -->
      <!-- Horizontal (constant lead time) -->
      <line x1="80" y1="325" x2="960" y2="325" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="80" y1="230" x2="960" y2="230" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="80" y1="135" x2="960" y2="135" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="80" y1="40"  x2="960" y2="40"  stroke="rgba(45,49,66,0.06)" stroke-width="0.8"/>
      <!-- Vertical (constant deploy freq) -->
      <line x1="256" y1="40" x2="256" y2="420" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="432" y1="40" x2="432" y2="420" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="608" y1="40" x2="608" y2="420" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>
      <line x1="784" y1="40" x2="784" y2="420" stroke="rgba(45,49,66,0.08)" stroke-width="0.8"/>

      <!-- Axes -->
      <line x1="80" y1="40" x2="80" y2="420" stroke="rgba(45,49,66,0.25)" stroke-width="1"/>
      <line x1="80" y1="420" x2="960" y2="420" stroke="rgba(45,49,66,0.25)" stroke-width="1"/>

      <!-- Y-axis labels (lead time: 0 at bottom, 24 at top) -->
      <text x="72" y="324" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">6</text>
      <text x="72" y="234" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">12</text>
      <text x="72" y="139" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">18</text>
      <text x="72" y="44"  fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">24</text>
      <text x="72" y="424" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end">0</text>

      <!-- X-axis labels (deploy frequency) -->
      <text x="80"  y="440" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">0</text>
      <text x="256" y="440" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">4</text>
      <text x="432" y="440" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">8</text>
      <text x="608" y="440" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">12</text>
      <text x="784" y="440" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">16</text>
      <text x="960" y="440" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">20</text>

      <!-- Trend line (dashed, approximate) -->
      <line x1="168" y1="103" x2="900" y2="388" stroke="rgba(45,49,66,0.18)" stroke-width="1" stroke-dasharray="4,3"/>

      <!-- ─── DATA POINTS (non-focal first) ─── -->
      <!-- (freq, lt) → (x=80+44*f, y=420-380*lt/24) -->
      <!-- (2,20)→(168,103), (4,18)→(256,135), (4,16)→(256,167), (6,14)→(344,198) -->
      <!-- (8,12)→(432,230), (8,10)→(432,262), (10,8)→(520,293), (12,6)→(608,325) -->
      <!-- (12,10)→(608,262), (16,4)→(784,357), (18,3)→(872,372) FOCAL, (20,2)→(960,388) -->

      <circle cx="168" cy="103" r="5" fill="#f5f5f5"/>
      <circle cx="168" cy="103" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" stroke-width="1"/>

      <circle cx="256" cy="135" r="5" fill="#f5f5f5"/>
      <circle cx="256" cy="135" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" stroke-width="1"/>

      <circle cx="256" cy="167" r="5" fill="#f5f5f5"/>
      <circle cx="256" cy="167" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" stroke-width="1"/>

      <circle cx="344" cy="198" r="5" fill="#f5f5f5"/>
      <circle cx="344" cy="198" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" stroke-width="1"/>

      <circle cx="432" cy="230" r="5" fill="#f5f5f5"/>
      <circle cx="432" cy="230" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" stroke-width="1"/>

      <circle cx="432" cy="262" r="5" fill="#f5f5f5"/>
      <circle cx="432" cy="262" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" stroke-width="1"/>

      <circle cx="520" cy="293" r="5" fill="#f5f5f5"/>
      <circle cx="520" cy="293" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" stroke-width="1"/>

      <circle cx="608" cy="325" r="5" fill="#f5f5f5"/>
      <circle cx="608" cy="325" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" stroke-width="1"/>

      <circle cx="608" cy="262" r="5" fill="#f5f5f5"/>
      <circle cx="608" cy="262" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" stroke-width="1"/>

      <circle cx="784" cy="357" r="5" fill="#f5f5f5"/>
      <circle cx="784" cy="357" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" stroke-width="1"/>

      <circle cx="960" cy="388" r="5" fill="#f5f5f5"/>
      <circle cx="960" cy="388" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" stroke-width="1"/>

      <!-- FOCAL: Platform team (18,3) → (872,372) -->
      <circle cx="872" cy="372" r="6" fill="#f5f5f5"/>
      <circle cx="872" cy="372" r="6" fill="rgba(235,108,54,0.15)" stroke="#eb6c36" stroke-width="1.2"/>

      <!-- Focal label -->
      <rect x="798" y="348" width="64" height="12" rx="2" fill="#f5f5f5"/>
      <text x="830" y="357" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.06em">PLATFORM</text>

      <!-- Quadrant guides (optional) -->
      <text x="88"  y="56"  fill="rgba(45,49,66,0.25)" font-size="8" font-family="monospace, monospace">HIGH LEAD TIME</text>
      <text x="88"  y="412" fill="rgba(45,49,66,0.25)" font-size="8" font-family="monospace, monospace">LOW LEAD TIME</text>

      <!-- Legend -->
      <line x1="40" y1="462" x2="960" y2="462" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="40" y="478" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

      <circle cx="52" cy="490" r="6" fill="rgba(235,108,54,0.15)" stroke="#eb6c36" stroke-width="1.2"/>
      <text x="68" y="494" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Platform team · best performer</text>

      <circle cx="256" cy="490" r="5" fill="rgba(79,93,117,0.20)" stroke="#4f5d75" stroke-width="1"/>
      <text x="272" y="494" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Engineering team</text>

      <line x1="416" y1="490" x2="440" y2="490" stroke="rgba(45,49,66,0.18)" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="448" y="494" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Trend</text>
    </svg>`},{id:"high-level",name:"架构总览",category:"架构",svg:`<svg viewBox="0 0 1000 540" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="high-level-title high-level-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:  #f5f5f5;
      --color-ink:    #2d3142;
      --color-muted:  #4f5d75;
      --color-accent: #eb6c36;
      --font-sans:    Arial, system-ui, sans-serif;
      --font-serif:   Georgia, serif;
      --font-mono:    monospace, ui-monospace, monospace;
    }
    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }
    .frame { max-width: 1200px; width: 100%; }
    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }
    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="high-level-title">High-level architecture · End-to-end stack</title>
      <desc id="high-level-desc">Architecture diagram showing data sources moving through Apache NiFi and MinIO into Trino, data modeling, and Superset dashboards, with Airflow orchestration.</desc>
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
        </pattern>
        <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/>
        </marker>
        <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/>
        </marker>
        <marker id="arrow-sm" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
          <polygon points="0 0, 6 2.5, 0 5" fill="#4f5d75"/>
        </marker>
      </defs>

      <!-- Background -->
      <rect width="100%" height="100%" fill="#f5f5f5"/>
      <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

      <!-- ═══════════════════════════════════════════
           PHASE CHEVRON BANNER
           ═══════════════════════════════════════════ -->
      <polygon points="0,4 188,4 200,18 188,32 0,32" fill="#2d3142"/>
      <polygon points="200,4 388,4 400,18 388,32 200,32 212,18" fill="#3d4460"/>
      <polygon points="400,4 588,4 600,18 588,32 400,32 412,18" fill="#2d3142"/>
      <polygon points="600,4 788,4 800,18 788,32 600,32 612,18" fill="#3d4460"/>
      <polygon points="800,4 1000,4 1000,32 800,32 812,18" fill="#2d3142"/>

      <text x="100" y="21" fill="#f5f5f5" font-size="7" font-family="monospace, monospace" letter-spacing="0.14em" text-anchor="middle">DATA SOURCES</text>
      <text x="300" y="21" fill="#f5f5f5" font-size="7" font-family="monospace, monospace" letter-spacing="0.14em" text-anchor="middle">INGESTION</text>
      <text x="500" y="21" fill="#f5f5f5" font-size="7" font-family="monospace, monospace" letter-spacing="0.14em" text-anchor="middle">STORAGE</text>
      <text x="700" y="21" fill="#f5f5f5" font-size="7" font-family="monospace, monospace" letter-spacing="0.13em" text-anchor="middle">TRANSFORMATION &amp; ANALYSIS</text>
      <text x="900" y="21" fill="#f5f5f5" font-size="7" font-family="monospace, monospace" letter-spacing="0.14em" text-anchor="middle">VISUALIZATION</text>

      <!-- ═══════════════════════════════════════════
           STRUCTURAL ZONES
           ═══════════════════════════════════════════ -->
      <!-- Data sources zone (external, dashed border) -->
      <rect x="4" y="40" width="152" height="336" rx="6" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.20)" stroke-width="0.8" stroke-dasharray="6,3"/>
      <text x="80" y="52" fill="#4f5d75" font-size="7" font-family="monospace, monospace" letter-spacing="0.14em" text-anchor="middle">SOURCES</text>

      <!-- Kubernetes boundary (solid) -->
      <rect x="164" y="40" width="832" height="336" rx="8" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.18)" stroke-width="1.2"/>

      <!-- Identity Manager bar -->
      <rect x="4" y="388" width="992" height="40" rx="6" fill="rgba(45,49,66,0.05)" stroke="rgba(45,49,66,0.20)" stroke-width="0.8"/>

      <!-- ═══════════════════════════════════════════
           ARROWS — drawn before boxes (z-order rule)
           ═══════════════════════════════════════════ -->

      <!-- Data sources → NiFi (staggered entry points) -->
      <path d="M 144,92 H 156 Q 164,92 164,100 V 112 Q 164,120 176,120" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <path d="M 144,172 H 156 Q 164,172 164,164 V 144 Q 164,136 176,136" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <path d="M 144,252 H 156 Q 164,252 164,244 V 160 Q 164,152 176,152" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <path d="M 144,336 H 156 Q 164,336 164,328 V 176 Q 164,168 176,168" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>

      <!-- Airflow → tools (dashed orchestration drops) -->
      <line x1="452" y1="96" x2="452" y2="104" stroke="#4f5d75" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arrow-sm)"/>
      <line x1="682" y1="96" x2="682" y2="144" stroke="#4f5d75" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arrow-sm)"/>
      <line x1="896" y1="96" x2="896" y2="144" stroke="#4f5d75" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arrow-sm)"/>

      <!-- NiFi → Trino (bend up) -->
      <path d="M 328,152 H 344 Q 348,152 348,148 V 144 Q 348,140 352,140 H 372" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>

      <!-- NiFi → MinIO (bend down — ACCENT primary path) -->
      <path d="M 328,152 H 344 Q 352,152 352,160 V 240 Q 352,248 372,248" fill="none" stroke="#eb6c36" stroke-width="1.2" marker-end="url(#arrow-accent)"/>

      <!-- Trino → MinIO (vertical, Trino queries storage) -->
      <line x1="448" y1="176" x2="448" y2="208" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <!-- MinIO → Trino (write-back, dashed) -->
      <line x1="456" y1="208" x2="456" y2="176" stroke="rgba(45,49,66,0.30)" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arrow)"/>

      <!-- Trino → Data Modeling (bend down) -->
      <path d="M 532,140 H 556 Q 564,140 564,148 V 176 Q 564,184 600,184" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>

      <!-- MinIO → Data Modeling (bend up — ACCENT primary path) -->
      <path d="M 532,248 H 556 Q 564,248 564,240 V 192 Q 564,184 600,184" fill="none" stroke="#eb6c36" stroke-width="1.2" marker-end="url(#arrow-accent)"/>

      <!-- Data Modeling → Dashboards (straight) -->
      <line x1="764" y1="184" x2="820" y2="184" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>

      <!-- ═══════════════════════════════════════════
           NODES
           ═══════════════════════════════════════════ -->

      <!-- ── WEB ── -->
      <rect x="12" y="60" width="132" height="64" rx="6" fill="#f5f5f5"/>
      <rect x="12" y="60" width="132" height="64" rx="6" fill="white" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <rect x="20" y="66" width="22" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.28)" stroke-width="0.8"/>
      <text x="31" y="75" fill="rgba(45,49,66,0.55)" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">EXT</text>
      <svg x="66" y="66" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d3142" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9"/>
        <path d="M3.6 9h16.8M3.6 15h16.8"/>
        <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18"/>
      </svg>
      <text x="78" y="102" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">WEB</text>
      <text x="78" y="114" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">Census · Survey · Admin</text>

      <!-- ── FTP ── -->
      <rect x="12" y="140" width="132" height="64" rx="6" fill="#f5f5f5"/>
      <rect x="12" y="140" width="132" height="64" rx="6" fill="white" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <rect x="20" y="146" width="22" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.28)" stroke-width="0.8"/>
      <text x="31" y="155" fill="rgba(45,49,66,0.55)" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">EXT</text>
      <svg x="66" y="146" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d3142" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>
        <path d="M7 9l5 -5l5 5"/>
        <path d="M12 4l0 12"/>
      </svg>
      <text x="78" y="182" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">FTP</text>
      <text x="78" y="194" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">Census · Business</text>

      <!-- ── DB Connection ── -->
      <rect x="12" y="220" width="132" height="64" rx="6" fill="#f5f5f5"/>
      <rect x="12" y="220" width="132" height="64" rx="6" fill="white" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <rect x="20" y="226" width="22" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.28)" stroke-width="0.8"/>
      <text x="31" y="235" fill="rgba(45,49,66,0.55)" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">EXT</text>
      <svg x="66" y="226" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d3142" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"/>
        <path d="M4 6v6a8 3 0 0 0 16 0v-6"/>
        <path d="M4 12v6a8 3 0 0 0 16 0v-6"/>
      </svg>
      <text x="78" y="262" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">DB Connection</text>
      <text x="78" y="274" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">CDC · SQL · API</text>

      <!-- ── Legacy System ── -->
      <rect x="12" y="304" width="132" height="64" rx="6" fill="#f5f5f5"/>
      <rect x="12" y="304" width="132" height="64" rx="6" fill="white" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <rect x="20" y="310" width="22" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.28)" stroke-width="0.8"/>
      <text x="31" y="319" fill="rgba(45,49,66,0.55)" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">EXT</text>
      <svg x="66" y="310" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d3142" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3"/>
        <path d="M3 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -2"/>
        <path d="M7 8l0 .01"/><path d="M7 16l0 .01"/>
      </svg>
      <text x="78" y="346" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Legacy System</text>
      <text x="78" y="358" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">Trade data</text>

      <!-- ── Airflow orchestration bar ── -->
      <rect x="176" y="52" width="808" height="44" rx="4" fill="rgba(45,49,66,0.05)" stroke="rgba(45,49,66,0.18)" stroke-width="0.8"/>
      <svg x="950" y="58" width="24" height="24" viewBox="0 0 24 24" fill="#4f5d75" aria-hidden="true">
        <path d="M17.195 16.822l4.002-4.102C23.55 10.308 23.934 5.154 24 .43a.396.396 0 0 0-.246-.373.392.392 0 0 0-.437.09l-6.495 6.658-4.102-4.003C10.309.45 5.154.066.43 0H.423a.397.397 0 0 0-.277.683l6.658 6.494-4.003 4.103C.45 13.692.065 18.846 0 23.57a.398.398 0 0 0 .683.282l6.494-6.657 3.934 3.837.17.165c2.41 2.353 7.565 2.737 12.288 2.803h.006a.397.397 0 0 0 .277-.683l-6.657-6.495z"/>
      </svg>
      <text x="564" y="71" fill="#2d3142" font-size="10" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Orchestration / Workflow Automation</text>
      <text x="564" y="84" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">(Apache Airflow)</text>

      <!-- ── Apache NiFi ── -->
      <rect x="176" y="112" width="152" height="80" rx="6" fill="#f5f5f5"/>
      <rect x="176" y="112" width="152" height="80" rx="6" fill="white" stroke="rgba(45,49,66,0.25)" stroke-width="1"/>
      <rect x="184" y="118" width="30" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.28)" stroke-width="0.8"/>
      <text x="199" y="127" fill="rgba(45,49,66,0.55)" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">COLL</text>
      <svg x="240" y="118" width="24" height="24" viewBox="0 0 24 24" fill="#2d3142" aria-hidden="true">
        <path d="M11.648 0a.093.093 0 0 0-.084.053A30.71 30.71 0 0 1 8.592 4.73c-2.09 2.728-5.145 6.466-5.145 10.364a8.201 8.201 0 0 0 8.201 8.2v-5.003c0-.106.087-.193.194-.193h2.81v-2.813c0-.106.087-.191.194-.191h5.004c0-3.9-3.056-7.636-5.145-10.364A30.712 30.712 0 0 1 11.732.053.094.094 0 0 0 11.648 0zm-1.632 3.867c.05 0 .08.034.037.112-.11.197-.218.397-.328.593-.396.702-.819 1.389-1.23 2.08-.196-.032-.39-.06-.585-.088.495-.651 1-1.296 1.48-1.959.153-.209.302-.423.454-.634a.24.24 0 0 1 .172-.104zM7.44 7.186c.221.035.444.076.666.119-.073.129-.15.256-.223.383a29.073 29.073 0 0 0-1.625 3.261c-.874 2.123-1.383 4.444-.77 6.707a8.222 8.222 0 0 0 2.217 3.74c.083.083-.02.216-.119.155a7.568 7.568 0 0 1-.93-.686A7.674 7.674 0 0 1 4.1 16.248c-.329-2.156.387-4.246 1.418-6.115a27.44 27.44 0 0 1 1.92-2.947zm7.931 8.435a.193.193 0 0 0-.191.191V18.3h2.677V15.62zm3.299 0V18.3h1.348a7.975 7.975 0 0 0 .515-2.678zm-6.303 3.004a.193.193 0 0 0-.191.193v2.485h2.678v-2.678Zm3.295.484v2.68h2.115a.562.562 0 0 0 .399-.162v-.004a.562.562 0 0 0 .16-.397V19.11zm3.674.182v1.98a7.999 7.999 0 0 0 1.217-1.98zm-6.969 2.824a.193.193 0 0 0-.191.192v1.672a7.997 7.997 0 0 0 2.678-.516v-1.348zm3.48.668V24a8.008 8.008 0 0 0 1.98-1.217z"/>
      </svg>
      <text x="252" y="154" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Apache NiFi</text>
      <text x="252" y="166" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">Collect · route · transform</text>

      <!-- ── Trino ── -->
      <rect x="372" y="104" width="160" height="72" rx="6" fill="#f5f5f5"/>
      <rect x="372" y="104" width="160" height="72" rx="6" fill="white" stroke="rgba(45,49,66,0.25)" stroke-width="1"/>
      <rect x="380" y="110" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.28)" stroke-width="0.8"/>
      <text x="394" y="119" fill="rgba(45,49,66,0.55)" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">VIRT</text>
      <svg x="440" y="110" width="24" height="24" viewBox="0 0 24 24" fill="#2d3142" aria-hidden="true">
        <path d="M14.124 16.8529a.1615.1615 0 1 1 .1576.1614.1577.1577 0 0 1-.1576-.1614zm-5.607-.1576a.1614.1614 0 1 0 0 .3228.1614.1614 0 0 0 0-.3228zm10.1341-.6648v1.9869c-.031.5788-.524 1.0237-1.1029.9954h-.3843a5.0596 5.0596 0 0 1-1.1298 1.7178.3192.3192 0 0 0 0 .465l.2382.2191a.3036.3036 0 0 1 .0385.4304c-1.126 1.3835-2.9669 2.1521-5.0498 2.1521a6.575 6.575 0 0 1-4.8192-1.8985c-.0029-.0032-.0059-.0063-.0087-.0096a.6302.6302 0 0 1 .0548-.8896c.137-.1265.1371-.3462 0-.4727a4.944 4.944 0 0 1-1.126-1.714h-.3497c-.5797.0284-1.0737-.416-1.1068-.9954v-1.9869c.0351-.5779.5286-1.02 1.1068-.9915h.2728a5.7648 5.7648 0 0 1 2.0791-3.0936c-.4227-1.0991-1.1529-3.2551-1.226-5.0075C6.0229 4.4705 6.2189.078 7.8253.001c1.6064-.0768 1.3719 4.0275 1.0991 6.6946a32.732 32.732 0 0 0-.123 4.4503 6.994 6.994 0 0 1 2.4826-.4304 7.2414 7.2414 0 0 1 1.7371.2075c.2614-1.2682.8762-3.574 2.0292-5.1958 1.6717-2.352 3.4357-4.7808 4.6116-4.1006 1.176.6802-.3074 3.1398-1.3297 4.4272-1.0222 1.2874-2.7862 3.2089-3.3742 4.2274-.2114.3843-.4304.8032-.5956 1.1529a5.7375 5.7375 0 0 1 2.9169 3.6125h.073v-2.3058a.3075.3075 0 0 0-.1806-.2844.9148.9148 0 0 1-.5573-.8148 1.0184 1.0184 0 0 1 .9045-.9044c.5593-.0598 1.061.3452 1.1208.9044a.9187.9187 0 0 1-.5534.8148.3074.3074 0 0 0-.1691.2844v2.1522a.3113.3113 0 0 0 .1691.2805.9724.9724 0 0 1 .5648.857z"/>
      </svg>
      <text x="452" y="146" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Trino</text>
      <text x="452" y="158" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">SQL · data virtualization</text>

      <!-- ── MinIO / S3 (FOCAL) ── -->
      <rect x="372" y="208" width="160" height="80" rx="8" fill="#f5f5f5"/>
      <rect x="372" y="208" width="160" height="80" rx="8" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1.2"/>
      <rect x="380" y="214" width="36" height="12" rx="2" fill="transparent" stroke="rgba(235,108,54,0.50)" stroke-width="0.8"/>
      <text x="398" y="223" fill="rgba(235,108,54,0.80)" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">STORE</text>
      <svg x="440" y="214" width="24" height="24" viewBox="0 0 24 24" fill="#eb6c36" aria-hidden="true">
        <path d="M13.2072.006c-.6216-.0478-1.2.1943-1.6211.582a2.15 2.15 0 0 0-.0938 3.0352l3.4082 3.5507a3.042 3.042 0 0 1-.664 4.6875l-.463.2383V7.2853a15.4198 15.4198 0 0 0-8.0174 10.4862v.0176l6.5487-3.3281v7.621L13.7794 24V13.6817l.8965-.4629a4.4432 4.4432 0 0 0 1.2207-7.0292l-3.371-3.5254a.7489.7489 0 0 1 .037-1.0547.7522.7522 0 0 1 1.0567.0371l.4668.4863-.006.0059 4.0704 4.2441a.0566.0566 0 0 0 .082 0 .06.06 0 0 0 0-.0703l-3.1406-5.1425-.1484.1425.1484-.1445C14.4945.3926 13.8287.0538 13.2072.006Zm-.9024 9.8652v2.9941l-4.1523 2.1484a13.9787 13.9787 0 0 1 2.7676-3.9277 14.1784 14.1784 0 0 1 1.3847-1.2148z"/>
      </svg>
      <text x="452" y="252" fill="#eb6c36" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">MinIO / S3</text>
      <text x="452" y="268" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" opacity="0.75">Object store · S3-API</text>

      <!-- ── Data Modeling & Analysis ── -->
      <rect x="600" y="144" width="164" height="80" rx="6" fill="#f5f5f5"/>
      <rect x="600" y="144" width="164" height="80" rx="6" fill="white" stroke="rgba(45,49,66,0.25)" stroke-width="1"/>
      <rect x="608" y="150" width="32" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.28)" stroke-width="0.8"/>
      <text x="624" y="159" fill="rgba(45,49,66,0.55)" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">ANLZ</text>
      <svg x="670" y="150" width="24" height="24" viewBox="0 0 24 24" fill="#2d3142" aria-hidden="true">
        <path d="M7.157 22.201A1.784 1.799 0 0 1 5.374 24a1.784 1.799 0 0 1-1.784-1.799 1.784 1.799 0 0 1 1.784-1.799 1.784 1.799 0 0 1 1.783 1.799zM20.582 1.427a1.415 1.427 0 0 1-1.415 1.428 1.415 1.427 0 0 1-1.416-1.428A1.415 1.427 0 0 1 19.167 0a1.415 1.427 0 0 1 1.415 1.427zM4.992 3.336A1.047 1.056 0 0 1 3.946 4.39a1.047 1.056 0 0 1-1.047-1.055A1.047 1.056 0 0 1 3.946 2.28a1.047 1.056 0 0 1 1.046 1.056zm7.336 1.517c3.769 0 7.06 1.38 8.768 3.424a9.363 9.363 0 0 0-3.393-4.547 9.238 9.238 0 0 0-5.377-1.728A9.238 9.238 0 0 0 6.95 3.73a9.363 9.363 0 0 0-3.394 4.547c1.713-2.04 5.004-3.424 8.772-3.424zm.001 13.295c-3.768 0-7.06-1.381-8.768-3.425a9.363 9.363 0 0 0 3.394 4.547A9.238 9.238 0 0 0 12.33 21a9.238 9.238 0 0 0 5.377-1.729 9.363 9.363 0 0 0 3.393-4.547c-1.712 2.044-5.003 3.425-8.772 3.425z"/>
      </svg>
      <text x="682" y="186" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Data Modeling</text>
      <text x="682" y="198" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">Notebook · Python · R</text>

      <!-- ── Dashboards & Report ── -->
      <rect x="820" y="144" width="152" height="80" rx="6" fill="#f5f5f5"/>
      <rect x="820" y="144" width="152" height="80" rx="6" fill="white" stroke="rgba(45,49,66,0.25)" stroke-width="1"/>
      <rect x="828" y="150" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.28)" stroke-width="0.8"/>
      <text x="842" y="159" fill="rgba(45,49,66,0.55)" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">DASH</text>
      <svg x="884" y="150" width="24" height="24" viewBox="0 0 24 24" fill="#2d3142" aria-hidden="true">
        <path d="M6.168 6.045C2.603 6.045 0 8.579 0 12.014c0 3.434 2.603 5.941 6.168 5.941 2.184 0 3.888-1.026 5.775-3.078 1.53 2.033 4.037 3.136 5.89 3.078 3.566 0 6.167-2.503 6.167-5.941 0-3.438-2.601-5.97-6.168-5.97-2.864 0-5.138 2.425-5.771 3.173-.76-.9-1.674-1.665-2.682-2.274-1.019-.588-2.084-.898-3.211-.898z"/>
      </svg>
      <text x="896" y="186" fill="#2d3142" font-size="11" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Dashboards</text>
      <text x="896" y="198" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">Superset · reports</text>

      <!-- ── Kubernetes label (bottom-left of boundary) ── -->
      <svg x="180" y="348" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f5d75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 3.98a2.5 2.5 0 0 1-2.184 0l-6.75-3.98a2.225 2.225 0 0 1-1.158-1.948v-7.284c0-.809.443-1.555 1.158-1.948l6.75-3.98a2.5 2.5 0 0 1 2.184 0z"/>
        <circle cx="12" cy="12" r="3"/>
        <line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/>
        <line x1="20.2" y1="7.5" x2="14.9" y2="10.5"/><line x1="9.1" y1="13.5" x2="3.8" y2="16.5"/>
        <line x1="20.2" y1="16.5" x2="14.9" y2="13.5"/><line x1="9.1" y1="10.5" x2="3.8" y2="7.5"/>
      </svg>
      <text x="204" y="362" fill="#4f5d75" font-size="8" font-weight="500" font-family="Arial, sans-serif">Kubernetes</text>

      <!-- ── Identity Manager bar ── -->
      <svg x="16" y="398" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f5d75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1-8.5 15a12 12 0 0 1-8.5-15a12 12 0 0 0 8.5-3"/>
        <circle cx="12" cy="11" r="1" fill="#4f5d75"/>
        <line x1="12" y1="12" x2="12" y2="14.5"/>
      </svg>
      <text x="500" y="410" fill="#2d3142" font-size="10" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Identity Manager</text>
      <text x="500" y="422" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle">(Active Directory)</text>

      <!-- ═══════════════════════════════════
           LEGEND
           ═══════════════════════════════════ -->
      <line x1="40" y1="440" x2="960" y2="440" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="40" y="456" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

      <rect x="40"  y="464" width="20" height="12" rx="3" fill="transparent" stroke="rgba(45,49,66,0.30)" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="68"  y="474" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">External source · outside cluster</text>

      <rect x="252" y="464" width="20" height="12" rx="3" fill="rgba(45,49,66,0.04)" stroke="rgba(45,49,66,0.25)" stroke-width="1"/>
      <text x="280" y="474" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Kubernetes boundary</text>

      <rect x="436" y="464" width="20" height="12" rx="3" fill="rgba(235,108,54,0.10)" stroke="#eb6c36" stroke-width="1.2"/>
      <text x="464" y="474" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Focal component (MinIO)</text>

      <line x1="648" y1="466" x2="668" y2="466" stroke="#eb6c36" stroke-width="1.2"/>
      <text x="676" y="471" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Primary data path</text>

      <line x1="808" y1="466" x2="828" y2="466" stroke="rgba(45,49,66,0.35)" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="836" y="471" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Orchestration trigger</text>
    </svg>`},{id:"process",name:"阶段流程",category:"流程",svg:`<svg viewBox="0 0 1064 436" xmlns="http://www.w3.org/2000/svg" aria-label="Order fulfillment process from customer order to support closure" role="img" aria-labelledby="process-title process-desc"><style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{--paper:#f5f5f5;--ink:#2d3142;--muted:#4f5d75;--soft:#7a8399;--accent:#eb6c36;--accent-tint:rgba(235,108,54,.08);--rule:rgba(45,49,66,.12);--label-rule:rgba(45,49,66,.20);--lane:rgba(45,49,66,.018);--node:#fff;--node-stroke:rgba(45,49,66,.25);--chip:rgba(45,49,66,.12);--dot:rgba(45,49,66,.10);--db:#5e7a9b;--ls:#7c8f6f;--fl:#9c6b50;--tb:#b8915a;--wb:#6e6479;--sans:Arial,system-ui,sans-serif;--serif:Georgia,serif;--mono:monospace,ui-monospace,monospace}
    body{font-family:var(--sans);background:var(--paper);color:var(--ink);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:3rem 2rem}
    .frame{max-width:1120px;width:100%}.eyebrow{font:500 .66rem var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:.5rem}h1{font:400 clamp(1.5rem,2.4vw + .75rem,2rem)/1.15 var(--serif);letter-spacing:-.02em;margin-bottom:1.5rem}
    svg text{font-family:var(--sans)}.mono{font-family:var(--mono)}.lane{fill:var(--lane)}.rule{stroke:var(--rule)}.label-rule{stroke:var(--label-rule)}.actor{fill:var(--muted);font:500 8px var(--mono);letter-spacing:.08em}.step-label{fill:var(--muted);font:500 6px var(--mono);letter-spacing:.12em}.step-chip{fill:var(--chip)}.step-num{fill:var(--ink);font:600 7px var(--mono)}.connector{fill:none;stroke:var(--muted);stroke-width:1}.connector.focal{stroke:var(--accent);stroke-width:1.2}.node-mask{fill:var(--paper)}.node{fill:var(--node);stroke:var(--node-stroke)}.node.focal{fill:var(--accent-tint);stroke:var(--accent);stroke-width:1.2}.role{fill:rgba(45,49,66,.10)}.role.focal{fill:rgba(235,108,54,.25)}.role-text{fill:var(--ink);font:600 6px var(--mono)}.role-text.focal{fill:var(--accent)}.node-title{fill:var(--ink);font:600 9px var(--sans)}.node-sub{fill:var(--muted);font:6.5px var(--mono)}.node-tool{fill:var(--soft);font:6.5px var(--mono)}.data-text{fill:white;font:700 5px var(--mono)}.legend-key{fill:var(--muted);font:500 7px var(--mono);letter-spacing:.12em}.legend-text{fill:var(--muted);font:8px var(--sans)}
  </style>
      <title id="process-title">Order fulfillment across four teams</title>
      <desc id="process-desc">Process diagram showing an order moving through customer, support, warehouse, and finance ownership from placement to close.</desc>
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r="0.8" fill="var(--dot)"/></pattern>
        <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="var(--muted)"/></marker>
        <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="var(--accent)"/></marker>
        <marker id="arrow-sm" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="var(--muted)"/></marker>
      </defs>
      <rect width="1064" height="436" fill="var(--paper)"/><rect width="1064" height="436" fill="url(#dots)" opacity=".55"/>
      <rect class="lane" x="140" y="36" width="924" height="80"/><rect class="lane" x="140" y="196" width="924" height="80"/>
      <g class="rule" stroke-width=".8"><line x1="0" y1="36" x2="1064" y2="36"/><line x1="0" y1="116" x2="1064" y2="116"/><line x1="0" y1="196" x2="1064" y2="196"/><line x1="0" y1="276" x2="1064" y2="276"/><line x1="0" y1="356" x2="1064" y2="356"/></g>
      <line class="label-rule" x1="140" y1="36" x2="140" y2="356"/>
      <g class="actor" text-anchor="middle"><text x="70" y="80">CUSTOMER</text><text x="70" y="160">SUPPORT</text><text x="70" y="240">WAREHOUSE</text><text x="70" y="320">FINANCE</text></g>
      <g text-anchor="middle">
        <rect class="step-chip" x="190" y="8" width="16" height="16" rx="8"/><text class="step-num" x="198" y="19">1</text><text class="step-label" x="198" y="32">ORDER</text>
        <rect class="step-chip" x="302" y="8" width="16" height="16" rx="8"/><text class="step-num" x="310" y="19">2</text><text class="step-label" x="310" y="32">VERIFY</text>
        <rect x="414" y="8" width="16" height="16" rx="8" fill="rgba(235,108,54,.20)"/><text x="422" y="19" fill="var(--accent)" font-size="7" font-weight="600" class="mono">3</text><text x="422" y="32" fill="var(--accent)" font-size="6" font-weight="500" letter-spacing=".12em" class="mono">ALLOCATE</text>
        <rect class="step-chip" x="526" y="8" width="16" height="16" rx="8"/><text class="step-num" x="534" y="19">4</text><text class="step-label" x="534" y="32">PICK</text>
        <rect class="step-chip" x="638" y="8" width="16" height="16" rx="8"/><text class="step-num" x="646" y="19">5</text><text class="step-label" x="646" y="32">PACK</text>
        <rect class="step-chip" x="750" y="8" width="16" height="16" rx="8"/><text class="step-num" x="758" y="19">6</text><text class="step-label" x="758" y="32">PAY</text>
        <rect class="step-chip" x="862" y="8" width="16" height="16" rx="8"/><text class="step-num" x="870" y="19">7</text><text class="step-label" x="870" y="32">RECEIVE</text>
        <rect class="step-chip" x="974" y="8" width="16" height="16" rx="8"/><text class="step-num" x="982" y="19">8</text><text class="step-label" x="982" y="32">CLOSE</text>
      </g>
      <!-- Connectors: right exit, r=8 orthogonal bend, top/bottom entry. -->
      <path class="connector" d="M248 76 H302 Q310 76 310 84 V124" marker-end="url(#arrow)"/><path class="connector focal" d="M360 156 H414 Q422 156 422 164 V204" marker-end="url(#arrow-accent)"/><line class="connector focal" x1="472" y1="236" x2="484" y2="236" marker-end="url(#arrow-accent)"/><line class="connector" x1="584" y1="236" x2="596" y2="236" marker-end="url(#arrow)"/><path class="connector" d="M696 236 H750 Q758 236 758 244 V284" marker-end="url(#arrow)"/><path class="connector" d="M808 316 H862 Q870 316 870 308 V108" marker-end="url(#arrow)"/><path class="connector" d="M920 76 H974 Q982 76 982 84 V124" marker-end="url(#arrow)"/>
      <!-- Nodes -->
      <g text-anchor="middle">
        <g><rect class="node-mask" x="148" y="44" width="100" height="64" rx="6"/><rect class="node" x="148" y="44" width="100" height="64" rx="6"/><rect class="role" x="152" y="48" width="20" height="10" rx="2"/><text class="role-text" x="162" y="56">CUS</text><text class="node-title" x="198" y="70">Place order</text><text class="node-sub" x="198" y="84">cart → order</text><text class="node-tool" x="198" y="96">storefront</text><rect x="228" y="98" width="16" height="8" rx="2" fill="var(--db)"/><text class="data-text" x="236" y="104">DB</text></g>
        <g><rect class="node-mask" x="260" y="124" width="100" height="64" rx="6"/><rect class="node" x="260" y="124" width="100" height="64" rx="6"/><rect class="role" x="264" y="128" width="20" height="10" rx="2"/><text class="role-text" x="274" y="136">SUP</text><text class="node-title" x="310" y="150">Verify order</text><text class="node-sub" x="310" y="164">order → cleared</text><text class="node-tool" x="310" y="176">service desk</text><rect x="264" y="178" width="16" height="8" rx="2" fill="var(--db)"/><text class="data-text" x="272" y="184">DB</text><rect x="340" y="178" width="16" height="8" rx="2" fill="var(--db)"/><text class="data-text" x="348" y="184">DB</text></g>
        <g><rect class="node-mask" x="372" y="204" width="100" height="64" rx="6"/><rect class="node focal" x="372" y="204" width="100" height="64" rx="6"/><rect class="role focal" x="376" y="208" width="20" height="10" rx="2"/><text class="role-text focal" x="386" y="216">WHS</text><text class="node-title" x="422" y="230">Allocate stock</text><text class="node-sub" x="422" y="244">order → pick list</text><text class="node-tool" x="422" y="256">inventory system</text><rect x="376" y="258" width="16" height="8" rx="2" fill="var(--db)"/><text class="data-text" x="384" y="264">DB</text><rect x="452" y="258" width="16" height="8" rx="2" fill="var(--ls)"/><text class="data-text" x="460" y="264">LS</text></g>
        <g><rect class="node-mask" x="484" y="204" width="100" height="64" rx="6"/><rect class="node" x="484" y="204" width="100" height="64" rx="6"/><rect class="role" x="488" y="208" width="20" height="10" rx="2"/><text class="role-text" x="498" y="216">WHS</text><text class="node-title" x="534" y="230">Pick items</text><text class="node-sub" x="534" y="244">list → picked</text><text class="node-tool" x="534" y="256">handheld scanner</text><rect x="488" y="258" width="16" height="8" rx="2" fill="var(--ls)"/><text class="data-text" x="496" y="264">LS</text><rect x="564" y="258" width="16" height="8" rx="2" fill="var(--ls)"/><text class="data-text" x="572" y="264">LS</text></g>
        <g><rect class="node-mask" x="596" y="204" width="100" height="64" rx="6"/><rect class="node" x="596" y="204" width="100" height="64" rx="6"/><rect class="role" x="600" y="208" width="20" height="10" rx="2"/><text class="role-text" x="610" y="216">WHS</text><text class="node-title" x="646" y="230">Pack order</text><text class="node-sub" x="646" y="244">picked → shipment</text><text class="node-tool" x="646" y="256">packing station</text><rect x="600" y="258" width="16" height="8" rx="2" fill="var(--ls)"/><text class="data-text" x="608" y="264">LS</text><rect x="676" y="258" width="16" height="8" rx="2" fill="var(--fl)"/><text class="data-text" x="684" y="264">FL</text></g>
        <g><rect class="node-mask" x="708" y="284" width="100" height="64" rx="6"/><rect class="node" x="708" y="284" width="100" height="64" rx="6"/><rect class="role" x="712" y="288" width="20" height="10" rx="2"/><text class="role-text" x="722" y="296">FIN</text><text class="node-title" x="758" y="310">Capture payment</text><text class="node-sub" x="758" y="324">shipment → receipt</text><text class="node-tool" x="758" y="336">payment gateway</text><rect x="712" y="338" width="16" height="8" rx="2" fill="var(--fl)"/><text class="data-text" x="720" y="344">FL</text><rect x="788" y="338" width="16" height="8" rx="2" fill="var(--tb)"/><text class="data-text" x="796" y="344">TB</text></g>
        <g><rect class="node-mask" x="820" y="44" width="100" height="64" rx="6"/><rect class="node" x="820" y="44" width="100" height="64" rx="6"/><rect class="role" x="824" y="48" width="20" height="10" rx="2"/><text class="role-text" x="834" y="56">CUS</text><text class="node-title" x="870" y="70">Receive shipment</text><text class="node-sub" x="870" y="84">receipt → confirmed</text><text class="node-tool" x="870" y="96">delivery portal</text><rect x="824" y="98" width="16" height="8" rx="2" fill="var(--tb)"/><text class="data-text" x="832" y="104">TB</text><rect x="900" y="98" width="16" height="8" rx="2" fill="var(--wb)"/><text class="data-text" x="908" y="104">WB</text></g>
        <g><rect class="node-mask" x="932" y="124" width="100" height="64" rx="6"/><rect class="node" x="932" y="124" width="100" height="64" rx="6"/><rect class="role" x="936" y="128" width="20" height="10" rx="2"/><text class="role-text" x="946" y="136">SUP</text><text class="node-title" x="982" y="150">Close order</text><text class="node-sub" x="982" y="164">confirmed → closed</text><text class="node-tool" x="982" y="176">service desk</text><rect x="936" y="178" width="16" height="8" rx="2" fill="var(--wb)"/><text class="data-text" x="944" y="184">WB</text></g>
      </g>
      <!-- Three-row type key -->
      <g><text class="legend-key" x="144" y="372">STEPS</text><g text-anchor="middle"><rect class="step-chip" x="208" y="364" width="16" height="16" rx="8"/><text class="step-num" x="216" y="375">1</text><text class="legend-text" x="248" y="375">ORDER</text><rect class="step-chip" x="300" y="364" width="16" height="16" rx="8"/><text class="step-num" x="308" y="375">2</text><text class="legend-text" x="340" y="375">VERIFY</text><rect x="392" y="364" width="16" height="16" rx="8" fill="rgba(235,108,54,.20)"/><text x="400" y="375" fill="var(--accent)" font-size="7" class="mono">3</text><text x="432" y="375" fill="var(--accent)" font-size="8">ALLOCATE</text><rect class="step-chip" x="496" y="364" width="16" height="16" rx="8"/><text class="step-num" x="504" y="375">4</text><text class="legend-text" x="532" y="375">PICK</text><rect class="step-chip" x="576" y="364" width="16" height="16" rx="8"/><text class="step-num" x="584" y="375">5</text><text class="legend-text" x="612" y="375">PACK</text><rect class="step-chip" x="656" y="364" width="16" height="16" rx="8"/><text class="step-num" x="664" y="375">6</text><text class="legend-text" x="692" y="375">PAY</text><rect class="step-chip" x="736" y="364" width="16" height="16" rx="8"/><text class="step-num" x="744" y="375">7</text><text class="legend-text" x="780" y="375">RECEIVE</text><rect class="step-chip" x="832" y="364" width="16" height="16" rx="8"/><text class="step-num" x="840" y="375">8</text><text class="legend-text" x="872" y="375">CLOSE</text></g>
      <text class="legend-key" x="144" y="393">DATA TYPE</text><rect x="220" y="386" width="16" height="8" rx="2" fill="var(--db)"/><text class="legend-text" x="244" y="393">DB · records</text><rect x="328" y="386" width="16" height="8" rx="2" fill="var(--ls)"/><text class="legend-text" x="352" y="393">LS · task</text><rect x="428" y="386" width="16" height="8" rx="2" fill="var(--fl)"/><text class="legend-text" x="452" y="393">FL · document</text><rect x="552" y="386" width="16" height="8" rx="2" fill="var(--tb)"/><text class="legend-text" x="576" y="393">TB · transaction</text><rect x="688" y="386" width="16" height="8" rx="2" fill="var(--wb)"/><text class="legend-text" x="712" y="393">WB · web status</text><text class="legend-key" x="856" y="393">LEFT IN · RIGHT OUT</text>
      <text class="legend-key" x="144" y="414">FLOW</text><line x1="200" y1="410" x2="228" y2="410" stroke="var(--accent)" stroke-width="1.2" marker-end="url(#arrow-accent)"/><text class="legend-text" x="240" y="414">Critical handoff</text><line x1="360" y1="410" x2="388" y2="410" stroke="var(--muted)" marker-end="url(#arrow)"/><text class="legend-text" x="400" y="414">Sequential handoff</text></g>
    </svg>`},{id:"medallion",name:"数据分层",category:"架构",svg:`<svg viewBox="0 0 1040 548" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="medallion-title medallion-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --paper: #f5f5f5; --paper-2: #ececec; --ink: #2d3142; --muted: #4f5d75;
      --soft: #7a8399; --rule: rgba(45,49,66,0.12); --accent: #eb6c36;
      --accent-tint: rgba(235,108,54,0.08); --link: #2e5aa8;
      --sans: Arial, system-ui, sans-serif; --serif: Georgia, serif;
      --mono: monospace, ui-monospace, monospace;
    }
    body { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 3rem 2rem; background: var(--paper); color: var(--ink); font-family: var(--sans); }
    .frame { width: 100%; max-width: 1200px; }
    .eyebrow { margin-bottom: 0.5rem; color: var(--muted); font: 500 0.66rem var(--mono); letter-spacing: 0.18em; text-transform: uppercase; }
    h1 { margin-bottom: 1.5rem; color: var(--ink); font: 400 clamp(1.5rem, 2.4vw + 0.75rem, 2rem)/1.15 var(--serif); letter-spacing: -0.02em; }
    .tier-title { fill: var(--ink); font: 600 13px var(--sans); text-anchor: middle; }
    .bucket, .field-value, .example-value { fill: var(--muted); font: 400 9px var(--mono); }
    .bucket { text-anchor: middle; }
    .field-value { color: var(--muted); }
    .focal-text { fill: var(--accent); }
    .field-label { fill: var(--ink); font: 600 11px var(--sans); }
    .example-label, .arc-label, .path-tag { font-family: var(--mono); font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; }
    .example-label { fill: var(--soft); font-size: 8px; }
    .arc-label { font-size: 10px; text-anchor: middle; }
    .path-title { fill: var(--ink); font: 600 11px var(--sans); }
    .path-sub { fill: var(--muted); font: 400 9px var(--mono); }
  </style>
      <title id="medallion-title">Five-tier e-commerce analytics medallion</title>
      <desc id="medallion-desc">Clickstream events and order records move from raw storage through anonymized, staging, and aggregated tiers before lifecycle archiving.</desc>
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
        <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
        <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#2e5aa8"/></marker>
        <clipPath id="clip-raw"><rect x="16" y="80" width="172" height="380" rx="6"/></clipPath>
        <clipPath id="clip-anon"><rect x="204" y="80" width="172" height="380" rx="6"/></clipPath>
        <clipPath id="clip-stage"><rect x="392" y="80" width="172" height="380" rx="6"/></clipPath>
        <clipPath id="clip-aggregate"><rect x="580" y="80" width="172" height="380" rx="6"/></clipPath>
        <clipPath id="clip-archive"><rect x="768" y="80" width="172" height="380" rx="6"/></clipPath>
      </defs>
      <rect width="1040" height="548" fill="#f5f5f5"/>

      <!-- Promotion arcs are the medallion type's required connector grammar. -->
      <path d="M102 80 C102 0 290 0 290 80" fill="none" stroke="#4f5d75" stroke-width="1.4" marker-end="url(#arrow)"/>
      <path d="M290 80 C290 0 478 0 478 80" fill="none" stroke="#4f5d75" stroke-width="1.4" marker-end="url(#arrow)"/>
      <path d="M478 80 C478 0 666 0 666 80" fill="none" stroke="#eb6c36" stroke-width="1.6" marker-end="url(#arrow-accent)"/>
      <path d="M666 80 C666 0 854 0 854 80" fill="none" stroke="#4f5d75" stroke-width="1.4" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
      <text x="196" y="50" class="arc-label" fill="#4f5d75">MASK IDS</text>
      <text x="384" y="50" class="arc-label" fill="#4f5d75">CLEAN + JOIN</text>
      <text x="572" y="50" class="arc-label" fill="#eb6c36">AGGREGATE</text>
      <text x="760" y="50" class="arc-label" fill="#4f5d75">LIFECYCLE</text>

      <!-- Raw -->
      <rect x="16" y="80" width="172" height="380" rx="6" fill="#fff"/>
      <rect x="16" y="80" width="172" height="50" fill="rgba(79,93,117,0.10)" clip-path="url(#clip-raw)"/>
      <rect x="16" y="80" width="172" height="380" rx="6" fill="none" stroke="#4f5d75"/>
      <text x="102" y="106" class="tier-title">Raw</text>
      <text x="102" y="144" class="bucket">raw-commerce</text>
      <text x="32" y="180" class="field-label">Tool</text>
      <text x="32" y="198" font-family="Arial, sans-serif" font-size="12" fill="#2d3142">NiFi ingest</text>
      <text x="32" y="220" class="field-label">Format</text>
      <text x="32" y="238" font-family="Arial, sans-serif" font-size="12" fill="#2d3142">JSON · Parquet</text>
      <text x="32" y="260" class="field-label">Writer</text>
      <text x="32" y="278" font-family="Arial, sans-serif" font-size="12" fill="#2d3142">Data Engineer</text>
      <text x="32" y="360" class="example-label">E-COMMERCE EXAMPLE</text>
      <text x="32" y="374" class="example-value">clickstream events</text>
      <text x="32" y="388" class="example-value">order records</text>

      <!-- Anonymized -->
      <rect x="204" y="80" width="172" height="380" rx="6" fill="#fff"/>
      <rect x="204" y="80" width="172" height="50" fill="rgba(45,49,66,0.06)" clip-path="url(#clip-anon)"/>
      <rect x="204" y="80" width="172" height="380" rx="6" fill="none" stroke="#2d3142"/>
      <text x="290" y="106" class="tier-title">Anonymized</text>
      <text x="290" y="144" class="bucket">anon-commerce</text>
      <text x="220" y="180" class="field-label">Tool</text>
      <text x="220" y="198" font-family="Arial, sans-serif" font-size="12" fill="#2d3142">Trino SQL</text>
      <text x="220" y="220" class="field-label">Format</text>
      <text x="220" y="238" font-family="Arial, sans-serif" font-size="12" fill="#2d3142">Iceberg · partitioned</text>
      <text x="220" y="260" class="field-label">Writer</text>
      <text x="220" y="278" font-family="Arial, sans-serif" font-size="12" fill="#2d3142">Data Engineer</text>
      <text x="220" y="360" class="example-label">E-COMMERCE EXAMPLE</text>
      <text x="220" y="374" class="example-value">session pseudonyms</text>
      <text x="220" y="388" class="example-value">masked customer IDs</text>

      <!-- Staging -->
      <rect x="392" y="80" width="172" height="380" rx="6" fill="#fff"/>
      <rect x="392" y="80" width="172" height="50" fill="rgba(45,49,66,0.06)" clip-path="url(#clip-stage)"/>
      <rect x="392" y="80" width="172" height="380" rx="6" fill="none" stroke="#2d3142"/>
      <text x="478" y="106" class="tier-title">Staging</text>
      <text x="478" y="144" class="bucket">staging-commerce</text>
      <text x="408" y="180" class="field-label">Tool</text>
      <text x="408" y="198" font-family="Arial, sans-serif" font-size="12" fill="#2d3142">Trino · notebooks</text>
      <text x="408" y="220" class="field-label">Format</text>
      <text x="408" y="238" font-family="Arial, sans-serif" font-size="12" fill="#2d3142">Iceberg · cleaned</text>
      <text x="408" y="260" class="field-label">Writer</text>
      <text x="408" y="278" font-family="Arial, sans-serif" font-size="12" fill="#2d3142">Data Scientist</text>
      <text x="408" y="360" class="example-label">E-COMMERCE EXAMPLE</text>
      <text x="408" y="374" class="example-value">joined order facts</text>
      <text x="408" y="388" class="example-value">validated event rows</text>

      <!-- Aggregated focal tier -->
      <rect x="580" y="80" width="172" height="380" rx="6" fill="rgba(235,108,54,0.07)"/>
      <rect x="580" y="80" width="172" height="50" fill="rgba(235,108,54,0.14)" clip-path="url(#clip-aggregate)"/>
      <rect x="580" y="80" width="172" height="380" rx="6" fill="none" stroke="#eb6c36" stroke-width="1.6"/>
      <text x="666" y="106" class="tier-title">Aggregated</text>
      <text x="666" y="144" class="bucket focal-text">analytics-marts</text>
      <text x="596" y="180" class="field-label">Tool</text>
      <text x="596" y="198" font-family="Arial, sans-serif" font-size="12" fill="#2d3142">Trino INSERT</text>
      <text x="596" y="220" class="field-label">Format</text>
      <text x="596" y="238" font-family="Arial, sans-serif" font-size="12" fill="#2d3142">Iceberg · metrics</text>
      <text x="596" y="260" class="field-label">Writer</text>
      <text x="596" y="278" font-family="Arial, sans-serif" font-size="12" fill="#2d3142">Data Scientist</text>
      <text x="596" y="360" class="example-label">E-COMMERCE EXAMPLE</text>
      <text x="596" y="374" class="example-value focal-text">daily conversion rate</text>
      <text x="596" y="388" class="example-value focal-text">revenue by channel</text>

      <!-- Archive -->
      <rect x="768" y="80" width="172" height="380" rx="6" fill="#ececec"/>
      <rect x="768" y="80" width="172" height="50" fill="rgba(79,93,117,0.18)" clip-path="url(#clip-archive)"/>
      <rect x="768" y="80" width="172" height="380" rx="6" fill="none" stroke="#4f5d75" stroke-dasharray="5,3"/>
      <text x="854" y="106" class="tier-title">Archive</text>
      <text x="854" y="144" class="bucket">archive-commerce</text>
      <text x="784" y="180" class="field-label">Tool</text>
      <text x="784" y="198" font-family="Arial, sans-serif" font-size="12" fill="#2d3142" textLength="140" lengthAdjust="spacingAndGlyphs">Object storage lifecycle</text>
      <text x="784" y="220" class="field-label">Format</text>
      <text x="784" y="238" font-family="Arial, sans-serif" font-size="12" fill="#2d3142">Cold tier · immutable</text>
      <text x="784" y="260" class="field-label">Writer</text>
      <text x="784" y="278" font-family="Arial, sans-serif" font-size="12" fill="#2d3142">Data Engineer</text>
      <text x="784" y="360" class="example-label">E-COMMERCE EXAMPLE</text>
      <text x="784" y="374" class="example-value">retained clickstream</text>
      <text x="784" y="388" class="example-value">closed order snapshots</text>

      <!-- Write-method paths -->
      <rect x="16" y="476" width="460" height="56" rx="6" fill="#fff" stroke="rgba(45,49,66,0.20)"/>
      <rect x="24" y="482" width="64" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.30)" stroke-width="0.8"/>
      <text x="56" y="491" class="path-tag" fill="#2d3142" font-size="7" text-anchor="middle">SQL PATH</text>
      <text x="96" y="506" class="path-title">Trino INSERT INTO … SELECT</text>
      <text x="96" y="522" class="path-sub">filter · join · aggregate — repeatable transforms</text>
      <rect x="492" y="476" width="460" height="56" rx="6" fill="#fff" stroke="rgba(45,49,66,0.20)"/>
      <rect x="500" y="482" width="96" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.30)" stroke-width="0.8"/>
      <text x="548" y="491" class="path-tag" fill="#2d3142" font-size="7" text-anchor="middle">NOTEBOOK PATH</text>
      <text x="604" y="506" class="path-title">Python notebooks on object storage</text>
      <text x="604" y="522" class="path-sub">explore · validate · model — interactive analysis</text>
    </svg>`},{id:"data-flow",name:"数据流向",category:"架构",svg:`<svg viewBox="0 0 728 356" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="data-flow-title data-flow-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --paper: #f5f5f5; --paper-2: #ececec; --ink: #2d3142; --muted: #4f5d75;
      --soft: #7a8399; --rule: rgba(45,49,66,0.12); --accent: #eb6c36;
      --accent-tint: rgba(235,108,54,0.08); --link: #2e5aa8;
      --sans: Arial, system-ui, sans-serif; --serif: Georgia, serif;
      --mono: monospace, ui-monospace, monospace;
    }
    body { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 3rem 2rem; background: var(--paper); color: var(--ink); font-family: var(--sans); }
    .frame { width: 100%; max-width: 1200px; }
    .eyebrow { margin-bottom: 0.5rem; color: var(--muted); font: 500 0.66rem var(--mono); letter-spacing: 0.18em; text-transform: uppercase; }
    h1 { margin-bottom: 1.5rem; color: var(--ink); font: 400 clamp(1.5rem, 2.4vw + 0.75rem, 2rem)/1.15 var(--serif); letter-spacing: -0.02em; }
    .step-number, .step-label, .lane-label, .role-text, .chip-text, .legend-label { font-family: var(--mono); text-anchor: middle; }
    .step-number { fill: var(--ink); font-size: 7px; font-weight: 600; }
    .step-label { fill: var(--muted); font-size: 7px; font-weight: 500; letter-spacing: 0.12em; }
    .lane-label { fill: var(--muted); font-size: 8px; font-weight: 500; letter-spacing: 0.14em; }
    .role-text { fill: var(--ink); font-size: 6px; font-weight: 600; }
    .node-title { fill: var(--ink); font: 600 9px var(--sans); text-anchor: middle; }
    .node-sub { fill: var(--muted); font: 400 6.5px var(--mono); text-anchor: middle; }
    .node-tool { fill: var(--soft); font: 400 6.5px var(--mono); text-anchor: middle; }
    .chip-text { fill: #fff; font-size: 5px; font-weight: 700; }
    .focal-text { fill: var(--accent); }
    .legend-label { fill: var(--muted); font-size: 7px; font-weight: 500; letter-spacing: 0.12em; text-anchor: end; }
    .legend-text { fill: var(--muted); font: 400 7px var(--sans); }
  </style>
      <title id="data-flow-title">Role-scoped analytics data flow</title>
      <desc id="data-flow-desc">A Data Engineer ingests and stores commerce data, a Data Scientist transforms and analyzes it, and an Analyst publishes a dashboard.</desc>
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r="0.8" fill="rgba(45,49,66,0.10)"/></pattern>
        <marker id="arr-muted" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#4f5d75"/></marker>
        <marker id="arr-accent" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#eb6c36"/></marker>
        <marker id="arr-link" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#2e5aa8"/></marker>
      </defs>
      <rect width="728" height="356" fill="#f5f5f5"/>
      <rect width="728" height="356" fill="url(#dots)"/>
      <rect x="0" y="36" width="728" height="80" fill="rgba(45,49,66,0.018)"/>
      <rect x="0" y="196" width="728" height="80" fill="rgba(45,49,66,0.018)"/>

      <!-- Header and lane structure -->
      <line x1="0" y1="36" x2="728" y2="36" stroke="rgba(45,49,66,0.12)" stroke-width="0.8"/>
      <line x1="0" y1="116" x2="728" y2="116" stroke="rgba(45,49,66,0.12)" stroke-width="0.8"/>
      <line x1="0" y1="196" x2="728" y2="196" stroke="rgba(45,49,66,0.12)" stroke-width="0.8"/>
      <line x1="0" y1="276" x2="728" y2="276" stroke="rgba(45,49,66,0.12)" stroke-width="0.8"/>
      <line x1="140" y1="36" x2="140" y2="276" stroke="rgba(45,49,66,0.12)" stroke-width="0.8"/>

      <g aria-label="Pipeline steps">
        <rect x="180" y="6" width="32" height="16" rx="8" fill="rgba(45,49,66,0.12)"/><text x="196" y="14" class="step-number">01</text><text x="196" y="29" class="step-label">INGEST</text>
        <rect x="292" y="6" width="32" height="16" rx="8" fill="rgba(45,49,66,0.12)"/><text x="308" y="14" class="step-number">02</text><text x="308" y="29" class="step-label">STORE</text>
        <rect x="404" y="6" width="32" height="16" rx="8" fill="rgba(235,108,54,0.20)"/><text x="420" y="14" class="step-number focal-text">03</text><text x="420" y="29" class="step-label focal-text">TRANSFORM</text>
        <rect x="516" y="6" width="32" height="16" rx="8" fill="rgba(45,49,66,0.12)"/><text x="532" y="14" class="step-number">04</text><text x="532" y="29" class="step-label">ANALYZE</text>
        <rect x="628" y="6" width="32" height="16" rx="8" fill="rgba(45,49,66,0.12)"/><text x="644" y="14" class="step-number">05</text><text x="644" y="29" class="step-label">PUBLISH</text>
      </g>

      <g aria-label="Role lanes">
        <text x="70" y="72" class="lane-label">DATA</text><text x="70" y="84" class="lane-label">ENGINEER</text>
        <text x="70" y="152" class="lane-label">DATA</text><text x="70" y="164" class="lane-label">SCIENTIST</text>
        <text x="70" y="232" class="lane-label">ANALYTICS</text><text x="70" y="244" class="lane-label">ANALYST</text>
      </g>

      <!-- Connectors first. Cross-lane paths use r=8 orthogonal elbows. -->
      <path d="M246 76 H258" fill="none" stroke="#4f5d75" marker-end="url(#arr-muted)"/>
      <path d="M358 76 H412 Q420 76 420 84 V124" fill="none" stroke="#eb6c36" stroke-width="1.2" marker-end="url(#arr-accent)"/>
      <path d="M470 156 H482" fill="none" stroke="#4f5d75" marker-end="url(#arr-muted)"/>
      <path d="M582 156 H636 Q644 156 644 164 V204" fill="none" stroke="#2e5aa8" marker-end="url(#arr-link)"/>
      <rect x="368" y="56" width="48" height="12" rx="2" fill="#f5f5f5"/>
      <text x="392" y="65" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.06em">RAW TABLE</text>

      <!-- Data Engineer: Capture Events -->
      <rect x="146" y="44" width="100" height="64" rx="6" fill="#f5f5f5" stroke="rgba(45,49,66,0.25)"/>
      <rect x="150" y="48" width="18" height="10" rx="3" fill="rgba(45,49,66,0.12)"/><text x="159" y="53" class="role-text">ENG</text>
      <text x="196" y="67" class="node-title">Capture Events</text><text x="196" y="79" class="node-sub">shop events → batch</text><text x="196" y="91" class="node-tool">NiFi ingest</text>
      <rect x="150" y="98" width="16" height="8" rx="3" fill="#7c8f6f"/><text x="158" y="104" class="chip-text">LS</text>
      <rect x="226" y="98" width="16" height="8" rx="3" fill="#5e7a9b"/><text x="234" y="104" class="chip-text">DB</text>

      <!-- Data Engineer: Land Records -->
      <rect x="258" y="44" width="100" height="64" rx="6" fill="#f5f5f5" stroke="rgba(45,49,66,0.25)"/>
      <rect x="262" y="48" width="18" height="10" rx="3" fill="rgba(45,49,66,0.12)"/><text x="271" y="53" class="role-text">ENG</text>
      <text x="308" y="67" class="node-title">Land Records</text><text x="308" y="79" class="node-sub">events · orders</text><text x="308" y="91" class="node-tool">Object storage</text>
      <rect x="262" y="98" width="16" height="8" rx="3" fill="#5e7a9b"/><text x="270" y="104" class="chip-text">DB</text>
      <rect x="338" y="98" width="16" height="8" rx="3" fill="#5e7a9b"/><text x="346" y="104" class="chip-text">DB</text>

      <!-- Data Scientist: Clean and Model (focal) -->
      <rect x="370" y="124" width="100" height="64" rx="6" fill="rgba(235,108,54,0.07)" stroke="#eb6c36" stroke-width="1.2"/>
      <rect x="374" y="128" width="18" height="10" rx="3" fill="rgba(235,108,54,0.20)"/><text x="383" y="133" class="role-text focal-text">SCI</text>
      <text x="420" y="147" class="node-title">Clean &amp; Model</text><text x="420" y="159" class="node-sub">raw → trusted table</text><text x="420" y="171" class="node-tool">Trino · notebooks</text>
      <rect x="374" y="178" width="16" height="8" rx="3" fill="#5e7a9b"/><text x="382" y="184" class="chip-text">DB</text>
      <rect x="450" y="178" width="16" height="8" rx="3" fill="#b8915a"/><text x="458" y="184" class="chip-text">TB</text>

      <!-- Data Scientist: Curate Metrics -->
      <rect x="482" y="124" width="100" height="64" rx="6" fill="#f5f5f5" stroke="rgba(45,49,66,0.25)"/>
      <rect x="486" y="128" width="18" height="10" rx="3" fill="rgba(45,49,66,0.12)"/><text x="495" y="133" class="role-text">SCI</text>
      <text x="532" y="147" class="node-title">Curate Metrics</text><text x="532" y="159" class="node-sub">conversion · revenue</text><text x="532" y="171" class="node-tool">Trino SQL</text>
      <rect x="486" y="178" width="16" height="8" rx="3" fill="#b8915a"/><text x="494" y="184" class="chip-text">TB</text>
      <rect x="562" y="178" width="16" height="8" rx="3" fill="#b8915a"/><text x="570" y="184" class="chip-text">TB</text>

      <!-- Analyst: Publish Dashboard -->
      <rect x="594" y="204" width="100" height="64" rx="6" fill="#f5f5f5" stroke="rgba(45,49,66,0.25)"/>
      <rect x="598" y="208" width="18" height="10" rx="3" fill="rgba(45,49,66,0.12)"/><text x="607" y="213" class="role-text">ANL</text>
      <text x="644" y="227" class="node-title">Publish Dashboard</text><text x="644" y="239" class="node-sub">metrics → decisions</text><text x="644" y="251" class="node-tool">BI workspace</text>
      <rect x="598" y="258" width="16" height="8" rx="3" fill="#b8915a"/><text x="606" y="264" class="chip-text">TB</text>
      <rect x="674" y="258" width="16" height="8" rx="3" fill="#9c6b50"/><text x="682" y="264" class="chip-text">FL</text>

      <!-- Legend: steps -->
      <text x="164" y="293" class="legend-label">STEPS</text>
      <rect x="180" y="284" width="24" height="12" rx="6" fill="rgba(45,49,66,0.12)"/><text x="192" y="292" class="step-number">01</text><text x="212" y="293" class="legend-text">Ingest</text>
      <rect x="272" y="284" width="24" height="12" rx="6" fill="rgba(45,49,66,0.12)"/><text x="284" y="292" class="step-number">02</text><text x="304" y="293" class="legend-text">Store</text>
      <rect x="360" y="284" width="24" height="12" rx="6" fill="rgba(235,108,54,0.20)"/><text x="372" y="292" class="step-number focal-text">03</text><text x="392" y="293" class="legend-text">Transform</text>
      <rect x="468" y="284" width="24" height="12" rx="6" fill="rgba(45,49,66,0.12)"/><text x="480" y="292" class="step-number">04</text><text x="500" y="293" class="legend-text">Analyze</text>
      <rect x="568" y="284" width="24" height="12" rx="6" fill="rgba(45,49,66,0.12)"/><text x="580" y="292" class="step-number">05</text><text x="600" y="293" class="legend-text">Publish</text>

      <!-- Legend: data types -->
      <text x="164" y="314" class="legend-label">DATA TYPE</text>
      <rect x="180" y="306" width="16" height="8" rx="3" fill="#7c8f6f"/><text x="188" y="312" class="chip-text">LS</text><text x="202" y="314" class="legend-text">Stream</text>
      <rect x="252" y="306" width="16" height="8" rx="3" fill="#5e7a9b"/><text x="260" y="312" class="chip-text">DB</text><text x="274" y="314" class="legend-text">Dataset</text>
      <rect x="332" y="306" width="16" height="8" rx="3" fill="#b8915a"/><text x="340" y="312" class="chip-text">TB</text><text x="354" y="314" class="legend-text">Table</text>
      <rect x="404" y="306" width="16" height="8" rx="3" fill="#9c6b50"/><text x="412" y="312" class="chip-text">FL</text><text x="426" y="314" class="legend-text">Dashboard</text>
      <text x="500" y="314" class="legend-text">left chip = input · right chip = output</text>

      <!-- Legend: flow -->
      <text x="164" y="336" class="legend-label">FLOW</text>
      <line x1="180" y1="333" x2="204" y2="333" stroke="#4f5d75" marker-end="url(#arr-muted)"/><text x="212" y="336" class="legend-text">Standard handoff</text>
      <line x1="324" y1="333" x2="348" y2="333" stroke="#eb6c36" stroke-width="1.2" marker-end="url(#arr-accent)"/><text x="356" y="336" class="legend-text">Focal handoff</text>
      <line x1="460" y1="333" x2="484" y2="333" stroke="#2e5aa8" marker-end="url(#arr-link)"/><text x="492" y="336" class="legend-text">Published output</text>
    </svg>`},{id:"dp-integration",name:"数据平台集成",category:"架构",svg:`<svg viewBox="0 0 1200 664" xmlns="http://www.w3.org/2000/svg" aria-label="Sources connect to a core data platform and three consumer surfaces" role="img" aria-labelledby="dp-integration-title dp-integration-desc"><style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{--paper:#f5f5f5;--paper-2:#ececec;--ink:#2d3142;--muted:#4f5d75;--soft:#7a8399;--accent:#eb6c36;--accent-tint:rgba(235,108,54,.08);--link:#2e5aa8;--rule:rgba(45,49,66,.12);--dot:rgba(45,49,66,.10);--side-fill:rgba(79,93,117,.06);--side-stroke:#7a8399;--zone-fill:rgba(45,49,66,.025);--zone-stroke:rgba(45,49,66,.32);--bar-fill:rgba(45,49,66,.05);--node-fill:#fff;--custom-red:#9c6b50;--custom-red-fill:rgba(156,107,80,.06);--custom-red-stroke:rgba(156,107,80,.35);--custom-blue:#5e7a9b;--custom-blue-fill:rgba(94,122,155,.06);--custom-blue-stroke:rgba(94,122,155,.35);--sans:Arial,system-ui,sans-serif;--serif:Georgia,serif;--mono:monospace,ui-monospace,monospace}
    body{font-family:var(--sans);background:var(--paper);color:var(--ink);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:3rem 2rem}.frame{max-width:1200px;width:100%}.eyebrow{font:500 .66rem var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:.5rem}h1{font:400 clamp(1.5rem,2.4vw + .75rem,2rem)/1.15 var(--serif);letter-spacing:-.02em;margin-bottom:1.5rem}svg text{font-family:var(--sans)}.mono{font-family:var(--mono)}.connector{fill:none;stroke:var(--muted);stroke-width:1.2}.connector.primary{stroke:var(--accent);stroke-width:1.4}.connector.trigger{stroke:var(--muted);stroke-width:1;stroke-dasharray:4 3}.connector.auth{stroke:var(--accent);stroke-width:1.2;stroke-dasharray:5 4}.label-mask{fill:var(--paper)}.edge-label{fill:var(--accent);font:8px var(--mono);letter-spacing:.06em}.zone{fill:var(--zone-fill);stroke:var(--zone-stroke)}.zone-mask,.node-mask{fill:var(--paper)}.zone-label{fill:var(--soft);font:500 8px var(--mono);letter-spacing:.18em}.side-node{fill:var(--side-fill);stroke:var(--side-stroke)}.core-node{fill:var(--accent-tint);stroke:var(--accent)}.bar{fill:var(--bar-fill);stroke:var(--zone-stroke)}.role-box{fill:transparent;stroke:var(--side-stroke);stroke-opacity:.5}.role-box.focal{stroke:var(--accent)}.role-text{fill:var(--side-stroke);font:500 7px var(--mono);letter-spacing:.08em}.role-text.focal{fill:var(--accent)}.node-name{fill:var(--ink);font:600 12px var(--sans)}.node-name.focal{fill:var(--ink)}.node-sub{fill:var(--muted);font:9px var(--mono)}.footer-red{fill:var(--custom-red-fill);stroke:var(--custom-red-stroke)}.footer-blue{fill:var(--custom-blue-fill);stroke:var(--custom-blue-stroke)}.footer-red-text{fill:var(--custom-red)}.footer-blue-text{fill:var(--custom-blue)}.legend-key{fill:var(--muted);font:500 8px var(--mono);letter-spacing:.14em}.legend-text{fill:var(--muted);font:8px var(--sans)}
  </style>
      <title id="dp-integration-title">Generic data platform integration topology</title>
      <desc id="dp-integration-desc">Integration topology showing CRM, POS exports, and an event stream landing in object storage for query, notebooks, dashboards, and a partner API.</desc>
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.9" fill="var(--dot)"/></pattern>
        <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="var(--muted)"/></marker>
        <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="var(--accent)"/></marker>
        <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="var(--link)"/></marker>
        <marker id="arrow-sm" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto"><polygon points="0 0,6 2.5,0 5" fill="var(--muted)"/></marker>
        <marker id="arrow-dim" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="var(--soft)"/></marker>
        <g id="ico-db" fill="none" stroke="currentColor" stroke-width="1.2"><ellipse cx="0" cy="-5" rx="7" ry="3"/><path d="M-7-5V5c0 2 14 2 14 0V-5M-7 0c0 2 14 2 14 0"/></g>
        <g id="ico-file" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M-6-8H2l4 4V8H-6ZM2-8v4h4"/></g>
        <g id="ico-stream" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M-8-5H2M-4 0H8M-8 5H2"/><path d="m0-8 3 3-3 3M6-3l3 3-3 3M0 2l3 3-3 3"/></g>
        <g id="ico-chart" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M-8 8H8M-6 6V0H-2V6M0 6V-7H4V6M6 6V-3H9"/></g>
        <g id="ico-notebook" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="-7" y="-8" width="14" height="16" rx="2"/><path d="M-3-8V8M0-3h4M0 1h4"/></g>
        <g id="ico-api" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M-3-8c-3 0-3 2-3 4v2c0 2-1 2-3 2 2 0 3 0 3 2v2c0 2 0 4 3 4M3-8c3 0 3 2 3 4v2c0 2 1 2 3 2-2 0-3 0-3 2v2c0 2 0 4-3 4"/></g>
        <g id="ico-key" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="-4" cy="0" r="4"/><path d="M0 0H9M6 0v3M3 0v2"/></g>
        <g id="ico-log" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M-8 6h16M-6 3l3-4 3 2 4-7 3 2"/></g>
      </defs>
      <rect width="1200" height="664" fill="var(--paper)"/><rect width="1200" height="664" fill="url(#dots)" opacity=".55"/>
      <rect class="zone" x="260" y="72" width="696" height="336" rx="8" stroke-width="1"/>
      <!-- Connectors are emitted before all node rectangles. -->
      <path class="connector primary" d="M200 124 H360 Q368 124 368 132 V180 Q368 188 376 188 H400" marker-end="url(#arrow-accent)"/>
      <line class="connector primary" x1="200" y1="212" x2="400" y2="212" marker-end="url(#arrow-accent)"/>
      <path class="connector primary" d="M200 300 H360 Q368 300 368 292 V244 Q368 236 376 236 H400" marker-end="url(#arrow-accent)"/>
      <line class="connector primary" x1="560" y1="212" x2="656" y2="212" marker-end="url(#arrow-accent)"/>
      <path class="connector primary" d="M816 188 H960 Q968 188 968 180 V132 Q968 124 976 124 H1000" marker-end="url(#arrow-accent)"/>
      <line class="connector primary" x1="816" y1="212" x2="1000" y2="212" marker-end="url(#arrow-accent)"/>
      <path class="connector primary" d="M816 236 H960 Q968 236 968 244 V292 Q968 300 976 300 H1000" marker-end="url(#arrow-accent)"/>
      <line class="connector trigger" x1="480" y1="160" x2="480" y2="176" marker-end="url(#arrow)"/><line class="connector trigger" x1="736" y1="160" x2="736" y2="176" marker-end="url(#arrow)"/>
      <line class="connector auth" x1="592" y1="460" x2="592" y2="408" marker-end="url(#arrow-accent)"/>
      <!-- Dashed transit crosses the identity footer without treating it as an endpoint. -->
      <line class="connector auth" x1="624" y1="524" x2="624" y2="408" marker-end="url(#arrow-accent)"/>
      <!-- Protocol labels retain an 8px gap from their connector segment. -->
      <g text-anchor="middle"><rect class="label-mask" x="252" y="104" width="44" height="12" rx="2"/><text class="edge-label" x="274" y="113">REST</text><rect class="label-mask" x="272" y="192" width="48" height="12" rx="2"/><text class="edge-label" x="296" y="201">CSV</text><rect class="label-mask" x="248" y="280" width="56" height="12" rx="2"/><text class="edge-label" x="276" y="289">EVENTS</text><rect class="label-mask" x="584" y="192" width="48" height="12" rx="2"/><text class="edge-label" x="608" y="201">READ</text><rect class="label-mask" x="856" y="168" width="48" height="12" rx="2"/><text class="edge-label" x="880" y="177">JDBC</text><rect class="label-mask" x="872" y="192" width="56" height="12" rx="2"/><text class="edge-label" x="900" y="201">KERNEL</text><rect class="label-mask" x="856" y="216" width="56" height="12" rx="2"/><text class="edge-label" x="884" y="225">HTTPS</text></g>
      <g><rect class="label-mask" x="548" y="420" width="32" height="12" rx="2"/><text class="edge-label" x="564" y="429" text-anchor="middle">AUTH</text><rect class="label-mask" x="636" y="420" width="32" height="12" rx="2"/><text class="edge-label" x="652" y="429" text-anchor="middle">AUTH</text></g>
      <!-- Zone label -->
      <rect class="zone-mask" x="548" y="68" width="120" height="16" rx="2"/><text class="zone-label" x="608" y="79" text-anchor="middle">DATA PLATFORM</text>
      <!-- Sources -->
      <g text-anchor="middle">
        <g><rect class="node-mask" x="40" y="92" width="160" height="64" rx="6"/><rect class="side-node" x="40" y="92" width="160" height="64" rx="6"/><use href="#ico-db" transform="translate(64 124)" style="color:var(--muted)"/><text class="node-name" x="120" y="120">CRM</text><text class="node-sub" x="120" y="140">customer records</text></g>
        <g><rect class="node-mask" x="40" y="180" width="160" height="64" rx="6"/><rect class="side-node" x="40" y="180" width="160" height="64" rx="6"/><use href="#ico-file" transform="translate(64 212)" style="color:var(--muted)"/><text class="node-name" x="120" y="208">POS exports</text><text class="node-sub" x="120" y="228">daily CSV batches</text></g>
        <g><rect class="node-mask" x="40" y="268" width="160" height="64" rx="6"/><rect class="side-node" x="40" y="268" width="160" height="64" rx="6"/><use href="#ico-stream" transform="translate(64 300)" style="color:var(--muted)"/><text class="node-name" x="120" y="296">Event stream</text><text class="node-sub" x="120" y="316">near-real-time events</text></g>
      </g>
      <!-- Core: fixed 160px nodes keep clean connector corridors; centers remain evenly spaced. -->
      <g text-anchor="middle"><rect class="node-mask" x="276" y="116" width="664" height="44" rx="6"/><rect class="bar" x="276" y="116" width="664" height="44" rx="6"/><rect class="role-box" x="288" y="128" width="32" height="12" rx="2"/><text class="role-text" x="304" y="137">DAG</text><text class="node-name" x="608" y="136">Orchestrator</text><text class="node-sub" x="608" y="151">schedules · retries · lineage</text>
        <rect class="node-mask" x="400" y="176" width="160" height="72" rx="6"/><rect class="core-node" x="400" y="176" width="160" height="72" rx="6"/><rect class="role-box focal" x="408" y="184" width="44" height="12" rx="2"/><text class="role-text focal" x="430" y="193">STORE</text><text class="node-name focal" x="480" y="214">Object storage</text><text class="node-sub" x="480" y="232">versioned data objects</text>
        <rect class="node-mask" x="656" y="176" width="160" height="72" rx="6"/><rect class="core-node" x="656" y="176" width="160" height="72" rx="6"/><rect class="role-box focal" x="664" y="184" width="32" height="12" rx="2"/><text class="role-text focal" x="680" y="193">SQL</text><text class="node-name focal" x="736" y="214">Query engine</text><text class="node-sub" x="736" y="232">federated SQL access</text></g>
      <!-- Consumers -->
      <g text-anchor="middle">
        <g><rect class="node-mask" x="1000" y="92" width="160" height="64" rx="6"/><rect class="side-node" x="1000" y="92" width="160" height="64" rx="6"/><use href="#ico-chart" transform="translate(1024 124)" style="color:var(--muted)"/><text class="node-name" x="1080" y="120">BI tool</text><text class="node-sub" x="1080" y="140">dashboards · reports</text></g>
        <g><rect class="node-mask" x="1000" y="180" width="160" height="64" rx="6"/><rect class="side-node" x="1000" y="180" width="160" height="64" rx="6"/><use href="#ico-notebook" transform="translate(1024 212)" style="color:var(--muted)"/><text class="node-name" x="1080" y="208">Notebooks</text><text class="node-sub" x="1080" y="228">Python · exploration</text></g>
        <g><rect class="node-mask" x="1000" y="268" width="160" height="64" rx="6"/><rect class="side-node" x="1000" y="268" width="160" height="64" rx="6"/><use href="#ico-api" transform="translate(1024 300)" style="color:var(--muted)"/><text class="node-name" x="1080" y="296">Partner API</text><text class="node-sub" x="1080" y="316">scoped data products</text></g>
      </g>
      <!-- Layer-wide footer services -->
      <g><rect class="node-mask" x="40" y="460" width="1120" height="56" rx="6"/><rect class="footer-red" x="40" y="460" width="1120" height="56" rx="6"/><use href="#ico-key" transform="translate(72 488)" style="color:var(--custom-red)"/><text class="node-name footer-red-text" x="96" y="486">Identity provider</text><text class="node-sub" x="96" y="502">SSO · service identities · policy groups</text>
        <rect class="node-mask" x="40" y="524" width="1120" height="56" rx="6"/><rect class="footer-blue" x="40" y="524" width="1120" height="56" rx="6"/><use href="#ico-log" transform="translate(72 552)" style="color:var(--custom-blue)"/><text class="node-name footer-blue-text" x="96" y="550">Centralized logging</text><text class="node-sub" x="96" y="566">platform events · audit trail · retention</text></g>
      <!-- Legend -->
      <line x1="40" y1="608" x2="1160" y2="608" stroke="var(--rule)" stroke-width=".8"/><text class="legend-key" x="40" y="628">TYPE KEY</text><rect x="128" y="620" width="16" height="12" rx="2" fill="var(--side-fill)" stroke="var(--side-stroke)"/><text class="legend-text" x="152" y="630">Source / consumer</text><rect x="296" y="620" width="16" height="12" rx="2" fill="var(--accent-tint)" stroke="var(--accent)"/><text class="legend-text" x="320" y="630">Focal platform surface</text><rect x="492" y="620" width="16" height="12" rx="2" fill="var(--bar-fill)" stroke="var(--zone-stroke)"/><text class="legend-text" x="516" y="630">Orchestration</text><line x1="640" y1="626" x2="672" y2="626" stroke="var(--accent)" stroke-width="1.4" marker-end="url(#arrow-accent)"/><text class="legend-text" x="684" y="630">Primary data path</text><line x1="824" y1="626" x2="856" y2="626" stroke="var(--accent)" stroke-dasharray="5 4" marker-end="url(#arrow-accent)"/><text class="legend-text" x="868" y="630">Layer-wide service</text>
    </svg>`},{id:"dp-security-matrix",name:"权限矩阵",category:"架构",svg:`<svg viewBox="0 0 1084 400" role="img" aria-labelledby="dp-security-matrix-title dp-security-matrix-desc" xmlns="http://www.w3.org/2000/svg"><style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{--paper:#f5f5f5;--ink:#2d3142;--muted:#4f5d75;--soft:#7a8399;--rule:rgba(45,49,66,.12);--accent:#eb6c36;--sans:Arial,system-ui,sans-serif;--serif:Georgia,serif;--mono:monospace,ui-monospace,monospace}
    body{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:3rem 2rem;background:var(--paper);color:var(--ink);font-family:var(--sans)}
    .frame{width:100%;max-width:1200px}.eyebrow{margin-bottom:.5rem;color:var(--muted);font:500 .66rem/1 var(--mono);letter-spacing:.18em;text-transform:uppercase}
    h1{margin-bottom:.35rem;font:400 clamp(1.5rem,2.4vw + .75rem,2rem)/1.15 var(--serif);letter-spacing:-.02em}.subtitle{margin-bottom:1.5rem;color:var(--muted);font-size:.9rem;line-height:1.5}
    .diagram{overflow-x:auto}
    svg .component-head,svg .component{fill:#fff;stroke:rgba(45,49,66,.12);stroke-width:.8}svg .role{fill:#2d3142}
    svg .head-name,svg .component-name,svg .role-name,svg .value{font-family:Arial,sans-serif}svg .head-name,svg .component-name,svg .role-name{font-size:11px;font-weight:600}
    svg .head-name,svg .component-name{fill:#2d3142}svg .role-name,svg .role-code{fill:#f5f5f5}svg .head-sub,svg .role-code,svg .hint,svg .legend-text,svg .focal-sub{font-family:monospace,monospace}
    svg .head-sub,svg .hint,svg .legend-text{fill:#4f5d75}svg .head-sub,svg .role-code,svg .hint{font-size:9px}svg .role-code{opacity:.85}
    svg .cell{stroke:rgba(45,49,66,.12);stroke-width:.6}svg .full{fill:rgba(45,49,66,.08)}svg .write{fill:#fff}svg .read{fill:rgba(79,93,117,.08)}svg .none{fill:#f5f5f5}
    svg .value{font-size:10px}svg .value.full-text{fill:#2d3142;font-weight:600}svg .value.write-text{fill:#2d3142}svg .value.read-text{fill:#4f5d75}svg .value.none-text{fill:#7a8399}
    svg .focal{fill:rgba(235,108,54,.07);stroke:#eb6c36;stroke-width:1.4}svg .focal-text{fill:#eb6c36;font-weight:600}svg .focal-sub{fill:#eb6c36;font-size:8px;opacity:.85}
    svg .legend-text{font-size:9px}
  </style>
        <title id="dp-security-matrix-title">Data platform access matrix</title><desc id="dp-security-matrix-desc">A five by five permission matrix for platform roles and components.</desc>
        <rect width="1084" height="400" fill="#f5f5f5"/>

        <!-- Header: y=72, h=52; role x positions derive from the 148px column formula -->
        <rect class="component-head" x="12" y="72" width="208" height="52" rx="6"/><text class="head-name" x="116" y="96" text-anchor="middle">Component</text><text class="head-sub" x="116" y="112" text-anchor="middle">vs. AD group</text>
        <rect class="role" x="232" y="72" width="148" height="52" rx="6"/><text class="role-name" x="306" y="92" text-anchor="middle">Data Engineer</text><text class="role-code" x="306" y="108" text-anchor="middle">GRP-DATA-ENG</text>
        <rect class="role" x="396" y="72" width="148" height="52" rx="6"/><text class="role-name" x="470" y="92" text-anchor="middle">Data Scientist</text><text class="role-code" x="470" y="108" text-anchor="middle">GRP-DATA-SCI</text>
        <rect class="role" x="560" y="72" width="148" height="52" rx="6"/><text class="role-name" x="634" y="92" text-anchor="middle">Analyst</text><text class="role-code" x="634" y="108" text-anchor="middle">GRP-ANALYST</text>
        <rect class="role" x="724" y="72" width="148" height="52" rx="6"/><text class="role-name" x="798" y="92" text-anchor="middle">Administrator</text><text class="role-code" x="798" y="108" text-anchor="middle">GRP-ADMIN</text>
        <rect class="role" x="888" y="72" width="148" height="52" rx="6"/><text class="role-name" x="962" y="92" text-anchor="middle">External Partner</text><text class="role-code" x="962" y="108" text-anchor="middle">GRP-PARTNER</text>

        <!-- Object storage, y=140 -->
        <rect class="component" x="12" y="140" width="208" height="36" rx="4"/><text class="component-name" x="24" y="162">Object storage</text><text class="hint" x="208" y="162" text-anchor="end">S3</text>
        <rect class="cell write" x="232" y="140" width="148" height="36" rx="4"/><text class="value write-text" x="306" y="162" text-anchor="middle">Write</text>
        <rect class="cell read" x="396" y="140" width="148" height="36" rx="4"/><text class="value read-text" x="470" y="162" text-anchor="middle">Read</text>
        <rect class="cell none" x="560" y="140" width="148" height="36" rx="4"/><text class="value none-text" x="634" y="162" text-anchor="middle">None</text>
        <rect class="cell full" x="724" y="140" width="148" height="36" rx="4"/><text class="value full-text" x="798" y="162" text-anchor="middle">Admin</text>
        <rect class="cell none" x="888" y="140" width="148" height="36" rx="4"/><text class="value none-text" x="962" y="162" text-anchor="middle">None</text>

        <!-- Query engine, y=180 -->
        <rect class="component" x="12" y="180" width="208" height="36" rx="4"/><text class="component-name" x="24" y="202">Query engine</text><text class="hint" x="208" y="202" text-anchor="end">SQL</text>
        <rect class="cell write" x="232" y="180" width="148" height="36" rx="4"/><text class="value write-text" x="306" y="202" text-anchor="middle">Write</text>
        <rect class="cell read" x="396" y="180" width="148" height="36" rx="4"/><text class="value read-text" x="470" y="202" text-anchor="middle">Read</text>
        <rect class="cell read" x="560" y="180" width="148" height="36" rx="4"/><text class="value read-text" x="634" y="202" text-anchor="middle">Read</text>
        <rect class="cell full" x="724" y="180" width="148" height="36" rx="4"/><text class="value full-text" x="798" y="202" text-anchor="middle">Admin</text>
        <rect class="cell read" x="888" y="180" width="148" height="36" rx="4"/><text class="value read-text" x="962" y="202" text-anchor="middle">Read</text>

        <!-- Notebooks, y=220 -->
        <rect class="component" x="12" y="220" width="208" height="36" rx="4"/><text class="component-name" x="24" y="242">Notebooks</text><text class="hint" x="208" y="242" text-anchor="end">PY</text>
        <rect class="cell write" x="232" y="220" width="148" height="36" rx="4"/><text class="value write-text" x="306" y="242" text-anchor="middle">Write</text>
        <rect class="cell write" x="396" y="220" width="148" height="36" rx="4"/><text class="value write-text" x="470" y="242" text-anchor="middle">Write</text>
        <rect class="cell none" x="560" y="220" width="148" height="36" rx="4"/><text class="value none-text" x="634" y="242" text-anchor="middle">None</text>
        <rect class="cell full" x="724" y="220" width="148" height="36" rx="4"/><text class="value full-text" x="798" y="242" text-anchor="middle">Admin</text>
        <rect class="cell none" x="888" y="220" width="148" height="36" rx="4"/><text class="value none-text" x="962" y="242" text-anchor="middle">None</text>

        <!-- BI tool, y=260; one focal access boundary -->
        <rect class="component" x="12" y="260" width="208" height="36" rx="4"/><text class="component-name" x="24" y="282">BI tool</text><text class="hint" x="208" y="282" text-anchor="end">DASH</text>
        <rect class="cell write" x="232" y="260" width="148" height="36" rx="4"/><text class="value write-text" x="306" y="282" text-anchor="middle">Write</text>
        <rect class="cell read" x="396" y="260" width="148" height="36" rx="4"/><text class="value read-text" x="470" y="282" text-anchor="middle">Read</text>
        <rect class="cell write" x="560" y="260" width="148" height="36" rx="4"/><text class="value write-text" x="634" y="282" text-anchor="middle">Write</text>
        <rect class="cell full" x="724" y="260" width="148" height="36" rx="4"/><text class="value full-text" x="798" y="282" text-anchor="middle">Admin</text>
        <rect class="focal" x="888" y="260" width="148" height="36" rx="4"/><text class="value focal-text" x="962" y="278" text-anchor="middle">Read</text><text class="focal-sub" x="962" y="290" text-anchor="middle">shared dashboards</text>

        <!-- Orchestrator, y=300 -->
        <rect class="component" x="12" y="300" width="208" height="36" rx="4"/><text class="component-name" x="24" y="322">Orchestrator</text><text class="hint" x="208" y="322" text-anchor="end">DAG</text>
        <rect class="cell write" x="232" y="300" width="148" height="36" rx="4"/><text class="value write-text" x="306" y="322" text-anchor="middle">Write</text>
        <rect class="cell read" x="396" y="300" width="148" height="36" rx="4"/><text class="value read-text" x="470" y="322" text-anchor="middle">Read</text>
        <rect class="cell none" x="560" y="300" width="148" height="36" rx="4"/><text class="value none-text" x="634" y="322" text-anchor="middle">None</text>
        <rect class="cell full" x="724" y="300" width="148" height="36" rx="4"/><text class="value full-text" x="798" y="322" text-anchor="middle">Admin</text>
        <rect class="cell none" x="888" y="300" width="148" height="36" rx="4"/><text class="value none-text" x="962" y="322" text-anchor="middle">None</text>

        <!-- Legend: rows_bottom=336, legend_y_top=356 -->
        <line x1="12" y1="356" x2="1072" y2="356" stroke="rgba(45,49,66,.12)" stroke-width=".8"/><text class="legend-text" x="12" y="380" letter-spacing=".14em">LEGEND</text>
        <rect class="cell full" x="96" y="368" width="16" height="12" rx="2"/><text class="legend-text" x="120" y="380">Admin</text><rect class="cell write" x="200" y="368" width="16" height="12" rx="2"/><text class="legend-text" x="224" y="380">Write</text><rect class="cell read" x="304" y="368" width="16" height="12" rx="2"/><text class="legend-text" x="328" y="380">Read</text><rect class="cell none" x="408" y="368" width="16" height="12" rx="2"/><text class="legend-text" x="432" y="380">None</text><rect class="focal" x="504" y="368" width="16" height="12" rx="2"/><text class="legend-text" x="528" y="380">partner read boundary</text>
      </svg>`},{id:"sankey",name:"流量桑基图",category:"数据",svg:`<svg viewBox="0 0 1000 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sankey-title sankey-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="sankey-title">CI compute budget · a month of pipeline minutes</title>
      <desc id="sankey-desc">Sankey diagram showing 12,000 monthly CI minutes splitting into unit test, E2E, build, and lint stages, then merging into passed, failed, and flaked outcomes, with the flaky-rerun path highlighted as the one accent flow.</desc>

      <rect width="100%" height="100%" fill="#f5f5f5"/>

      <!-- Column headers -->
      <text x="124" y="76" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">BUDGET</text>
      <text x="504" y="76" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">TEST STAGE</text>
      <text x="884" y="76" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">OUTCOME</text>

      <!-- Ribbons: col1 -> col2. Both control points sit on the midpoint x, so every band
           meets its node bar horizontally at each end rather than arriving at a slant. -->
      <path d="M132,120 C316,120 316,120 500,120 L500,224 C316,224 316,224 132,224 Z" fill="rgba(79,93,117,0.18)"/>
      <path d="M132,224 C316,224 316,256 500,256 L500,336 C316,336 316,304 132,304 Z" fill="rgba(79,93,117,0.18)"/>
      <path d="M132,304 C316,304 316,368 500,368 L500,408 C316,408 316,344 132,344 Z" fill="rgba(79,93,117,0.18)"/>
      <path d="M132,344 C316,344 316,440 500,440 L500,456 C316,456 316,360 132,360 Z" fill="rgba(79,93,117,0.18)"/>

      <!-- Ribbons: col2 -> col3, ordinary. Each source stacks its outgoing bands in target
           order and each target stacks its incoming bands in source order, which is what
           keeps every bar exactly saturated. Four sources feeding three outcomes cannot be
           drawn crossing-free; what remains is the minimum. -->
      <path d="M512,136 C696,136 696,148 880,148 L880,236 C696,236 696,224 512,224 Z" fill="rgba(79,93,117,0.18)"/>
      <path d="M512,260 C696,260 696,236 880,236 L880,312 C696,312 696,336 512,336 Z" fill="rgba(79,93,117,0.18)"/>
      <path d="M512,368 C696,368 696,312 880,312 L880,328 C696,328 696,384 512,384 Z" fill="rgba(79,93,117,0.18)"/>
      <path d="M512,384 C696,384 696,344 880,344 L880,368 C696,368 696,408 512,408 Z" fill="rgba(79,93,117,0.18)"/>
      <path d="M512,440 C696,440 696,328 880,328 L880,336 C696,336 696,448 512,448 Z" fill="rgba(79,93,117,0.18)"/>
      <path d="M512,448 C696,448 696,368 880,368 L880,376 C696,376 696,456 512,456 Z" fill="rgba(79,93,117,0.18)"/>

      <!-- Ribbons: col2 -> col3, flaky-rerun path (the one accent flow) -->
      <path d="M512,120 C696,120 696,120 880,120 L880,136 C696,136 696,136 512,136 Z" fill="rgba(235,108,54,0.28)"/>
      <path d="M512,256 C696,256 696,136 880,136 L880,140 C696,140 696,260 512,260 Z" fill="rgba(235,108,54,0.28)"/>

      <!-- Nodes -->
      <rect x="120" y="120" width="12" height="240" fill="#2d3142"/>
      <rect x="500" y="120" width="12" height="104" fill="#2d3142"/>
      <rect x="500" y="256" width="12" height="80" fill="#2d3142"/>
      <rect x="500" y="368" width="12" height="40" fill="#2d3142"/>
      <rect x="500" y="440" width="12" height="16" fill="#2d3142"/>
      <rect x="880" y="120" width="12" height="20" fill="#2d3142"/>
      <rect x="880" y="148" width="12" height="188" fill="#2d3142"/>
      <rect x="880" y="344" width="12" height="32" fill="#2d3142"/>

      <!-- Labels: column 1, outside, anchored end -->
      <text x="104" y="236" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="end">CI minutes</text>
      <text x="104" y="252" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">12,000 min</text>

      <!-- Labels: column 2, centred in the gutter above the bar, where the bands separate. -->

      <text x="504" y="96" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Unit tests</text>
      <text x="504" y="112" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">5,200 min</text>

      <text x="504" y="236" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">E2E</text>
      <text x="504" y="252" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">4,000 min</text>

      <text x="504" y="348" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Build</text>
      <text x="504" y="364" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">2,000 min</text>

      <text x="504" y="420" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Lint</text>
      <text x="504" y="436" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">800 min</text>

      <!-- Labels: column 3, outside, anchored start -->

      <text x="908" y="124" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="start">Flaked</text>
      <text x="908" y="136" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="start">1,000 min</text>

      <text x="908" y="236" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="start">Passed</text>
      <text x="908" y="252" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="start">9,400 min</text>

      <text x="908" y="356" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="start">Failed</text>
      <text x="908" y="372" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="start">1,600 min</text>

      <!-- Legend -->
      <line x1="40" y1="492" x2="960" y2="492" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="40" y="508" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

      <rect x="40" y="520" width="16" height="8" fill="rgba(79,93,117,0.18)" stroke="#4f5d75" stroke-width="1"/>
      <text x="64" y="528" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Flow · stage routing</text>

      <rect x="220" y="520" width="16" height="8" fill="rgba(235,108,54,0.28)" stroke="#eb6c36" stroke-width="1"/>
      <text x="244" y="528" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Flaked path · reruns</text>

      <rect x="420" y="520" width="16" height="8" fill="#2d3142"/>
      <text x="444" y="528" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Node · stage total</text>

      <text x="600" y="528" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif" font-style="italic">Two coral ribbons — flaky reruns burn ~8% of the monthly CI budget.</text>
    </svg>`},{id:"fishbone",name:"原因分析",category:"分析",svg:`<svg viewBox="-40 0 1480 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="fishbone-title fishbone-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1320px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="fishbone-title">Checkout p99 latency · Root-cause fishbone</title>
      <desc id="fishbone-desc">Fishbone diagram tracing a checkout latency incident to five candidate cause categories, with a missing database index under Data confirmed as the root cause.</desc>
      <defs>
        <marker id="fishbone-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#2d3142"/>
        </marker>
      </defs>

      <rect x="-40" y="0" width="1480" height="600" fill="#f5f5f5"/>

      <!-- Spine -->
      <line x1="120" y1="320" x2="1200" y2="320" stroke="#2d3142" stroke-width="1.2" marker-end="url(#fishbone-arrow)"/>

      <!-- Bones -->
      <line x1="880" y1="320" x2="784" y2="152" stroke="#2d3142" stroke-width="1.2"/>
      <line x1="720" y1="320" x2="624" y2="488" stroke="#eb6c36" stroke-width="1.2"/>
      <line x1="560" y1="320" x2="464" y2="152" stroke="#2d3142" stroke-width="1.2"/>
      <line x1="400" y1="320" x2="304" y2="488" stroke="#2d3142" stroke-width="1.2"/>
      <line x1="240" y1="320" x2="144" y2="152" stroke="#2d3142" stroke-width="1.2"/>

      <!-- Sub-cause ticks + labels · Deploy -->
      <line x1="848" y1="264" x2="816" y2="264" stroke="#4f5d75" stroke-width="1"/>
      <text x="812" y="260" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">canary skipped</text>
      <line x1="816" y1="208" x2="784" y2="208" stroke="#4f5d75" stroke-width="1"/>
      <text x="780" y="204" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">config drift</text>

      <!-- Sub-cause ticks + labels · Data (root cause) -->
      <line x1="688" y1="376" x2="656" y2="376" stroke="#4f5d75" stroke-width="1"/>
      <text x="652" y="388" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">index missing on orders.created_at</text>
      <line x1="656" y1="432" x2="624" y2="432" stroke="#4f5d75" stroke-width="1"/>
      <text x="620" y="444" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">table 3x forecast</text>

      <!-- Sub-cause ticks + labels · Runtime -->
      <line x1="528" y1="264" x2="496" y2="264" stroke="#4f5d75" stroke-width="1"/>
      <text x="492" y="260" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">connection pool cap 20</text>
      <line x1="496" y1="208" x2="464" y2="208" stroke="#4f5d75" stroke-width="1"/>
      <text x="460" y="204" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">GC pauses</text>

      <!-- Sub-cause ticks + labels · Observability -->
      <line x1="368" y1="376" x2="336" y2="376" stroke="#4f5d75" stroke-width="1"/>
      <text x="332" y="388" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">no p99 alert</text>
      <line x1="336" y1="432" x2="304" y2="432" stroke="#4f5d75" stroke-width="1"/>
      <text x="300" y="444" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">dashboard sampled at 5m</text>

      <!-- Sub-cause tick + label · People -->
      <line x1="192" y1="236" x2="160" y2="236" stroke="#4f5d75" stroke-width="1"/>
      <text x="156" y="232" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">on-call handover mid-incident</text>

      <!-- Category tag boxes -->
      <rect x="724" y="116" width="120" height="28" rx="4" fill="#f5f5f5" stroke="#2d3142" stroke-width="0.8"/>
      <text x="784" y="134" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">DEPLOY</text>

      <rect x="564" y="496" width="120" height="28" rx="4" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="0.8"/>
      <text x="624" y="514" fill="#eb6c36" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">DATA</text>

      <rect x="404" y="116" width="120" height="28" rx="4" fill="#f5f5f5" stroke="#2d3142" stroke-width="0.8"/>
      <text x="464" y="134" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">RUNTIME</text>

      <rect x="244" y="496" width="120" height="28" rx="4" fill="#f5f5f5" stroke="#2d3142" stroke-width="0.8"/>
      <text x="304" y="514" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">OBSERVABILITY</text>

      <rect x="84" y="116" width="120" height="28" rx="4" fill="#f5f5f5" stroke="#2d3142" stroke-width="0.8"/>
      <text x="144" y="134" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">PEOPLE</text>

      <!-- Effect box -->
      <rect x="1200" y="272" width="200" height="96" rx="6" fill="#f5f5f5"/>
      <rect x="1200" y="272" width="200" height="96" rx="6" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
      <rect x="1208" y="280" width="48" height="12" rx="2" fill="transparent" stroke="rgba(235,108,54,0.40)" stroke-width="0.8"/>
      <text x="1232" y="289" fill="#eb6c36" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">EFFECT</text>
      <text x="1300" y="324" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Checkout p99 latency</text>
      <text x="1300" y="340" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">4x for 90 minutes</text>

      <!-- Legend -->
      <line x1="40" y1="560" x2="1400" y2="560" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="40" y="576" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

      <line x1="40" y1="588" x2="56" y2="588" stroke="#2d3142" stroke-width="1.2"/>
      <text x="64" y="592" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Category (bone)</text>

      <line x1="260" y1="588" x2="276" y2="588" stroke="#eb6c36" stroke-width="1.2"/>
      <text x="284" y="592" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Confirmed root cause</text>

      <line x1="480" y1="588" x2="496" y2="588" stroke="#4f5d75" stroke-width="1"/>
      <text x="504" y="592" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Sub-cause</text>

      <rect x="700" y="584" width="16" height="8" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
      <text x="724" y="592" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Observed effect</text>
    </svg>`},{id:"wardley",name:"价值链地图",category:"分析",svg:`<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="wardley-title wardley-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="wardley-title">AI assistant product · Wardley map</title>
      <desc id="wardley-desc">Wardley map plotting an AI assistant product's value chain from the user-facing need down to raw infrastructure against genesis-to-commodity evolution, with agent orchestration commoditising toward the product band.</desc>
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
        </pattern>
        <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/>
        </marker>
      </defs>

      <rect width="100%" height="100%" fill="#f5f5f5"/>
      <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

      <!-- Axis lines (value chain vertical, evolution horizontal) -->
      <line x1="120" y1="60" x2="120" y2="340" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>
      <line x1="120" y1="340" x2="920" y2="340" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>

      <!-- Evolution band separators -->
      <line x1="320" y1="60" x2="320" y2="340" stroke="rgba(45,49,66,0.10)" stroke-width="0.8" stroke-dasharray="4,4"/>
      <line x1="520" y1="60" x2="520" y2="340" stroke="rgba(45,49,66,0.10)" stroke-width="0.8" stroke-dasharray="4,4"/>
      <line x1="720" y1="60" x2="720" y2="340" stroke="rgba(45,49,66,0.10)" stroke-width="0.8" stroke-dasharray="4,4"/>

      <!-- Band labels -->
      <text x="220" y="356" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.18em">GENESIS</text>
      <text x="420" y="356" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.18em">CUSTOM-BUILT</text>
      <text x="620" y="356" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.18em">PRODUCT</text>
      <text x="820" y="356" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.18em">COMMODITY</text>

      <!-- Value-chain axis labels (stacked lines, never writing-mode) -->
      <text x="112" y="44" fill="#2d3142" font-size="9" font-weight="500" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.14em">VISIBLE TO</text>
      <text x="112" y="56" fill="#2d3142" font-size="9" font-weight="500" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.14em">THE USER</text>
      <text x="112" y="352" fill="#2d3142" font-size="9" font-weight="500" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.14em">INVISIBLE</text>

      <!-- Dependency links (exempt from the orthogonal-elbow rule — position is the data) -->
      <line x1="420" y1="92" x2="620" y2="124" stroke="#4f5d75" stroke-width="0.8"/>
      <line x1="620" y1="124" x2="420" y2="156" stroke="#4f5d75" stroke-width="0.8"/>
      <line x1="420" y1="156" x2="220" y2="188" stroke="#4f5d75" stroke-width="0.8"/>
      <line x1="420" y1="156" x2="620" y2="220" stroke="#4f5d75" stroke-width="0.8"/>
      <line x1="420" y1="156" x2="680" y2="252" stroke="#4f5d75" stroke-width="0.8"/>
      <line x1="620" y1="220" x2="820" y2="316" stroke="#4f5d75" stroke-width="0.8"/>
      <line x1="680" y1="252" x2="820" y2="284" stroke="#4f5d75" stroke-width="0.8"/>
      <line x1="220" y1="188" x2="680" y2="252" stroke="#4f5d75" stroke-width="0.8"/>

      <!-- Movement arrow (the 2nd accent element) -->
      <line x1="428" y1="156" x2="504" y2="156" stroke="#eb6c36" stroke-width="1.5" stroke-dasharray="5,4" marker-end="url(#arrow-accent)"/>

      <!-- Components -->
      <circle cx="420" cy="92" r="6" fill="#f5f5f5" stroke="#2d3142" stroke-width="1"/>
      <text x="420" y="80" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Answer in the flow of work</text>

      <circle cx="620" cy="124" r="6" fill="#f5f5f5" stroke="#2d3142" stroke-width="1"/>
      <text x="620" y="112" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Chat UI</text>

      <!-- Moving component (the 1st accent element) -->
      <circle cx="420" cy="156" r="6" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1.5"/>
      <text x="420" y="144" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Agent orchestration</text>

      <circle cx="220" cy="188" r="6" fill="#f5f5f5" stroke="#2d3142" stroke-width="1"/>
      <text x="220" y="176" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Eval harness</text>

      <circle cx="620" cy="220" r="6" fill="#f5f5f5" stroke="#2d3142" stroke-width="1"/>
      <text x="620" y="208" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Vector store</text>

      <circle cx="680" cy="252" r="6" fill="#f5f5f5" stroke="#2d3142" stroke-width="1"/>
      <text x="680" y="240" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">LLM API</text>

      <circle cx="820" cy="284" r="6" fill="#f5f5f5" stroke="#2d3142" stroke-width="1"/>
      <text x="820" y="272" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">GPU compute</text>

      <circle cx="820" cy="316" r="6" fill="#f5f5f5" stroke="#2d3142" stroke-width="1"/>
      <text x="836" y="320" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="start">Object storage</text>

      <!-- Legend -->
      <line x1="40" y1="396" x2="960" y2="396" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="40" y="412" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

      <circle cx="48" cy="428" r="4" fill="#f5f5f5" stroke="#2d3142" stroke-width="1"/>
      <text x="64" y="432" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Component</text>

      <line x1="220" y1="428" x2="248" y2="428" stroke="#4f5d75" stroke-width="0.8"/>
      <text x="256" y="432" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Dependency</text>

      <circle cx="404" cy="428" r="4" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1.5"/>
      <line x1="416" y1="428" x2="440" y2="428" stroke="#eb6c36" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="448" y="432" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Evolving</text>

      <text x="560" y="432" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif" font-style="italic">One coral. Position along evolution is the signal — the arrow marks what's about to commoditise.</text>
    </svg>`},{id:"kanban",name:"任务看板",category:"规划",svg:`<svg viewBox="0 0 1120 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="kanban-title kanban-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="kanban-title">Platform team board · Kanban</title>
      <desc id="kanban-desc">Kanban board showing a platform team's work-in-progress across backlog, in-progress, review, and done columns, with the in-progress column over its WIP limit and one blocked card awaiting a vendor maintenance window.</desc>
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="#f5f5f5"/>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

        <!-- Column backgrounds -->
        <rect x="32"  y="40" width="240" height="324" rx="8" fill="rgba(45,49,66,0.02)"/>
        <rect x="304" y="40" width="240" height="324" rx="8" fill="rgba(45,49,66,0.02)"/>
        <rect x="576" y="40" width="240" height="324" rx="8" fill="rgba(45,49,66,0.02)"/>
        <rect x="848" y="40" width="240" height="324" rx="8" fill="rgba(45,49,66,0.02)"/>

        <!-- Column headers -->
        <text x="48"  y="60" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Backlog</text>
        <text x="320" y="60" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">In progress</text>
        <text x="592" y="60" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Review</text>
        <text x="864" y="60" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Done</text>

        <!-- WIP chips (rx=2, rectangular — never a pill) -->
        <rect x="216" y="48" width="40" height="16" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
        <text x="236" y="59" fill="rgba(45,49,66,0.8)" font-size="8" font-family="monospace, monospace" text-anchor="middle">3</text>

        <rect x="488" y="48" width="40" height="16" rx="2" fill="transparent" stroke="#eb6c36" stroke-width="0.8"/>
        <text x="508" y="59" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle">4/3</text>

        <rect x="760" y="48" width="40" height="16" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
        <text x="780" y="59" fill="rgba(45,49,66,0.8)" font-size="8" font-family="monospace, monospace" text-anchor="middle">2/3</text>

        <rect x="1032" y="48" width="40" height="16" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
        <text x="1052" y="59" fill="rgba(45,49,66,0.8)" font-size="8" font-family="monospace, monospace" text-anchor="middle">2</text>

        <!-- Header rules -->
        <line x1="32"  y1="76" x2="272"  y2="76" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>
        <line x1="304" y1="76" x2="544"  y2="76" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>
        <line x1="576" y1="76" x2="816"  y2="76" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>
        <line x1="848" y1="76" x2="1088" y2="76" stroke="rgba(45,49,66,0.20)" stroke-width="1"/>

        <!-- Backlog: 3 default cards -->
        <rect x="48" y="88"  width="208" height="56" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="60" y="110" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">API rate limiting</text>
        <text x="60" y="126" fill="#4f5d75" font-size="9" font-family="monospace, monospace">AVA-201 · priya</text>

        <rect x="48" y="156" width="208" height="56" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="60" y="178" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Terraform module cleanup</text>
        <text x="60" y="194" fill="#4f5d75" font-size="9" font-family="monospace, monospace">AVA-205 · leo</text>

        <rect x="48" y="224" width="208" height="56" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="60" y="246" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Onboarding docs refresh</text>
        <text x="60" y="262" fill="#4f5d75" font-size="9" font-family="monospace, monospace">AVA-209 · maya</text>

        <!-- In progress: blocked + 3 default (over limit) -->
        <rect x="320" y="88" width="208" height="56" rx="6" fill="rgba(235,108,54,0.05)" stroke="#eb6c36" stroke-width="1" stroke-dasharray="4,4"/>
        <rect x="320" y="88" width="4" height="56" fill="#eb6c36"/>
        <text x="336" y="110" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Postgres 16 upgrade</text>
        <text x="336" y="126" fill="#4f5d75" font-size="9" font-family="monospace, monospace">AVA-118 · sam</text>

        <rect x="320" y="156" width="208" height="56" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="332" y="178" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">K8s node pool migration</text>
        <text x="332" y="194" fill="#4f5d75" font-size="9" font-family="monospace, monospace">AVA-142 · priya</text>

        <rect x="320" y="224" width="208" height="56" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="332" y="246" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Auth token rotation</text>
        <text x="332" y="262" fill="#4f5d75" font-size="9" font-family="monospace, monospace">AVA-150 · leo</text>

        <rect x="320" y="292" width="208" height="56" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="332" y="314" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Observability dashboards</text>
        <text x="332" y="330" fill="#4f5d75" font-size="9" font-family="monospace, monospace">AVA-161 · dara</text>

        <!-- Review: default + waiting/external -->
        <rect x="592" y="88" width="208" height="56" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="604" y="110" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Feature flag cleanup</text>
        <text x="604" y="126" fill="#4f5d75" font-size="9" font-family="monospace, monospace">AVA-176 · nadia</text>

        <rect x="592" y="156" width="208" height="56" rx="6" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.20)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="604" y="178" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Vendor SSO integration</text>
        <text x="604" y="194" fill="#4f5d75" font-size="9" font-family="monospace, monospace">AVA-183 · sam</text>

        <!-- Done: 2 done cards -->
        <rect x="864" y="88" width="208" height="56" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="1"/>
        <text x="876" y="110" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Log retention policy</text>
        <text x="876" y="126" fill="#4f5d75" font-size="9" font-family="monospace, monospace">AVA-090 · leo</text>

        <rect x="864" y="156" width="208" height="56" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="1"/>
        <text x="876" y="178" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">CI cache warmup</text>
        <text x="876" y="194" fill="#4f5d75" font-size="9" font-family="monospace, monospace">AVA-097 · maya</text>

        <!-- Legend -->
        <line x1="32" y1="388" x2="1088" y2="388" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
        <text x="32" y="404" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

        <rect x="32"  y="416" width="16" height="8" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
        <text x="56"  y="424" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Default</text>

        <rect x="232" y="416" width="16" height="8" fill="rgba(235,108,54,0.05)" stroke="#eb6c36" stroke-width="1" stroke-dasharray="4,4"/>
        <text x="256" y="424" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Blocked</text>

        <rect x="432" y="416" width="16" height="8" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.20)" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="456" y="424" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Waiting / external</text>

        <rect x="632" y="416" width="16" height="8" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="1"/>
        <text x="656" y="424" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Done</text>

        <rect x="832" y="416" width="16" height="8" rx="2" fill="transparent" stroke="#eb6c36" stroke-width="0.8"/>
        <text x="856" y="424" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Over WIP limit</text>
      </svg>`},{id:"journey",name:"用户旅程",category:"分析",svg:`<svg viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="journey-title journey-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1280px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="journey-title">Trial to paid: the first week</title>
      <desc id="journey-desc">User journey map of a new trial user across five stages, showing actions, touchpoints, and a sentiment curve that dips at the usage-limit stage before recovering at upgrade.</desc>

      <rect width="100%" height="100%" fill="#f5f5f5"/>

      <!-- Stage headers -->
      <text x="164"  y="40" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">STAGE 1</text>
      <text x="164"  y="60" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Sign up</text>

      <text x="388"  y="40" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">STAGE 2</text>
      <text x="388"  y="60" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">First run</text>

      <text x="612"  y="40" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">STAGE 3</text>
      <text x="612"  y="60" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Invite team</text>

      <text x="836"  y="40" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">STAGE 4</text>
      <text x="836"  y="60" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Hit the limit</text>

      <text x="1060" y="40" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">STAGE 5</text>
      <text x="1060" y="60" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Upgrade</text>

      <!-- Sentiment band: reference hairlines -->
      <line x1="64" y1="100" x2="1160" y2="100" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <line x1="64" y1="180" x2="1160" y2="180" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <line x1="64" y1="260" x2="1160" y2="260" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="56" y="104" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.10em">HIGH</text>
      <text x="56" y="184" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.10em">NEUTRAL</text>
      <text x="56" y="264" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.10em">LOW</text>

      <!-- Sentiment curve (data curve — not a connector, §6 rule 1 exempt) -->
      <polyline points="164,100 388,180 612,100" fill="none" stroke="#4f5d75" stroke-width="1.5" stroke-linejoin="round"/>
      <polyline points="612,100 836,260" fill="none" stroke="#eb6c36" stroke-width="1.5" stroke-linejoin="round"/>
      <polyline points="836,260 1060,180" fill="none" stroke="#4f5d75" stroke-width="1.5" stroke-linejoin="round"/>

      <circle cx="164"  cy="100" r="5" fill="#4f5d75"/>
      <circle cx="388"  cy="180" r="5" fill="#4f5d75"/>
      <circle cx="612"  cy="100" r="5" fill="#4f5d75"/>
      <circle cx="836"  cy="260" r="5" fill="#eb6c36"/>
      <circle cx="1060" cy="180" r="5" fill="#4f5d75"/>

      <!-- Row separators (full plot width) -->
      <line x1="64" y1="280" x2="1160" y2="280" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <line x1="64" y1="376" x2="1160" y2="376" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>

      <!-- Row labels -->
      <text x="56" y="328" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.14em">ACTIONS</text>
      <text x="72" y="408" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="end" letter-spacing="0.14em">TOUCHPOINTS</text>

      <!-- Actions -->
      <text x="164"  y="300" fill="#2d3142" font-size="12" font-family="Arial, sans-serif" text-anchor="middle">Create workspace</text>
      <text x="388"  y="300" fill="#2d3142" font-size="12" font-family="Arial, sans-serif" text-anchor="middle">Import first dataset</text>
      <text x="612"  y="300" fill="#2d3142" font-size="12" font-family="Arial, sans-serif" text-anchor="middle">Add 3 teammates</text>
      <text x="836"  y="300" fill="#2d3142" font-size="12" font-family="Arial, sans-serif" text-anchor="middle">Export blocked mid-report</text>
      <text x="1060" y="300" fill="#2d3142" font-size="12" font-family="Arial, sans-serif" text-anchor="middle">Pick annual plan</text>

      <!-- Pain markers (Hit the limit only) -->
      <rect x="744" y="312" width="184" height="16" rx="2" fill="rgba(235,108,54,0.08)" stroke="rgba(235,108,54,0.50)" stroke-width="0.8" stroke-dasharray="3,3"/>
      <text x="836" y="324" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.04em">NO WARNING AT 80%</text>

      <rect x="744" y="332" width="184" height="16" rx="2" fill="rgba(235,108,54,0.08)" stroke="rgba(235,108,54,0.50)" stroke-width="0.8" stroke-dasharray="3,3"/>
      <text x="836" y="344" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.02em">PRICING PAGE IS 3 CLICKS AWAY</text>

      <!-- Touchpoints -->
      <text x="164"  y="412" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">signup form</text>
      <text x="388"  y="412" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">onboarding wizard</text>
      <text x="612"  y="412" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">email invite</text>
      <text x="836"  y="412" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">in-app modal</text>
      <text x="1060" y="412" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">billing page</text>

      <!-- Legend -->
      <line x1="40" y1="464" x2="1160" y2="464" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="40" y="480" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

      <line x1="40" y1="496" x2="56" y2="496" stroke="#4f5d75" stroke-width="1.5"/>
      <circle cx="48" cy="496" r="3" fill="#4f5d75"/>
      <text x="64" y="500" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Sentiment curve</text>

      <line x1="220" y1="496" x2="236" y2="496" stroke="#eb6c36" stroke-width="1.5"/>
      <circle cx="228" cy="496" r="3" fill="#eb6c36"/>
      <text x="244" y="500" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Trough stage</text>

      <rect x="384" y="492" width="16" height="8" rx="2" fill="rgba(235,108,54,0.08)" stroke="rgba(235,108,54,0.50)" stroke-width="0.8" stroke-dasharray="3,3"/>
      <text x="408" y="500" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Pain marker</text>
    </svg>`},{id:"deployment",name:"部署拓扑",category:"架构",svg:`<svg viewBox="0 0 1040 416" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="deployment-title deployment-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="deployment-title">Checkout service, production</title>
      <desc id="deployment-desc">Deployment diagram placing the checkout service across an edge CDN zone, a production Kubernetes zone running ingress and API pods, and a data zone with a primary Postgres instance replicating to a standby.</desc>
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
        </pattern>
        <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
        <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
        <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#2e5aa8"/></marker>
      </defs>

      <rect width="100%" height="100%" fill="#f5f5f5"/>
      <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

      <!-- Zones (drawn first, before arrows and nodes) -->
      <rect x="40" y="40" width="208" height="280" rx="8" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.20)" stroke-width="0.8" stroke-dasharray="4,4"/>
      <rect x="56" y="44" width="48" height="12" fill="#f5f5f5"/>
      <text x="80" y="53" fill="rgba(45,49,66,0.40)" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">EDGE</text>

      <rect x="280" y="40" width="280" height="280" rx="8" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.20)" stroke-width="0.8" stroke-dasharray="4,4"/>
      <rect x="296" y="44" width="140" height="12" fill="#f5f5f5"/>
      <text x="366" y="53" fill="rgba(45,49,66,0.40)" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">PROD / EU-WEST-1</text>

      <rect x="600" y="40" width="240" height="280" rx="8" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.20)" stroke-width="0.8" stroke-dasharray="4,4"/>
      <rect x="616" y="44" width="40" height="12" fill="#f5f5f5"/>
      <text x="636" y="53" fill="rgba(45,49,66,0.40)" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">DATA</text>

      <!-- Network paths (behind nodes) -->
      <path d="M 224,196 H 288 Q 296,196 296,188 V 128 Q 296,120 304,120" fill="none" stroke="#2e5aa8" stroke-width="1.2" marker-end="url(#arrow-link)"/>
      <line x1="420" y1="164" x2="420" y2="196" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
      <path d="M 536,252 H 572 Q 580,252 580,244 V 128 Q 580,120 588,120 H 624" fill="none" stroke="#2e5aa8" stroke-width="1.2" marker-end="url(#arrow-link)"/>
      <line x1="720" y1="164" x2="720" y2="212" stroke="#eb6c36" stroke-width="1" stroke-dasharray="5,4" marker-end="url(#arrow-accent)"/>

      <!-- Path labels -->
      <rect x="224" y="176" width="64" height="12" rx="2" fill="#f5f5f5"/>
      <text x="256" y="185" fill="#2e5aa8" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">HTTPS:443</text>

      <rect x="428" y="174" width="64" height="12" rx="2" fill="#f5f5f5"/>
      <text x="460" y="183" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">HTTP:8080</text>

      <rect x="588" y="180" width="64" height="12" rx="2" fill="#f5f5f5"/>
      <text x="620" y="189" fill="#2e5aa8" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">TLS:5432</text>

      <rect x="728" y="182" width="72" height="12" rx="2" fill="#f5f5f5"/>
      <text x="764" y="191" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.06em">WAL STREAM</text>

      <!-- Node: CDN (edge-cache) -->
      <rect x="64" y="156" width="160" height="84" rx="6" fill="#f5f5f5"/>
      <rect x="64" y="156" width="160" height="84" rx="6" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
      <rect x="72" y="164" width="32" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.22)" stroke-width="0.8"/>
      <text x="88" y="173" fill="#7a8399" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">CDN</text>
      <text x="144" y="196" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Cloudflare</text>
      <rect x="72" y="208" width="144" height="24" rx="4" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="0.8"/>
      <text x="80" y="224" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">edge-cache</text>
      <text x="208" y="224" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">v1.2</text>

      <!-- Node: ingress -->
      <rect x="304" y="80" width="232" height="84" rx="6" fill="#f5f5f5"/>
      <rect x="304" y="80" width="232" height="84" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <rect x="312" y="88" width="32" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="328" y="97" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">POD</text>
      <text x="420" y="120" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">ingress</text>
      <rect x="312" y="132" width="216" height="24" rx="4" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="0.8"/>
      <text x="320" y="148" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">nginx-ingress</text>
      <text x="520" y="148" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">v1.11</text>

      <!-- Node: app (replica x3) -->
      <rect x="304" y="196" width="232" height="116" rx="6" fill="#f5f5f5"/>
      <rect x="304" y="196" width="232" height="116" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <rect x="312" y="204" width="32" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="328" y="213" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">POD</text>
      <rect x="500" y="204" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="514" y="213" fill="#2d3142" font-size="8" font-family="monospace, monospace" text-anchor="middle">x3</text>
      <text x="420" y="236" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">app</text>
      <rect x="312" y="248" width="216" height="24" rx="4" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="0.8"/>
      <text x="320" y="264" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">checkout-api</text>
      <text x="520" y="264" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">v2.4.1</text>
      <rect x="312" y="280" width="216" height="24" rx="4" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="0.8"/>
      <text x="320" y="296" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">sidecar-otel</text>
      <text x="520" y="296" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">v0.9</text>

      <!-- Node: rds-primary (focal) -->
      <rect x="624" y="80" width="192" height="84" rx="6" fill="#f5f5f5"/>
      <rect x="624" y="80" width="192" height="84" rx="6" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
      <rect x="632" y="88" width="64" height="12" rx="2" fill="transparent" stroke="rgba(235,108,54,0.50)" stroke-width="0.8"/>
      <text x="664" y="97" fill="#eb6c36" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">MANAGED</text>
      <text x="720" y="120" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">rds-primary</text>
      <rect x="632" y="132" width="176" height="24" rx="4" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="0.8"/>
      <text x="640" y="148" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">postgres</text>
      <text x="800" y="148" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">16.2</text>

      <!-- Node: rds-standby -->
      <rect x="624" y="212" width="192" height="84" rx="6" fill="#f5f5f5"/>
      <rect x="624" y="212" width="192" height="84" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="1"/>
      <rect x="632" y="220" width="64" height="12" rx="2" fill="transparent" stroke="rgba(79,93,117,0.50)" stroke-width="0.8"/>
      <text x="664" y="229" fill="#4f5d75" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">MANAGED</text>
      <text x="720" y="252" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">rds-standby</text>
      <rect x="632" y="264" width="176" height="24" rx="4" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="0.8"/>
      <text x="640" y="280" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">postgres</text>
      <text x="800" y="280" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">16.2</text>

      <!-- Legend strip -->
      <line x1="40" y1="340" x2="1000" y2="340" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="40" y="356" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

      <rect x="40" y="372" width="14" height="10" rx="2" fill="rgba(235,108,54,0.08)" stroke="#eb6c36" stroke-width="1"/>
      <text x="60" y="380" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Focal / primary</text>

      <rect x="180" y="372" width="14" height="10" rx="2" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <text x="200" y="380" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Infra node</text>

      <rect x="320" y="372" width="14" height="10" rx="2" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="1"/>
      <text x="340" y="380" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Store / standby</text>

      <rect x="460" y="372" width="14" height="10" rx="2" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
      <text x="480" y="380" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Managed / CDN</text>

      <line x1="600" y1="376" x2="628" y2="376" stroke="#2e5aa8" stroke-width="1.2" marker-end="url(#arrow-link)"/>
      <text x="636" y="380" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Cross-zone</text>

      <line x1="740" y1="376" x2="768" y2="376" stroke="#eb6c36" stroke-width="1" stroke-dasharray="5,4" marker-end="url(#arrow-accent)"/>
      <text x="776" y="380" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Replication</text>

      <line x1="880" y1="376" x2="908" y2="376" stroke="#4f5d75" stroke-width="1.2" marker-end="url(#arrow)"/>
      <text x="916" y="380" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">In-zone call</text>
    </svg>`},{id:"dependency",name:"依赖关系",category:"架构",svg:`<svg viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="dependency-title dependency-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="dependency-title">TypeScript monorepo dependency graph</title>
      <desc id="dependency-desc">Ranked dependency graph of a TypeScript monorepo showing shared-types as the highest fan-in package with four dependents, and one back-edge cycle from utils into shared-types.</desc>
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/>
        </marker>
        <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/>
        </marker>
        <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#2e5aa8"/>
        </marker>
      </defs>

      <rect width="100%" height="100%" fill="#f5f5f5"/>

      <!-- Rank labels (left margin) -->
      <text x="40" y="108" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">RANK 0</text>
      <text x="40" y="228" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">RANK 1</text>
      <text x="40" y="348" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">RANK 2</text>
      <text x="40" y="468" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">RANK 3</text>

      <!-- Connectors drawn before boxes -->
      <!-- web -> api (straight, same column) -->
      <line x1="400" y1="136" x2="400" y2="200" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <!-- web -> ui-kit (elbow, bridged over the web->api crossing at x=400) -->
      <path d="M 360,136 V 152 Q 360,160 368,160 H 392 a 8,8 0 0,1 16,0 H 552 Q 560,160 560,168 V 200" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <!-- admin -> ui-kit (straight, same column) -->
      <line x1="600" y1="136" x2="600" y2="200" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <!-- admin -> api (elbow, bridged over the web->ui-kit crossing) -->
      <path d="M 640,136 V 168 Q 640,176 632,176 H 568 a 8,8 0 0,0 -16,0 H 448 Q 440,176 440,184 V 200" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <!-- api -> shared-types (straight, same column) -->
      <line x1="400" y1="256" x2="400" y2="320" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <!-- api -> db (elbow, routed at y=304 - 16px below the ui-kit->shared-types elbow at y=288 so the two never run colinear) -->
      <path d="M 440,256 V 296 Q 440,304 448,304 H 592 Q 600,304 600,312 V 320" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <!-- ui-kit -> shared-types (elbow, bridges the api->shared-types crossing at x=400 and the api->db vertical at x=440) -->
      <path d="M 572,256 V 280 Q 572,288 564,288 H 448 a 8,8 0 0,0 -16,0 H 408 a 8,8 0 0,0 -16,0 H 368 Q 360,288 360,296 V 320" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <!-- ui-kit -> tokens (elbow, routed around the outside via the left margin, at y=272 - 16px clear of the ui-kit->shared-types elbow at y=288 so the two never run parallel closer than 12px; bridges the ui-kit->shared-types vertical at x=572, the api->shared-types crossing at x=400, and the api->db vertical at x=440) -->
      <path d="M 628,256 V 264 Q 628,272 620,272 H 580 a 8,8 0 0,0 -16,0 H 448 a 8,8 0 0,0 -16,0 H 408 a 8,8 0 0,0 -16,0 H 188 Q 180,272 180,280 V 460 Q 180,468 188,468 H 220" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <!-- db -> shared-types (straight, same row) -->
      <line x1="520" y1="348" x2="480" y2="348" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <!-- shared-types -> utils (elbow) -->
      <path d="M 372,376 V 400 Q 372,408 380,408 H 492 Q 500,408 500,416 V 440" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <!-- shared-types -> zod (elbow) -->
      <path d="M 428,376 V 388 Q 428,396 436,396 H 692 Q 700,396 700,404 V 440" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>

      <!-- Cycle back-edge: utils -> shared-types, routed below the tokens/utils row and above the legend hairline -->
      <!-- Hop on the accent (dashed, less-important) stroke where it crosses the ui-kit->tokens connector at (196,468) -->
      <path d="M 440,496 V 500 Q 440,508 432,508 H 204 Q 196,508 196,500 V 476 a 8,8 0 0,0 0,-16 V 356 Q 196,348 204,348 H 320" fill="none" stroke="#eb6c36" stroke-width="1.2" stroke-dasharray="5,4" marker-end="url(#arrow-accent)"/>
      <rect x="204" y="504" width="40" height="12" rx="2" fill="#f5f5f5"/>
      <text x="224" y="513" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.06em">CYCLE</text>

      <!-- web -->
      <rect x="320" y="80" width="160" height="56" rx="6" fill="#f5f5f5"/>
      <rect x="320" y="80" width="160" height="56" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <rect x="328" y="86" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="342" y="95" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">APP</text>
      <rect x="444" y="88" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="458" y="97" fill="#2d3142" font-size="8" font-family="monospace, monospace" text-anchor="middle">0 IN</text>
      <text x="400" y="114" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">web</text>
      <text x="400" y="130" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">apps/web</text>

      <!-- admin -->
      <rect x="520" y="80" width="160" height="56" rx="6" fill="#f5f5f5"/>
      <rect x="520" y="80" width="160" height="56" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <rect x="528" y="86" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="542" y="95" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">APP</text>
      <rect x="644" y="88" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="658" y="97" fill="#2d3142" font-size="8" font-family="monospace, monospace" text-anchor="middle">0 IN</text>
      <text x="600" y="114" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">admin</text>
      <text x="600" y="130" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">apps/admin</text>

      <!-- api -->
      <rect x="320" y="200" width="160" height="56" rx="6" fill="#f5f5f5"/>
      <rect x="320" y="200" width="160" height="56" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <rect x="328" y="206" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="342" y="215" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">SVC</text>
      <rect x="444" y="208" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="458" y="217" fill="#2d3142" font-size="8" font-family="monospace, monospace" text-anchor="middle">2 IN</text>
      <text x="400" y="234" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">api</text>
      <text x="400" y="250" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">services/api</text>

      <!-- ui-kit -->
      <rect x="520" y="200" width="160" height="56" rx="6" fill="#f5f5f5"/>
      <rect x="520" y="200" width="160" height="56" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <rect x="528" y="206" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="542" y="215" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">PKG</text>
      <rect x="644" y="208" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="658" y="217" fill="#2d3142" font-size="8" font-family="monospace, monospace" text-anchor="middle">2 IN</text>
      <text x="600" y="234" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">ui-kit</text>
      <text x="600" y="250" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">packages/ui-kit</text>

      <!-- shared-types (highest fan-in) -->
      <rect x="320" y="320" width="160" height="56" rx="6" fill="#f5f5f5"/>
      <rect x="320" y="320" width="160" height="56" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <rect x="328" y="326" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="342" y="335" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">PKG</text>
      <rect x="444" y="328" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="458" y="337" fill="#2d3142" font-size="8" font-family="monospace, monospace" text-anchor="middle">4 IN</text>
      <text x="400" y="354" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">shared-types</text>
      <text x="400" y="370" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">packages/shared-types</text>

      <!-- db -->
      <rect x="520" y="320" width="160" height="56" rx="6" fill="#f5f5f5"/>
      <rect x="520" y="320" width="160" height="56" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <rect x="528" y="326" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="542" y="335" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">SVC</text>
      <rect x="644" y="328" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="658" y="337" fill="#2d3142" font-size="8" font-family="monospace, monospace" text-anchor="middle">1 IN</text>
      <text x="600" y="354" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">db</text>
      <text x="600" y="370" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">services/db</text>

      <!-- tokens (leaf) -->
      <rect x="220" y="440" width="160" height="56" rx="6" fill="#f5f5f5"/>
      <rect x="220" y="440" width="160" height="56" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="0.8"/>
      <rect x="228" y="446" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="242" y="455" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">PKG</text>
      <rect x="344" y="448" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="358" y="457" fill="#2d3142" font-size="8" font-family="monospace, monospace" text-anchor="middle">1 IN</text>
      <text x="300" y="474" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">tokens</text>
      <text x="300" y="490" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">packages/tokens</text>

      <!-- utils (holds the outgoing cycle edge) -->
      <rect x="420" y="440" width="160" height="56" rx="6" fill="#f5f5f5"/>
      <rect x="420" y="440" width="160" height="56" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <rect x="428" y="446" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="442" y="455" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">PKG</text>
      <rect x="544" y="448" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="558" y="457" fill="#2d3142" font-size="8" font-family="monospace, monospace" text-anchor="middle">1 IN</text>
      <text x="500" y="474" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">utils</text>
      <text x="500" y="490" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">packages/utils</text>

      <!-- zod (external) -->
      <rect x="620" y="440" width="160" height="56" rx="6" fill="#f5f5f5"/>
      <rect x="620" y="440" width="160" height="56" rx="6" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
      <rect x="628" y="446" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="642" y="455" fill="#2d3142" font-size="7" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">EXT</text>
      <rect x="744" y="448" width="28" height="12" rx="2" fill="transparent" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="758" y="457" fill="#2d3142" font-size="8" font-family="monospace, monospace" text-anchor="middle">1 IN</text>
      <text x="700" y="474" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">zod</text>
      <text x="700" y="490" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="middle">v3.23 · npm</text>

      <!-- Legend strip -->
      <line x1="40" y1="524" x2="960" y2="524" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="40" y="540" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

      <rect x="40" y="556" width="16" height="12" rx="2" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <text x="64" y="565" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Internal package</text>

      <rect x="192" y="556" width="16" height="12" rx="2" fill="rgba(45,49,66,0.03)" stroke="rgba(45,49,66,0.30)" stroke-width="1"/>
      <text x="216" y="565" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">External / third-party</text>

      <rect x="380" y="556" width="16" height="12" rx="2" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="0.8"/>
      <text x="404" y="565" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Leaf (no outgoing)</text>

      <line x1="552" y1="562" x2="580" y2="562" stroke="#eb6c36" stroke-width="1.2" stroke-dasharray="5,4"/>
      <text x="588" y="565" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Cycle (back-edge)</text>

      <text x="700" y="565" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif" font-style="italic">Badges show fan-in — a tree can't express convergence.</text>
    </svg>`},{id:"uml-class",name:"类结构",category:"结构",svg:`<svg viewBox="0 0 980 664" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="uml-class-title uml-class-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1240px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="uml-class-title">Payments domain · UML class diagram</title>
      <desc id="uml-class-desc">Class diagram showing Card and BankTransfer realizing a PaymentMethod interface, PaymentService depending on PaymentMethod, and Order composed of OrderLine while associated with Customer.</desc>
      <defs>
        <marker id="uml-triangle" markerWidth="16" markerHeight="12" refX="15" refY="6" orient="auto" markerUnits="userSpaceOnUse">
          <polygon points="0 0, 16 6, 0 12" fill="#f5f5f5" stroke="#2d3142" stroke-width="1"/>
        </marker>
        <marker id="uml-diamond-filled" markerWidth="18" markerHeight="10" refX="0" refY="5" orient="auto" markerUnits="userSpaceOnUse">
          <polygon points="0 5, 9 0, 18 5, 9 10" fill="#2d3142"/>
        </marker>
        <marker id="uml-diamond-hollow" markerWidth="18" markerHeight="10" refX="0" refY="5" orient="auto" markerUnits="userSpaceOnUse">
          <polygon points="0 5, 9 0, 18 5, 9 10" fill="#f5f5f5" stroke="#2d3142" stroke-width="1"/>
        </marker>
        <marker id="uml-open" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M0,0 L9,4 L0,8" fill="none" stroke="#4f5d75" stroke-width="1"/>
        </marker>
      </defs>

      <rect width="100%" height="100%" fill="#f5f5f5"/>

      <!-- Relationships (drawn before boxes) -->
      <!-- Card realizes PaymentMethod -->
      <line x1="480" y1="240" x2="480" y2="140" stroke="#eb6c36" stroke-width="1" stroke-dasharray="5,4" marker-end="url(#uml-triangle)"/>
      <!-- BankTransfer realizes PaymentMethod -->
      <line x1="760" y1="240" x2="760" y2="140" stroke="#eb6c36" stroke-width="1" stroke-dasharray="5,4" marker-end="url(#uml-triangle)"/>
      <!-- PaymentService depends on PaymentMethod -->
      <line x1="320" y1="100" x2="420" y2="100" stroke="#4f5d75" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#uml-open)"/>
      <!-- Order composed of OrderLine -->
      <line x1="260" y1="480" x2="380" y2="480" stroke="#4f5d75" stroke-width="1" marker-start="url(#uml-diamond-filled)"/>
      <!-- Order associates Customer (routed below to clear OrderLine) -->
      <path d="M 160,540 V 572 Q 160,580 168,580 H 752 Q 760,580 760,572 V 540" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#uml-open)"/>

      <!-- Dependency label -->
      <rect x="352" y="80" width="32" height="12" rx="2" fill="#f5f5f5"/>
      <text x="368" y="89" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.06em">USES</text>

      <!-- Composition multiplicities -->
      <rect x="288" y="474" width="12" height="12" rx="2" fill="#f5f5f5"/>
      <text x="294" y="484" fill="#2d3142" font-size="8" font-family="monospace, monospace" text-anchor="middle" font-weight="600">1</text>
      <rect x="348" y="474" width="24" height="12" rx="2" fill="#f5f5f5"/>
      <text x="360" y="484" fill="#2d3142" font-size="8" font-family="monospace, monospace" text-anchor="middle" font-weight="600">1..*</text>

      <!-- Association multiplicities -->
      <rect x="164" y="548" width="28" height="12" rx="2" fill="#f5f5f5"/>
      <text x="178" y="557" fill="#2d3142" font-size="8" font-family="monospace, monospace" text-anchor="middle" font-weight="600">0..*</text>
      <rect x="752" y="548" width="16" height="12" rx="2" fill="#f5f5f5"/>
      <text x="760" y="557" fill="#2d3142" font-size="8" font-family="monospace, monospace" text-anchor="middle" font-weight="600">1</text>

      <!-- Class: PaymentMethod (interface, focal) -->
      <rect x="420" y="40" width="360" height="100" rx="6" fill="rgba(235,108,54,0.04)" stroke="#eb6c36" stroke-width="1"/>
      <rect x="420" y="40" width="360" height="40" rx="6" fill="rgba(235,108,54,0.10)"/>
      <rect x="420" y="72" width="360" height="8" fill="rgba(235,108,54,0.10)"/>
      <line x1="420" y1="80" x2="780" y2="80" stroke="rgba(235,108,54,0.40)" stroke-width="1"/>
      <text x="600" y="56" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">«interface»</text>
      <text x="600" y="72" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">PaymentMethod</text>
      <text x="436" y="100" fill="#2d3142" font-size="9" font-family="monospace, monospace">+ authorize(amount: Money): AuthResult</text>
      <text x="436" y="120" fill="#2d3142" font-size="9" font-family="monospace, monospace">+ capture(ref: String): void</text>

      <!-- Class: Card -->
      <rect x="380" y="240" width="200" height="120" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <line x1="380" y1="280" x2="580" y2="280" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <text x="480" y="264" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Card</text>
      <text x="396" y="300" fill="#2d3142" font-size="9" font-family="monospace, monospace">- number: String</text>
      <text x="396" y="320" fill="#2d3142" font-size="9" font-family="monospace, monospace">- expiry: Date</text>
      <text x="396" y="340" fill="#2d3142" font-size="9" font-family="monospace, monospace">- cvv: String</text>

      <!-- Class: BankTransfer -->
      <rect x="660" y="240" width="200" height="100" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <line x1="660" y1="280" x2="860" y2="280" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <text x="760" y="264" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">BankTransfer</text>
      <text x="676" y="300" fill="#2d3142" font-size="9" font-family="monospace, monospace">- iban: String</text>
      <text x="676" y="320" fill="#2d3142" font-size="9" font-family="monospace, monospace">- accountHolder: String</text>

      <!-- Class: PaymentService -->
      <rect x="40" y="60" width="280" height="80" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <line x1="40" y1="100" x2="320" y2="100" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <text x="180" y="84" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">PaymentService</text>
      <text x="56" y="120" fill="#2d3142" font-size="9" font-family="monospace, monospace">+ charge(order: Order): Receipt</text>

      <!-- Class: Order -->
      <rect x="60" y="420" width="200" height="120" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <line x1="60" y1="460" x2="260" y2="460" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <text x="160" y="444" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Order</text>
      <text x="76" y="480" fill="#2d3142" font-size="9" font-family="monospace, monospace">- id: String</text>
      <text x="76" y="500" fill="#2d3142" font-size="9" font-family="monospace, monospace">- placedAt: Date</text>
      <text x="76" y="520" fill="#2d3142" font-size="9" font-family="monospace, monospace">- total: Money</text>

      <!-- Class: OrderLine -->
      <rect x="380" y="420" width="200" height="120" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <line x1="380" y1="460" x2="580" y2="460" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <text x="480" y="444" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">OrderLine</text>
      <text x="396" y="480" fill="#2d3142" font-size="9" font-family="monospace, monospace">- sku: String</text>
      <text x="396" y="500" fill="#2d3142" font-size="9" font-family="monospace, monospace">- qty: Int</text>
      <text x="396" y="520" fill="#2d3142" font-size="9" font-family="monospace, monospace">- price: Money</text>

      <!-- Class: Customer -->
      <rect x="660" y="420" width="200" height="120" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <line x1="660" y1="460" x2="860" y2="460" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <text x="760" y="444" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Customer</text>
      <text x="676" y="480" fill="#2d3142" font-size="9" font-family="monospace, monospace">- id: String</text>
      <text x="676" y="500" fill="#2d3142" font-size="9" font-family="monospace, monospace">- name: String</text>
      <text x="676" y="520" fill="#2d3142" font-size="9" font-family="monospace, monospace">- email: String</text>

      <!-- Legend: relationship vocabulary -->
      <line x1="40" y1="604" x2="940" y2="604" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="40" y="620" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND · RELATIONSHIPS</text>

      <line x1="40" y1="636" x2="68" y2="636" stroke="#2d3142" stroke-width="1" marker-end="url(#uml-triangle)"/>
      <text x="76" y="640" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Inheritance</text>

      <line x1="188" y1="636" x2="216" y2="636" stroke="#2d3142" stroke-width="1" stroke-dasharray="5,4" marker-end="url(#uml-triangle)"/>
      <text x="224" y="640" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Realization</text>

      <line x1="336" y1="636" x2="364" y2="636" stroke="#2d3142" stroke-width="1" marker-start="url(#uml-diamond-filled)"/>
      <text x="372" y="640" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Composition · owns</text>

      <line x1="484" y1="636" x2="512" y2="636" stroke="#2d3142" stroke-width="1" marker-start="url(#uml-diamond-hollow)"/>
      <text x="520" y="640" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Aggregation · has</text>

      <line x1="632" y1="636" x2="660" y2="636" stroke="#4f5d75" stroke-width="1" marker-end="url(#uml-open)"/>
      <text x="668" y="640" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Association</text>

      <line x1="780" y1="636" x2="808" y2="636" stroke="#4f5d75" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#uml-open)"/>
      <text x="816" y="640" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Dependency · uses</text>
    </svg>`},{id:"story-map",name:"用户故事地图",category:"规划",svg:`<svg viewBox="0 0 1032 540" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="story-map-title story-map-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1200px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="story-map-title">Reporting, first release · User story map</title>
      <desc id="story-map-desc">User story map for a reporting tool's first release: four narrative activities from finding data to trusting it, walking-skeleton steps beneath each, and three release slices sliced by an MVP release-cut line, with the row-level-permissions story flagged as the riskiest bet in Release 2.</desc>
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="rgba(45,49,66,0.10)"/>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="#f5f5f5"/>
      <rect width="100%" height="100%" fill="url(#dots)" opacity="0.55"/>

      <!-- Release slice bands (alternating fill) -->
      <rect x="32" y="216" width="968" height="80" fill="rgba(45,49,66,0.02)"/>
      <rect x="32" y="376" width="968" height="80" fill="rgba(45,49,66,0.02)"/>

      <text x="48" y="260" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">MVP</text>
      <text x="48" y="340" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">RELEASE 2</text>
      <text x="48" y="420" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">LATER</text>

      <!-- Column separators: tie each card row to its activity column -->
      <line x1="116" y1="108" x2="116" y2="456" stroke="rgba(45,49,66,0.10)" stroke-width="0.8" stroke-dasharray="4,4"/>
      <line x1="340" y1="108" x2="340" y2="456" stroke="rgba(45,49,66,0.10)" stroke-width="0.8" stroke-dasharray="4,4"/>
      <line x1="564" y1="108" x2="564" y2="456" stroke="rgba(45,49,66,0.10)" stroke-width="0.8" stroke-dasharray="4,4"/>
      <line x1="788" y1="108" x2="788" y2="456" stroke="rgba(45,49,66,0.10)" stroke-width="0.8" stroke-dasharray="4,4"/>
      <line x1="1012" y1="108" x2="1012" y2="456" stroke="rgba(45,49,66,0.10)" stroke-width="0.8" stroke-dasharray="4,4"/>

      <!-- Backbone: 4 activities, narrative left-to-right order -->
      <rect x="128" y="40" width="200" height="64" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="1"/>
      <text x="228" y="68" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Find the data</text>
      <text x="228" y="88" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">ACTIVITY 1</text>

      <rect x="352" y="40" width="200" height="64" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="1"/>
      <text x="452" y="68" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Build the report</text>
      <text x="452" y="88" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">ACTIVITY 2</text>

      <rect x="576" y="40" width="200" height="64" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="1"/>
      <text x="676" y="68" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Share it</text>
      <text x="676" y="88" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">ACTIVITY 3</text>

      <rect x="800" y="40" width="200" height="64" rx="6" fill="rgba(45,49,66,0.05)" stroke="#4f5d75" stroke-width="1"/>
      <text x="900" y="68" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif" text-anchor="middle">Trust it</text>
      <text x="900" y="88" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.14em">ACTIVITY 4</text>

      <!-- Walking skeleton: user steps under each activity -->
      <rect x="144" y="120" width="168" height="32" rx="4" fill="#ffffff" stroke="#2d3142" stroke-width="0.8"/>
      <text x="156" y="140" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">Search datasets</text>
      <rect x="144" y="160" width="168" height="32" rx="4" fill="#ffffff" stroke="#2d3142" stroke-width="0.8"/>
      <text x="156" y="180" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">Preview rows</text>

      <rect x="368" y="120" width="168" height="32" rx="4" fill="#ffffff" stroke="#2d3142" stroke-width="0.8"/>
      <text x="380" y="140" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">Pick columns</text>
      <rect x="368" y="160" width="168" height="32" rx="4" fill="#ffffff" stroke="#2d3142" stroke-width="0.8"/>
      <text x="380" y="180" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">Add a chart</text>

      <rect x="592" y="120" width="168" height="32" rx="4" fill="#ffffff" stroke="#2d3142" stroke-width="0.8"/>
      <text x="604" y="140" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">Send a link</text>

      <rect x="816" y="120" width="168" height="32" rx="4" fill="#ffffff" stroke="#2d3142" stroke-width="0.8"/>
      <text x="828" y="140" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">Check freshness</text>

      <!-- MVP row story cards -->
      <rect x="144" y="232" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <text x="156" y="250" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Keyword search</text>
      <text x="156" y="266" fill="#4f5d75" font-size="9" font-family="monospace, monospace">RPT-101 · 3pt</text>

      <rect x="368" y="232" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <text x="380" y="250" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Table + one chart</text>
      <text x="380" y="266" fill="#4f5d75" font-size="9" font-family="monospace, monospace">RPT-102 · 5pt</text>

      <rect x="592" y="232" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <text x="604" y="250" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Public link</text>
      <text x="604" y="266" fill="#4f5d75" font-size="9" font-family="monospace, monospace">RPT-103 · 2pt</text>

      <rect x="816" y="232" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <text x="828" y="250" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Last-updated stamp</text>
      <text x="828" y="266" fill="#4f5d75" font-size="9" font-family="monospace, monospace">RPT-104 · 1pt</text>

      <!-- Release cut line — accent element 1 -->
      <line x1="32" y1="296" x2="1000" y2="296" stroke="#eb6c36" stroke-width="1.5"/>
      <rect x="736" y="280" width="104" height="8" rx="2" fill="#f5f5f5"/>
      <text x="788" y="285" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.10em">RELEASE CUT</text>

      <!-- Release 2 row story cards -->
      <rect x="144" y="312" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <text x="156" y="330" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Saved filters</text>
      <text x="156" y="346" fill="#4f5d75" font-size="9" font-family="monospace, monospace">RPT-110 · 3pt</text>

      <rect x="592" y="312" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <text x="604" y="330" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Scheduled email</text>
      <text x="604" y="346" fill="#4f5d75" font-size="9" font-family="monospace, monospace">RPT-112 · 5pt</text>

      <!-- Riskiest story — accent element 2 -->
      <rect x="816" y="312" width="168" height="48" rx="4" fill="rgba(235,108,54,0.05)" stroke="#eb6c36" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="828" y="330" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Row-level permissions</text>
      <text x="828" y="346" fill="#4f5d75" font-size="9" font-family="monospace, monospace">RPT-114 · 3pt</text>
      <rect x="936" y="336" width="40" height="12" rx="2" fill="transparent" stroke="#eb6c36" stroke-width="0.8"/>
      <text x="956" y="345" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">RISK</text>

      <!-- Later row story cards -->
      <rect x="144" y="392" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <text x="156" y="410" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Natural-language query</text>
      <text x="156" y="426" fill="#4f5d75" font-size="9" font-family="monospace, monospace">RPT-120 · 8pt</text>

      <rect x="816" y="392" width="168" height="48" rx="4" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <text x="828" y="410" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">Alerting on anomalies</text>
      <text x="828" y="426" fill="#4f5d75" font-size="9" font-family="monospace, monospace">RPT-121 · 5pt</text>

      <!-- Legend -->
      <line x1="32" y1="480" x2="1000" y2="480" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="32" y="496" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

      <rect x="32" y="508" width="16" height="8" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <text x="56" y="516" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Story card</text>

      <rect x="232" y="508" width="16" height="8" fill="rgba(235,108,54,0.05)" stroke="#eb6c36" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="256" y="516" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Highest risk</text>

      <line x1="432" y1="512" x2="464" y2="512" stroke="#eb6c36" stroke-width="1.5"/>
      <text x="480" y="516" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Release cut</text>
    </svg>`},{id:"db-schema",name:"数据库结构",category:"数据",svg:`<svg viewBox="0 0 1080 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="db-schema-title db-schema-desc"><style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --color-paper:   #f5f5f5;
      --color-ink:     #2d3142;
      --color-muted:   #4f5d75;
      --color-accent:  #eb6c36;
      --font-sans:     Arial, system-ui, sans-serif;
      --font-serif:    Georgia, serif;
      --font-mono:     monospace, ui-monospace, monospace;
    }

    body {
      font-family: var(--font-sans);
      background: var(--color-paper);
      color: var(--color-ink);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
    }

    .frame { max-width: 1240px; width: 100%; }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-muted);
      margin-bottom: 0.5rem;
    }

    h1 {
      font-family: var(--font-serif);
      font-size: clamp(1.5rem, 2.4vw + 0.75rem, 2rem);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.15;
      color: var(--color-ink);
      margin-bottom: 1.5rem;
    }
  </style>
      <title id="db-schema-title">Commerce schema · public + billing</title>
      <desc id="db-schema-desc">Physical database schema diagram showing five commerce tables with column-level foreign keys, SQL types, and constraint chips, including a cascading delete from orders into order_items and a billing schema group.</desc>
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#4f5d75"/></marker>
        <marker id="arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#eb6c36"/></marker>
        <marker id="arrow-link" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#2e5aa8"/></marker>
      </defs>

      <rect width="100%" height="100%" fill="#f5f5f5"/>

      <!-- BILLING schema group (drawn first so tables paint over it) -->
      <rect x="744" y="284" width="272" height="152" rx="8" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.20)" stroke-width="0.8" stroke-dasharray="4,4"/>
      <text x="756" y="300" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">BILLING</text>

      <!-- FK connectors (drawn before boxes) -->
      <!-- FK1: orders.customer_id -> customers.id · ON DELETE RESTRICT -->
      <path d="M 400,104 H 348 Q 340,104 340,112 Q 340,120 332,120 H 280" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <!-- FK2: order_items.order_id -> orders.id · ON DELETE CASCADE (focal) -->
      <path d="M 640,384 H 692 Q 700,384 700,376 V 80 Q 700,72 692,72 H 640" fill="none" stroke="#eb6c36" stroke-width="1.2" marker-end="url(#arrow-accent)"/>
      <!-- FK3: order_items.product_id -> products.id · ON DELETE RESTRICT -->
      <path d="M 640,408 H 708 Q 716,408 716,400 V 88 Q 716,80 724,80 H 760" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>
      <!-- FK4: invoices.order_id -> orders.id · ON DELETE RESTRICT -->
      <path d="M 760,384 H 692 Q 684,384 684,376 V 96 Q 684,88 676,88 H 640" fill="none" stroke="#4f5d75" stroke-width="1" marker-end="url(#arrow)"/>

      <!-- FK labels (masked, 6-10px gap above/beside their connector) -->
      <rect x="284" y="82" width="112" height="12" rx="2" fill="#f5f5f5"/>
      <text x="340" y="91" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.06em">ON DELETE RESTRICT</text>

      <rect x="648" y="392" width="88" height="12" rx="2" fill="#f5f5f5"/>
      <text x="692" y="401" fill="#eb6c36" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.06em">ON DELETE CASCADE</text>

      <rect x="724" y="252" width="112" height="12" rx="2" fill="#f5f5f5"/>
      <text x="780" y="261" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.06em">ON DELETE RESTRICT</text>

      <rect x="564" y="270" width="112" height="12" rx="2" fill="#f5f5f5"/>
      <text x="620" y="279" fill="#4f5d75" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.06em">ON DELETE RESTRICT</text>

      <!-- Table: public.customers -->
      <rect x="40" y="80" width="240" height="100" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <rect x="40" y="80" width="240" height="28" rx="6" fill="rgba(45,49,66,0.04)" stroke="none"/>
      <rect x="40" y="100" width="240" height="8" fill="rgba(45,49,66,0.04)"/>
      <line x1="40" y1="108" x2="280" y2="108" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <text x="52" y="98" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">public.customers</text>
      <rect x="228" y="88" width="40" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="248" y="97" fill="#2d3142" opacity="0.8" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">TABLE</text>

      <rect x="40" y="108" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
      <text x="52" y="124" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">id</text>
      <rect x="160" y="116" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="170" y="125" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">PK</text>
      <text x="268" y="124" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">uuid</text>

      <text x="52" y="148" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">email</text>
      <rect x="160" y="140" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="170" y="149" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">UQ</text>
      <rect x="184" y="140" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="194" y="149" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="268" y="148" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">text</text>

      <rect x="40" y="156" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
      <text x="52" y="172" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">created_at</text>
      <rect x="160" y="164" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="170" y="173" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="268" y="172" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">timestamptz</text>

      <!-- Table: public.orders -->
      <rect x="400" y="40" width="240" height="200" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <rect x="400" y="40" width="240" height="28" rx="6" fill="rgba(45,49,66,0.04)" stroke="none"/>
      <rect x="400" y="60" width="240" height="8" fill="rgba(45,49,66,0.04)"/>
      <line x1="400" y1="68" x2="640" y2="68" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <text x="412" y="58" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">public.orders</text>
      <rect x="588" y="48" width="40" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="608" y="57" fill="#2d3142" opacity="0.8" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">TABLE</text>

      <rect x="400" y="68" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
      <text x="412" y="84" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">id</text>
      <rect x="520" y="76" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="530" y="85" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">PK</text>
      <text x="628" y="84" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">uuid</text>

      <text x="412" y="108" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">customer_id</text>
      <rect x="520" y="100" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="530" y="109" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">FK</text>
      <rect x="544" y="100" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="554" y="109" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="628" y="108" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">uuid</text>

      <rect x="400" y="116" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
      <text x="412" y="132" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">status</text>
      <rect x="520" y="124" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="530" y="133" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="628" y="132" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">text</text>

      <text x="412" y="156" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">total</text>
      <rect x="520" y="148" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="530" y="157" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="628" y="156" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">numeric(12,2)</text>

      <rect x="400" y="164" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
      <text x="412" y="180" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">placed_at</text>
      <rect x="520" y="172" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="530" y="181" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="628" y="180" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">timestamptz</text>

      <line x1="400" y1="188" x2="640" y2="188" stroke="rgba(45,49,66,0.12)" stroke-width="0.8"/>
      <text x="412" y="202" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">INDEXES</text>
      <text x="412" y="220" fill="#4f5d75" font-size="9" font-family="monospace, monospace">idx_orders_customer_id</text>
      <text x="412" y="236" fill="#4f5d75" font-size="9" font-family="monospace, monospace">idx_orders_status</text>

      <!-- Table: public.order_items (focal header — accent-tint, cascade target) -->
      <rect x="400" y="320" width="240" height="148" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <rect x="400" y="320" width="240" height="28" rx="6" fill="rgba(235,108,54,0.08)" stroke="none"/>
      <rect x="400" y="340" width="240" height="8" fill="rgba(235,108,54,0.08)"/>
      <line x1="400" y1="348" x2="640" y2="348" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <text x="412" y="338" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">public.order_items</text>
      <rect x="588" y="328" width="40" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="608" y="337" fill="#2d3142" opacity="0.8" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">TABLE</text>

      <rect x="400" y="348" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
      <text x="412" y="364" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">id</text>
      <rect x="520" y="356" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="530" y="365" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">PK</text>
      <text x="628" y="364" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">uuid</text>

      <text x="412" y="388" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">order_id</text>
      <rect x="520" y="380" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="530" y="389" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">FK</text>
      <rect x="544" y="380" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="554" y="389" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="628" y="388" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">uuid</text>

      <rect x="400" y="396" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
      <text x="412" y="412" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">product_id</text>
      <rect x="520" y="404" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="530" y="413" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">FK</text>
      <rect x="544" y="404" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="554" y="413" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="628" y="412" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">uuid</text>

      <text x="412" y="436" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">qty</text>
      <rect x="520" y="428" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="530" y="437" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="628" y="436" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">integer</text>

      <rect x="400" y="444" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
      <text x="412" y="460" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">unit_price</text>
      <rect x="520" y="452" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="530" y="461" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="628" y="460" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">numeric(12,2)</text>

      <!-- Table: public.products -->
      <rect x="760" y="40" width="240" height="184" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <rect x="760" y="40" width="240" height="28" rx="6" fill="rgba(45,49,66,0.04)" stroke="none"/>
      <rect x="760" y="60" width="240" height="8" fill="rgba(45,49,66,0.04)"/>
      <line x1="760" y1="68" x2="1000" y2="68" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <text x="772" y="58" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">public.products</text>
      <rect x="948" y="48" width="40" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="968" y="57" fill="#2d3142" opacity="0.8" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">TABLE</text>

      <rect x="760" y="68" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
      <text x="772" y="84" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">id</text>
      <rect x="880" y="76" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="890" y="85" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">PK</text>
      <text x="988" y="84" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">uuid</text>

      <text x="772" y="108" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">sku</text>
      <rect x="880" y="100" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="890" y="109" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">UQ</text>
      <rect x="904" y="100" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="914" y="109" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="988" y="108" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">text</text>

      <rect x="760" y="116" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
      <text x="772" y="132" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">name</text>
      <rect x="880" y="124" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="890" y="133" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="988" y="132" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">text</text>

      <text x="772" y="156" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">price</text>
      <rect x="880" y="148" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="890" y="157" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="988" y="156" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">numeric(12,2)</text>

      <rect x="760" y="164" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
      <text x="772" y="180" fill="#4f5d75" font-size="9" font-family="monospace, monospace">+ 3 more columns</text>

      <line x1="760" y1="188" x2="1000" y2="188" stroke="rgba(45,49,66,0.12)" stroke-width="0.8"/>
      <text x="772" y="202" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.14em">INDEXES</text>
      <text x="772" y="220" fill="#4f5d75" font-size="9" font-family="monospace, monospace">uq_products_sku</text>

      <!-- Table: billing.invoices (inside BILLING group) -->
      <rect x="760" y="320" width="240" height="100" rx="6" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <rect x="760" y="320" width="240" height="28" rx="6" fill="rgba(45,49,66,0.04)" stroke="none"/>
      <rect x="760" y="340" width="240" height="8" fill="rgba(45,49,66,0.04)"/>
      <line x1="760" y1="348" x2="1000" y2="348" stroke="rgba(45,49,66,0.22)" stroke-width="1"/>
      <text x="772" y="338" fill="#2d3142" font-size="12" font-weight="600" font-family="Arial, sans-serif">billing.invoices</text>
      <rect x="948" y="328" width="40" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.40)" stroke-width="0.8"/>
      <text x="968" y="337" fill="#2d3142" opacity="0.8" font-size="8" font-family="monospace, monospace" text-anchor="middle" letter-spacing="0.08em">TABLE</text>

      <rect x="760" y="348" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
      <text x="772" y="364" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">id</text>
      <rect x="880" y="356" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="890" y="365" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">PK</text>
      <text x="988" y="364" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">uuid</text>

      <text x="772" y="388" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">order_id</text>
      <rect x="880" y="380" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="890" y="389" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">FK</text>
      <rect x="904" y="380" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="914" y="389" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="988" y="388" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">uuid</text>

      <rect x="760" y="396" width="240" height="24" fill="rgba(45,49,66,0.02)"/>
      <text x="772" y="412" fill="#2d3142" font-size="12" font-family="Arial, sans-serif">issued_at</text>
      <rect x="880" y="404" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="890" y="413" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">NN</text>
      <text x="988" y="412" fill="#4f5d75" font-size="9" font-family="monospace, monospace" text-anchor="end">timestamptz</text>

      <!-- Legend -->
      <line x1="40" y1="500" x2="1040" y2="500" stroke="rgba(45,49,66,0.10)" stroke-width="0.8"/>
      <text x="40" y="516" fill="#4f5d75" font-size="8" font-family="monospace, monospace" letter-spacing="0.18em">LEGEND</text>

      <rect x="40" y="532" width="20" height="12" rx="2" fill="#ffffff" stroke="#2d3142" stroke-width="1"/>
      <text x="68" y="540" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Table</text>

      <rect x="180" y="532" width="20" height="12" rx="2" fill="rgba(45,49,66,0.02)" stroke="rgba(45,49,66,0.35)" stroke-width="0.8" stroke-dasharray="3,3"/>
      <text x="208" y="540" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Schema group</text>

      <rect x="340" y="532" width="20" height="12" rx="2" fill="none" stroke="rgba(45,49,66,0.35)" stroke-width="0.8"/>
      <text x="350" y="541" fill="#2d3142" opacity="0.75" font-size="8" font-family="monospace, monospace" text-anchor="middle">PK</text>
      <text x="368" y="540" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Constraint chip</text>

      <line x1="500" y1="538" x2="520" y2="538" stroke="#4f5d75" stroke-width="1"/>
      <text x="528" y="540" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Foreign key (column to column)</text>

      <line x1="740" y1="538" x2="760" y2="538" stroke="#eb6c36" stroke-width="1.2"/>
      <text x="768" y="540" fill="#4f5d75" font-size="8.5" font-family="Arial, sans-serif">Destructive delete (CASCADE)</text>
    </svg>`}],o={revision:t,source:e,license:n,templates:i};export{o as default,n as license,t as revision,e as source,i as templates};
