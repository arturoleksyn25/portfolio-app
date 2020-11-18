
import {useGetUser} from "actions/user";
import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";

const Blogs = () => {
  const {data, loading} = useGetUser();

  return (
    <BaseLayout
      user={data}
      loading={loading}>
      <BasePage>
        <h1>
          I am Blogs page
        </h1>
      </BasePage>
    </BaseLayout>
  )
}

export default Blogs;
