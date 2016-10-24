import React from 'react';
import {hashHistory} from 'react-router';

class Welcome extends React.Component {

  constructor() {
    super();
    this.goNext = this.goNext.bind(this);
  }

  goNext() {
    hashHistory.push('/Customize');
    localStorage.setItem("county", document.getElementById("judet").value);
  }

  render() {
    return(
      <div>
        <p className="text header">Budget Rapperz</p>
        <div className="centeredtextwrapper">
          <div className="centeredtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <select style={{display: "block"}} id="judet">
              <option value="Total">Toata Tara</option>
              <option value="Alba">Alba</option>
              <option value="Arad">Arad</option>
              <option value="Arges">Arges</option>
              <option value="Bacau">Bacau</option>
              <option value="Bihor">Bihor</option>
              <option value="Bistrita-Nasaud">Bistrita-Nasaud</option>
              <option value="Botosani">Botosani</option>
              <option value="Braila">Braila</option>
              <option value="Brasov">Brasov</option>
              <option value="Bucuresti">Bucuresti</option>
              <option value="Buzau">Buzau</option>
              <option value="Calarasi">Calarasi</option>
              <option value="Caras-Severin">Caras-Severin</option>
              <option value="Cluj">Cluj</option>
              <option value="Constanta">Constanta</option>
              <option value="Covasna">Covasna</option>
              <option value="Dambovita">Dambovita</option>
              <option value="Galati">Galati</option>
              <option value="Giurgiu">Giurgiu</option>
              <option value="Gorj">Gorj</option>
              <option value="Harghita">Harghita</option>
              <option value="Hunedoara">Hunedoara</option>
              <option value="Ialomita">Ialomita</option>
              <option value="Iasi">Iasi</option>
              <option value="Ilfov">Ilfov</option>
              <option value="Maramures">Maramures</option>
              <option value="Mehedinti">Mehedinti</option>
              <option value="Mures">Mures</option>
              <option value="Neamt">Neamt</option>
              <option value="Olt">Olt</option>
              <option value="Prahova">Prahova</option>
              <option value="Salaj">Salaj</option>
              <option value="Satu Mare">Satu Mare</option>
              <option value="Sibiu">Sibiu</option>
              <option value="Suceava">Suceava</option>
              <option value="Teleorman">Teleorman</option>
              <option value="Timis">Timis</option>
              <option value="Tulcea">Tulcea</option>
              <option value="Valcea">Valcea</option>
              <option value="Vaslui">Vaslui</option>
              <option value="Vrancea">Vrancea</option>
            </select>
            <button className="button" onClick={this.goNext}>Mergeti mai departe</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome;
