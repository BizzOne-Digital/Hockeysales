"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, getDocs, doc, deleteDoc } from "firebase/firestore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  createdAt: { seconds: number } | null;
}

const ADMIN_PASSWORD = "strides2024";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setError("");
    } else {
      setError("Incorrect password.");
    }
  };

  useEffect(() => {
    if (!authed) return;
    const fetchAll = async () => {
      try {
        const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const fetched = snapshot.docs.map((d) => ({
          id: d.id,
          name: d.data().name,
          role: d.data().role || "",
          rating: d.data().rating,
          quote: d.data().quote,
          createdAt: d.data().createdAt || null,
        }));
        setReviews(fetched);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, [authed]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this review?")) return;
    await deleteDoc(doc(db, "reviews", id));
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  if (!authed) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-6">
          <div className="bg-white border border-[#c5c6cd] rounded-xl p-12 max-w-md w-full shadow-sm">
            <h1 className="font-montserrat text-2xl font-bold text-black mb-2 text-center">Admin Access</h1>
            <p className="font-inter text-sm text-[#44474d] mb-8 text-center">Enter password to manage reviews.</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c5c6cd] focus:border-[#006399] focus:ring-1 focus:ring-[#006399] outline-none rounded"
              />
              <button type="submit" className="w-full bg-black text-white py-3 rounded font-inter font-semibold text-sm hover:bg-[#006399] transition-colors">
                Login
              </button>
              {error && <p className="text-red-500 font-inter text-sm text-center">{error}</p>}
            </form>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8f9fa]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 py-20">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="font-montserrat text-[32px] font-bold text-black">Manage Reviews</h1>
              <p className="font-inter text-base text-[#44474d]">{reviews.length} total reviews</p>
            </div>
          </div>

          {loading ? (
            <p className="font-inter text-[#44474d] text-center py-12">Loading reviews...</p>
          ) : reviews.length === 0 ? (
            <p className="font-inter text-[#44474d] text-center py-12">No reviews yet.</p>
          ) : (
            <div className="space-y-4">
              {reviews.map((r) => (
                <div key={r.id} className="bg-white border border-[#c5c6cd] rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-montserrat font-bold text-lg text-black">{r.name}</span>
                        {r.role && <span className="font-inter text-xs text-[#44474d]">{r.role}</span>}
                      </div>
                      <div className="flex text-[#006399] mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined" style={{ fontSize: "16px", fontVariationSettings: i < r.rating ? "'FILL' 1" : "'FILL' 0", color: i < r.rating ? "#006399" : "#c5c6cd" }}>star</span>
                        ))}
                      </div>
                      <p className="font-inter text-sm text-[#44474d] italic">&quot;{r.quote}&quot;</p>
                      {r.createdAt && (
                        <p className="font-inter text-xs text-[#75777e] mt-2">{new Date(r.createdAt.seconds * 1000).toLocaleDateString()}</p>
                      )}
                    </div>
                    <button onClick={() => handleDelete(r.id)} className="bg-red-600 text-white px-4 py-2 rounded font-inter text-xs font-semibold hover:bg-red-700 transition-colors shrink-0">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}