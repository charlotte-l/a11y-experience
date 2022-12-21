import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

export default function CognitiveImpairment() {
  return (
    <>
      <Layout>
        <PageHeader
          id="cognitive-impairment-header"
          title="Cognitive Impairment"
          description={`
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus augue, aliquet nec dolor in, aliquam rhoncus augue. Etiam consectetur,
                        ante eu gravida faucibus, leo leo gravida nibh, id convallis tellus felis sit amet lorem. Quisque feugiat nec mauris quis euismod. 
                        In volutpat hendrerit augue, vel cursus justo faucibus ac. Nunc dolor leo, malesuada in accumsan commodo, facilisis ut justo.
                      `}
        />
      </Layout>
    </>
  );
}
