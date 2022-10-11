import React from 'react'
import Style from './ProfileVlan.module.css'
import ValueContext from "../../js/ValueContext";

export default function ProfileVlan() {
  const { values } = React.useContext(ValueContext);
  const [buttonText, setButtonText] = React.useState('Copiar');

  function copyToClip(str) {
    function listener(e) {
      e.preventDefault();
      e.clipboardData.setData('text/plain', str);
    }
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
    setButtonText('Copiado!');
    setTimeout(() => {
      setButtonText('Copiar');
    }, 2000);
  }

  return (
    <div className={Style.container}>
      <h2>#4 Profile Vlan</h2>
      <div className={Style.content}>
        <span id="profile-vlan">
          <pre>deploy profile vlan</pre>
          <span id="bloco1" className={Style.teste} onClick={() =>
            copyToClip(document.getElementById('bloco1').innerText)
          }>
            <pre>aim {values.aimvlanpon1} name vlan{values.vlanpon1}</pre><pre>translate old-vlan {values.vlanpon1} new-vlan {values.vlanpon1}</pre><pre>active</pre>
            <pre>aim {values.aimvlanpon2} name vlan{values.vlanpon2}</pre><pre>translate old-vlan {values.vlanpon2} new-vlan {values.vlanpon2}</pre><pre>active</pre>
            <pre>aim {values.aimvlanpon3} name vlan{values.vlanpon3}</pre><pre>translate old-vlan {values.vlanpon3} new-vlan {values.vlanpon3}</pre><pre>active</pre>
            <pre>aim {values.aimvlanpon4} name vlan{values.vlanpon4}</pre><pre>translate old-vlan {values.vlanpon4} new-vlan {values.vlanpon4}</pre><pre>active</pre>
          </span>
          <hr />
          <span id="bloco2" className={Style.teste} onClick={() =>
            copyToClip(document.getElementById('bloco2').innerText)
          }>
            <pre>aim {values.aimvlanpon5} name vlan{values.vlanpon5}</pre><pre>translate old-vlan {values.vlanpon5} new-vlan {values.vlanpon5}</pre><pre>active</pre>
            <pre>aim {values.aimvlanpon6} name vlan{values.vlanpon6}</pre><pre>translate old-vlan {values.vlanpon6} new-vlan {values.vlanpon6}</pre><pre>active</pre>
            <pre>aim {values.aimvlanpon7} name vlan{values.vlanpon7}</pre><pre>translate old-vlan {values.vlanpon7} new-vlan {values.vlanpon7}</pre><pre>active</pre>
            <pre>aim {values.aimvlanpon8} name vlan{values.vlanpon8}</pre><pre>translate old-vlan {values.vlanpon8} new-vlan {values.vlanpon8}</pre><pre>active</pre>
          </span>
          <hr />
          <span id="bloco3" className={Style.teste} onClick={() =>
            copyToClip(document.getElementById('bloco3').innerText)
          }>
            <pre>aim {values.aimvlanpon9} name vlan{values.vlanpon9}</pre><pre>translate old-vlan {values.vlanpon9} new-vlan {values.vlanpon9}</pre><pre>active</pre>
            <pre>aim {values.aimvlanpon10} name vlan{values.vlanpon10}</pre><pre>translate old-vlan {values.vlanpon10} new-vlan {values.vlanpon10}</pre> <pre>active</pre>
            <pre>aim {values.aimvlanpon11} name vlan{values.vlanpon11}</pre><pre>translate old-vlan {values.vlanpon11} new-vlan {values.vlanpon11}</pre> <pre>active</pre>
            <pre>aim {values.aimvlanpon12} name vlan{values.vlanpon12}</pre><pre>translate old-vlan {values.vlanpon12} new-vlan {values.vlanpon12}</pre> <pre>active</pre>
          </span>
          <hr />
          <span id="bloco4" className={Style.teste} onClick={() =>
            copyToClip(document.getElementById('bloco4').innerText)
          }>
            <pre>aim {values.aimvlanpon13} name vlan{values.vlanpon13}</pre><pre>translate old-vlan {values.vlanpon13} new-vlan {values.vlanpon13}</pre> <pre>active</pre>
            <pre>aim {values.aimvlanpon14} name vlan{values.vlanpon14}</pre><pre>translate old-vlan {values.vlanpon14} new-vlan {values.vlanpon14}</pre> <pre>active</pre>
            <pre>aim {values.aimvlanpon15} name vlan{values.vlanpon15}</pre><pre>translate old-vlan {values.vlanpon15} new-vlan {values.vlanpon15}</pre> <pre>active</pre>
            <pre>aim {values.aimvlanpon16} name vlan{values.vlanpon16}</pre><pre>translate old-vlan {values.vlanpon16} new-vlan {values.vlanpon16}</pre> <pre>active</pre>
            <pre>exit</pre>
          </span>
        </span>

      </div>

    </div >

  )
}