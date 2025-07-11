import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  comment: string;
  rating: number;
  user: {
    name: string;
  };
}

interface ReviewSectionProps {
  propertyId: number;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p className="text-gray-600">Loading reviews...</p>;

  if (error) return <p className="text-red-500">{error}</p>;

  if (reviews.length === 0) return <p className="text-gray-500">No reviews yet.</p>;

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 border rounded shadow-sm">
            <p className="text-gray-800">{review.comment}</p>
            <p className="text-sm text-gray-500 mt-2">
              ⭐ {review.rating} — by {review.user.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
