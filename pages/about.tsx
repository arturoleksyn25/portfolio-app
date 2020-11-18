import {useGetUser} from "actions/user";
import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";

const About = () => {
  const {data, loading} = useGetUser();
  debugger;
  return (
    <BaseLayout
      user={data}
      loading={loading}>
      <BasePage>
        <h1>
          I am About page
        </h1>
      </BasePage>
    </BaseLayout>
  )
}

export default About;
