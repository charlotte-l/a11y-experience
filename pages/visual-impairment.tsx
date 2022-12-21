import Blur from '../components/demo/Blur';
import Cloudy from '../components/demo/Cloudy';
import ColorBlind from '../components/demo/ColorBlind';
import Obstruction from '../components/demo/Obstruction';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import PageSection from '../components/PageSection';

export default function VisionLoss() {
  return (
    <>
      <Layout>
        <PageHeader
          id="visual-impairment-header"
          title="Visual Impairment"
          description={`
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus augue, aliquet nec dolor in, aliquam rhoncus augue. Etiam consectetur,
                        ante eu gravida faucibus, leo leo gravida nibh, id convallis tellus felis sit amet lorem. Quisque feugiat nec mauris quis euismod. 
                        In volutpat hendrerit augue, vel cursus justo faucibus ac. Nunc dolor leo, malesuada in accumsan commodo, facilisis ut justo.
                      `}
        />
        <PageSection
          id="visual-impairment--bluriness-header"
          title="Blurriness"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus
            augue, aliquet nec dolor in, aliquam rhoncus augue. Etiam
            consectetur, ante eu gravida faucibus, leo leo gravida nibh, id
            convallis tellus felis sit amet lorem. Quisque feugiat nec mauris
            quis euismod. In volutpat hendrerit augue, vel cursus justo faucibus
            ac. Nunc dolor leo, malesuada in accumsan commodo, facilisis ut
            justo.
          </p>

          <Blur />
        </PageSection>

        <PageSection
          id="visual-impairment--cloudiness-header"
          title="Cloudiness"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus
            augue, aliquet nec dolor in, aliquam rhoncus augue. Etiam
            consectetur, ante eu gravida faucibus, leo leo gravida nibh, id
            convallis tellus felis sit amet lorem. Quisque feugiat nec mauris
            quis euismod. In volutpat hendrerit augue, vel cursus justo faucibus
            ac. Nunc dolor leo, malesuada in accumsan commodo, facilisis ut
            justo.
          </p>

          <Cloudy />
        </PageSection>

        <PageSection
          id="visual-impairment--color-blindness-header"
          title="Color Blindness"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus
            augue, aliquet nec dolor in, aliquam rhoncus augue. Etiam
            consectetur, ante eu gravida faucibus, leo leo gravida nibh, id
            convallis tellus felis sit amet lorem. Quisque feugiat nec mauris
            quis euismod. In volutpat hendrerit augue, vel cursus justo faucibus
            ac. Nunc dolor leo, malesuada in accumsan commodo, facilisis ut
            justo.
          </p>

          <ColorBlind />
        </PageSection>

        <PageSection
          id="visual-impairment--obstructions-header"
          title="Visual Field Obstructions"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus
            augue, aliquet nec dolor in, aliquam rhoncus augue. Etiam
            consectetur, ante eu gravida faucibus, leo leo gravida nibh, id
            convallis tellus felis sit amet lorem. Quisque feugiat nec mauris
            quis euismod. In volutpat hendrerit augue, vel cursus justo faucibus
            ac. Nunc dolor leo, malesuada in accumsan commodo, facilisis ut
            justo.
          </p>

          <Obstruction />
        </PageSection>
      </Layout>
    </>
  );
}
