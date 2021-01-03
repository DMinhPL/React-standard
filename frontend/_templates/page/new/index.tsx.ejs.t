---
to: src/pages/<%= name %>/index.tsx
---
import React from 'react';

const <%= h.toPascalCase(name) %>: React.FC = () => <h1><%= h.toPascalCase(name) %></h1>;

export default <%= h.toPascalCase(name) %>;
