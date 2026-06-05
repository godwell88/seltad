import "./Processes.css";

import {
  Bell,
  FileSearch,
  MapPinned,
  Search,
  Calculator,
  ClipboardList,
  Handshake,
} from "lucide-react";

const claimsProcess = [
  {
    step: "1",
    title: "Notification",
    description: "Acknowledgement within 24 hours.",
    icon: Bell,
  },

  {
    step: "2",
    title: "Policy Review",
    description: "Coverage and clause analysis.",
    icon: FileSearch,
  },

  {
    step: "3",
    title: "Site Visit",
    description: "48–72hr attendance and evidence gathering.",
    icon: MapPinned,
  },

  {
    step: "4",
    title: "Cause of Loss",
    description: "Technical investigation and determination.",
    icon: Search,
  },

  {
    step: "5",
    title: "Quantification",
    description: "Loss quantum and liability assessment.",
    icon: Calculator,
  },

  {
    step: "6",
    title: "Reporting",
    description: "Preliminary findings within 5 working days.",
    icon: ClipboardList,
  },

  {
    step: "7",
    title: "Settlement",
    description: "Resolution support and post-claim follow-up.",
    icon: Handshake,
  },
];

export default function ClaimsProcess() {
  return (
    <section id="process" className="process-page">

      <div className="process-header">

        <span>OUR PROCESS</span>

        <h2>7-Stage Claims Process</h2>

        <p>
          Seltad's process is structured to deliver
          consistent, predictable performance from
          first instruction through to final settlement.
        </p>

      </div>

      <div className="process-grid">

        {claimsProcess.map((item) => {
          const Icon = item.icon;

          return (
            <div className="process-card" key={item.step}>

              <div className="process-number">
                {item.step}
              </div>

              <div className="process-icon">
                <Icon size={36} />
              </div>

              <h3>{item.title}</h3>

              <div className="gold-line"></div>

              <p>{item.description}</p>

            </div>
          );
        })}
      </div>
    </section>
  );
}