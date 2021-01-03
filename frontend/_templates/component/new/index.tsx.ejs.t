---
to: src/components/<%= level %>/<%= h.changeCase.pascal(name) %>/index.tsx
---
import React from 'react';

interface <%= h.changeCase.pascal(name) %>Props {};

const <%= h.changeCase.pascal(name) %>: React.FC<<%= h.changeCase.pascal(name) %>Props> = ({}) => {
  return <div className="<%= h.createBaseClassName(level, name) %>"><%= h.changeCase.pascal(name) %></div>;
};

export default <%= h.changeCase.pascal(name) %>;