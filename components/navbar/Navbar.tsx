import { customElement } from "solid-element";
import styles from "./Navbar.css"

customElement("bd-navbar", { title: 'one', icon: 'two' }, (props: any, { element }) => {
  return (
    <>
      <style>{styles}</style>
      <div>
        <p class={ 'pippo' }> ciao</p>
      </div>
    </>
  );
});
