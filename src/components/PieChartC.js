import React, { PureComponent } from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

class PieChartC extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      country: {},
      cities: [],
      states: [],
      hoveredText: '',
      cityPop: [],
    };
  }

  CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    const { cityPop } = this.state;
    const data = cityPop[index];

    if (!data) {
      console.log('no data');
      return null;
    }

    const radius = innerRadius + (outerRadius - innerRadius) * 2;
    const angle = -midAngle + 90; 
    const x = cx + radius * Math.cos(angle * (Math.PI / 180));
    const y = cy + radius * Math.sin(angle * (Math.PI / 180));

    return (
    <g>
        <text
            x={x}
            y={y}
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={10}
            transform={`rotate(${angle} ${x} ${y})`} // Rotate the text
            onMouseEnter={() => this.handleTextHover(data.name)}
            onMouseLeave={() => this.handleTextHover(null)}
            onClick={() => this.handleTextClick(data.name)}
            style={{ cursor: 'pointer', color: this.state.hoveredText === data.name ? 'orange' : '#fff' }}
        >
          {`${data.name}`}
        </text>
    </g>

    );
  };

  handleTextClick = (name) => {
    const wikipediaLink = `https://en.wikipedia.org/wiki/${name}`;
    window.open(wikipediaLink, '_blank');
  };

  handleTextHover = (text) => {
    this.setState({ hoveredText: text });
  };

  async createCityPopTuple() {
    try {
      const promises = this.state.states.map(async (city) => {
        const populationCounts = 1;
        console.log(populationCounts);

        return {
          name: city.name,
          value: populationCounts,
        };
      });

      const cityPopData = await Promise.all(promises);

      this.setState({
        cityPop: cityPopData,
      });
    } catch (error) {
      console.error('Error pushing city data', error);
    }
  }

  componentDidMount() {
    this.dataUpdate();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.dataUpdate();
    }
  }

  dataUpdate() {
    const { country, cities, states } = this.props;
    this.setState({ country, cities, states }, () => {
      this.createCityPopTuple();
    });
  }

  render() {
    const { cityPop } = this.state;

    if (cityPop.length === 0) {
      console.log('cityPop is empty');
      return (
        <h1 className={`tc flex items-center justify-center ma3 pa3`} style={{ display: 'flex', justifyContent: 'center', width: '100vh', height: '80vh' }}>
          No data available
        </h1>
      );
    }

    console.log(cityPop);

    return (
<div className={`flex items-center justify-center ma3 pa3`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxHeight: '80vh', minWidth: '50%' }}>
    <ResponsiveContainer >
      <h3 className={`bg-white pa2 ma2 br3 b3`} style={{ width: '100%', height: '8%', justifyContent: 'center', textAlign: 'center' }}>
        {this.state.hoveredText}
      </h3>
      <PieChart>
        <Pie className={`ma4`} data={cityPop} dataKey="value" cx="50%" cy="50%" innerRadius={30} outerRadius={100} fill="#82ca9d" label={this.CustomLabel} />
      </PieChart>
  </ResponsiveContainer>
</div>

    );
  }
}

export default PieChartC;
