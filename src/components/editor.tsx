import React, { useState } from 'react'
import AceEditor from 'react-ace'
import './editor.css'
import yaml from 'js-yaml'

import 'ace-builds/src-noconflict/mode-yaml'
import 'ace-builds/src-noconflict/theme-textmate'

function parseSyntax(state: string) {
  try {
    const doc = yaml.safeLoad(state)
    console.log(doc)
  } catch (e) {
    console.error(e)
  }
}

const Editor: React.FC = () => {
  const [state, updateState] = useState('')
  const onChange = (newValue: any) => {
    parseSyntax(newValue)
  }
  const onCursorChange = (selection: any) => console.log(selection)
  return (
    <div className="editor">
      <AceEditor
        enableBasicAutocompletion={['on']}
        enableLiveAutocompletion={['on']}
        enableSnippets
        tabSize={2}
        mode="yaml"
        theme="textmate"
        onChange={onChange}
        width="100%"
        height="inherit"
        showPrintMargin={false}
        name="ace-editor"
        onCursorChange={onCursorChange}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  )
}

export default Editor
