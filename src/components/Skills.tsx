import { 
  Database, 
  BarChart3, 
  BrainCircuit, 
  LineChart,
  Workflow,
  PieChart
} from 'lucide-react';

const skills = [
  {
    icon: Database,
    title: 'Data Management',
    description: 'Expert in data cleaning, wrangling, and preprocessing using Pandas, NumPy, and SQL. Handle missing values, outliers, and complex transformations.',
    tags: ['Pandas', 'NumPy', 'PostgreSQL', 'ETL'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Conduct large-scale EDA to uncover patterns and design KPIs. Analyze customer behavior, pricing strategies, and business performance.',
    tags: ['EDA', 'KPI Design', 'Business Analytics'],
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning',
    description: 'Build predictive models for regression, classification, and forecasting. Expertise in handling imbalanced data and model optimization.',
    tags: ['Scikit-learn', 'XGBoost', 'LightGBM', 'Optuna'],
  },
  {
    icon: LineChart,
    title: 'Statistical Analysis',
    description: 'Apply hypothesis testing, ANOVA, correlation analysis, and A/B testing. Validate models using ADF, VIF, and reliability diagnostics.',
    tags: ['Hypothesis Testing', 'SHAP', 'A/B Testing'],
  },
  {
    icon: PieChart,
    title: 'Data Visualization',
    description: 'Create compelling dashboards in Power BI and Tableau. Design clear visualizations using Matplotlib and Seaborn for data storytelling.',
    tags: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn'],
  },
  {
    icon: Workflow,
    title: 'Automation & Pipelines',
    description: 'Build reusable ETL pipelines and automate data workflows. Experience with APIs, FastAPI endpoints, and version control.',
    tags: ['Python', 'APIs', 'FastAPI', 'GitHub'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container-wide">
        <h2 className="section-title">What I Do</h2>
        <p className="text-lg text-muted-foreground mt-4 mb-10 max-w-2xl">
          I combine statistical rigor with practical engineering to deliver end-to-end data solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="group bg-card rounded-xl border border-border p-6 shadow-soft card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon size={24} className="text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {skill.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {skill.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
