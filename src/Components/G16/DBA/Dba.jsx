import React from 'react'
import Style from './Dba.module.css'
import copyToClip from '../../../JS/BtnCopy';

function Dba() {

  return (
    <div id="Pdba" className={Style.container}>
      <h2> Profile DBA</h2>
      <div className={Style.content}>
        <code id="bloco" className={Style.code} onClick={() =>
          copyToClip(document.getElementById('bloco').innerText)
        }>
          <pre>deploy profile dba</pre>
          <pre>aim 1 name DBA-DEFAULT</pre>
          <pre>type 4 max 1200000</pre>
          <pre>active</pre>
          <pre>exit</pre>
        </code>
      </div>
    </div>
  )
}

export default Dba

