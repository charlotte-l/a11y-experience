import Link from 'next/link';
import Blindness from '../components/demo/visual/blind';
import VisualAcuity from '../components/demo/visual/visual-acuity';
import ColorBlind from '../components/demo/visual/color-blind';
import Obstruction from '../components/demo/visual/visual-obstruction';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import PageSection from '../components/PageSection';

export default function VisualDisability() {
  return (
    <>
      <Layout showChapters>
        <PageHeader id="visual-disability--header" title="Visual Disabilities">
          <p>
            People with visual disabilities or limitations may use assistive
            technologies like screen magnification software, screen readers or
            braille displays when browsing the Web. They may also use a keyboard
            to navigate and interact with websites. To ensure people using such
            technologies are able to fully access and interact with the Web,{' '}
            <Link
              href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"
              target="_blank"
              rel="noopener"
            >
              well-structured, semantic HTML
            </Link>{' '}
            should be the basis of every Website.
          </p>
        </PageHeader>

        <PageSection
          id="visual-disability--acuity-header"
          title="Reduced Visual Acuity"
        >
          <p>
            Visual acuity is a measure of how well small details are perceived
            in the very center of a person&apos; visual field. This can be
            broken down into <em>far acuity</em> (recognizing details at a far
            distance) and <em>near acuity</em> (recognizing details at a near
            distance). If a person has reduced visual acuity, objects and text
            can appear out of focus and hazy or blurry.
          </p>
          <p>
            Loss of visual acuity can be caused by a number of conditions, both
            temporary and long-term. Some low visual acuity can be corrected
            with glasses, contact lenses, or surgery. Others cannot. Other types
            of vision impairment can also cause loss of acuity.
          </p>
          <p>Some common causes of reduced visual acuity include:</p>
          <ul>
            <li>Refractive error (due to the shape of the eye)</li>
            <li>Migraines</li>
            <li>Cataracts</li>
            <li>Macular degeneration (often, but not always, age-related)</li>
            <li>Eye infections such as conjunctivitis</li>
            <li>Pregnancy (caused by hormonal changes)</li>
            <li>Traumatic brain injuries and strokes</li>
          </ul>
          <p>
            Globally, as of 2020,{' '}
            <Link
              href="https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment"
              target="_blank"
              rel="nofollow noopener"
            >
              over 2.2 billion people have reduced visual acuity
            </Link>
            . This figure doesn&apos;t include those who wear glasses or contact
            lenses to compensate. It has also been estimated in 2017 that there
            are 7.08 million people living with visual acuity loss in the United
            States.
          </p>

          <h3>Designing for reduced visual acuity</h3>
          <p>
            Ensuring that people with reduced visual acuity can{' '}
            <Link
              href="http://ssb22.user.srcf.net/css/"
              target="_blank"
              rel="noopener"
            >
              apply their own styles to a Webpage
            </Link>{' '}
            is important. People have different needs and different preferences
            when browsing the Web. Designing and developing for user
            customizations enables people to adapt your page to be accessible to
            them.
          </p>
          <ul>
            <li>
              Allow customization of fonts, text size, text style, colors,
              spacing, leading and margins, either with custom controls or
              through applying a stylesheet
            </li>
            <li>
              Allow customization of the justification of text (full, left,
              right or centered)
            </li>
            <li>
              Allow customization of margins and borders around blocks of text
            </li>
            <li>
              Utilize spacing to group relevant elements closer together - for
              example, keep a heading close to the content it&apos;s for
            </li>
            <li>
              Ensure functionality triggered by hovering, clicking, or focusing
              on an element. For example, tooltips and popovers should stay in
              view once triggered when scrolling or moving the mouse
            </li>
          </ul>

          <VisualAcuity />
        </PageSection>

        <PageSection
          id="visual-disability--color-blindness-header"
          title="Color Blindness"
        >
          <p>
            People with color blindness are less able to see certain colors, or
            differences between colors. This usually happens between greens and
            reds, and occasionally blues. Color blindness can be genetic
            (inherited from a parent) or acquired due to illness, injury, ageing
            or some medications.
          </p>
          <p>
            Some people with achromatopsia (total color blindness) also find it
            more difficult to see in brightly-lit places, and have a reduced
            ability to discern the shapes and details of the things they see.
          </p>
          <p>
            There are a number of types of color blindness. They are caused by
            the type of cells in the eye which are affected. These include:
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
            Being color blind doesn&apos;t mean only being unable to perceive a
            specific color. Any color which <em>includes</em> that color could
            be confused for another color. As an example, purple, which is
            comprised of red and blue light, would be perceived similarly to a
            person with protanopia-type color blindness.
          </p>
          <p>
            Red-green color blindness affects up to 1 in 12 males (8%) and 1 in
            200 females (0.5%). Worldwide, there are estimated to be about 300
            million people with color blindness.
          </p>

          <h3>Designing for color blindness</h3>

          <p>
            Make sure that colors are not the only method of conveying important
            information:
          </p>
          <ul>
            <li>
              Ensure links are distinguishable from text in ways other than
              color
            </li>
            <li>Use contrast (lightness) to convey meaning as well as hue</li>
            <li>Use descriptive text labels where color is the subject</li>
            <li>Use iconography and descriptive labels to convey intent</li>
            <li>
              Use texture and patterns as well as color to convey information
            </li>
          </ul>

          <p>
            In the demo below, you can see how different types of color
            blindness can affect a person&apos;s access to information on the
            Web. Notice how certain design patterns make information more
            difficult to convey, whilst others enable people with color
            blindness to access information and interact with the page content.
          </p>
          <ColorBlind />
        </PageSection>

        <PageSection
          id="visual-disability--obstructions-header"
          title="Visual Field Obstructions"
        >
          <p>
            The area from which a person&apos;s eye is able to gather visual
            information when looking at a single point is referred to as the
            field of vision or visual field. Some people have a smaller field of
            vision. This is called visual field loss, or visual field
            obstruction. Visual field obstruction often also causes blurred
            vision.
          </p>
          <p>
            A person can have visual field loss from birth, but more commonly,
            it is caused by a medical condition which affects the retina or
            optic nerve. Some types of visual field loss can be temporary; for
            example, due to a migraine. Visual field loss can be grouped into
            the following types:
          </p>
          <ul>
            <li>
              Central field loss: vision is reduced or absent in the middle of a
              person&apos;s vision. Macular degeneration is a common cause of
              this type of vision loss
            </li>
            <li>
              Peripheral field loss: only seeing in the central portion of
              one&apos;s visual field; having &ldquo;tunnel vision&rdquo;.
              Glaucoma is a common cause of this type of vision loss
            </li>
            <li>
              Spotted vision: scattered patches of obscured vision. Diabetic
              retinopathy is a common cause of this type of vision loss
            </li>
            <li>
              Reduced contrast sensitivity: reduced sensitivity between
              variations of lightness and darkness. Cataracts are a common cause
              of this type of vision loss
            </li>
          </ul>
          <p>
            Any type of visual field loss can make it more difficult to read
            text on a Webpage, navigate through a Website, or focus on a
            specific part of a page. Small text, low-contrast text or images,
            and poor clarity of layout can make content less accessible to
            people with visual field obstructions.
          </p>
          <p>
            As many as 11 million people in the United States have some form of
            macular degeneration. 4% of the global population (around 246
            million people) have some form of low vision. Visual field loss
            occurs in approximately 30-35% of stroke survivors.
          </p>

          <h3>Designing for visual field obstructions</h3>

          <p></p>
          <ul>
            <li>
              Use a{' '}
              <Link
                href="https://webaim.org/resources/contrastchecker/"
                target="_blank"
              >
                color contrast checker
              </Link>{' '}
              to ensure text elements have sufficient contrast against
              background colors and images
            </li>
            <li>
              For gradient backgrounds, verify that the text-background color
              contrast ratio passes for both the lightest and darkest parts of
              the gradient
            </li>
            <li>
              Add support for <code>prefers-color-scheme: dark</code>, and/or an
              on-page toggle to switch to a dark theme. Test your site in the
              OS-based high-contrast mode
            </li>
            <li>
              Make sure users can zoom in or re-scale your content (up to 200%).
              Ensure text shifts to fit the page, and doesn&apos;t overflow
              horizontally when enlarged
            </li>
            <li>
              Keep information - text, controls, feedback, popups, etc. - in
              close proximity
            </li>
            <li>
              Maintain a logical layout which is still perceivable with visual
              field obstructions
            </li>
            <li>
              Inform users of new information that may be outside of their view
              &ndash; for example, a new browser tab opening in the background
            </li>
          </ul>

          <p>
            In the demo below, you can see how different types of visual field
            obstruction can affect the way a person accesses and engages with
            the Web.
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
