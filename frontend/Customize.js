import React from 'react';
import {Link} from 'react-router';
import ChartistGraph from 'react-chartist';

var date = {
  Total: [0,0,0,0,0,0,0,0,0,0,0],
  Alba: [228160000,	153320000,	120700000,	101420000,	72400000,	69970000,	28220000,	15850000,	0,	8680000,	8130000],
  Arad: [274750000,	190260000,	132870000,	163950000,	88920000,	91870000,	53060000,	13810000,	23810000,	11200000,	8090000],
  Arges: [443310000,	217400000,	186440000,	151310000,	159630000,	134300000,	73550000,	28890000,	29280000,	14960000,	16600000],
  Bacau: [412040000,	193660000,	186390000,	172980000,	87060000,	74930000,	63680000,	22080000,	65540000,	15010000,	11390000],
  Bihor: [424300000,	283070000,	185590000,	130200000,	147640000,	106420000,	57330000,	16980000,	80730000,	8390000,49530000],
  BistritaNasaud: [221260000,	232640000,	98020000,	88520000,	107040000,	46190000,	49000000,	15750000,	0,	8200000,	0],
  Botosani: [305040000,	173180000,	111250000,	94990000,	49350000,	54660000,	43640000,	31850000,	17470000,	8800000,	3220000],
  Braila: [220550000,	139160000,	97280000,	77190000,	59150000,	37470000,	24760000,	23750000, 0,	11110000,	5480000],
  Brasov: [346030000,	299510000,	146010000,	166890000,	137320000,	107140000,	76340000,	16200000,	50640000,	16590000,	25100000],
  Bucuresti: [1420000000,	1360000000,	684180000,	874060000,	693880000,	928670000,	594230000,	246430000,	610290000,	154820000,	3890000],
  Buzau: [323020000,	142890000,	135220000,	113500000,	67500000,	56790000,	43060000,	28280000,	46120000,	18490000,	5650000],
  Calarasi: [188730000,	82390000,	115660000,	81430000,	45290000,	37920000,	44770000,	16680000,	2090000,	4950000,	6700000],
  CarasSeverin: [193540000,	78090000,	107570000,	108560000,	108560000,	47690000,	94170000,	27180000,	2540000,	11080000,	26160000],
  Cluj: [471950000,	408400000,	227320000,	255600000,	159940000,	105740000,	88880000,	30200000,	38510000,	16410000,	32920000]
};

var maxime = {};

for(var jud in date) {
  maxime[jud] = 0;
  for(var stat in date[jud]) {
    date.Total[stat] += date[jud][stat];
    if(maxime[jud]<date[jud][stat])
      maxime[jud] = date[jud][stat];
  }
}

console.log(maxime);

for(var stat in date.Total)
  date.Total[stat] *= 42/14;


class Customize extends React.Component {

  constructor() {
    super();
    var judet = localStorage['county'];
    this.state = {
      inv: date[judet][0]/1000000,
      trans: date[judet][1]/1000000,
      asig: date[judet][2]/1000000,
      serv: date[judet][3]/1000000,
      dezv: date[judet][4]/1000000,
      cult: date[judet][5]/1000000,
      eco: date[judet][6]/1000000,
      sana: date[judet][7]/1000000,
      energ: date[judet][8]/1000000,
      apar: date[judet][9]/1000000,
      alt: date[judet][10]/1000000
    }
    this.submit = this.submit.bind(this);
  }

  submit() {
    this.setState({
      inv: this.state.inv + 1000
    })
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
      high: county=="Total"?20000:maxime[county]*1.3/1000000,
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
