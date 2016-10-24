import React from 'react';
import {Link} from 'react-router';
import ChartistGraph from 'react-chartist';

class Customize extends React.Component {

  constructor() {
    super();
    var judet = localStorage['county'];
	this.state = {}

	console.log(judet);
	fetch("http://localhost:8080/"+judet)
		.then(response => {
			response.json().then(json => {
				this.setState({
					inv: json.invatamant/1000000,
					trans: json.transporturi/1000000,
					asig: json.asigurari/1000000,
					serv: json.servicii/1000000,
					dezv: json["dezvoltare publica"]/1000000,
					cult: json.cultura/1000000,
					eco: json.eco/1000000,
					sana: json.sanatate/1000000,
					energ: json.energie/1000000,
					apar: json.aparare/1000000,
					alt: json.altele/1000000
				});
				this.setState({max: Math.max(this.state.inv, this.state.trans, this.state.asig,
					this.state.serv, this.state.dezv, this.state.cult, this.state.eco,
					this.state.sana, this.state.energ, this.state.apar, this.state.alt)});
			});
		});
  }

  componentDidMount() {
	    var parti = ['Invatamant', 'Transporturi', 'Asigurari', 'Servicii', 'Dezvoltare',
	                'Cultura', 'Ecologie', 'Sanatate', 'Energie', 'Aparare', 'Altele'];
	    var activeBar, bars, gridTop, gridBottom, range;
		range = localStorage.getItem("county")=="Total"?20000:this.state.max*1.3/1000000;
	    document.addEventListener("mousemove", (evt) => {
	      if(activeBar) {
	        document.body.style.cursor = "ns-resize";
	        var newSVGTop = evt.clientY - document.getElementsByTagName("svg")[0].getBoundingClientRect().top;
	        if(newSVGTop < gridTop) newSVGTop = gridTop;
	        if(newSVGTop > gridBottom) newSVGTop = gridBottom;
	        bars[activeBar].y2.baseVal.value = newSVGTop;
	        console.log((gridBottom - newSVGTop)/(gridBottom - gridTop)*range);
	        document.getElementsByClassName("ct-label ct-horizontal")[activeBar].innerHTML = parti[activeBar]+" <br/> "+
	          Math.floor((gridBottom - newSVGTop)/(gridBottom - gridTop)*range)+" mld";
	      }
	    }, false);
	    document.addEventListener("mouseup", () => {activeBar = null;document.body.style.cursor = "initial";}, false)

        gridTop = document.getElementsByClassName("ct-grids")[0].firstChild.y1.baseVal.value;
        gridBottom = document.getElementsByClassName("ct-grids")[0].firstChild.y2.baseVal.value;
        bars = document.getElementsByClassName("ct-series")[0].getElementsByTagName("line");
        for(var i=0; i<bars.length; i++) {
          bars[i].onmousedown = Function("activeBar = " + i);
        }
  }

  render() {
    var data = {
      series: [
        [this.state.inv, this.state.trans, this.state.asig, this.state.serv, this.state.dezv, this.state.cult, this.state.eco, this.state.sana, this.state.energ, this.state.apar, this.state.alt]
      ],
      labels: [
      'Invatamant' + '<br />' + `${this.state.inv} mil`,
      'Transporturi' + '<br />' + `${this.state.trans} mil`,
      'Asigurari' + '<br />' + `${this.state.asig} mil`,
      'Servicii' + '<br />' + `${this.state.serv} mil`,
      'Dezvoltare' + '<br />' + `${this.state.dezv} mil`,
      'Cultura' + '<br />' + `${this.state.cult} mil`,
      'Ecologie' + '<br />' + `${this.state.eco} mil`,
      'Sanatate' + '<br />' + `${this.state.sana} mil`,
      'Energie' + '<br />' + `${this.state.energ} mil`,
      'Aparare' + '<br />' + `${this.state.apar} mil`,
      'Altele' + '<br />' + `${this.state.alt} mil`
    ]};
    var county = localStorage.getItem("county");
    var options = {
      high: this.state.max*1.1,
      width: '80vw',
      height: '50vh',
    };
    return (
      <div>
        <p className="text noselect">{county}</p>
        <ChartistGraph data={data} options={options} type={'Bar'} />
      </div>
    )
  }
}

export default Customize;
