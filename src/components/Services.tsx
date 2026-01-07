import {
  Workflow,
  Database,
  BarChart3,
  BrainCircuit,
  FlaskConical,
  LayoutDashboard,
  ShieldCheck,
  Rocket,
} from 'lucide-react';

const services = [
  {
    icon: Workflow,
    title: 'Automation & Data Pipelines',
    items: [
      'Automating data ingestion from files/APIs',
      'Building reusable ETL pipelines using Python & SQL',
      'Scheduling and streamlining workflows',
      'Preprocessing automation scripts',
    ],
  },
  {
    icon: Database,
    title: 'Data Management & Preprocessing',
    items: [
      'Data cleaning and wrangling',
      'Missing value treatment, outlier handling',
      'Pandas/NumPy transformations',
      'PostgreSQL/SQL database management',
    ],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Business Insights',
    items: [
      'Large-scale exploratory data analysis',
      'KPI & business metrics design',
      'Customer/product behavior analysis',
      'Pricing, demand, and performance insights',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning & Forecasting',
    items: [
      'Regression & classification modeling',
      'Time-series forecasting',
      'Predictive modeling for business outcomes',
      'Threshold optimization for risk reduction',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Statistical Validation',
    items: [
      'Hypothesis testing, ANOVA, correlation',
      'A/B testing and experiment design',
      'Stationarity tests (ADF), VIF analysis',
      'Model interpretation using SHAP',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboards & Monitoring',
    items: [
      'Power BI & Tableau dashboards',
      'KPI reporting and decision-focused reports',
      'Model impact monitoring visuals',
      'Interactive data visualizations',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Risk & Customer Intelligence',
    items: [
      'Credit risk modeling',
      'Churn/default propensity analysis',
      'False-positive/negative balancing',
      'Customer segmentation for decisions',
    ],
  },
  {
    icon: Rocket,
    title: 'API & Deployment Support',
    items: [
      'REST/JSON data ingestion',
      'FastAPI/Flask model endpoints',
      'GitHub version control',
      'Experiment tracking & MLOps basics',
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container-wide">
        <h2 className="section-title">Services</h2>
        <p className="text-lg text-muted-foreground mt-4 mb-10 max-w-2xl">
          Comprehensive data science services to help you make better decisions with your data.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-card rounded-xl border border-border p-6 shadow-soft card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon size={20} className="text-primary" />
              </div>

              <h3 className="text-base font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <ul className="space-y-2">
                {service.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
