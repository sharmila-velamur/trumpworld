var graphStyles = 
	'core {' +
        'active-bg-color: #cfd8dc;' +
        'active-bg-opacity: 1.0;' +
    '}' +
    'edge {' +
        'line-color: #546e7a;' +
        'curve-style: haystack;' +
        'haystack-radius: 0.2;' +
        'opacity: 0.8;' +
        'width: 2;' +
        'z-index: 0;' +
        'overlay-opacity: 0;' +
        'events: no;' +
    '}' +
    'node {' +
        'width: 2;' +
        'height: 2;' +
        'font-size: 20;' +
        'min-zoomed-font-size: 0;' +
        'text-valign: center;' +
        'text-halign: center;' +
        'color: #212121;' +
        'font-weight:600;' +
    '}' +
    'node[dcn > 0.001] {' +
        'content: data(name);' +
        'min-zoomed-font-size: 4;' +
    '}' +
    'node[label = "Contract" ] [dcn > 0.001]{' +
        'content: data(purpose);' +
        'min-zoomed-font-size: 4;' +
    '}' +
    'node[label = "Organization"] {' +
        'background-color: #6A1B9A;' +
    '}' +    
    'node[label = "Person"] {' +
        'background-color: #d81b60;' +
    '}' +
    'node[label = "Agency"] {' +
        'background-color: #f57f17;' +
    '}' +
    'node[label = "Country"] {' +
        'background-color: #0288D1;' +
    '}' +
    'node[label = "Contract"] {' +
        'background-color: #388e3c;' +
    '}' +
    'node{' +
        'width: mapData(dcn, 0.1, 1, 100, 700);' +
        'height: mapData(dcn, 0.1, 1, 100, 700);' +
    '}' +
    'node.ccn-resize{' +
        'width: mapData(ccn, 0, 1, 1, 100);' +
        'height: mapData(ccn, 0, 1, 1, 100);' +
    '}' +
    'node.bc-resize{' +
        'width: mapData(bc, 0, 20156000, 10, 700);' +
        'height: mapData(bc, 0, 20156000, 10, 700);' +
    '}' +
    'node.pr-resize{' +
        'width: mapData(pr, 0, 0.05, 10, 600);' +
        'height: mapData(pr, 0, 0.05, 10, 600);' +
    '}' +
    'node:selected {' +
        'border-color: #b9f6ca;' +
        'border-width: 5;' +
    '}' +
    'node.focus {' +
        'border-color: #FFFF00;' +
        'border-width: 10;' +
        'content: data(name);' +
    '}' +
    'node.focus-neighbour {' +
        'content: data(name);' +
        'border-color: #FFFF00;' +
        'border-width: 5; ' +
    '}' +
    '.faded {' +
      'events: no;' +
    '}' +
    'node.faded {' +
      'opacity: 0.08;' +
      'z-index: 0;' +
    '}' +
    'edge.faded {' +
      'opacity: 0.06;' +
      'z-index: 0;' +
    '}' +
    '.hidden {' +
        'display: none;' +
    '}' +
    'edge.not-path {' +
      'opacity: 0.1;' +
      'z-index: 0;' +
    '}' +
    'node.not-path {' +
      'opacity: 0.1;' +
      'z-index: 0;' +
    '}' +
    'edge.path {' +
      'opacity: 0.8;' +
      'line-color: #37474F;' +
      'width: 10;' +
      'z-index: 9999;' +
      'content: data(connection); ' +
      'font-size: 20;' +
        'font-weight: normal;' +
        'min-zoomed-font-size: 2;' +
        'color: #000;' +
        'font-weight:600;' +
        'text-background-color: #fff;' +
        'text-background-opacity: 1; ' +
    '}' +
    'node.path {' +
        'border-color: #FFFF00;' +
        'border-width: 10;' +
    '}' +
    'node.start,' +
    'node.end {' +
        'border-color: #FFFF00;' +
        'border-width: 10;' +
    '}';




