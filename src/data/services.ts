import agriculture1 from "../assets/agriculture1.png";
import accident1 from "../assets/accident 1.png";
import injury from "../assets/injury.png";
import machinery1 from "../assets/machinery1.png";
import fire from "../assets/fire.png";

export type ServiceDetailCard = {
  title: string;
  description: string;
  highlight: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  accent: string;
  intro: string;
  overview: string;
  detailCards: ServiceDetailCard[];
  deliverables?: string[];
};

const standardDeliverables = [
  "Site visits and on-site evidence collection",
  "Technical condition assessments, visual and specialist",
  "Policy analysis, applicable clauses and exclusions",
  "Cause, scope and quantum of loss determination",
  "Engagement with insured parties, brokers and relevant authorities",
  "Indicative adequacy of cover assessment",
];

export const services: Service[] = [
  {
    slug: "motor-claims",
    title: "Motor Claims",
    description:
      "Site inspection, liability determination, quantum assessment and total-loss evaluation for third-party and own-damage claims.",
    image:
      accident1,
    accent: "#072e22",
    intro:
      "Technical motor claim assessment focused on liability clarity, accurate quantification, and timely resolution.",
    overview:
      "We handle motor claims with a practical and evidence-based approach, covering inspections, liability review, repair assessment, and total-loss evaluation for both third-party and own-damage matters.",
    detailCards: [
      {
        title: "Liability Determination",
        description:
          "Assessment of accident circumstances, available evidence, and policy response to support a defensible liability position.",
        highlight:
          "Clear liability findings reduce dispute escalation and support faster claims progression.",
      },
      {
        title: "Quantum Assessment",
        description:
          "Evaluation of repair costs, salvage considerations, and total-loss values using structured technical review.",
        highlight:
          "Accurate quantum reduces over-settlement. Fast turnaround shortens the claim cycle.",
      },
      {
        title: "Site Inspection",
        description:
          "On-site inspection and documentation of vehicle damage, scene conditions, and supporting evidence for claim validation.",
        highlight:
          "Strong early evidence collection improves consistency across the entire motor claims process.",
      },
    ],
    deliverables: standardDeliverables,
  },
  {
    slug: "fire-and-property",
    title: "Fire and Property",
    description:
      "Residential and commercial fire loss assessment. Cause of loss investigation, structure and contents quantification, and policy clause analysis.",
    image:
      fire,
    accent: "#0a4f39",
    intro:
      "Independent fire and property loss assessment combining technical investigation, quantification, and policy review.",
    overview:
      "Our fire and property work covers residential and commercial losses, from cause investigation through structure and contents assessment to clause analysis and settlement support.",
    detailCards: [
      {
        title: "Cause of Loss Investigation",
        description:
          "Review of fire origin indicators, surrounding evidence, and claim circumstances to establish a defensible cause position.",
        highlight:
          "Defensible cause-of-loss findings protect against fraudulent or exaggerated claims.",
      },
      {
        title: "Structure and Contents",
        description:
          "Assessment of building damage, reinstatement requirements, and affected contents using measured and documented review.",
        highlight:
          "Detailed quantification improves settlement quality and reduces ambiguity.",
      },
      {
        title: "Policy Clause Analysis",
        description:
          "Examination of applicable policy terms, conditions, and exclusions relevant to the reported fire or property damage.",
        highlight:
          "Clause clarity strengthens decision-making and supports fair indemnity handling.",
      },
    ],
    deliverables: standardDeliverables,
  },
  {
    slug: "engineering-and-plant",
    title: "Engineering and Plant",
    description:
      "Technical assessment of plant, machinery and equipment claims. Specialist capacity in mechanical, electrical and mechatronic loss scenarios.",
    image:
      machinery1,
    accent: "#0d5a42",
    intro:
      "Specialist technical assessment of machinery, plant, and equipment losses across complex industrial settings.",
    overview:
      "We assess engineering and plant losses involving mechanical, electrical, and mechatronic systems, with attention to damage cause, repair scope, reinstatement requirements, and technical quantification.",
    detailCards: [
      {
        title: "Machinery Assessment",
        description:
          "Inspection of damaged plant and machinery to determine operating condition, loss extent, and likely reinstatement pathway.",
        highlight:
          "Technical inspection improves the quality of repair-versus-replacement decisions.",
      },
      {
        title: "Electrical and Mechatronic Losses",
        description:
          "Review of electrical, control, and integrated equipment losses requiring specialist technical interpretation.",
        highlight:
          "Specialist quantification prevents under- or over-settlement on high-value technical losses.",
      },
      {
        title: "Repair Scope and Quantum",
        description:
          "Definition of the repair scope, technical requirements, and associated cost implications for equipment reinstatement.",
        highlight:
          "Well-scoped reinstatement recommendations reduce delays and improve claim control.",
      },
    ],
    deliverables: standardDeliverables,
  },
  {
    slug: "commercial-and-liability",
    title: "Commercial and Liability",
    description:
      "Structured business interruption modelling aligned with policy triggers. Stock loss quantification, commercial property and liability assessment.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    accent: "#041f17",
    intro:
      "Commercial loss and liability assessment built around policy response, financial impact, and defensible quantification.",
    overview:
      "This service supports commercial property, stock, business interruption, and liability matters with a structured approach to causation, financial assessment, and policy alignment.",
    detailCards: [
      {
        title: "Business Interruption Modelling",
        description:
          "Structured assessment of interruption losses using policy triggers, operational context, and financial support documentation.",
        highlight:
          "Policy-aligned calculations reduce disputes and exposure on high-value commercial instructions.",
      },
      {
        title: "Stock and Property Losses",
        description:
          "Quantification of commercial stock losses and property damage through structured valuation and evidence review.",
        highlight:
          "Accurate commercial measurement supports confident settlement strategy.",
      },
      {
        title: "Liability Assessment",
        description:
          "Technical review of reported liability exposure and surrounding claim facts to support defensible handling decisions.",
        highlight:
          "Clear liability analysis improves consistency and supports controlled claim resolution.",
      },
    ],
    deliverables: standardDeliverables,
  },
  {
    slug: "agricultural-losses",
    title: "Agricultural Losses",
    description:
      "Crop loss assessment, yield quantification and contributory risk factor analysis drawing on postgraduate agronomy and environmental science expertise.",
    image:
      agriculture1,
    accent: "#0a4f39",
    intro:
      "Agricultural claim support combining crop loss analysis, yield quantification, and science-based risk review.",
    overview:
      "We assess agricultural losses using technical and environmental analysis to examine crop damage, yield impact, contributory factors, and the broader claim circumstances.",
    detailCards: [
      {
        title: "Crop Loss Assessment",
        description:
          "Field-based review of crop damage, affected acreage, and loss conditions in line with the reported event.",
        highlight:
          "Evidence-led crop assessment improves the reliability of indemnity outcomes.",
      },
      {
        title: "Yield Quantification",
        description:
          "Measurement of yield impact using claim data, production context, and supporting agronomic review.",
        highlight:
          "Science-based yield loss determination supports defensible settlements on crop and livestock claims.",
      },
      {
        title: "Risk Factor Analysis",
        description:
          "Assessment of contributory environmental and operational factors relevant to the reported agricultural loss.",
        highlight:
          "Technical factor analysis helps distinguish insured events from wider agronomic risks.",
      },
    ],
    deliverables: standardDeliverables,
  },
  {
    slug: "personal-accident",
    title: "Personal Accident",
    description:
      "Individual injury and accident claims assessed with technical accuracy and appropriate sensitivity to the insured's personal circumstances.",
    image:
      injury,
    accent: "#072e22",
    intro:
      "Sensitive and structured personal accident assessment balancing technical accuracy with fair claim handling.",
    overview:
      "Our personal accident service supports the assessment of injury and accident claims through fact review, policy consideration, and structured claim analysis appropriate to each circumstance.",
    detailCards: [
      {
        title: "Claim Circumstance Review",
        description:
          "Assessment of the reported event, available evidence, and policy context surrounding the personal accident claim.",
        highlight:
          "Structured assessment reduces inconsistency and supports fair, timely resolution.",
      },
      {
        title: "Technical Accuracy",
        description:
          "Careful review of the claim facts and supporting records to ensure well-grounded handling decisions.",
        highlight:
          "Accurate claim review improves consistency and strengthens outcome confidence.",
      },
      {
        title: "Sensitive Handling",
        description:
          "A measured approach that respects the insured's personal circumstances while maintaining disciplined assessment standards.",
        highlight:
          "Balanced handling supports trust without compromising technical quality.",
      },
    ],
    deliverables: standardDeliverables,
  },
  {
    slug: "risk-surveys-and-valuations",
    title: "Risk Surveys and Valuations",
    description:
      "Comprehensive on-site risk surveys identifying physical and moral hazards. Adequacy of cover assessment and property replacement valuations.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    accent: "#0d5a42",
    intro:
      "On-site risk survey and valuation support focused on hazard identification, cover adequacy, and reinstatement awareness.",
    overview:
      "We carry out site-based surveys and valuation work to identify hazard exposures, review adequacy of cover, and support better underwriting and replacement value understanding.",
    detailCards: [
      {
        title: "Risk Surveys",
        description:
          "On-site review of physical and moral hazards affecting property, operations, and overall insurable exposure.",
        highlight:
          "Proactive hazard identification reduces future claims frequency and improves underwriting data quality.",
      },
      {
        title: "Adequacy of Cover",
        description:
          "Assessment of current insurance cover against the likely reinstatement and exposure profile of the insured asset or business.",
        highlight:
          "Adequacy review helps reduce underinsurance and policy response gaps.",
      },
      {
        title: "Replacement Valuations",
        description:
          "Property replacement value assessment to support better risk understanding and more reliable policy arrangements.",
        highlight:
          "Clear replacement values improve planning and strengthen risk management decisions.",
      },
    ],
    deliverables: standardDeliverables,
  },
  {
    slug: "claims-portfolio-management",
    title: "Claims Portfolio Management",
    description:
      "End-to-end claims portfolio management on behalf of insurers. Coordination, reporting, stakeholder engagement and resolution under formal mandate.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
    accent: "#041f17",
    intro:
      "Structured portfolio-level claims management for insurers requiring control, consistency, and coordinated delivery.",
    overview:
      "This service supports end-to-end claims portfolio administration under mandate, with reporting discipline, coordination across stakeholders, and a focus on consistency in outcomes.",
    detailCards: [
      {
        title: "Portfolio Coordination",
        description:
          "Management of multiple claims under a structured workflow with controlled communication and status visibility.",
        highlight:
          "Centralised management improves consistency, reduces leakage and lowers administrative burden on insurer claims teams.",
      },
      {
        title: "Reporting and Oversight",
        description:
          "Regular reporting, file visibility, and structured progress management across assigned claims portfolios.",
        highlight:
          "Strong oversight helps insurers maintain control across large or dispersed claim volumes.",
      },
      {
        title: "Stakeholder Engagement",
        description:
          "Coordination between insurers, insured parties, brokers, and other relevant stakeholders through formal claims handling processes.",
        highlight:
          "Clear engagement channels improve responsiveness and reduce friction in portfolio delivery.",
      },
    ],
    deliverables: standardDeliverables,
  },
  {
    slug: "insurance-literacy",
    title: "Insurance Literacy",
    description:
      "Structured workshops for organisations and policyholders on policyholder rights, the claims process and risk awareness.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    accent: "#0a4f39",
    intro:
      "Insurance literacy support designed to improve understanding of rights, process, and risk awareness.",
    overview:
      "We provide structured workshops and awareness sessions that help policyholders and organisations better understand policyholder rights, claims handling expectations, and risk-related responsibilities.",
    detailCards: [
      {
        title: "Policyholder Rights",
        description:
          "Guidance on the rights and responsibilities that affect policyholders during the insurance and claims process.",
        highlight:
          "Informed policyholders reduce claims friction and improve first notification documentation quality.",
      },
      {
        title: "Claims Process Awareness",
        description:
          "Practical explanation of how claims move from notification to investigation, assessment, and resolution.",
        highlight:
          "Better process understanding supports smoother engagement and clearer expectations.",
      },
      {
        title: "Risk Awareness Workshops",
        description:
          "Structured sessions for organisations and individuals focused on prevention, preparedness, and more effective insurance engagement.",
        highlight:
          "Improved risk awareness strengthens both prevention efforts and claims readiness.",
      },
    ],
    deliverables: standardDeliverables,
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
