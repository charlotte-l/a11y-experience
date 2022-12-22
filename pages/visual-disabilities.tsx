import Blindness from '../components/demo/visual/Blindness';
import Blur from '../components/demo/visual/Blur';
import Cloudy from '../components/demo/visual/Cloudy';
import ColorBlind from '../components/demo/visual/ColorBlind';
import Obstruction from '../components/demo/visual/Obstruction';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import PageSection from '../components/PageSection';

export default function VisualDisability() {
  return (
    <>
      <Layout showChapters>
        <PageHeader
          id="visual-disability--header"
          title="Visual Disabilities"
        >
          <p>
            <em>At least</em> 2.2 billion people have a vision impairment. This figure doesn&apos;t
            include those who wear glasses or contact lenses to compensate. 4.5% of the global
            population experience color blindness. 4% suffer from low vision, and 0.6% are
            completely blind.
          </p>
        </PageHeader>

        <PageSection
          id="visual-disability--blurriness-header"
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
          id="visual-disability--cloudiness-header"
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
          id="visual-disability--color-blindness-header"
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
          id="visual-disability--obstructions-header"
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

        <PageSection
          id="visual-disability--blindness-header"
          title="Blindness (complete vision loss)"
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

          <Blindness />
        </PageSection>
      </Layout>
    </>
  );
}
