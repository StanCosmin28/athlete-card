import { useState } from "react";
import { Mail, User, Activity, ArrowRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Copyrights from "./Copyrights";
export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    sport: "",
    experienceLevel: "",
    // goals: "",
  });
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [waitlisted, setWaitlisted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log({ success: formData });
      if (response.ok) setSuccess(true);
    } finally {
      setIsSubmitting(false);
      setWaitlisted(true);
      // navigate("/athlete-card/");
    }
  };

  return (
    <>
      {waitlisted ? (
        <div className="min-h-screen w-full flex items-center justify-center p-4  flex-col">
          <p className="text-center text-2xl ">
            Thank You, {formData.fullname}!
          </p>
          <p className="opacity-75">You just got waitlisted!</p>
          <a
            href="http://localhost:5173/athlete-card/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-slate-300 hover:text-white transition-colors opacity-50"
          >
            Go to Home Page <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      ) : (
        <div className="min-h-screen w-full flex items-center justify-center px-4 flex-col ">
          <div
            className="glass-morphism max-w-2xl w-full"
            style={{ padding: "32px 32px 0 32px" }}
          >
            {/* Header Section */}
            <div className="mb-10 text-center">
              <h1 className="text-4xl font-bold text-white mb-3">
                Elevate Your Athletic Journey
              </h1>
              <p className="text-slate-300 text-lg">
                Join our platform designed exclusively for dedicated athletes
              </p>
            </div>

            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="border-styleV2 rounded-lg p-1">
                    <div className="flex items-center px-3 py-2">
                      <User className="h-5 w-5 text-slate-400 mr-2" />
                      <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        placeholder="Full name"
                        required
                        className="w-full bg-reansparent text-white placeholder-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="border-styleV2 rounded-lg p-1">
                    <div className="flex items-center px-3 py-2">
                      <Mail className="h-5 w-5 text-slate-400 mr-2" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        required
                        className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Sport Field */}
                  <div className="border-styleV2 rounded-lg p-1">
                    <div className="flex items-center px-3 py-2">
                      <Activity className="h-5 w-5 text-slate-400 mr-2" />
                      <input
                        type="text"
                        name="sport"
                        value={formData.sport}
                        onChange={handleChange}
                        placeholder="Sport"
                        required
                        className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div className="border-styleV2 rounded-lg p-1">
                    <select
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent text-white px-2 py-2 focus:outline-none appearance-none"
                    >
                      <option value="" disabled className="bg-slate-800">
                        Experience level
                      </option>
                      <option value="beginner" className="bg-slate-800">
                        Beginner
                      </option>
                      <option value="intermediate" className="bg-slate-800">
                        Intermediate
                      </option>
                      <option value="advanced" className="bg-slate-800">
                        Advanced
                      </option>
                      <option value="professional" className="bg-slate-800">
                        Professional
                      </option>
                    </select>
                  </div>
                </div>

                {/* Goals Field */}
                {/* <div className="border-styleV2 rounded-lg p-1">
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                placeholder="What are your athletic goals?"
                rows={3}
                className="w-full bg-transparent text-white px-3 py-2 placeholder-slate-400 focus:outline-none resize-none"
              />
            </div> */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border-styleV2 hover:bg-white/10 transition-colors text-white font-medium py-3 px-4 rounded-lg flex justify-center items-center"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  You're In!
                </h3>
                <p className="text-slate-300 mb-6">
                  We'll notify you when we launch. Get ready to elevate your
                  game.
                </p>
              </div>
            )}

            {/* <div className="mt-8 pt-6 border-t border-slate-700/50 text-center mb-4">
              <a
                href="http://localhost:5173/athlete-card/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-slate-300 hover:text-white transition-colors"
              >
                Become an Ambassador <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div> */}
            <div className="mt-4">
              <Copyrights />
            </div>
          </div>
        </div>
      )}
      {/* <div className="absolute w-full bottom-0 left-0"> */}
      {/* <Copyrights /> */}
      {/* </div> */}
    </>
  );
}
