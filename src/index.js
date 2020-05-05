import React from 'react'
import htm from 'https://unpkg.com/htm?module'
import ReactDOM from 'react-dom'

const html = htm.bind(React.createElement)

ReactDOM.createRoot(document.getElementById('app')).render(html`<div>yoyo</div>`)
