import { customElement } from "solid-element";
import styles from "./Navbar.css"
import { For } from 'solid-js';

interface NavbarProps{
    title: string, 
    color: string,
    src: string, 
    buttons: string,
    height: string,
    with: string
}


customElement("bd-navbar", 
  { 
    title: '', 
    color: '',
    src: '', 
    buttons: '',
    height: '',
    with: ''
  },
  (props: NavbarProps, {}) => {
    return (
      <>
        <style>{styles}</style>
        <div>
          <nav class="{ Nav }" style={'background-color: '+props.color}>
            <div class="{ NavDivImg }">
              <img 
                class="{ NavImg }" 
                width="100" 
                height="100" 
                src={props.src}></img>
              <span class="{ NavTitle }">{props.title}</span>
            </div>
            <div class="{ NavDivMenu }">
              <div class="{ NavDivMenuInner }">
                <For each={props.buttons}>{(button:any) =>

                  <a 
                    href="{button.href}" 
                    style={'color: '+button.color}
                    class="{ MenuVoice }">
                    {button.name}
                  </a>
                }</For>
              </div>
            </div>
          </nav>
        </div>
        </>);
  });

