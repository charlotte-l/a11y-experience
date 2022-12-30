import Link from 'next/link';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import PageSection from '../components/PageSection';

export default function Intro() {
  return (
    <>
      <Layout showChapters>
        <PageHeader id="intro-header" title="Introduction">
          <p>
            Having a disability can change how a person perceives, navigates and
            interacts with the Web. By prioritizing Web accessibility from the
            start of the design process throughout the end of development, we
            can ensure that people have the same <em>access to</em> and{' '}
            <em>experience on</em> the Web, irrespective of if they have a
            disability or other limitations, or not.
          </p>
        </PageHeader>
        <PageSection
          id="what-is-web-accessibility"
          title="What is Web Accessibility?"
        >
          <p>
            Web accessibility is ensuring there are no barriers between people
            and their access to and usage of the web. This includes physical
            disabilities, situational limitations, and things like internet
            speed or data allowance. Designing and developing for Web
            accessibility means more people have equal access to the Web.
          </p>
          <p>
            Accessible design and development practices help a whole spectrum of
            people with different related abilities. This includes:
          </p>
          <ul>
            <li>
              Permanent disabilities: long-term impairments which pose barriers
              to the full and effective participation in society on an equal
              basis with others, e.g. a person with diabetes who has partial
              vision loss.
            </li>
            <li>
              Temporary limitations: limitations which are caused by injury or
              illness, e.g. a person using the Web with one hand due to a broken
              arm.
            </li>
            <li>
              Situational limitations: limitations which are caused by a
              person&apos;s environment, e.g. a person using the Web on a mobile
              device with a small screen in direct bright light.
            </li>
            <li>
              Socio-economic limitations: limitations which are caused by having
              reduced economic access to resources and social position in
              relation to others than others in the same society.
            </li>
          </ul>
        </PageSection>
        <PageSection id="why" title="Why Web Accessibility matters">
          <p>
            Web Accessibility matters for a number of reasons. There are
            practical reasons such as legal requirements &ndash; the Americans
            with Disabilities Act (ADA) requires that any person or organization
            must make their website &lsquo;readily accessible and usable by
            individuals with disabilities if it is for use by the public&rsquo;.
            There are also business opportunities &ndash; in the US alone, the
            annual discretionary spending of people with disabilities is over
            $200 billion.
          </p>
          <p>
            Moreover, Web Accessibility drives innovation and promotes social
            inclusion. Diversity facilitates belonging, brings new perspectives
            to light and enhances creativity. This benefits business, society,
            and everyone in it. Accessibility is for everyone.
          </p>
          <p>
            Kat Holmes&apos;{' '}
            <Link
              href="https://mitpress.mit.edu/9780262539487/mismatch/"
              target="_blank"
              rel="nofollow noopener"
            >
              &lsquo;Mismatch: How Inclusion Shapes Design&rsquo;
            </Link>
            {' '} is a compelling read which goes into more detail about the power
            of inclusive design and how to approach it.
          </p>
        </PageSection>
        <PageSection id="about-this-site" title="About this Site">
          <p>
            This site aims to provide a hands-on experience of the impact poor
            design and development patterns can have on Web accessibility. These
            patterns create barriers which can exclude people, or whole groups
            of society, from using the Web. It also highlights how inclusive
            design and development fosters belonging and makes the web more
            accessible for everyone.
          </p>
          <p>
            The simulations on this site are not medically or scientifically
            accurate. Impairment simulations cannot convey what it is really
            like to live with capability loss on an everyday basis. However, it
            can be helpful to understand and empathize with the challenges faced
            by people with disabilities when navigating the Web.
          </p>
          <p>
            There are numerous excellent resources online which share more
            information about building accessible Web experiences. This includes
            technical guidance and best practices, and is aimed at designers and
            developers. The{' '}
            <Link
              href="https://www.w3.org/WAI/standards-guidelines/wcag/"
              target="_blank"
              rel="noopener"
            >
              Web Content Accessibility Guidelines (WCAG)
            </Link>
            , published by the{' '}
            <Link href="https://www.w3.org/WAI/" target="_blank" rel="noopener">
              Web Accessibility Initiative (WAI)
            </Link>
            , are a gold-standard set of recommendations for creating accessible
            content on the Web.
          </p>
          <p>
            P.S. A number of the simulations shown on this site are available in
            the navigation under the &lsquo;Settings&rsquo; dropdown.
          </p>
        </PageSection>
      </Layout>
    </>
  );
}
