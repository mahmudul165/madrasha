import React from 'react'
import { notices  } from '@/data/notices';
import Link from 'next/link';
function Notice() {
    return (
        <>{/* Notice */}
            <div className="container py-5">
                <h2 className="section-title">নোটিশ বোর্ড</h2>
                {/* Notice list with sliding animation */}
                <div className="notice-container">
                    {notices.map((notice) => (
                        <div key={notice.id} className="notice-card">

                            <Link href={`/notices/${notice.id}`} legacyBehavior>
                                <a>
                                    <div className="d-flex justify-content-center mb-3">
                                        {notice.image && (
                                            <img
                                                src={notice.image}
                                                alt={notice.title}
                                                width={280}
                                                height={160}
                                                className="img-fluid rounded"
                                            />
                                        )}
                                    </div>
                                    <div className="notice-info">
                                        <h5>{notice.title}</h5>
                                        <p className="text-muted">{notice.date}</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>

                <style jsx>{`
        .notice-container {
          display: flex;
          overflow-x: scroll;
          gap: 15px;
          padding: 20px;
        }

        .notice-card {
          flex: 0 0 auto;
          width: 350px;
          height: 300px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .notice-card:hover {
          transform: scale(1.05);
        }

        .notice-info {
          padding: 10px;
        }

        .notice-info h5 {
          font-size: 18px;
          font-weight: bold;
        }

        .notice-info p {
          font-size: 14px;
          color: #666;
        }

        .notice-card a {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
            </div></>
    )
}

export default Notice