import Breadcrumb from "@/components/Breadcrumb";

import Introduction from "./features/Introduction";
import Vision from "./features/Vision";
import History from "./features/History";
import Awards from "@/components/Awards";
import Resources from "./features/Resources";

const CorporatePage = () => {
  return (
    <div>
      <Breadcrumb title="Corporate" />
      <Introduction />
      <Vision />
      <History />
      <Awards backgroundColor="secondary" />
      <Resources />
    </div>
  );
};

export default CorporatePage;
