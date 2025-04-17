import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";

const teachers = [
  {
    name: "মাওলানা আব্দুল হাকিম",
    designation: "মুহতামিম",
    image: "/teachers/teacher1.jpg",
  },
  {
    name: "হাফেজ মোহাম্মদ ইউসুফ",
    designation: "হাফেজ শিক্ষক",
    image: "/teachers/teacher2.jpg",
  },
  {
    name: "মাওলানা খালেদ সাইফুল্লাহ",
    designation: "কুরআন শিক্ষক",
    image: "/teachers/teacher3.jpg",
  },
];

const TeachersSection = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5 fw-bold">শিক্ষক মন্ডলী</h2>
      <Row>
        {teachers.map((teacher, idx) => (
          <Col key={idx} sm={12} md={6} lg={4} className="mb-4">
            <Card
              className="text-center shadow-lg border-0 h-100 p-3 teacher-card"
              style={{ transition: "transform 0.3s", cursor: "pointer" }}
            >
              <div className="d-flex justify-content-center mt-3">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={180}
                  height={180}
                  className="rounded-circle border border-3 border-success"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <Card.Body>
                <Card.Title className="mt-3 fs-5 fw-bold">
                  {teacher.name}
                </Card.Title>
                <Card.Text className="text-muted">{teacher.designation}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <style jsx>{`
        .teacher-card:hover {
          transform: scale(1.03);
          box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </Container>
  );
};

export default TeachersSection;
