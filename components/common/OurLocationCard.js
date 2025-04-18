
import { MyButton } from "@/components/common/Buttons";
import { Card } from "react-bootstrap";

const OurLocationCard = () => {
    return (
      <>
        <Card className=" card border rounded w-25 p-4  position-absolute top-50  mx-5 translate-middle-y d-sm-none d-md-block d-xs-none pb-5">
          <div className="d-grid my-4">
            <MyButton
              style={{ backgroundColor: "#59330E" }}
              type="button"
              size="lg"
              className="fw-bold text-white fs-5"
            >
              আমাদের অবস্থান
            </MyButton>
          </div>
          <h5 className="my-2">অবস্থান ঠাকুরগাঁও</h5>
          <div className="mt-2">
            <p>
              ঠিকানা: কলেজ রোড, লাহিড়ী, বালিয়াডাঙ্গী, ঠাকুরগাঁও
            </p>
            <p>মোবাইল: +৮৮০১৭০৮৫৮৮৫৯০</p>
            <p>আইপি ফোন: +৮৮০৯৬৭৮১১১৭৭৭</p>
  
  
  
          </div>
        </Card>
      </>
    );
  };

  export default OurLocationCard;