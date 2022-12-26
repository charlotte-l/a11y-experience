import { CSSProp } from 'styled-components';
import Grid from '../../Grid';
import GridItem from '../../GridItem';

type TubeStationProps = {
  stations: Array<{
    label: string,
    background: string,
    bgSize?: string,
    textColor: string,
  }>,
  styles: CSSProp<any>,
};

const TubeStations = ({ stations, styles }: TubeStationProps) => (
  <Grid
    columns="repeat(5, 1fr)"
    rows="repeat(3, 1fr)"
    styles={styles}
  >
    {stations.map((station) => (
      <GridItem
        key={station.label}
        styles={`
          background: ${station.background};
          background-size: ${station.bgSize || 'cover'};
          color: ${station.textColor};
        `}
      >
        {station.label}
      </GridItem>
    ))}
  </Grid>
);

export default TubeStations;
