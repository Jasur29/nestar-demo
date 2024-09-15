import { useRouter } from "next/router"; // bu hook useRouter

const PropertyDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>PROPERTY DETAIL{productId}</div>;
};
export default PropertyDetail;
