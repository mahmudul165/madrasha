// pages/notices/[id].js
import { useRouter } from "next/router";
import { notices } from "../../data/notices"; // Import the notices
import Image from "next/image";

const SingleNotice = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the notice based on the id
  const notice = notices.find((n) => n.id.toString() === id);

  if (!notice) {
    return <div className="container py-5">❌ নোটিশ পাওয়া যায়নি।</div>;
  }

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-3">{notice.title}</h2>
      <p className="text-muted"><strong>তারিখ:</strong> {notice.date}</p>
      {notice.important && (
        <span className="badge bg-danger mb-3">গুরুত্বপূর্ণ</span>
      )}

      {notice.image && (
        <div className="mb-4">
          <Image
            src={notice.image}
            alt={notice.title}
            width={800}
            height={400}
            className="img-fluid rounded shadow-sm"
          />
        </div>
      )}

      <p className="lead">{notice.description}</p>

      <p className="text-muted mt-4"><strong>প্রকাশ করেছেন:</strong> {notice.issuedBy}</p>

      {notice.attachments.length > 0 && (
        <div className="mt-4">
          <h5>সংযুক্তি:</h5>
          <ul>
            {notice.attachments.map((file, index) => (
              <li key={index}>
                <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-primary">
                  📎 {file.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={() => router.back()} className="btn btn-outline-primary mt-5">
        🔙 ফিরে যান
      </button>
    </div>
  );
};

export default SingleNotice;
