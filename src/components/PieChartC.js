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
      fill:'#fff'
    };
  }

  CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    const { cityPop, fill } = this.state;
    const data = cityPop[index];

    if (!data) {
      console.log('no data');
      return null;
    }

    const radius = innerRadius + (outerRadius - innerRadius) * 2.5;
    const angle = -midAngle + 90; 
    const x = cx + radius * Math.cos(angle * (Math.PI / 180));
    const y = cy + radius * Math.sin(angle * (Math.PI / 180));

    return (
    <g>
        <text
            x={x}
            y={y}
            fill={fill}
            textAnchor='middle'
            dominantBaseline='central'
            fontSize={10}
            transform={`rotate(${angle} ${x} ${y})`}
            onMouseEnter={() => this.handleTextHover(data.name)}
            onMouseLeave={() => this.handleTextHover(data.name)}
            onClick={() => this.handleTextClick(data.name)}
            style={{ cursor: 'pointer'}}
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

    const divStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      cursor: 'pointer',
    };

    if (cityPop.length === 0) {
      console.log('Data is unavailable');
      return (
        <h1 className={'tc flex items-center justify-center ma3 pa3'} style={{  width: '100%', height: '500px' }}>
          No data available
        </h1>
      );
    }

    return (
      <div style={divStyle}>
                <ResponsiveContainer className='bg-navy pa3 br2' >
                    <p style={{display: 'flex', justifyContent: 'center',  color: 'orange'}}>States</p>
                    <h3 
                      className={'bg-white flex items-center justify-center ma2 br4'} 
                      style={{ width: '100%', height: '50px', textAlign: 'center'}}
                      title='Click on state for info'
                    >
                        {this.state.hoveredText}
                    </h3>
                  <PieChart className={'pa4'} style={{maxHeight: '70vh'}}>
                    <Pie className={'pa2'} data={cityPop} dataKey='value' cx='50%' cy='50%' innerRadius={30} outerRadius={100} fill='#82ca9d' label={this.CustomLabel} />
                  </PieChart>
              </ResponsiveContainer>
      </div>

    );
  }
}

export default PieChartC;
