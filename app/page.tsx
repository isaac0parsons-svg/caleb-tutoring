"use client";

import { useState } from "react";
import type { CSSProperties, FormEvent } from "react";

const subjects = [
  {
    title: "Maths",
    description:
      "Step-by-step help with classwork, revision, problem solving, and building confidence with numbers.",
  },
  {
    title: "Science",
    description:
      "Support across chemistry, biology, and physics, with a focus on making key ideas clear.",
  },
  {
    title: "English",
    description:
      "Help with understanding texts, planning responses, writing clearly, and improving schoolwork.",
  },
  {
    title: "Study Skills",
    description:
      "Practical help with revision routines, planning ahead, staying organised, and building better school habits.",
  },
  {
    title: "Homework Support",
    description:
      "Custom support for current assignments, study habits, and staying organised with school tasks.",
  },
];

const trustPoints = [
  "Year 7-10 tutoring",
  "Online and in-person sessions",
  "Clear step-by-step explanations",
  "Eltham / Research area",
];

const services = [
  {
    title: "Maths and Science",
    description:
      "Caleb's strongest subjects are Maths and Science. He can help students work through concepts, practise questions, and understand the steps behind the answer.",
  },
  {
    title: "English and Study Habits",
    description:
      "Support can include English schoolwork, clearer written responses, regular revision routines, and practical study habits.",
  },
  {
    title: "Custom Homework Support",
    description:
      "Sessions can focus on what the student is working on now, including homework, assignments, catch-up help, or preparation for upcoming tests.",
  },
];

const steps = [
  {
    number: "01",
    title: "Send a request",
    description: "Share the year level, subject, and what kind of help is needed.",
  },
  {
    number: "02",
    title: "Confirm the fit",
    description:
      "Caleb checks the details and confirms whether he can help with the student's needs.",
  },
  {
    number: "03",
    title: "Start tutoring",
    description:
      "Each session stays calm, practical, and focused on the work in front of the student.",
  },
];

const faqs = [
  {
    question: "How much does tutoring cost?",
    answer:
      "Online is $30 per hour. In person is $40 per hour. Travel fees may apply.",
  },
  {
    question: "Which subjects are available?",
    answer:
      "Caleb tutors Maths, Science, English, study habits, and custom homework support. Science support can include chemistry, biology, and physics.",
  },
  {
    question: "Who is this tutoring for?",
    answer:
      "Caleb mainly tutors Year 7-10 students, with primary support available if it is a good fit.",
  },
  {
    question: "Where can sessions happen?",
    answer:
      "Sessions can be online or in person around the Eltham / Research area.",
  },
  {
    question: "When is Caleb available?",
    answer:
      "Usually after school on weekdays and Saturdays, subject to confirmation.",
  },
  {
    question: "Is the booking form connected yet?",
    answer:
      "Yes. The form sends an enquiry to Caleb once email settings are configured.",
  },
];

const inputStyle =
  "rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-100";

const sectionLabelStyle =
  "text-xs font-bold uppercase tracking-[0.22em] text-teal-700";

const sectionHeadingStyle =
  "mt-3 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl";

const improvementOptions = [
  { label: "Maths", icon: "∑" },
  { label: "Science", icon: "⚗" },
  { label: "English", icon: "Aa" },
  { label: "Study Skills", icon: "✓" },
  { label: "Homework", icon: "✎" },
];

const gradeOptions = [
  { label: "Needs support", grade: "50-60%" },
  { label: "Building consistency", grade: "60-70%" },
  { label: "Doing well", grade: "70-80%" },
  { label: "Ready for extension", grade: "80%+" },
];

const goalOptions = [
  { label: "Catch up", goal: "Pass confidently" },
  { label: "Prepare for a test", goal: "Prepare for a test" },
  { label: "Build study habits", goal: "Build better study habits" },
  { label: "Push higher", goal: "Get extension/challenge work" },
];

const formatOptions = [
  { label: "Online", value: "Online, $30/hour", icon: "◌" },
  { label: "In person", value: "In person, $40/hour", icon: "●" },
  { label: "Not sure", value: "Not sure yet", icon: "?" },
];

export default function HomePage() {
  // Controls which Custom Plan Builder screen is currently shown.
  const [planStep, setPlanStep] = useState(0);

  // These state values track the four choices in the Custom Plan Builder.
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactType, setContactType] = useState("Parent");
  const [contactEmail, setContactEmail] = useState("");
  const [contactYearLevel, setContactYearLevel] = useState("");
  const [contactSubject, setContactSubject] = useState("Maths");
  const [contactPreference, setContactPreference] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactPlanSummary, setContactPlanSummary] = useState("");
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactStatus, setContactStatus] = useState("");
  const [contactError, setContactError] = useState("");

  const completedChoices = [
    selectedSubject,
    selectedGrade,
    selectedGoal,
    selectedFormat,
  ].filter(Boolean).length;

  const completionPercent = Math.round((completedChoices / 4) * 100);
  const isPlanReady = completedChoices === 4;
  const planProgressPercent = Math.round(((planStep + 1) / 5) * 100);

  // Recommendation logic stays local for now. No messages are sent and no backend is used.
  let sessionRhythm = "Choose each option to build a plan";
  let mainFocusAreas = [
    `${selectedSubject || "subject"} foundations`,
    "clear steps",
    "confidence",
  ];

  if (selectedGrade === "Below 50%" || selectedGrade === "50-60%") {
    sessionRhythm = "Weekly sessions focused on foundations";
    mainFocusAreas = [
      "core gaps",
      "basics",
      "confidence",
    ];
  } else if (selectedGrade === "60-70%") {
    sessionRhythm = "Weekly sessions for consistency";
    mainFocusAreas = [
      "methods",
      "assessment prep",
      "fewer mistakes",
    ];
  } else if (selectedGrade === "70-80%") {
    sessionRhythm = "Targeted support every 1 to 2 weeks";
    mainFocusAreas = [
      "harder questions",
      "exam technique",
      "stronger results",
    ];
  } else if (selectedGrade === "80%+") {
    sessionRhythm = "Extension sessions as needed";
    mainFocusAreas = [
      "challenge work",
      "refinement",
      "deeper problem solving",
    ];
  }

  if (selectedGoal === "Prepare for a test") {
    sessionRhythm = "Focused short-term test preparation";
    mainFocusAreas = [
      "revision",
      "practice",
      "test confidence",
    ];
  }

  if (selectedGoal === "Build better study habits") {
    mainFocusAreas = [
      "study systems",
      "weekly routine",
      `${selectedSubject || "subject"} support`,
    ];
  }

  const bestFormat =
    selectedFormat === "Online, $30/hour"
      ? "Online sessions"
      : selectedFormat === "In person, $40/hour"
        ? "In-person sessions"
        : "Start with a quick discussion";

  const estimatedPrice =
    selectedFormat === "Online, $30/hour"
      ? "$30/hour"
      : selectedFormat === "In person, $40/hour"
        ? "$40/hour, with travel fees possibly applying"
        : "$30/hour online or $40/hour in person";

  const planExplanation =
    !isPlanReady
      ? "Choose each option to reveal a practical starting point."
      : selectedFormat === "Not sure yet"
        ? "Start with a quick chat to choose the best format before booking."
        : "A focused starting point without promises or pressure.";

  const selectedLevelLabel =
    gradeOptions.find((option) => option.grade === selectedGrade)?.label ||
    selectedGrade;

  const selectedGoalLabel =
    goalOptions.find((option) => option.goal === selectedGoal)?.label ||
    selectedGoal;

  const selectedFormatLabel =
    formatOptions.find((option) => option.value === selectedFormat)?.label ||
    selectedFormat;

  const contactSubjectFromPlan =
    selectedSubject === "Homework" ? "Homework Support" : selectedSubject;

  const buildPlanSummary = () => {
    return `Focus area: ${selectedSubject}
Current level: ${selectedLevelLabel}
Goal: ${selectedGoalLabel}
Preferred format: ${selectedFormatLabel}
Recommended rhythm: ${sessionRhythm}
Estimated rate: ${estimatedPrice}`;
  };

  // Builds a plain-text handoff that the user can edit in the contact form.
  const buildPlanMessage = () => {
    return `Hi Caleb, I’m interested in tutoring.

Suggested plan:
${buildPlanSummary()}

Additional message:
`;
  };

  // Copies the selected plan into the existing contact form, then scrolls there.
  const usePlanInRequest = () => {
    if (!isPlanReady) return;

    setContactSubject(contactSubjectFromPlan || "Maths");
    setContactPreference(
      selectedFormat === "Not sure yet"
        ? "Not sure yet"
        : selectedFormatLabel,
    );
    setContactPlanSummary(buildPlanSummary());
    setContactMessage(buildPlanMessage());
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBooking = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const submitContactForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmittingContact(true);
    setContactStatus("");
    setContactError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          contactType,
          yearLevel: contactYearLevel,
          subject: contactSubject,
          preferredTime: contactPreference,
          message: contactMessage,
          planSummary: contactPlanSummary,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "The enquiry could not be sent.");
      }

      setContactStatus(data.message || "Your enquiry has been sent.");
    } catch (error) {
      setContactError(
        error instanceof Error
          ? error.message
          : "The enquiry could not be sent.",
      );
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const optionButtonStyle =
    "rounded-2xl border px-4 py-3 text-left text-sm font-bold transition duration-200";

  const planSteps = [
    {
      title: "Focus area",
      helper: "What should Caleb help with first?",
      value: selectedSubject,
      options: improvementOptions.map((option) => ({
        icon: option.icon,
        label: option.label,
        value: option.label,
        onSelect: () => {
          setSelectedSubject(option.label);
          setPlanStep(1);
        },
      })),
    },
    {
      title: "Current level",
      helper: "Choose the closest fit.",
      value: selectedGrade,
      options: gradeOptions.map((option) => ({
        icon: "",
        label: option.label,
        value: option.grade,
        onSelect: () => {
          setSelectedGrade(option.grade);
          setPlanStep(2);
        },
      })),
    },
    {
      title: "Goal",
      helper: "What outcome matters most right now?",
      value: selectedGoal,
      options: goalOptions.map((option) => ({
        icon: "",
        label: option.label,
        value: option.goal,
        onSelect: () => {
          setSelectedGoal(option.goal);
          setPlanStep(3);
        },
      })),
    },
    {
      title: "Format",
      helper: "Pick a starting preference.",
      value: selectedFormat,
      options: formatOptions.map((option) => ({
        icon: option.icon,
        label: option.label,
        value: option.value,
        onSelect: () => {
          setSelectedFormat(option.value);
          setPlanStep(4);
        },
      })),
    },
  ];

  const currentPlanStep = planSteps[planStep];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f8f5] font-sans text-slate-950">
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          /* Experimental hero atmosphere: drifting mist, glass depth, and soft light movement. */
          @keyframes heroDrift {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
            }
            50% {
              transform: translate3d(28px, -24px, 0) scale(1.08) rotate(4deg);
            }
          }

          @keyframes heroDriftReverse {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
            }
            50% {
              transform: translate3d(-24px, 22px, 0) scale(1.06) rotate(-3deg);
            }
          }

          @keyframes heroPulse {
            0%, 100% {
              opacity: 0.58;
              transform: scale(1);
            }
            50% {
              opacity: 0.82;
              transform: scale(1.06);
            }
          }

          @keyframes heroMist {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes glassFloat {
            0%, 100% {
              transform: translate3d(0, 0, 0);
            }
            50% {
              transform: translate3d(0, -18px, 0);
            }
          }

          @keyframes glassDriftWide {
            0%, 100% {
              transform: translate3d(0, 0, 0) rotate(var(--shape-rotate, 0deg));
            }
            50% {
              transform: translate3d(18px, -16px, 0) rotate(calc(var(--shape-rotate, 0deg) + 2deg));
            }
          }

          @keyframes photoLift {
            0%, 100% {
              transform: translate3d(0, 0, 0);
            }
            50% {
              transform: translate3d(0, -8px, 0);
            }
          }

          @keyframes lightSweep {
            0%, 100% {
              opacity: 0.18;
              transform: translate3d(-22%, 0, 0) rotate(-10deg);
            }
            50% {
              opacity: 0.42;
              transform: translate3d(34%, -8%, 0) rotate(-10deg);
            }
          }

          @keyframes ringBreathe {
            0%, 100% {
              opacity: 0.28;
              transform: scale(1) rotate(0deg);
            }
            50% {
              opacity: 0.62;
              transform: scale(1.08) rotate(8deg);
            }
          }

          .hero-drift {
            animation: heroDrift 24s ease-in-out infinite;
          }

          .hero-drift-slow {
            animation: heroDriftReverse 34s ease-in-out infinite;
          }

          .hero-drift-late {
            animation: heroDrift 42s ease-in-out infinite;
            animation-delay: -14s;
          }

          .hero-pulse {
            animation: heroPulse 18s ease-in-out infinite;
          }

          .hero-mist {
            animation: heroMist 26s ease-in-out infinite;
            background-size: 180% 180%;
          }

          .glass-float {
            animation: glassFloat 20s ease-in-out infinite;
          }

          .glass-float-late {
            animation: glassFloat 28s ease-in-out infinite;
            animation-delay: -9s;
          }

          .glass-drift-wide {
            animation: glassDriftWide 30s ease-in-out infinite;
          }

          .glass-drift-wide-late {
            animation: glassDriftWide 38s ease-in-out infinite;
            animation-delay: -12s;
          }

          .photo-lift {
            animation: photoLift 16s ease-in-out infinite;
          }

          .light-sweep {
            animation: lightSweep 24s ease-in-out infinite;
          }

          .ring-breathe {
            animation: ringBreathe 22s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-drift,
            .hero-drift-slow,
            .hero-drift-late,
            .hero-pulse,
            .hero-mist,
            .glass-float,
            .glass-float-late,
            .glass-drift-wide,
            .glass-drift-wide-late,
            .photo-lift,
            .light-sweep,
            .ring-breathe {
              animation: none;
            }
          }
        `}
      </style>

      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_10%_12%,_rgba(20,184,166,0.22),_transparent_32%),radial-gradient(circle_at_84%_15%,_rgba(99,102,241,0.20),_transparent_34%),radial-gradient(circle_at_58%_86%,_rgba(14,165,233,0.16),_transparent_36%),linear-gradient(135deg,_#ffffff_0%,_#f5fbff_36%,_#eefaf7_100%)]">
        <div className="hero-mist absolute inset-0 bg-[linear-gradient(115deg,_rgba(255,255,255,0.82)_0%,_rgba(204,251,241,0.28)_28%,_rgba(219,234,254,0.34)_52%,_rgba(237,233,254,0.32)_74%,_rgba(255,255,255,0.74)_100%)]" />
        <div className="hero-drift absolute left-[-14rem] top-10 h-[36rem] w-[36rem] rounded-full bg-teal-200/60 blur-[5.5rem]" />
        <div className="hero-drift-slow absolute right-[-16rem] top-[-2rem] h-[38rem] w-[38rem] rounded-full bg-indigo-200/55 blur-[6rem]" />
        <div className="hero-drift-late absolute bottom-[-18rem] left-[26%] h-[38rem] w-[38rem] rounded-full bg-sky-200/48 blur-[5.5rem]" />
        <div className="hero-pulse absolute right-[18%] top-[28%] h-80 w-80 rounded-full bg-pink-100/45 blur-[4.5rem]" />
        <div className="hero-drift-slow absolute left-[38%] top-20 h-72 w-72 rounded-full bg-violet-100/36 blur-[4.5rem]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(255,255,255,0.88)_0%,_rgba(255,255,255,0.62)_42%,_rgba(255,255,255,0.34)_100%)]" />

        <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
          <div className="light-sweep absolute left-[-12%] top-32 h-28 w-[72rem] rounded-full bg-gradient-to-r from-transparent via-white/55 to-transparent blur-2xl" />
          <div className="ring-breathe absolute left-[8%] top-36 h-36 w-36 rounded-full border border-teal-200/35 shadow-[0_0_4rem_rgba(45,212,191,0.16)]" />
          <div className="glass-drift-wide absolute right-[9%] top-24 h-32 w-64 rounded-[2.5rem] border border-white/45 bg-white/14 shadow-2xl shadow-indigo-950/5 blur-[0.6px] backdrop-blur-2xl" style={{ "--shape-rotate": "-11deg" } as CSSProperties} />
          <div className="glass-drift-wide-late absolute left-[40%] top-20 h-24 w-48 rounded-[2rem] border border-white/40 bg-white/12 shadow-2xl shadow-teal-950/5 blur-[0.8px] backdrop-blur-2xl" style={{ "--shape-rotate": "9deg" } as CSSProperties} />
          <div className="glass-float absolute bottom-24 left-[16%] h-28 w-72 rounded-[2.5rem] border border-white/45 bg-white/12 shadow-2xl shadow-slate-950/5 blur-[0.9px] backdrop-blur-2xl" />
          <div className="hero-drift absolute bottom-32 right-[8%] h-24 w-24 rounded-full border border-white/45 bg-white/14 shadow-[0_0_4rem_rgba(14,165,233,0.14)] blur-[0.5px] backdrop-blur-xl" />
          <div className="ring-breathe absolute bottom-56 right-[24%] h-28 w-28 rounded-full border border-indigo-200/40" />
          <div className="hero-drift-slow absolute left-[52%] bottom-20 h-24 w-44 rounded-[2rem] border border-white/50 bg-white/15 shadow-2xl shadow-slate-950/5 blur-[1px] backdrop-blur-xl" />
          <div className="glass-float absolute right-[4%] top-[46%] h-36 w-36 rounded-full border border-white/50 bg-white/15 shadow-2xl shadow-indigo-950/5 blur-[1px] backdrop-blur-xl" />
        </div>

        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6">
          <a
            href="#"
            className="group flex items-center gap-3 text-base font-bold tracking-tight text-slate-950"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/15 transition group-hover:-translate-y-0.5">
              CT
            </span>
            Caleb Tutoring
          </a>

          <nav className="hidden items-center gap-5 rounded-full border border-white/80 bg-white/75 px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm shadow-slate-950/5 backdrop-blur md:flex">
            <a className="transition hover:text-teal-700" href="#subjects">
              Subjects
            </a>
            <a className="transition hover:text-teal-700" href="#services">
              Support
            </a>
            <a className="transition hover:text-teal-700" href="#pricing">
              Pricing
            </a>
            <a
              className="rounded-full bg-slate-950 px-4 py-2 text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-teal-900 hover:shadow-teal-900/20"
              href="#plan-builder"
            >
              Get my custom plan
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-8 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:pb-24 lg:pt-14">
          <section>
            <p className="inline-flex rounded-full border border-teal-100 bg-white/80 px-4 py-2 text-sm font-bold text-teal-800 shadow-sm shadow-teal-950/5 backdrop-blur">
              Private tutoring for Year 7-10 students
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.45rem]">
              Patient tutoring that helps schoolwork make sense.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Caleb helps Year 7-10 students with Maths, Science, English,
              study habits, and homework support. Sessions are calm, practical,
              and focused on helping students understand the work in front of
              them.
            </p>

            <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm shadow-slate-950/5 backdrop-blur">
                <p className="text-sm font-bold text-slate-500">Online</p>
                <p className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                  $30/hour
                </p>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm shadow-slate-950/5 backdrop-blur">
                <p className="text-sm font-bold text-slate-500">In person</p>
                <p className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                  $40/hour
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-xl bg-slate-950 px-6 py-4 text-center text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-teal-900 hover:shadow-xl hover:shadow-teal-900/20"
              >
                Request a booking
              </a>
              <a
                href="#pricing"
                className="rounded-xl border border-slate-200 bg-white/85 px-6 py-4 text-center text-sm font-bold text-slate-900 shadow-sm shadow-slate-950/5 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-teal-200 hover:bg-white hover:shadow-lg hover:shadow-teal-900/10"
              >
                View rates
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-white/80 bg-white/65 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-950/5 backdrop-blur"
                >
                  {point}
                </span>
              ))}
            </div>
          </section>

          <aside className="relative min-h-[34rem] sm:min-h-[38rem] lg:min-h-[40rem]">
            <div className="hero-pulse absolute -inset-12 rounded-full bg-[radial-gradient(circle,_rgba(45,212,191,0.36),_rgba(59,130,246,0.20)_38%,_rgba(129,140,248,0.17)_58%,_transparent_74%)] blur-3xl" />
            <div
              className="glass-drift-wide absolute left-2 top-4 h-36 w-72 rounded-[2.5rem] border border-white/45 bg-white/14 shadow-2xl shadow-teal-950/5 blur-[0.6px] backdrop-blur-2xl"
              style={{ "--shape-rotate": "-8deg" } as CSSProperties}
            />
            <div
              className="glass-drift-wide-late absolute -right-5 top-20 hidden h-44 w-44 rounded-full border border-white/45 bg-white/16 shadow-2xl shadow-indigo-950/5 blur-[0.7px] backdrop-blur-2xl sm:block"
              style={{ "--shape-rotate": "5deg" } as CSSProperties}
            />
            <div
              className="glass-float absolute -left-3 bottom-28 hidden h-28 w-48 rounded-[2rem] border border-white/45 bg-white/16 shadow-2xl shadow-sky-950/5 blur-[0.8px] backdrop-blur-2xl sm:block"
              style={{ "--shape-rotate": "7deg" } as CSSProperties}
            />
            <div className="hero-drift-late absolute bottom-8 right-8 hidden h-36 w-36 rounded-[2rem] border border-white/40 bg-white/12 shadow-2xl shadow-slate-950/5 blur-[1px] backdrop-blur-2xl sm:block" />
            <div className="absolute left-8 right-8 top-10 h-[92%] rounded-[2.4rem] border border-white/35 bg-white/10 shadow-2xl shadow-slate-950/5 backdrop-blur-md" />
            <div className="absolute left-12 right-12 top-16 h-[82%] rounded-[2rem] border border-teal-100/25 bg-gradient-to-b from-white/16 to-white/5 shadow-2xl shadow-teal-950/5" />

            <div className="pointer-events-none absolute inset-0 hidden sm:block">
              <div className="glass-float-late absolute right-3 top-16 h-16 w-44 rounded-full border border-white/55 bg-white/18 shadow-2xl shadow-slate-950/5 blur-[0.8px] backdrop-blur-xl" />
              <div className="glass-float absolute -left-1 bottom-36 h-16 w-48 rounded-full border border-white/55 bg-white/18 shadow-2xl shadow-slate-950/5 blur-[0.8px] backdrop-blur-xl" />
              <div className="hero-drift-late absolute bottom-8 right-12 h-16 w-56 rounded-full border border-white/45 bg-white/14 shadow-2xl shadow-slate-950/5 blur-[1px] backdrop-blur-xl" />
              <div className="absolute left-12 top-24 h-24 w-24 rounded-full border border-teal-100/45" />
              <div className="absolute right-24 bottom-24 h-32 w-32 rounded-full border border-indigo-100/50" />
              <div className="absolute right-4 top-56 h-4 w-4 rounded-full bg-teal-300/35 blur-[1px]" />
              <div className="absolute left-16 bottom-20 h-5 w-5 rounded-md bg-indigo-300/25 blur-[1px]" />
            </div>

            <div className="photo-lift relative mx-auto max-w-md rounded-[2.25rem] border border-white/75 bg-white/50 p-3 shadow-[0_2.25rem_5.5rem_rgba(15,23,42,0.22)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_2.75rem_6rem_rgba(13,148,136,0.24)]">
              <div className="absolute -inset-px rounded-[2.25rem] bg-[linear-gradient(135deg,_rgba(255,255,255,0.98),_rgba(94,234,212,0.22),_rgba(147,197,253,0.20),_rgba(196,181,253,0.24),_rgba(255,255,255,0.82))]" />
              <div className="relative overflow-hidden rounded-[1.85rem] bg-slate-950/5 p-2">
                <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.4rem] ring-1 ring-white/60" />
                <div className="pointer-events-none absolute -left-20 top-12 z-10 h-48 w-48 rounded-full bg-teal-100/18 blur-3xl" />
                <div className="pointer-events-none absolute -right-16 bottom-10 z-10 h-52 w-52 rounded-full bg-indigo-100/22 blur-3xl" />

                <img
                  src="/caleb.jpeg"
                  alt="Caleb, tutor"
                  className="relative h-[28rem] w-full rounded-[1.4rem] object-cover object-[center_31%] shadow-2xl shadow-slate-950/25 sm:h-[32rem] lg:h-[34rem]"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="plan-builder"
        className="relative scroll-mt-8 overflow-hidden border-y border-slate-900/20 bg-[radial-gradient(circle_at_18%_18%,_rgba(45,212,191,0.22),_transparent_30%),radial-gradient(circle_at_82%_12%,_rgba(129,140,248,0.24),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_48%,_#062f2d_100%)] px-5 py-16 text-white sm:px-6 lg:py-20"
      >
        <div className="hero-drift absolute -left-28 top-10 h-96 w-96 rounded-full bg-teal-400/18 blur-3xl" />
        <div className="hero-drift-slow absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="light-sweep absolute left-[-18%] top-28 h-20 w-[72rem] rounded-full bg-gradient-to-r from-transparent via-white/14 to-transparent blur-2xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-200">
              Custom Plan Builder
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Build a tutoring plan in under a minute.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Pick four quick answers and get a practical starting point.
            </p>
          </div>

          <div className="mt-9 rounded-[2rem] border border-white/15 bg-white/8 p-3 shadow-2xl shadow-slate-950/35 backdrop-blur-2xl">
            <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-white/8 p-5 sm:p-7">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-300/12 blur-3xl" />
              <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-indigo-300/12 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  <span>Step {planStep + 1} of 5</span>
                  <span>
                    {planStep === 4 && isPlanReady
                      ? "Plan ready"
                      : `${completedChoices}/4 selected`}
                  </span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal-300 via-sky-300 to-indigo-300 transition-all duration-500"
                    style={{ width: `${planProgressPercent}%` }}
                  />
                </div>

                <div className="mt-8 min-h-[25rem]">
                  {planStep < 4 && currentPlanStep && (
                    <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-center">
                      <div>
                        <p className="text-sm font-bold text-teal-200">
                          {currentPlanStep.title}
                        </p>
                        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                          {currentPlanStep.helper}
                        </h3>
                        <p className="mt-4 text-sm leading-6 text-slate-400">
                          Choose one option. You can go back and change it any
                          time.
                        </p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {currentPlanStep.options.map((option) => (
                          <button
                            key={option.value}
                            className={`${optionButtonStyle} min-h-24 ${
                              currentPlanStep.value === option.value
                                ? "border-teal-300/70 bg-teal-300/18 text-white shadow-xl shadow-teal-500/10"
                                : "border-white/10 bg-white/8 text-slate-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/12 hover:shadow-xl hover:shadow-slate-950/20"
                            }`}
                            onClick={option.onSelect}
                            type="button"
                          >
                            {option.icon && (
                              <span className="mb-3 block text-2xl text-teal-100">
                                {option.icon}
                              </span>
                            )}
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {planStep === 4 && (
                    <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
                      <div>
                        <p className="text-sm font-bold text-teal-200">
                          Suggested plan
                        </p>
                        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                          {isPlanReady ? sessionRhythm : "Finish the steps"}
                        </h3>
                        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
                          {planExplanation}
                        </p>
                      </div>

                      <aside className="rounded-[1.45rem] border border-white/12 bg-slate-950/58 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-6">
                        <div className="grid gap-3">
                          <div className="grid grid-cols-[5.5rem_1fr] gap-3 rounded-2xl border border-white/10 bg-white/8 p-4">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                              Rhythm
                            </p>
                            <p className="font-bold text-white">
                              {isPlanReady ? sessionRhythm : "Pending"}
                            </p>
                          </div>
                          <div className="grid grid-cols-[5.5rem_1fr] gap-3 rounded-2xl border border-white/10 bg-white/8 p-4">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                              Focus
                            </p>
                            <p className="font-bold text-white">
                              {isPlanReady
                                ? mainFocusAreas.slice(0, 2).join(", ")
                                : "Pending"}
                            </p>
                          </div>
                          <div className="grid grid-cols-[5.5rem_1fr] gap-3 rounded-2xl border border-white/10 bg-white/8 p-4">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                              Format
                            </p>
                            <p className="font-bold text-white">
                              {isPlanReady
                                ? `${bestFormat}, ${estimatedPrice}`
                                : "Pending"}
                            </p>
                          </div>
                        </div>

                        <button
                          className={`mt-6 w-full rounded-xl px-6 py-4 text-sm font-bold shadow-xl shadow-teal-950/20 transition duration-200 ${
                            isPlanReady
                              ? "bg-white text-slate-950 hover:-translate-y-1 hover:bg-teal-50 hover:shadow-2xl hover:shadow-teal-500/20"
                              : "cursor-not-allowed bg-white/35 text-slate-400"
                          }`}
                          disabled={!isPlanReady}
                          onClick={usePlanInRequest}
                          type="button"
                        >
                          {isPlanReady
                            ? "Use this plan in my request"
                            : "Choose all options first"}
                        </button>
                      </aside>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    className="rounded-xl border border-white/15 bg-white/8 px-5 py-3 text-sm font-bold text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/12 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                    disabled={planStep === 0}
                    onClick={() => setPlanStep((step) => Math.max(step - 1, 0))}
                    type="button"
                  >
                    Back
                  </button>
                  <div className="flex gap-2">
                    {[0, 1, 2, 3, 4].map((step) => (
                      <button
                        key={step}
                        aria-label={`Go to plan step ${step + 1}`}
                        className={`h-2.5 rounded-full transition-all ${
                          planStep === step
                            ? "w-8 bg-teal-200"
                            : "w-2.5 bg-white/25 hover:bg-white/45"
                        }`}
                        disabled={step === 4 && !isPlanReady}
                        onClick={() => setPlanStep(step)}
                        type="button"
                      />
                    ))}
                  </div>
                  <button
                    className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-teal-950/20 transition hover:-translate-y-0.5 hover:bg-teal-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                    disabled={planStep === 4 || !currentPlanStep?.value}
                    onClick={() => setPlanStep((step) => Math.min(step + 1, 4))}
                    type="button"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="subjects"
        className="relative mx-auto max-w-6xl overflow-hidden px-5 py-16 sm:px-6 lg:py-20"
      >
        <div className="hero-drift-slow absolute -right-28 top-8 h-64 w-64 rounded-full bg-teal-100/55 blur-3xl" />
        <div className="hero-pulse absolute -left-24 bottom-8 h-56 w-56 rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
        <div className="relative grid gap-4 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className={sectionLabelStyle}>Subjects</p>
            <h2 className={sectionHeadingStyle}>
              Focused help for core subjects and school routines.
            </h2>
          </div>
          <p className="max-w-2xl leading-7 text-slate-600 lg:justify-self-end">
            Sessions can focus on classwork, revision, tricky topics, study
            habits, or homework that needs a clearer explanation.
          </p>
        </div>

        <div className="relative mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {subjects.map((subject) => (
            <div
              key={subject.title}
              className="group rounded-2xl border border-white/80 bg-white/70 p-5 shadow-xl shadow-slate-950/5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-teal-200 hover:bg-white/90 hover:shadow-2xl hover:shadow-teal-900/15"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-base font-bold text-white shadow-lg shadow-slate-950/20 transition group-hover:bg-teal-800 group-hover:shadow-teal-900/25">
                {subject.title.slice(0, 1)}
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                {subject.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {subject.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="relative overflow-hidden border-y border-slate-200 bg-[radial-gradient(circle_at_18%_18%,_rgba(20,184,166,0.14),_transparent_30%),radial-gradient(circle_at_88%_20%,_rgba(129,140,248,0.12),_transparent_28%),linear-gradient(180deg,_#ffffff_0%,_#f8fbff_52%,_#f3fbf8_100%)] py-16 lg:py-20"
      >
        <div className="hero-drift absolute left-[-9rem] top-4 h-72 w-72 rounded-full bg-sky-100/55 blur-3xl" />
        <div className="hero-pulse absolute bottom-[-8rem] right-[-6rem] h-80 w-80 rounded-full bg-violet-100/45 blur-3xl" />
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="max-w-2xl">
            <p className={sectionLabelStyle}>Support</p>
            <h2 className={sectionHeadingStyle}>
              Practical tutoring for real schoolwork.
            </h2>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[1.35rem] border border-white/80 bg-white/72 p-6 shadow-xl shadow-slate-950/5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-teal-200 hover:bg-white/90 hover:shadow-2xl hover:shadow-teal-900/15"
              >
                <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-teal-400 via-sky-300 to-indigo-300 opacity-80 transition group-hover:w-24" />
                <h3 className="text-xl font-bold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-5 py-16 sm:px-6 lg:py-20">
        <div className="glass-drift-wide absolute right-8 top-12 hidden h-28 w-56 rounded-[2rem] border border-white/60 bg-white/30 shadow-2xl shadow-slate-950/5 backdrop-blur-xl sm:block" style={{ "--shape-rotate": "8deg" } as CSSProperties} />
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div>
            <p className={sectionLabelStyle}>How it works</p>
            <h2 className={sectionHeadingStyle}>
              A simple process from request to lesson.
            </h2>
          </div>

          <div className="relative grid gap-5">
            <div className="pointer-events-none absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-teal-200 via-sky-200 to-transparent sm:block" />
            <svg
              className="pointer-events-none absolute right-4 top-20 hidden h-[calc(100%-7rem)] w-28 text-teal-300/70 lg:block"
              fill="none"
              viewBox="0 0 120 360"
            >
              <path
                d="M18 20 C112 58 112 118 30 154"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="5"
              />
              <path
                d="M31 154 L46 134 M31 154 L55 160"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="5"
              />
              <path
                d="M30 190 C112 226 112 286 18 324"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="5"
              />
              <path
                d="M19 324 L43 319 M19 324 L34 344"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="5"
              />
            </svg>
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative grid gap-4 rounded-[1.35rem] border border-white/80 bg-white/75 p-5 shadow-xl shadow-slate-950/5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-teal-200 hover:bg-white/95 hover:shadow-2xl hover:shadow-teal-900/15 sm:grid-cols-[4rem_1fr] sm:p-6"
              >
                {index < steps.length - 1 && (
                  <div className="pointer-events-none absolute -bottom-5 left-8 hidden h-10 w-20 rounded-bl-[2.25rem] border-b border-l border-teal-200/80 sm:block">
                    <span className="absolute -bottom-1.5 right-0 h-3 w-3 rotate-45 border-r-2 border-t-2 border-teal-300" />
                  </div>
                )}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white shadow-xl shadow-slate-950/20 transition group-hover:bg-teal-800 group-hover:shadow-teal-900/25">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,_rgba(45,212,191,0.18),_transparent_30%),radial-gradient(circle_at_80%_12%,_rgba(129,140,248,0.22),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#042f2e_100%)] py-16 text-white lg:py-20"
      >
        <div className="hero-drift absolute left-[-10rem] top-0 h-80 w-80 rounded-full bg-teal-400/18 blur-3xl" />
        <div className="hero-drift-slow absolute bottom-[-8rem] right-[-4rem] h-96 w-96 rounded-full bg-indigo-400/18 blur-3xl" />
        <div className="light-sweep absolute left-[-20%] top-24 h-20 w-[80rem] rounded-full bg-gradient-to-r from-transparent via-white/15 to-transparent blur-2xl" />

        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-200">
              Pricing
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Straightforward rates for online and in-person support.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Families can choose online tutoring or in-person support around
              the Eltham / Research area. Sessions may be at Caleb's place, the
              student's place, a mutual location, or online.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-teal-950/30 backdrop-blur-xl">
            <div className="rounded-[1.25rem] bg-white/95 p-6 text-slate-950 shadow-2xl shadow-slate-950/30">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                One-on-one tutoring
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-gradient-to-br from-teal-50 to-white p-5 ring-1 ring-teal-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/15">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-bold text-teal-800">Online</p>
                    <p className="text-3xl font-bold tracking-tight">
                      $30/hour
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    A simple option for regular support from home.
                  </p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-white p-5 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/15">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-bold text-slate-700">In person</p>
                    <p className="text-3xl font-bold tracking-tight">
                      $40/hour
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Available around the Eltham / Research area.
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                Travel fees may apply depending on location. Availability is
                currently after school on weekdays and Saturdays, subject to
                confirmation.
              </p>
              <a
                href="#contact"
                className="mt-6 block rounded-xl bg-slate-950 px-6 py-4 text-center text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-teal-900 hover:shadow-xl hover:shadow-teal-900/20"
              >
                Request a time
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-5 py-16 sm:px-6 lg:py-20">
        <div className="hero-pulse absolute -right-24 top-16 h-64 w-64 rounded-full bg-teal-100/50 blur-3xl" />
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div>
            <p className={sectionLabelStyle}>About Caleb</p>
            <h2 className={sectionHeadingStyle}>
              Friendly, patient help from a capable Year 10 student.
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Year 10", "Maths + Science", "Patient", "Clear steps"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-bold text-slate-700 shadow-sm shadow-slate-950/5 backdrop-blur"
                  >
                    {badge}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="relative rounded-[1.5rem] border border-white/80 bg-white/75 p-6 shadow-2xl shadow-slate-950/8 backdrop-blur">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-teal-100/70" />
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm shadow-slate-950/5">
                <p className="text-2xl font-black text-teal-700">97.6%</p>
                <p className="mt-2 text-sm font-bold text-slate-700">
                  Year 9 maths test average
                </p>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm shadow-slate-950/5">
                <p className="text-2xl font-black text-indigo-700">Da Vinci</p>
                <p className="mt-2 text-sm font-bold text-slate-700">
                  Decathlon representative
                </p>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm shadow-slate-950/5">
                <p className="text-2xl font-black text-slate-950">Calm</p>
                <p className="mt-2 text-sm font-bold text-slate-700">
                  Friendly explanations
                </p>
              </div>
            </div>
            <p className="mt-5 leading-8 text-slate-600">
              Caleb is friendly, enthusiastic, and patient. His strongest
              subjects are Maths and Science, and he is good at explaining ideas
              step by step.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-slate-200 bg-[radial-gradient(circle_at_82%_18%,_rgba(20,184,166,0.12),_transparent_28%),linear-gradient(180deg,_#ffffff_0%,_#f8fbff_50%,_#f8fafc_100%)] py-16 lg:py-20">
        <div className="hero-drift-slow absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-indigo-100/35 blur-3xl" />
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="max-w-2xl">
            <p className={sectionLabelStyle}>FAQ</p>
            <h2 className={sectionHeadingStyle}>Common questions.</h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[1.35rem] border border-white/80 bg-white/75 p-6 shadow-xl shadow-slate-950/5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-teal-200 hover:bg-white/95 hover:shadow-2xl hover:shadow-teal-900/15"
              >
                <h3 className="font-bold text-slate-950">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,_rgba(45,212,191,0.16),_transparent_30%),radial-gradient(circle_at_80%_10%,_rgba(129,140,248,0.16),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#ffffff_50%,_#f3fbf8_100%)] px-5 py-14 sm:px-6 lg:py-16">
        <div className="hero-pulse absolute -right-20 top-8 h-64 w-64 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/80 bg-white/70 p-6 shadow-2xl shadow-teal-950/10 backdrop-blur-xl sm:p-8">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-teal-100/70" />
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className={sectionLabelStyle}>Next step</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  Not sure what support fits best?
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Build a quick plan or send Caleb a request and he can confirm
                  the best starting point.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  className="rounded-xl bg-slate-950 px-6 py-4 text-center text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-teal-900"
                  href="#plan-builder"
                >
                  Build my plan
                </a>
                <a
                  className="rounded-xl border border-slate-200 bg-white/80 px-6 py-4 text-center text-sm font-bold text-slate-900 shadow-sm shadow-slate-950/5 transition hover:-translate-y-0.5 hover:border-teal-200 hover:bg-white"
                  href="#contact"
                >
                  Request a booking
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative mx-auto max-w-6xl overflow-hidden px-5 py-16 sm:px-6 lg:py-20"
      >
        <div className="hero-drift absolute right-[-8rem] top-8 h-80 w-80 rounded-full bg-teal-100/55 blur-3xl" />
        <div className="hero-drift-late absolute left-[-8rem] bottom-8 h-72 w-72 rounded-full bg-sky-100/45 blur-3xl" />
        <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className={sectionLabelStyle}>Booking request</p>
            <h2 className={sectionHeadingStyle}>
              Tell Caleb what support you are looking for.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Share the student's year level, subject, preferred session type,
              and what they would like help with.
            </p>
          </div>

          <form
            className="relative rounded-[1.6rem] border border-white/80 bg-white/60 p-3 shadow-2xl shadow-teal-950/15 backdrop-blur-xl"
            onSubmit={submitContactForm}
          >
            <div className="rounded-[1.25rem] bg-slate-50/85 p-5 shadow-inner shadow-white sm:p-6">
              <div className="mb-6 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-xl shadow-slate-950/5 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                  Enquiry form
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  These details are sent to Caleb so availability can be
                  confirmed.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Name
                  <input
                    className={inputStyle}
                    onChange={(event) => setContactName(event.target.value)}
                    placeholder="Your name"
                    required
                    type="text"
                    value={contactName}
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Parent or student
                  <select
                    className={inputStyle}
                    onChange={(event) => setContactType(event.target.value)}
                    required
                    value={contactType}
                  >
                    <option>Parent</option>
                    <option>Student</option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Email
                  <input
                    className={inputStyle}
                    onChange={(event) => setContactEmail(event.target.value)}
                    placeholder="you@example.com"
                    required
                    type="email"
                    value={contactEmail}
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Year level
                  <input
                    className={inputStyle}
                    onChange={(event) =>
                      setContactYearLevel(event.target.value)
                    }
                    placeholder="Year 7"
                    required
                    type="text"
                    value={contactYearLevel}
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Subject
                  <select
                    className={inputStyle}
                    onChange={(event) => setContactSubject(event.target.value)}
                    required
                    value={contactSubject}
                  >
                    <option>Maths</option>
                    <option>Science</option>
                    <option>English</option>
                    <option>Study Skills</option>
                    <option>Homework Support</option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Preferred day/time
                  <input
                    className={inputStyle}
                    onChange={(event) =>
                      setContactPreference(event.target.value)
                    }
                    placeholder="After school on Tuesday"
                    required
                    type="text"
                    value={contactPreference}
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
                  Message
                  <textarea
                    className={`${inputStyle} min-h-32`}
                    onChange={(event) => setContactMessage(event.target.value)}
                    placeholder="What would you like help with?"
                    required
                    value={contactMessage}
                  />
                </label>
              </div>

              <button
                className="mt-6 w-full rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-teal-900 hover:shadow-xl hover:shadow-teal-900/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                disabled={isSubmittingContact}
                type="submit"
              >
                {isSubmittingContact ? "Sending..." : "Submit request"}
              </button>

              {contactStatus && (
                <p className="mt-4 rounded-2xl border border-teal-100 bg-teal-50 px-4 py-3 text-sm font-bold text-teal-900">
                  {contactStatus}
                </p>
              )}

              {contactError && (
                <p className="mt-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                  {contactError}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-slate-900">Caleb Tutoring</p>
          <p>
            Online and in-person tutoring for Maths, Science, English, and
            homework support.
          </p>
        </div>
      </footer>
    </main>
  );
}
