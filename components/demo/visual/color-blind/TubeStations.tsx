import Grid from '../../Grid';
import GridItem from '../../GridItem';

type StationsProps = {
  stations: Array<{
    label: string,
    bgColor: string,
    textColor: string,
  }>
};

const TubeStations = ({ stations }: StationsProps) => (
  <Grid
    columns="repeat(5, 1fr)"
    rows="repeat(3, 1fr)"
    styles={`
        text-align: center;
    `}
  >
    {stations.map((station) => (
      <GridItem
        key={station.label}
        styles={`
          background: ${station.bgColor};
          color: ${station.textColor};
        `}
      >
        {station.label}
      </GridItem>
    ))}
  </Grid>
);

export default TubeStations;
