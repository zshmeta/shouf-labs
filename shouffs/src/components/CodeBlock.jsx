import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Use the theme you prefer

class CodeBlock extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { code, language } = this.props;
    return (
      <pre>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    );
  }
}

export default CodeBlock;
