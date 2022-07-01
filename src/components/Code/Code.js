import React from 'react';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';

SyntaxHighlighter.registerLanguage('python', python);

export const Code = raw_code => {
  raw_code = raw_code.code;

  const custome_style = {
    borderRadius: 20,
    border: 5,
    marginLeft: '12%',
    marginRight: '12%',
    marginTop: '3%',
    marginBottom: '2%',
    padding: '3%',
  };

  return (
    <div className="code_container">
      <SyntaxHighlighter
        language="python"
        style={darcula}
        customStyle={custome_style}
        codeTagProps={{
          style: {
            fontFamily: 'Source Code Pro',
            fontStyle: 'monospace',
            fontSize: 16,
          },
        }}
        showLineNumbers={true}
      >
        {raw_code}
      </SyntaxHighlighter>
    </div>
  );
};
