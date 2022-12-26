import Blindness from '../components/demo/visual/blind';
import Blur from '../components/demo/visual/blur';
import Cloudy from '../components/demo/visual/cloudy';
import ColorBlind from '../components/demo/visual/color-blind';
import Obstruction from '../components/demo/visual/visual-obstruction';
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
            People with color blindness are less able to see certain colors, or differences
            between colors. This usually happens between greens and reds, and occasionally blues.
            Color blindness can be genetic (inherited from a parent) or acquired due to illness,
            injury, ageing or some medications.
          </p>
          <p>
            Some people with achromatopsia (total color blindness) also find
            it more difficult to see in brightly-lit places, and have a reduced ability to
            discern the shapes and details of the things they see.
          </p>
          <p>
            There are a number of types of color blindness. They are caused by the type of cells
            in the eye which are affected. These include:
          </p>
          <ul>
            <li>Protanopia: unable to perceive red light</li>
            <li>Protanomaly: reduced sensitivity to red light</li>
            <li>Deuteranopia: unable to perceive green light</li>
            <li>Deuteranomaly: reduced sensitivity to green light</li>
            <li>Tritanopia: unable to perceive blue light</li>
            <li>Tritanomaly: reduced sensitivity to blue light</li>
            <li>Achromatopsia: unable to perceive red, green or blue light</li>
          </ul>
          <p>
            Being color blind doesn&apos;t mean only being unable to perceive a specific color.
            Any color which <em>includes</em> that color could be confused for another color. As
            an example, purple, which is comprised of red and blue light, would be perceived
            similarly to a person with protanopia-type color blindness.
          </p>
          <p>
            Red-green color blindness affects up to 1 in 12 males (8%) and 1 in 200 females (0.5%).
            Worldwide, there are estimated to be about 300 million people with color blindness.
          </p>

          <h3>Designing for color blindness</h3>

          <p>
            Make sure that colors are not the only method of conveying important information:
          </p>
          <ul>
            <li>Ensure links are distinguishable from text in ways other than color</li>
            <li>Use contrast (lightness) to convey meaning as well as hue</li>
            <li>Use descriptive text labels where color is the subject</li>
            <li>Use iconography and descriptive labels to convey intent</li>
            <li>Use texture and patterns as well as color to convey information</li>
          </ul>
          <p>
            In the demo below, you can see how different types of color blindness can affect a
            person&apos;s access to information on the Web. Notice how certain design patterns
            make information more difficult to convey, whilst others enable people with
            color blindness to access information and interact with the page content.
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
